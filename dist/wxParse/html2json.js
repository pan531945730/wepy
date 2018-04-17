'use strict';

/**
 * html2Json 改造来自: https://github.com/Jxck/html2json
 *
 *
 * author: Di (微信小程序开发工程师)
 * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
 *               垂直微信小程序开发交流社区
 *
 * github地址: https://github.com/icindy/wxParse
 *
 * for: 微信小程序富文本解析
 * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
 */

var __placeImgeUrlHttps = "https";
var __emojisReg = '';
var __emojisBaseSrc = '';
var __emojis = {};
var wxDiscode = require('./wxDiscode.js');
var HTMLParser = require('./htmlparser.js');
// Empty Elements - HTML 5
var empty = makeMap("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr");
// Block Elements - HTML 5
var block = makeMap("br,a,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video");

// Inline Elements - HTML 5
var inline = makeMap("abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var");

// Elements that you can, intentionally, leave open
// (and which close themselves)
var closeSelf = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");

// Attributes that have their values filled in disabled="disabled"
var fillAttrs = makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");

// Special Elements (can contain anything)
var special = makeMap("wxxxcode-style,script,style,view,scroll-view,block");
function makeMap(str) {
    var obj = {},
        items = str.split(",");
    for (var i = 0; i < items.length; i++) {
        obj[items[i]] = true;
    }return obj;
}

function q(v) {
    return '"' + v + '"';
}

function removeDOCTYPE(html) {
    return html.replace(/<\?xml.*\?>\n/, '').replace(/<.*!doctype.*\>\n/, '').replace(/<.*!DOCTYPE.*\>\n/, '');
}

function html2json(html, bindName) {
    //处理字符串
    html = removeDOCTYPE(html);
    html = wxDiscode.strDiscode(html);
    //生成node节点
    var bufArray = [];
    var results = {
        node: bindName,
        nodes: [],
        images: [],
        imageUrls: []
    };
    var index = 0;
    HTMLParser(html, {
        start: function start(tag, attrs, unary) {
            //debug(tag, attrs, unary);
            // node for this element
            var node = {
                node: 'element',
                tag: tag
            };

            if (bufArray.length === 0) {
                node.index = index.toString();
                index += 1;
            } else {
                var parent = bufArray[0];
                if (parent.nodes === undefined) {
                    parent.nodes = [];
                }
                node.index = parent.index + '.' + parent.nodes.length;
            }

            if (block[tag]) {
                node.tagType = "block";
            } else if (inline[tag]) {
                node.tagType = "inline";
            } else if (closeSelf[tag]) {
                node.tagType = "closeSelf";
            }

            if (attrs.length !== 0) {
                node.attr = attrs.reduce(function (pre, attr) {
                    var name = attr.name;
                    var value = attr.value;
                    if (name == 'class') {
                        //console.dir(value);
                        //  value = value.join("")
                        node.classStr = value;
                    }
                    // has multi attibutes
                    // make it array of attribute
                    if (name == 'style') {
                        //console.dir(value);
                        //  value = value.join("")
                        node.styleStr = value;
                    }
                    if (value.match(/ /)) {
                        value = value.split(' ');
                    }

                    // if attr already exists
                    // merge it
                    if (pre[name]) {
                        if (Array.isArray(pre[name])) {
                            // already array, push to last
                            pre[name].push(value);
                        } else {
                            // single value, make it array
                            pre[name] = [pre[name], value];
                        }
                    } else {
                        // not exist, put it
                        pre[name] = value;
                    }

                    return pre;
                }, {});
            }

            //对img添加额外数据
            if (node.tag === 'img') {
                node.imgIndex = results.images.length;
                var imgUrl = node.attr.src;
                if (imgUrl[0] == '') {
                    imgUrl.splice(0, 1);
                }
                imgUrl = wxDiscode.urlToHttpUrl(imgUrl, __placeImgeUrlHttps);
                node.attr.src = imgUrl;
                node.from = bindName;
                results.images.push(node);
                results.imageUrls.push(imgUrl);
            }

            // 处理font标签样式属性
            if (node.tag === 'font') {
                var fontSize = ['x-small', 'small', 'medium', 'large', 'x-large', 'xx-large', '-webkit-xxx-large'];
                var styleAttrs = {
                    'color': 'color',
                    'face': 'font-family',
                    'size': 'font-size'
                };
                if (!node.attr.style) node.attr.style = [];
                if (!node.styleStr) node.styleStr = '';
                for (var key in styleAttrs) {
                    if (node.attr[key]) {
                        var value = key === 'size' ? fontSize[node.attr[key] - 1] : node.attr[key];
                        node.attr.style.push(styleAttrs[key]);
                        node.attr.style.push(value);
                        node.styleStr += styleAttrs[key] + ': ' + value + ';';
                    }
                }
            }

            //临时记录source资源
            if (node.tag === 'source') {
                results.source = node.attr.src;
            }

            if (unary) {
                // if this tag dosen't have end tag
                // like <img src="hoge.png"/>
                // add to parents
                var parent = bufArray[0] || results;
                if (parent.nodes === undefined) {
                    parent.nodes = [];
                }
                parent.nodes.push(node);
            } else {
                bufArray.unshift(node);
            }
        },
        end: function end(tag) {
            //debug(tag);
            // merge into parent tag
            var node = bufArray.shift();
            if (node.tag !== tag) console.error('invalid state: mismatch end tag');

            //当有缓存source资源时于于video补上src资源
            if (node.tag === 'video' && results.source) {
                node.attr.src = results.source;
                delete result.source;
            }

            if (bufArray.length === 0) {
                results.nodes.push(node);
            } else {
                var parent = bufArray[0];
                if (parent.nodes === undefined) {
                    parent.nodes = [];
                }
                parent.nodes.push(node);
            }
        },
        chars: function chars(text) {
            //debug(text);
            var node = {
                node: 'text',
                text: text,
                textArray: transEmojiStr(text)
            };

            if (bufArray.length === 0) {
                results.nodes.push(node);
            } else {
                var parent = bufArray[0];
                if (parent.nodes === undefined) {
                    parent.nodes = [];
                }
                node.index = parent.index + '.' + parent.nodes.length;
                parent.nodes.push(node);
            }
        },
        comment: function comment(text) {
            //debug(text);
            // var node = {
            //     node: 'comment',
            //     text: text,
            // };
            // var parent = bufArray[0];
            // if (parent.nodes === undefined) {
            //     parent.nodes = [];
            // }
            // parent.nodes.push(node);
        }
    });
    return results;
};

function transEmojiStr(str) {
    // var eReg = new RegExp("["+__reg+' '+"]");
    //   str = str.replace(/\[([^\[\]]+)\]/g,':$1:')

    var emojiObjs = [];
    //如果正则表达式为空
    if (__emojisReg.length == 0 || !__emojis) {
        var emojiObj = {};
        emojiObj.node = "text";
        emojiObj.text = str;
        array = [emojiObj];
        return array;
    }
    //这个地方需要调整
    str = str.replace(/\[([^\[\]]+)\]/g, ':$1:');
    var eReg = new RegExp("[:]");
    var array = str.split(eReg);
    for (var i = 0; i < array.length; i++) {
        var ele = array[i];
        var emojiObj = {};
        if (__emojis[ele]) {
            emojiObj.node = "element";
            emojiObj.tag = "emoji";
            emojiObj.text = __emojis[ele];
            emojiObj.baseSrc = __emojisBaseSrc;
        } else {
            emojiObj.node = "text";
            emojiObj.text = ele;
        }
        emojiObjs.push(emojiObj);
    }

    return emojiObjs;
}

function getEmojis() {
    var emojis = {};
    for (var i = 0; i < 134; i++) {
        var str = i < 10 ? '0' + i : i;
        emojis[str] = str + '.gif';
    }
    return emojis;
}

function emojisInit() {
    var reg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[]';
    var baseSrc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "/wxParse/emojis/";
    var emojis = arguments[2];

    __emojisReg = reg;
    __emojisBaseSrc = baseSrc;
    __emojis = emojis || getEmojis();
}

module.exports = {
    html2json: html2json,
    emojisInit: emojisInit
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0bWwyanNvbi5qcyJdLCJuYW1lcyI6WyJfX3BsYWNlSW1nZVVybEh0dHBzIiwiX19lbW9qaXNSZWciLCJfX2Vtb2ppc0Jhc2VTcmMiLCJfX2Vtb2ppcyIsInd4RGlzY29kZSIsInJlcXVpcmUiLCJIVE1MUGFyc2VyIiwiZW1wdHkiLCJtYWtlTWFwIiwiYmxvY2siLCJpbmxpbmUiLCJjbG9zZVNlbGYiLCJmaWxsQXR0cnMiLCJzcGVjaWFsIiwic3RyIiwib2JqIiwiaXRlbXMiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJxIiwidiIsInJlbW92ZURPQ1RZUEUiLCJodG1sIiwicmVwbGFjZSIsImh0bWwyanNvbiIsImJpbmROYW1lIiwic3RyRGlzY29kZSIsImJ1ZkFycmF5IiwicmVzdWx0cyIsIm5vZGUiLCJub2RlcyIsImltYWdlcyIsImltYWdlVXJscyIsImluZGV4Iiwic3RhcnQiLCJ0YWciLCJhdHRycyIsInVuYXJ5IiwidG9TdHJpbmciLCJwYXJlbnQiLCJ1bmRlZmluZWQiLCJ0YWdUeXBlIiwiYXR0ciIsInJlZHVjZSIsInByZSIsIm5hbWUiLCJ2YWx1ZSIsImNsYXNzU3RyIiwic3R5bGVTdHIiLCJtYXRjaCIsIkFycmF5IiwiaXNBcnJheSIsInB1c2giLCJpbWdJbmRleCIsImltZ1VybCIsInNyYyIsInNwbGljZSIsInVybFRvSHR0cFVybCIsImZyb20iLCJmb250U2l6ZSIsInN0eWxlQXR0cnMiLCJzdHlsZSIsImtleSIsInNvdXJjZSIsInVuc2hpZnQiLCJlbmQiLCJzaGlmdCIsImNvbnNvbGUiLCJlcnJvciIsInJlc3VsdCIsImNoYXJzIiwidGV4dCIsInRleHRBcnJheSIsInRyYW5zRW1vamlTdHIiLCJjb21tZW50IiwiZW1vamlPYmpzIiwiZW1vamlPYmoiLCJhcnJheSIsImVSZWciLCJSZWdFeHAiLCJlbGUiLCJiYXNlU3JjIiwiZ2V0RW1vamlzIiwiZW1vamlzIiwiZW1vamlzSW5pdCIsInJlZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBY0EsSUFBSUEsc0JBQXNCLE9BQTFCO0FBQ0EsSUFBSUMsY0FBYyxFQUFsQjtBQUNBLElBQUlDLGtCQUFrQixFQUF0QjtBQUNBLElBQUlDLFdBQVcsRUFBZjtBQUNBLElBQUlDLFlBQVlDLFFBQVEsZ0JBQVIsQ0FBaEI7QUFDQSxJQUFJQyxhQUFhRCxRQUFRLGlCQUFSLENBQWpCO0FBQ0E7QUFDQSxJQUFJRSxRQUFRQyxRQUFRLG9HQUFSLENBQVo7QUFDQTtBQUNBLElBQUlDLFFBQVFELFFBQVEsdVRBQVIsQ0FBWjs7QUFFQTtBQUNBLElBQUlFLFNBQVNGLFFBQVEsMExBQVIsQ0FBYjs7QUFFQTtBQUNBO0FBQ0EsSUFBSUcsWUFBWUgsUUFBUSxrREFBUixDQUFoQjs7QUFFQTtBQUNBLElBQUlJLFlBQVlKLFFBQVEsd0dBQVIsQ0FBaEI7O0FBRUE7QUFDQSxJQUFJSyxVQUFVTCxRQUFRLG9EQUFSLENBQWQ7QUFDQSxTQUFTQSxPQUFULENBQWlCTSxHQUFqQixFQUFzQjtBQUNsQixRQUFJQyxNQUFNLEVBQVY7QUFBQSxRQUFjQyxRQUFRRixJQUFJRyxLQUFKLENBQVUsR0FBVixDQUF0QjtBQUNBLFNBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRixNQUFNRyxNQUExQixFQUFrQ0QsR0FBbEM7QUFDSUgsWUFBSUMsTUFBTUUsQ0FBTixDQUFKLElBQWdCLElBQWhCO0FBREosS0FFQSxPQUFPSCxHQUFQO0FBQ0g7O0FBRUQsU0FBU0ssQ0FBVCxDQUFXQyxDQUFYLEVBQWM7QUFDVixXQUFPLE1BQU1BLENBQU4sR0FBVSxHQUFqQjtBQUNIOztBQUVELFNBQVNDLGFBQVQsQ0FBdUJDLElBQXZCLEVBQTZCO0FBQ3pCLFdBQU9BLEtBQ0ZDLE9BREUsQ0FDTSxlQUROLEVBQ3VCLEVBRHZCLEVBRUZBLE9BRkUsQ0FFTSxtQkFGTixFQUUyQixFQUYzQixFQUdGQSxPQUhFLENBR00sbUJBSE4sRUFHMkIsRUFIM0IsQ0FBUDtBQUlIOztBQUdELFNBQVNDLFNBQVQsQ0FBbUJGLElBQW5CLEVBQXlCRyxRQUF6QixFQUFtQztBQUMvQjtBQUNBSCxXQUFPRCxjQUFjQyxJQUFkLENBQVA7QUFDQUEsV0FBT25CLFVBQVV1QixVQUFWLENBQXFCSixJQUFyQixDQUFQO0FBQ0E7QUFDQSxRQUFJSyxXQUFXLEVBQWY7QUFDQSxRQUFJQyxVQUFVO0FBQ1ZDLGNBQU1KLFFBREk7QUFFVkssZUFBTyxFQUZHO0FBR1ZDLGdCQUFPLEVBSEc7QUFJVkMsbUJBQVU7QUFKQSxLQUFkO0FBTUEsUUFBSUMsUUFBUSxDQUFaO0FBQ0E1QixlQUFXaUIsSUFBWCxFQUFpQjtBQUNiWSxlQUFPLGVBQVVDLEdBQVYsRUFBZUMsS0FBZixFQUFzQkMsS0FBdEIsRUFBNkI7QUFDaEM7QUFDQTtBQUNBLGdCQUFJUixPQUFPO0FBQ1BBLHNCQUFNLFNBREM7QUFFUE0scUJBQUtBO0FBRkUsYUFBWDs7QUFLQSxnQkFBSVIsU0FBU1QsTUFBVCxLQUFvQixDQUF4QixFQUEyQjtBQUN2QlcscUJBQUtJLEtBQUwsR0FBYUEsTUFBTUssUUFBTixFQUFiO0FBQ0FMLHlCQUFTLENBQVQ7QUFDSCxhQUhELE1BR087QUFDSCxvQkFBSU0sU0FBU1osU0FBUyxDQUFULENBQWI7QUFDQSxvQkFBSVksT0FBT1QsS0FBUCxLQUFpQlUsU0FBckIsRUFBZ0M7QUFDNUJELDJCQUFPVCxLQUFQLEdBQWUsRUFBZjtBQUNIO0FBQ0RELHFCQUFLSSxLQUFMLEdBQWFNLE9BQU9OLEtBQVAsR0FBZSxHQUFmLEdBQXFCTSxPQUFPVCxLQUFQLENBQWFaLE1BQS9DO0FBQ0g7O0FBRUQsZ0JBQUlWLE1BQU0yQixHQUFOLENBQUosRUFBZ0I7QUFDWk4scUJBQUtZLE9BQUwsR0FBZSxPQUFmO0FBQ0gsYUFGRCxNQUVPLElBQUloQyxPQUFPMEIsR0FBUCxDQUFKLEVBQWlCO0FBQ3BCTixxQkFBS1ksT0FBTCxHQUFlLFFBQWY7QUFDSCxhQUZNLE1BRUEsSUFBSS9CLFVBQVV5QixHQUFWLENBQUosRUFBb0I7QUFDdkJOLHFCQUFLWSxPQUFMLEdBQWUsV0FBZjtBQUNIOztBQUVELGdCQUFJTCxNQUFNbEIsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUNwQlcscUJBQUthLElBQUwsR0FBWU4sTUFBTU8sTUFBTixDQUFhLFVBQVVDLEdBQVYsRUFBZUYsSUFBZixFQUFxQjtBQUMxQyx3QkFBSUcsT0FBT0gsS0FBS0csSUFBaEI7QUFDQSx3QkFBSUMsUUFBUUosS0FBS0ksS0FBakI7QUFDQSx3QkFBSUQsUUFBUSxPQUFaLEVBQXFCO0FBQ2pCO0FBQ0E7QUFDQWhCLDZCQUFLa0IsUUFBTCxHQUFnQkQsS0FBaEI7QUFDSDtBQUNEO0FBQ0E7QUFDQSx3QkFBSUQsUUFBUSxPQUFaLEVBQXFCO0FBQ2pCO0FBQ0E7QUFDQWhCLDZCQUFLbUIsUUFBTCxHQUFnQkYsS0FBaEI7QUFDSDtBQUNELHdCQUFJQSxNQUFNRyxLQUFOLENBQVksR0FBWixDQUFKLEVBQXNCO0FBQ2xCSCxnQ0FBUUEsTUFBTTlCLEtBQU4sQ0FBWSxHQUFaLENBQVI7QUFDSDs7QUFHRDtBQUNBO0FBQ0Esd0JBQUk0QixJQUFJQyxJQUFKLENBQUosRUFBZTtBQUNYLDRCQUFJSyxNQUFNQyxPQUFOLENBQWNQLElBQUlDLElBQUosQ0FBZCxDQUFKLEVBQThCO0FBQzFCO0FBQ0FELGdDQUFJQyxJQUFKLEVBQVVPLElBQVYsQ0FBZU4sS0FBZjtBQUNILHlCQUhELE1BR087QUFDSDtBQUNBRixnQ0FBSUMsSUFBSixJQUFZLENBQUNELElBQUlDLElBQUosQ0FBRCxFQUFZQyxLQUFaLENBQVo7QUFDSDtBQUNKLHFCQVJELE1BUU87QUFDSDtBQUNBRiw0QkFBSUMsSUFBSixJQUFZQyxLQUFaO0FBQ0g7O0FBRUQsMkJBQU9GLEdBQVA7QUFDSCxpQkFwQ1csRUFvQ1QsRUFwQ1MsQ0FBWjtBQXFDSDs7QUFFRDtBQUNBLGdCQUFJZixLQUFLTSxHQUFMLEtBQWEsS0FBakIsRUFBd0I7QUFDcEJOLHFCQUFLd0IsUUFBTCxHQUFnQnpCLFFBQVFHLE1BQVIsQ0FBZWIsTUFBL0I7QUFDQSxvQkFBSW9DLFNBQVN6QixLQUFLYSxJQUFMLENBQVVhLEdBQXZCO0FBQ0Esb0JBQUlELE9BQU8sQ0FBUCxLQUFhLEVBQWpCLEVBQXFCO0FBQ2pCQSwyQkFBT0UsTUFBUCxDQUFjLENBQWQsRUFBaUIsQ0FBakI7QUFDSDtBQUNERix5QkFBU25ELFVBQVVzRCxZQUFWLENBQXVCSCxNQUF2QixFQUErQnZELG1CQUEvQixDQUFUO0FBQ0E4QixxQkFBS2EsSUFBTCxDQUFVYSxHQUFWLEdBQWdCRCxNQUFoQjtBQUNBekIscUJBQUs2QixJQUFMLEdBQVlqQyxRQUFaO0FBQ0FHLHdCQUFRRyxNQUFSLENBQWVxQixJQUFmLENBQW9CdkIsSUFBcEI7QUFDQUQsd0JBQVFJLFNBQVIsQ0FBa0JvQixJQUFsQixDQUF1QkUsTUFBdkI7QUFDSDs7QUFFRDtBQUNBLGdCQUFJekIsS0FBS00sR0FBTCxLQUFhLE1BQWpCLEVBQXlCO0FBQ3JCLG9CQUFJd0IsV0FBVyxDQUFDLFNBQUQsRUFBWSxPQUFaLEVBQXFCLFFBQXJCLEVBQStCLE9BQS9CLEVBQXdDLFNBQXhDLEVBQW1ELFVBQW5ELEVBQStELG1CQUEvRCxDQUFmO0FBQ0Esb0JBQUlDLGFBQWE7QUFDYiw2QkFBUyxPQURJO0FBRWIsNEJBQVEsYUFGSztBQUdiLDRCQUFRO0FBSEssaUJBQWpCO0FBS0Esb0JBQUksQ0FBQy9CLEtBQUthLElBQUwsQ0FBVW1CLEtBQWYsRUFBc0JoQyxLQUFLYSxJQUFMLENBQVVtQixLQUFWLEdBQWtCLEVBQWxCO0FBQ3RCLG9CQUFJLENBQUNoQyxLQUFLbUIsUUFBVixFQUFvQm5CLEtBQUttQixRQUFMLEdBQWdCLEVBQWhCO0FBQ3BCLHFCQUFLLElBQUljLEdBQVQsSUFBZ0JGLFVBQWhCLEVBQTRCO0FBQ3hCLHdCQUFJL0IsS0FBS2EsSUFBTCxDQUFVb0IsR0FBVixDQUFKLEVBQW9CO0FBQ2hCLDRCQUFJaEIsUUFBUWdCLFFBQVEsTUFBUixHQUFpQkgsU0FBUzlCLEtBQUthLElBQUwsQ0FBVW9CLEdBQVYsSUFBZSxDQUF4QixDQUFqQixHQUE4Q2pDLEtBQUthLElBQUwsQ0FBVW9CLEdBQVYsQ0FBMUQ7QUFDQWpDLDZCQUFLYSxJQUFMLENBQVVtQixLQUFWLENBQWdCVCxJQUFoQixDQUFxQlEsV0FBV0UsR0FBWCxDQUFyQjtBQUNBakMsNkJBQUthLElBQUwsQ0FBVW1CLEtBQVYsQ0FBZ0JULElBQWhCLENBQXFCTixLQUFyQjtBQUNBakIsNkJBQUttQixRQUFMLElBQWlCWSxXQUFXRSxHQUFYLElBQWtCLElBQWxCLEdBQXlCaEIsS0FBekIsR0FBaUMsR0FBbEQ7QUFDSDtBQUNKO0FBQ0o7O0FBRUQ7QUFDQSxnQkFBR2pCLEtBQUtNLEdBQUwsS0FBYSxRQUFoQixFQUF5QjtBQUNyQlAsd0JBQVFtQyxNQUFSLEdBQWlCbEMsS0FBS2EsSUFBTCxDQUFVYSxHQUEzQjtBQUNIOztBQUVELGdCQUFJbEIsS0FBSixFQUFXO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esb0JBQUlFLFNBQVNaLFNBQVMsQ0FBVCxLQUFlQyxPQUE1QjtBQUNBLG9CQUFJVyxPQUFPVCxLQUFQLEtBQWlCVSxTQUFyQixFQUFnQztBQUM1QkQsMkJBQU9ULEtBQVAsR0FBZSxFQUFmO0FBQ0g7QUFDRFMsdUJBQU9ULEtBQVAsQ0FBYXNCLElBQWIsQ0FBa0J2QixJQUFsQjtBQUNILGFBVEQsTUFTTztBQUNIRix5QkFBU3FDLE9BQVQsQ0FBaUJuQyxJQUFqQjtBQUNIO0FBQ0osU0F2SFk7QUF3SGJvQyxhQUFLLGFBQVU5QixHQUFWLEVBQWU7QUFDaEI7QUFDQTtBQUNBLGdCQUFJTixPQUFPRixTQUFTdUMsS0FBVCxFQUFYO0FBQ0EsZ0JBQUlyQyxLQUFLTSxHQUFMLEtBQWFBLEdBQWpCLEVBQXNCZ0MsUUFBUUMsS0FBUixDQUFjLGlDQUFkOztBQUV0QjtBQUNBLGdCQUFHdkMsS0FBS00sR0FBTCxLQUFhLE9BQWIsSUFBd0JQLFFBQVFtQyxNQUFuQyxFQUEwQztBQUN0Q2xDLHFCQUFLYSxJQUFMLENBQVVhLEdBQVYsR0FBZ0IzQixRQUFRbUMsTUFBeEI7QUFDQSx1QkFBT00sT0FBT04sTUFBZDtBQUNIOztBQUVELGdCQUFJcEMsU0FBU1QsTUFBVCxLQUFvQixDQUF4QixFQUEyQjtBQUN2QlUsd0JBQVFFLEtBQVIsQ0FBY3NCLElBQWQsQ0FBbUJ2QixJQUFuQjtBQUNILGFBRkQsTUFFTztBQUNILG9CQUFJVSxTQUFTWixTQUFTLENBQVQsQ0FBYjtBQUNBLG9CQUFJWSxPQUFPVCxLQUFQLEtBQWlCVSxTQUFyQixFQUFnQztBQUM1QkQsMkJBQU9ULEtBQVAsR0FBZSxFQUFmO0FBQ0g7QUFDRFMsdUJBQU9ULEtBQVAsQ0FBYXNCLElBQWIsQ0FBa0J2QixJQUFsQjtBQUNIO0FBQ0osU0E3SVk7QUE4SWJ5QyxlQUFPLGVBQVVDLElBQVYsRUFBZ0I7QUFDbkI7QUFDQSxnQkFBSTFDLE9BQU87QUFDUEEsc0JBQU0sTUFEQztBQUVQMEMsc0JBQU1BLElBRkM7QUFHUEMsMkJBQVVDLGNBQWNGLElBQWQ7QUFISCxhQUFYOztBQU1BLGdCQUFJNUMsU0FBU1QsTUFBVCxLQUFvQixDQUF4QixFQUEyQjtBQUN2QlUsd0JBQVFFLEtBQVIsQ0FBY3NCLElBQWQsQ0FBbUJ2QixJQUFuQjtBQUNILGFBRkQsTUFFTztBQUNILG9CQUFJVSxTQUFTWixTQUFTLENBQVQsQ0FBYjtBQUNBLG9CQUFJWSxPQUFPVCxLQUFQLEtBQWlCVSxTQUFyQixFQUFnQztBQUM1QkQsMkJBQU9ULEtBQVAsR0FBZSxFQUFmO0FBQ0g7QUFDREQscUJBQUtJLEtBQUwsR0FBYU0sT0FBT04sS0FBUCxHQUFlLEdBQWYsR0FBcUJNLE9BQU9ULEtBQVAsQ0FBYVosTUFBL0M7QUFDQXFCLHVCQUFPVCxLQUFQLENBQWFzQixJQUFiLENBQWtCdkIsSUFBbEI7QUFDSDtBQUNKLFNBaEtZO0FBaUtiNkMsaUJBQVMsaUJBQVVILElBQVYsRUFBZ0I7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQTVLWSxLQUFqQjtBQThLQSxXQUFPM0MsT0FBUDtBQUNIOztBQUVELFNBQVM2QyxhQUFULENBQXVCNUQsR0FBdkIsRUFBMkI7QUFDekI7QUFDRjs7QUFFRSxRQUFJOEQsWUFBWSxFQUFoQjtBQUNBO0FBQ0EsUUFBRzNFLFlBQVlrQixNQUFaLElBQXNCLENBQXRCLElBQTJCLENBQUNoQixRQUEvQixFQUF3QztBQUNwQyxZQUFJMEUsV0FBVyxFQUFmO0FBQ0FBLGlCQUFTL0MsSUFBVCxHQUFnQixNQUFoQjtBQUNBK0MsaUJBQVNMLElBQVQsR0FBZ0IxRCxHQUFoQjtBQUNBZ0UsZ0JBQVEsQ0FBQ0QsUUFBRCxDQUFSO0FBQ0EsZUFBT0MsS0FBUDtBQUNIO0FBQ0Q7QUFDQWhFLFVBQU1BLElBQUlVLE9BQUosQ0FBWSxpQkFBWixFQUE4QixNQUE5QixDQUFOO0FBQ0EsUUFBSXVELE9BQU8sSUFBSUMsTUFBSixDQUFXLEtBQVgsQ0FBWDtBQUNBLFFBQUlGLFFBQVFoRSxJQUFJRyxLQUFKLENBQVU4RCxJQUFWLENBQVo7QUFDQSxTQUFJLElBQUk3RCxJQUFJLENBQVosRUFBZUEsSUFBSTRELE1BQU0zRCxNQUF6QixFQUFpQ0QsR0FBakMsRUFBcUM7QUFDbkMsWUFBSStELE1BQU1ILE1BQU01RCxDQUFOLENBQVY7QUFDQSxZQUFJMkQsV0FBVyxFQUFmO0FBQ0EsWUFBRzFFLFNBQVM4RSxHQUFULENBQUgsRUFBaUI7QUFDZkoscUJBQVMvQyxJQUFULEdBQWdCLFNBQWhCO0FBQ0ErQyxxQkFBU3pDLEdBQVQsR0FBZSxPQUFmO0FBQ0F5QyxxQkFBU0wsSUFBVCxHQUFnQnJFLFNBQVM4RSxHQUFULENBQWhCO0FBQ0FKLHFCQUFTSyxPQUFULEdBQWtCaEYsZUFBbEI7QUFDRCxTQUxELE1BS0s7QUFDSDJFLHFCQUFTL0MsSUFBVCxHQUFnQixNQUFoQjtBQUNBK0MscUJBQVNMLElBQVQsR0FBZ0JTLEdBQWhCO0FBQ0Q7QUFDREwsa0JBQVV2QixJQUFWLENBQWV3QixRQUFmO0FBQ0Q7O0FBRUQsV0FBT0QsU0FBUDtBQUNEOztBQUVELFNBQVNPLFNBQVQsR0FBcUI7QUFDakIsUUFBSUMsU0FBUyxFQUFiO0FBQ0EsU0FBSyxJQUFJbEUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEdBQXBCLEVBQXlCQSxHQUF6QixFQUE4QjtBQUMxQixZQUFJSixNQUFNSSxJQUFJLEVBQUosR0FBUyxNQUFNQSxDQUFmLEdBQW1CQSxDQUE3QjtBQUNBa0UsZUFBT3RFLEdBQVAsSUFBY0EsTUFBTSxNQUFwQjtBQUNIO0FBQ0QsV0FBT3NFLE1BQVA7QUFDSDs7QUFFRCxTQUFTQyxVQUFULEdBQW1FO0FBQUEsUUFBL0NDLEdBQStDLHVFQUF6QyxJQUF5QztBQUFBLFFBQW5DSixPQUFtQyx1RUFBM0Isa0JBQTJCO0FBQUEsUUFBUEUsTUFBTzs7QUFDL0RuRixrQkFBY3FGLEdBQWQ7QUFDQXBGLHNCQUFnQmdGLE9BQWhCO0FBQ0EvRSxlQUFXaUYsVUFBVUQsV0FBckI7QUFDSDs7QUFFREksT0FBT0MsT0FBUCxHQUFpQjtBQUNiL0QsZUFBV0EsU0FERTtBQUViNEQsZ0JBQVdBO0FBRkUsQ0FBakIiLCJmaWxlIjoiaHRtbDJqc29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBodG1sMkpzb24g5pS56YCg5p2l6IeqOiBodHRwczovL2dpdGh1Yi5jb20vSnhjay9odG1sMmpzb25cbiAqXG4gKlxuICogYXV0aG9yOiBEaSAo5b6u5L+h5bCP56iL5bqP5byA5Y+R5bel56iL5biIKVxuICogb3JnYW5pemF0aW9uOiBXZUFwcERldijlvq7kv6HlsI/nqIvluo/lvIDlj5HorrrlnZspKGh0dHA6Ly93ZWFwcGRldi5jb20pXG4gKiAgICAgICAgICAgICAgIOWeguebtOW+ruS/oeWwj+eoi+W6j+W8gOWPkeS6pOa1geekvuWMulxuICpcbiAqIGdpdGh1YuWcsOWdgDogaHR0cHM6Ly9naXRodWIuY29tL2ljaW5keS93eFBhcnNlXG4gKlxuICogZm9yOiDlvq7kv6HlsI/nqIvluo/lr4zmlofmnKzop6PmnpBcbiAqIGRldGFpbCA6IGh0dHA6Ly93ZWFwcGRldi5jb20vdC93eHBhcnNlLWFscGhhMC0xLWh0bWwtbWFya2Rvd24vMTg0XG4gKi9cblxudmFyIF9fcGxhY2VJbWdlVXJsSHR0cHMgPSBcImh0dHBzXCI7XG52YXIgX19lbW9qaXNSZWcgPSAnJztcbnZhciBfX2Vtb2ppc0Jhc2VTcmMgPSAnJztcbnZhciBfX2Vtb2ppcyA9IHt9O1xudmFyIHd4RGlzY29kZSA9IHJlcXVpcmUoJy4vd3hEaXNjb2RlLmpzJyk7XG52YXIgSFRNTFBhcnNlciA9IHJlcXVpcmUoJy4vaHRtbHBhcnNlci5qcycpO1xuLy8gRW1wdHkgRWxlbWVudHMgLSBIVE1MIDVcbnZhciBlbXB0eSA9IG1ha2VNYXAoXCJhcmVhLGJhc2UsYmFzZWZvbnQsYnIsY29sLGZyYW1lLGhyLGltZyxpbnB1dCxsaW5rLG1ldGEscGFyYW0sZW1iZWQsY29tbWFuZCxrZXlnZW4sc291cmNlLHRyYWNrLHdiclwiKTtcbi8vIEJsb2NrIEVsZW1lbnRzIC0gSFRNTCA1XG52YXIgYmxvY2sgPSBtYWtlTWFwKFwiYnIsYSxjb2RlLGFkZHJlc3MsYXJ0aWNsZSxhcHBsZXQsYXNpZGUsYXVkaW8sYmxvY2txdW90ZSxidXR0b24sY2FudmFzLGNlbnRlcixkZCxkZWwsZGlyLGRpdixkbCxkdCxmaWVsZHNldCxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsZm9ybSxmcmFtZXNldCxoMSxoMixoMyxoNCxoNSxoNixoZWFkZXIsaGdyb3VwLGhyLGlmcmFtZSxpbnMsaXNpbmRleCxsaSxtYXAsbWVudSxub2ZyYW1lcyxub3NjcmlwdCxvYmplY3Qsb2wsb3V0cHV0LHAscHJlLHNlY3Rpb24sc2NyaXB0LHRhYmxlLHRib2R5LHRkLHRmb290LHRoLHRoZWFkLHRyLHVsLHZpZGVvXCIpO1xuXG4vLyBJbmxpbmUgRWxlbWVudHMgLSBIVE1MIDVcbnZhciBpbmxpbmUgPSBtYWtlTWFwKFwiYWJicixhY3JvbnltLGFwcGxldCxiLGJhc2Vmb250LGJkbyxiaWcsYnV0dG9uLGNpdGUsZGVsLGRmbixlbSxmb250LGksaWZyYW1lLGltZyxpbnB1dCxpbnMsa2JkLGxhYmVsLG1hcCxvYmplY3QscSxzLHNhbXAsc2NyaXB0LHNlbGVjdCxzbWFsbCxzcGFuLHN0cmlrZSxzdHJvbmcsc3ViLHN1cCx0ZXh0YXJlYSx0dCx1LHZhclwiKTtcblxuLy8gRWxlbWVudHMgdGhhdCB5b3UgY2FuLCBpbnRlbnRpb25hbGx5LCBsZWF2ZSBvcGVuXG4vLyAoYW5kIHdoaWNoIGNsb3NlIHRoZW1zZWx2ZXMpXG52YXIgY2xvc2VTZWxmID0gbWFrZU1hcChcImNvbGdyb3VwLGRkLGR0LGxpLG9wdGlvbnMscCx0ZCx0Zm9vdCx0aCx0aGVhZCx0clwiKTtcblxuLy8gQXR0cmlidXRlcyB0aGF0IGhhdmUgdGhlaXIgdmFsdWVzIGZpbGxlZCBpbiBkaXNhYmxlZD1cImRpc2FibGVkXCJcbnZhciBmaWxsQXR0cnMgPSBtYWtlTWFwKFwiY2hlY2tlZCxjb21wYWN0LGRlY2xhcmUsZGVmZXIsZGlzYWJsZWQsaXNtYXAsbXVsdGlwbGUsbm9ocmVmLG5vcmVzaXplLG5vc2hhZGUsbm93cmFwLHJlYWRvbmx5LHNlbGVjdGVkXCIpO1xuXG4vLyBTcGVjaWFsIEVsZW1lbnRzIChjYW4gY29udGFpbiBhbnl0aGluZylcbnZhciBzcGVjaWFsID0gbWFrZU1hcChcInd4eHhjb2RlLXN0eWxlLHNjcmlwdCxzdHlsZSx2aWV3LHNjcm9sbC12aWV3LGJsb2NrXCIpO1xuZnVuY3Rpb24gbWFrZU1hcChzdHIpIHtcbiAgICB2YXIgb2JqID0ge30sIGl0ZW1zID0gc3RyLnNwbGl0KFwiLFwiKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKVxuICAgICAgICBvYmpbaXRlbXNbaV1dID0gdHJ1ZTtcbiAgICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBxKHYpIHtcbiAgICByZXR1cm4gJ1wiJyArIHYgKyAnXCInO1xufVxuXG5mdW5jdGlvbiByZW1vdmVET0NUWVBFKGh0bWwpIHtcbiAgICByZXR1cm4gaHRtbFxuICAgICAgICAucmVwbGFjZSgvPFxcP3htbC4qXFw/Plxcbi8sICcnKVxuICAgICAgICAucmVwbGFjZSgvPC4qIWRvY3R5cGUuKlxcPlxcbi8sICcnKVxuICAgICAgICAucmVwbGFjZSgvPC4qIURPQ1RZUEUuKlxcPlxcbi8sICcnKTtcbn1cblxuXG5mdW5jdGlvbiBodG1sMmpzb24oaHRtbCwgYmluZE5hbWUpIHtcbiAgICAvL+WkhOeQhuWtl+espuS4slxuICAgIGh0bWwgPSByZW1vdmVET0NUWVBFKGh0bWwpO1xuICAgIGh0bWwgPSB3eERpc2NvZGUuc3RyRGlzY29kZShodG1sKTtcbiAgICAvL+eUn+aIkG5vZGXoioLngrlcbiAgICB2YXIgYnVmQXJyYXkgPSBbXTtcbiAgICB2YXIgcmVzdWx0cyA9IHtcbiAgICAgICAgbm9kZTogYmluZE5hbWUsXG4gICAgICAgIG5vZGVzOiBbXSxcbiAgICAgICAgaW1hZ2VzOltdLFxuICAgICAgICBpbWFnZVVybHM6W11cbiAgICB9O1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgSFRNTFBhcnNlcihodG1sLCB7XG4gICAgICAgIHN0YXJ0OiBmdW5jdGlvbiAodGFnLCBhdHRycywgdW5hcnkpIHtcbiAgICAgICAgICAgIC8vZGVidWcodGFnLCBhdHRycywgdW5hcnkpO1xuICAgICAgICAgICAgLy8gbm9kZSBmb3IgdGhpcyBlbGVtZW50XG4gICAgICAgICAgICB2YXIgbm9kZSA9IHtcbiAgICAgICAgICAgICAgICBub2RlOiAnZWxlbWVudCcsXG4gICAgICAgICAgICAgICAgdGFnOiB0YWcsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoYnVmQXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5pbmRleCA9IGluZGV4LnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICBpbmRleCArPSAxXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBidWZBcnJheVswXTtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50Lm5vZGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Lm5vZGVzID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUuaW5kZXggPSBwYXJlbnQuaW5kZXggKyAnLicgKyBwYXJlbnQubm9kZXMubGVuZ3RoXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChibG9ja1t0YWddKSB7XG4gICAgICAgICAgICAgICAgbm9kZS50YWdUeXBlID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpbmxpbmVbdGFnXSkge1xuICAgICAgICAgICAgICAgIG5vZGUudGFnVHlwZSA9IFwiaW5saW5lXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNsb3NlU2VsZlt0YWddKSB7XG4gICAgICAgICAgICAgICAgbm9kZS50YWdUeXBlID0gXCJjbG9zZVNlbGZcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGF0dHJzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIG5vZGUuYXR0ciA9IGF0dHJzLnJlZHVjZShmdW5jdGlvbiAocHJlLCBhdHRyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gYXR0ci5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBhdHRyLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmFtZSA9PSAnY2xhc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUuZGlyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICB2YWx1ZSA9IHZhbHVlLmpvaW4oXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NTdHIgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBoYXMgbXVsdGkgYXR0aWJ1dGVzXG4gICAgICAgICAgICAgICAgICAgIC8vIG1ha2UgaXQgYXJyYXkgb2YgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lID09ICdzdHlsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5kaXIodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIHZhbHVlID0gdmFsdWUuam9pbihcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZVN0ciA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5tYXRjaCgvIC8pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIGF0dHIgYWxyZWFkeSBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgLy8gbWVyZ2UgaXRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZVtuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJlW25hbWVdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFscmVhZHkgYXJyYXksIHB1c2ggdG8gbGFzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZVtuYW1lXS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2luZ2xlIHZhbHVlLCBtYWtlIGl0IGFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlW25hbWVdID0gW3ByZVtuYW1lXSwgdmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm90IGV4aXN0LCBwdXQgaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZVtuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZTtcbiAgICAgICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8v5a+5aW1n5re75Yqg6aKd5aSW5pWw5o2uXG4gICAgICAgICAgICBpZiAobm9kZS50YWcgPT09ICdpbWcnKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5pbWdJbmRleCA9IHJlc3VsdHMuaW1hZ2VzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgaW1nVXJsID0gbm9kZS5hdHRyLnNyYztcbiAgICAgICAgICAgICAgICBpZiAoaW1nVXJsWzBdID09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGltZ1VybC5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGltZ1VybCA9IHd4RGlzY29kZS51cmxUb0h0dHBVcmwoaW1nVXJsLCBfX3BsYWNlSW1nZVVybEh0dHBzKTtcbiAgICAgICAgICAgICAgICBub2RlLmF0dHIuc3JjID0gaW1nVXJsO1xuICAgICAgICAgICAgICAgIG5vZGUuZnJvbSA9IGJpbmROYW1lO1xuICAgICAgICAgICAgICAgIHJlc3VsdHMuaW1hZ2VzLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0cy5pbWFnZVVybHMucHVzaChpbWdVcmwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDlpITnkIZmb2505qCH562+5qC35byP5bGe5oCnXG4gICAgICAgICAgICBpZiAobm9kZS50YWcgPT09ICdmb250Jykge1xuICAgICAgICAgICAgICAgIHZhciBmb250U2l6ZSA9IFsneC1zbWFsbCcsICdzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnLCAneC1sYXJnZScsICd4eC1sYXJnZScsICctd2Via2l0LXh4eC1sYXJnZSddO1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZUF0dHJzID0ge1xuICAgICAgICAgICAgICAgICAgICAnY29sb3InOiAnY29sb3InLFxuICAgICAgICAgICAgICAgICAgICAnZmFjZSc6ICdmb250LWZhbWlseScsXG4gICAgICAgICAgICAgICAgICAgICdzaXplJzogJ2ZvbnQtc2l6ZSdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmICghbm9kZS5hdHRyLnN0eWxlKSBub2RlLmF0dHIuc3R5bGUgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGUuc3R5bGVTdHIpIG5vZGUuc3R5bGVTdHIgPSAnJztcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gc3R5bGVBdHRycykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5hdHRyW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGtleSA9PT0gJ3NpemUnID8gZm9udFNpemVbbm9kZS5hdHRyW2tleV0tMV0gOiBub2RlLmF0dHJba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYXR0ci5zdHlsZS5wdXNoKHN0eWxlQXR0cnNba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmF0dHIuc3R5bGUucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlU3RyICs9IHN0eWxlQXR0cnNba2V5XSArICc6ICcgKyB2YWx1ZSArICc7JztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy/kuLTml7borrDlvZVzb3VyY2XotYTmupBcbiAgICAgICAgICAgIGlmKG5vZGUudGFnID09PSAnc291cmNlJyl7XG4gICAgICAgICAgICAgICAgcmVzdWx0cy5zb3VyY2UgPSBub2RlLmF0dHIuc3JjO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodW5hcnkpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGlzIHRhZyBkb3Nlbid0IGhhdmUgZW5kIHRhZ1xuICAgICAgICAgICAgICAgIC8vIGxpa2UgPGltZyBzcmM9XCJob2dlLnBuZ1wiLz5cbiAgICAgICAgICAgICAgICAvLyBhZGQgdG8gcGFyZW50c1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBidWZBcnJheVswXSB8fCByZXN1bHRzO1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQubm9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQubm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFyZW50Lm5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJ1ZkFycmF5LnVuc2hpZnQobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVuZDogZnVuY3Rpb24gKHRhZykge1xuICAgICAgICAgICAgLy9kZWJ1Zyh0YWcpO1xuICAgICAgICAgICAgLy8gbWVyZ2UgaW50byBwYXJlbnQgdGFnXG4gICAgICAgICAgICB2YXIgbm9kZSA9IGJ1ZkFycmF5LnNoaWZ0KCk7XG4gICAgICAgICAgICBpZiAobm9kZS50YWcgIT09IHRhZykgY29uc29sZS5lcnJvcignaW52YWxpZCBzdGF0ZTogbWlzbWF0Y2ggZW5kIHRhZycpO1xuXG4gICAgICAgICAgICAvL+W9k+aciee8k+WtmHNvdXJjZei1hOa6kOaXtuS6juS6jnZpZGVv6KGl5LiKc3Jj6LWE5rqQXG4gICAgICAgICAgICBpZihub2RlLnRhZyA9PT0gJ3ZpZGVvJyAmJiByZXN1bHRzLnNvdXJjZSl7XG4gICAgICAgICAgICAgICAgbm9kZS5hdHRyLnNyYyA9IHJlc3VsdHMuc291cmNlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHQuc291cmNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYnVmQXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0cy5ub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gYnVmQXJyYXlbMF07XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5ub2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5ub2RlcyA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXJlbnQubm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2hhcnM6IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgICAgICAvL2RlYnVnKHRleHQpO1xuICAgICAgICAgICAgdmFyIG5vZGUgPSB7XG4gICAgICAgICAgICAgICAgbm9kZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgIHRleHQ6IHRleHQsXG4gICAgICAgICAgICAgICAgdGV4dEFycmF5OnRyYW5zRW1vamlTdHIodGV4dClcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChidWZBcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXN1bHRzLm5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBidWZBcnJheVswXTtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50Lm5vZGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Lm5vZGVzID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUuaW5kZXggPSBwYXJlbnQuaW5kZXggKyAnLicgKyBwYXJlbnQubm9kZXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgcGFyZW50Lm5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbW1lbnQ6IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgICAgICAvL2RlYnVnKHRleHQpO1xuICAgICAgICAgICAgLy8gdmFyIG5vZGUgPSB7XG4gICAgICAgICAgICAvLyAgICAgbm9kZTogJ2NvbW1lbnQnLFxuICAgICAgICAgICAgLy8gICAgIHRleHQ6IHRleHQsXG4gICAgICAgICAgICAvLyB9O1xuICAgICAgICAgICAgLy8gdmFyIHBhcmVudCA9IGJ1ZkFycmF5WzBdO1xuICAgICAgICAgICAgLy8gaWYgKHBhcmVudC5ub2RlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyAgICAgcGFyZW50Lm5vZGVzID0gW107XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBwYXJlbnQubm9kZXMucHVzaChub2RlKTtcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbn07XG5cbmZ1bmN0aW9uIHRyYW5zRW1vamlTdHIoc3RyKXtcbiAgLy8gdmFyIGVSZWcgPSBuZXcgUmVnRXhwKFwiW1wiK19fcmVnKycgJytcIl1cIik7XG4vLyAgIHN0ciA9IHN0ci5yZXBsYWNlKC9cXFsoW15cXFtcXF1dKylcXF0vZywnOiQxOicpXG5cbiAgdmFyIGVtb2ppT2JqcyA9IFtdO1xuICAvL+WmguaenOato+WImeihqOi+vuW8j+S4uuepulxuICBpZihfX2Vtb2ppc1JlZy5sZW5ndGggPT0gMCB8fCAhX19lbW9qaXMpe1xuICAgICAgdmFyIGVtb2ppT2JqID0ge31cbiAgICAgIGVtb2ppT2JqLm5vZGUgPSBcInRleHRcIjtcbiAgICAgIGVtb2ppT2JqLnRleHQgPSBzdHI7XG4gICAgICBhcnJheSA9IFtlbW9qaU9ial07XG4gICAgICByZXR1cm4gYXJyYXk7XG4gIH1cbiAgLy/ov5nkuKrlnLDmlrnpnIDopoHosIPmlbRcbiAgc3RyID0gc3RyLnJlcGxhY2UoL1xcWyhbXlxcW1xcXV0rKVxcXS9nLCc6JDE6JylcbiAgdmFyIGVSZWcgPSBuZXcgUmVnRXhwKFwiWzpdXCIpO1xuICB2YXIgYXJyYXkgPSBzdHIuc3BsaXQoZVJlZyk7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgdmFyIGVsZSA9IGFycmF5W2ldO1xuICAgIHZhciBlbW9qaU9iaiA9IHt9O1xuICAgIGlmKF9fZW1vamlzW2VsZV0pe1xuICAgICAgZW1vamlPYmoubm9kZSA9IFwiZWxlbWVudFwiO1xuICAgICAgZW1vamlPYmoudGFnID0gXCJlbW9qaVwiO1xuICAgICAgZW1vamlPYmoudGV4dCA9IF9fZW1vamlzW2VsZV07XG4gICAgICBlbW9qaU9iai5iYXNlU3JjPSBfX2Vtb2ppc0Jhc2VTcmM7XG4gICAgfWVsc2V7XG4gICAgICBlbW9qaU9iai5ub2RlID0gXCJ0ZXh0XCI7XG4gICAgICBlbW9qaU9iai50ZXh0ID0gZWxlO1xuICAgIH1cbiAgICBlbW9qaU9ianMucHVzaChlbW9qaU9iaik7XG4gIH1cblxuICByZXR1cm4gZW1vamlPYmpzO1xufVxuXG5mdW5jdGlvbiBnZXRFbW9qaXMoKSB7XG4gICAgdmFyIGVtb2ppcyA9IHt9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMzQ7IGkrKykge1xuICAgICAgICBsZXQgc3RyID0gaSA8IDEwID8gJzAnICsgaSA6IGlcbiAgICAgICAgZW1vamlzW3N0cl0gPSBzdHIgKyAnLmdpZidcbiAgICB9XG4gICAgcmV0dXJuIGVtb2ppc1xufVxuXG5mdW5jdGlvbiBlbW9qaXNJbml0KHJlZyA9ICdbXScsIGJhc2VTcmM9XCIvd3hQYXJzZS9lbW9qaXMvXCIsIGVtb2ppcyl7XG4gICAgX19lbW9qaXNSZWcgPSByZWc7XG4gICAgX19lbW9qaXNCYXNlU3JjPWJhc2VTcmM7XG4gICAgX19lbW9qaXMgPSBlbW9qaXMgfHwgZ2V0RW1vamlzKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGh0bWwyanNvbjogaHRtbDJqc29uLFxuICAgIGVtb2ppc0luaXQ6ZW1vamlzSW5pdFxufTtcblxuIl19