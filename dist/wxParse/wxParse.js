'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _showdown = require('./showdown.js');

var _showdown2 = _interopRequireDefault(_showdown);

var _html2json = require('./html2json.js');

var _html2json2 = _interopRequireDefault(_html2json);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * author: Di (微信小程序开发工程师)
                                                                                                                                                                                                                   * organization: WeAppDev(微信小程序开发论坛)(http://weappdev.com)
                                                                                                                                                                                                                   *               垂直微信小程序开发交流社区
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * github地址: https://github.com/icindy/wxParse
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * for: 微信小程序富文本解析
                                                                                                                                                                                                                   * detail : http://weappdev.com/t/wxparse-alpha0-1-html-markdown/184
                                                                                                                                                                                                                   */

/**
 * utils函数引入
 **/


/**
 * 配置及公有属性
 **/
var realWindowWidth = 0;
var realWindowHeight = 0;
wx.getSystemInfo({
    success: function success(res) {
        realWindowWidth = res.windowWidth;
        realWindowHeight = res.windowHeight;
    }
});

/**
 * 主函数入口区
 **/
function wxParse() {
    var bindName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'wxParseData';
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'html';
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '<div class="color:red;">数据不能为空</div>';
    var target = arguments[3];
    var imagePadding = arguments[4];

    var that = target;
    var transData = {}; //存放转化后的数据
    if (type == 'html') {
        transData = _html2json2.default.html2json(data, bindName);
        //console.log(JSON.stringify(transData, ' ', ' '));
    } else if (type == 'md' || type == 'markdown') {
        var converter = new _showdown2.default.Converter();
        var html = converter.makeHtml(data);
        transData = _html2json2.default.html2json(html, bindName);
        //console.log(JSON.stringify(transData, ' ', ' '));
    }
    transData.view = {};
    transData.view.imagePadding = 0;
    if (typeof imagePadding != 'undefined') {
        transData.view.imagePadding = imagePadding;
    }
    var bindData = {};
    bindData[bindName] = transData;
    that[bindName] = transData;

    that.setData(bindData);
    that.wxParseImgLoad = wxParseImgLoad;
    that.wxParseImgTap = wxParseImgTap;
}

// 图片点击事件
function wxParseImgTap(e) {
    var that = this;
    var nowImgUrl = e.target.dataset.src;
    var tagFrom = e.target.dataset.from;
    if (typeof tagFrom != 'undefined' && tagFrom.length > 0) {
        wx.previewImage({
            current: nowImgUrl, // 当前显示图片的http链接
            urls: that[tagFrom].imageUrls // 需要预览的图片http链接列表
        });
    }
}

/**
 * 图片视觉宽高计算函数区
 **/
function wxParseImgLoad(e) {
    var that = this;
    var tagFrom = e.target.dataset.from;
    var idx = e.target.dataset.idx;
    if (typeof tagFrom !== 'undefined' && tagFrom.length > 0) {
        calMoreImageInfo(e, idx, that, tagFrom);
    }
}

// 假循环获取计算图片视觉最佳宽高
function calMoreImageInfo(e, idx, that, bindName) {
    var temData = that[bindName];
    if (!temData || temData.images.length == 0) {
        return;
    }
    var temImages = temData.images;
    //因为无法获取view宽度 需要自定义padding进行计算，稍后处理
    var recal = wxAutoImageCal(e.detail.width, e.detail.height, that, bindName);
    // temImages[idx].width = recal.imageWidth;
    // temImages[idx].height = recal.imageheight;
    // temData.images = temImages;
    // var bindData = {};
    // bindData[bindName] = temData;
    // that.setData(bindData);
    var index = temImages[idx].index;
    var key = '' + bindName;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = index.split('.')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;
            key += '.nodes[' + i + ']';
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var keyW = key + '.width';
    var keyH = key + '.height';
    var style = that[bindName].images[0].styleStr || 'width:' + recal.imageWidth + 'px;' + 'height:' + recal.imageheight + 'px';
    that.setData(_defineProperty({}, key + '.style', style));
    var newObj = changeObj(key, that);
    newObj.style = style;
}

function changeObj(node, obj, value) {
    node = node.replace(/\[(\d+)\]/g, '.$1');
    var arr = node.split('.');
    function tem(num, object) {
        if (_typeof(object[arr[num]]) === 'object') {
            return tem(num + 1, object[arr[num]]);
        } else {
            if (typeof value !== 'undefined') {
                object[arr[num]] = value;
            }
            return object;
        }
    }
    return tem(0, obj);
}

// 计算视觉优先的图片宽高
function wxAutoImageCal(originalWidth, originalHeight, that, bindName) {
    //获取图片的原始长宽
    var windowWidth = 0,
        windowHeight = 0;
    var autoWidth = 0,
        autoHeight = 0;
    var results = {};
    var padding = that[bindName].view.imagePadding;
    windowWidth = realWindowWidth - 2 * padding;
    windowHeight = realWindowHeight;
    //判断按照那种方式进行缩放
    // console.log("windowWidth" + windowWidth);
    if (originalWidth > windowWidth) {
        //在图片width大于手机屏幕width时候
        autoWidth = windowWidth;
        // console.log("autoWidth" + autoWidth);
        autoHeight = autoWidth * originalHeight / originalWidth;
        // console.log("autoHeight" + autoHeight);
        results.imageWidth = autoWidth;
        results.imageheight = autoHeight;
    } else {
        //否则展示原来的数据
        results.imageWidth = originalWidth;
        results.imageheight = originalHeight;
    }
    return results;
}

function wxParseTemArray(temArrayName, bindNameReg, total, that) {
    var array = [];
    var temData = that;
    var obj = null;
    for (var i = 0; i < total; i++) {
        var simArr = temData[bindNameReg + i].nodes;
        array.push(simArr);
    }

    temArrayName = temArrayName || 'wxParseTemArray';
    obj = JSON.parse('{"' + temArrayName + '":""}');
    obj[temArrayName] = array;
    that.setData(obj);
    that[temArrayName] = array;
}

/**
 * 配置emojis
 *
 */

module.exports = {
    wxParse: wxParse,
    wxParseTemArray: wxParseTemArray,
    emojisInit: _html2json2.default.emojisInit
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4UGFyc2UuanMiXSwibmFtZXMiOlsicmVhbFdpbmRvd1dpZHRoIiwicmVhbFdpbmRvd0hlaWdodCIsInd4IiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsInd4UGFyc2UiLCJiaW5kTmFtZSIsInR5cGUiLCJkYXRhIiwidGFyZ2V0IiwiaW1hZ2VQYWRkaW5nIiwidGhhdCIsInRyYW5zRGF0YSIsImh0bWwyanNvbiIsImNvbnZlcnRlciIsIkNvbnZlcnRlciIsImh0bWwiLCJtYWtlSHRtbCIsInZpZXciLCJiaW5kRGF0YSIsInNldERhdGEiLCJ3eFBhcnNlSW1nTG9hZCIsInd4UGFyc2VJbWdUYXAiLCJlIiwibm93SW1nVXJsIiwiZGF0YXNldCIsInNyYyIsInRhZ0Zyb20iLCJmcm9tIiwibGVuZ3RoIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJpbWFnZVVybHMiLCJpZHgiLCJjYWxNb3JlSW1hZ2VJbmZvIiwidGVtRGF0YSIsImltYWdlcyIsInRlbUltYWdlcyIsInJlY2FsIiwid3hBdXRvSW1hZ2VDYWwiLCJkZXRhaWwiLCJ3aWR0aCIsImhlaWdodCIsImluZGV4Iiwia2V5Iiwic3BsaXQiLCJpIiwia2V5VyIsImtleUgiLCJzdHlsZSIsInN0eWxlU3RyIiwiaW1hZ2VXaWR0aCIsImltYWdlaGVpZ2h0IiwibmV3T2JqIiwiY2hhbmdlT2JqIiwibm9kZSIsIm9iaiIsInZhbHVlIiwicmVwbGFjZSIsImFyciIsInRlbSIsIm51bSIsIm9iamVjdCIsIm9yaWdpbmFsV2lkdGgiLCJvcmlnaW5hbEhlaWdodCIsImF1dG9XaWR0aCIsImF1dG9IZWlnaHQiLCJyZXN1bHRzIiwicGFkZGluZyIsInd4UGFyc2VUZW1BcnJheSIsInRlbUFycmF5TmFtZSIsImJpbmROYW1lUmVnIiwidG90YWwiLCJhcnJheSIsInNpbUFyciIsIm5vZGVzIiwicHVzaCIsIkpTT04iLCJwYXJzZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJlbW9qaXNJbml0Il0sIm1hcHBpbmdzIjoiOzs7O0FBY0E7Ozs7QUFDQTs7Ozs7O2tOQWZBOzs7Ozs7Ozs7OztBQVdBOzs7OztBQU1BOzs7QUFHQSxJQUFJQSxrQkFBa0IsQ0FBdEI7QUFDQSxJQUFJQyxtQkFBbUIsQ0FBdkI7QUFDQUMsR0FBR0MsYUFBSCxDQUFpQjtBQUNiQyxhQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDcEJMLDBCQUFrQkssSUFBSUMsV0FBdEI7QUFDQUwsMkJBQW1CSSxJQUFJRSxZQUF2QjtBQUNIO0FBSlksQ0FBakI7O0FBT0E7OztBQUdBLFNBQVNDLE9BQVQsR0FBK0g7QUFBQSxRQUE5R0MsUUFBOEcsdUVBQW5HLGFBQW1HO0FBQUEsUUFBcEZDLElBQW9GLHVFQUE3RSxNQUE2RTtBQUFBLFFBQXJFQyxJQUFxRSx1RUFBOUQsc0NBQThEO0FBQUEsUUFBdEJDLE1BQXNCO0FBQUEsUUFBZEMsWUFBYzs7QUFDM0gsUUFBSUMsT0FBT0YsTUFBWDtBQUNBLFFBQUlHLFlBQVksRUFBaEIsQ0FGMkgsQ0FFeEc7QUFDbkIsUUFBSUwsUUFBUSxNQUFaLEVBQW9CO0FBQ2hCSyxvQkFBWSxvQkFBV0MsU0FBWCxDQUFxQkwsSUFBckIsRUFBMkJGLFFBQTNCLENBQVo7QUFDQTtBQUNILEtBSEQsTUFHTyxJQUFJQyxRQUFRLElBQVIsSUFBZ0JBLFFBQVEsVUFBNUIsRUFBd0M7QUFDM0MsWUFBSU8sWUFBWSxJQUFJLG1CQUFTQyxTQUFiLEVBQWhCO0FBQ0EsWUFBSUMsT0FBT0YsVUFBVUcsUUFBVixDQUFtQlQsSUFBbkIsQ0FBWDtBQUNBSSxvQkFBWSxvQkFBV0MsU0FBWCxDQUFxQkcsSUFBckIsRUFBMkJWLFFBQTNCLENBQVo7QUFDQTtBQUNIO0FBQ0RNLGNBQVVNLElBQVYsR0FBaUIsRUFBakI7QUFDQU4sY0FBVU0sSUFBVixDQUFlUixZQUFmLEdBQThCLENBQTlCO0FBQ0EsUUFBSSxPQUFPQSxZQUFQLElBQXdCLFdBQTVCLEVBQXlDO0FBQ3JDRSxrQkFBVU0sSUFBVixDQUFlUixZQUFmLEdBQThCQSxZQUE5QjtBQUNIO0FBQ0QsUUFBSVMsV0FBVyxFQUFmO0FBQ0FBLGFBQVNiLFFBQVQsSUFBcUJNLFNBQXJCO0FBQ0FELFNBQUtMLFFBQUwsSUFBaUJNLFNBQWpCOztBQUVBRCxTQUFLUyxPQUFMLENBQWFELFFBQWI7QUFDQVIsU0FBS1UsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQVYsU0FBS1csYUFBTCxHQUFxQkEsYUFBckI7QUFDSDs7QUFFRDtBQUNBLFNBQVNBLGFBQVQsQ0FBdUJDLENBQXZCLEVBQTBCO0FBQ3RCLFFBQUlaLE9BQU8sSUFBWDtBQUNBLFFBQUlhLFlBQVlELEVBQUVkLE1BQUYsQ0FBU2dCLE9BQVQsQ0FBaUJDLEdBQWpDO0FBQ0EsUUFBSUMsVUFBVUosRUFBRWQsTUFBRixDQUFTZ0IsT0FBVCxDQUFpQkcsSUFBL0I7QUFDQSxRQUFJLE9BQVFELE9BQVIsSUFBb0IsV0FBcEIsSUFBbUNBLFFBQVFFLE1BQVIsR0FBaUIsQ0FBeEQsRUFBMkQ7QUFDdkQ5QixXQUFHK0IsWUFBSCxDQUFnQjtBQUNaQyxxQkFBU1AsU0FERyxFQUNRO0FBQ3BCUSxrQkFBTXJCLEtBQUtnQixPQUFMLEVBQWNNLFNBRlIsQ0FFa0I7QUFGbEIsU0FBaEI7QUFJSDtBQUNKOztBQUVEOzs7QUFHQSxTQUFTWixjQUFULENBQXdCRSxDQUF4QixFQUEyQjtBQUN2QixRQUFJWixPQUFPLElBQVg7QUFDQSxRQUFJZ0IsVUFBVUosRUFBRWQsTUFBRixDQUFTZ0IsT0FBVCxDQUFpQkcsSUFBL0I7QUFDQSxRQUFJTSxNQUFNWCxFQUFFZCxNQUFGLENBQVNnQixPQUFULENBQWlCUyxHQUEzQjtBQUNBLFFBQUksT0FBUVAsT0FBUixLQUFxQixXQUFyQixJQUFvQ0EsUUFBUUUsTUFBUixHQUFpQixDQUF6RCxFQUE0RDtBQUN4RE0seUJBQWlCWixDQUFqQixFQUFvQlcsR0FBcEIsRUFBeUJ2QixJQUF6QixFQUErQmdCLE9BQS9CO0FBQ0g7QUFDSjs7QUFFRDtBQUNBLFNBQVNRLGdCQUFULENBQTBCWixDQUExQixFQUE2QlcsR0FBN0IsRUFBa0N2QixJQUFsQyxFQUF3Q0wsUUFBeEMsRUFBa0Q7QUFDOUMsUUFBSThCLFVBQVV6QixLQUFLTCxRQUFMLENBQWQ7QUFDQSxRQUFJLENBQUM4QixPQUFELElBQVlBLFFBQVFDLE1BQVIsQ0FBZVIsTUFBZixJQUF5QixDQUF6QyxFQUE0QztBQUN4QztBQUNIO0FBQ0QsUUFBSVMsWUFBWUYsUUFBUUMsTUFBeEI7QUFDQTtBQUNBLFFBQUlFLFFBQVFDLGVBQWVqQixFQUFFa0IsTUFBRixDQUFTQyxLQUF4QixFQUErQm5CLEVBQUVrQixNQUFGLENBQVNFLE1BQXhDLEVBQWdEaEMsSUFBaEQsRUFBc0RMLFFBQXRELENBQVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFJc0MsUUFBUU4sVUFBVUosR0FBVixFQUFlVSxLQUEzQjtBQUNBLFFBQUlDLFdBQVN2QyxRQUFiO0FBZjhDO0FBQUE7QUFBQTs7QUFBQTtBQWdCOUMsNkJBQWNzQyxNQUFNRSxLQUFOLENBQVksR0FBWixDQUFkO0FBQUEsZ0JBQVNDLENBQVQ7QUFBZ0NGLCtCQUFpQkUsQ0FBakI7QUFBaEM7QUFoQjhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBaUI5QyxRQUFJQyxPQUFPSCxNQUFNLFFBQWpCO0FBQ0EsUUFBSUksT0FBT0osTUFBTSxTQUFqQjtBQUNBLFFBQUlLLFFBQVF2QyxLQUFLTCxRQUFMLEVBQWUrQixNQUFmLENBQXNCLENBQXRCLEVBQXlCYyxRQUF6QixJQUFzQyxXQUFXWixNQUFNYSxVQUFqQixHQUE4QixLQUE5QixHQUFzQyxTQUF0QyxHQUFrRGIsTUFBTWMsV0FBeEQsR0FBc0UsSUFBeEg7QUFDQTFDLFNBQUtTLE9BQUwscUJBQ0t5QixNQUFJLFFBRFQsRUFDb0JLLEtBRHBCO0FBR0EsUUFBSUksU0FBU0MsVUFBVVYsR0FBVixFQUFlbEMsSUFBZixDQUFiO0FBQ0EyQyxXQUFPSixLQUFQLEdBQWVBLEtBQWY7QUFDSDs7QUFFRCxTQUFTSyxTQUFULENBQW1CQyxJQUFuQixFQUF5QkMsR0FBekIsRUFBOEJDLEtBQTlCLEVBQXFDO0FBQ2pDRixXQUFPQSxLQUFLRyxPQUFMLENBQWEsWUFBYixFQUEyQixLQUEzQixDQUFQO0FBQ0EsUUFBSUMsTUFBTUosS0FBS1YsS0FBTCxDQUFXLEdBQVgsQ0FBVjtBQUNBLGFBQVNlLEdBQVQsQ0FBYUMsR0FBYixFQUFrQkMsTUFBbEIsRUFBMEI7QUFDdEIsWUFBSSxRQUFPQSxPQUFPSCxJQUFJRSxHQUFKLENBQVAsQ0FBUCxNQUE0QixRQUFoQyxFQUEwQztBQUN0QyxtQkFBT0QsSUFBSUMsTUFBSSxDQUFSLEVBQVdDLE9BQU9ILElBQUlFLEdBQUosQ0FBUCxDQUFYLENBQVA7QUFDSCxTQUZELE1BRU87QUFDSCxnQkFBSSxPQUFPSixLQUFQLEtBQWlCLFdBQXJCLEVBQWtDO0FBQzlCSyx1QkFBT0gsSUFBSUUsR0FBSixDQUFQLElBQW1CSixLQUFuQjtBQUNIO0FBQ0QsbUJBQU9LLE1BQVA7QUFDSDtBQUNKO0FBQ0QsV0FBT0YsSUFBSSxDQUFKLEVBQU9KLEdBQVAsQ0FBUDtBQUNIOztBQUVEO0FBQ0EsU0FBU2pCLGNBQVQsQ0FBd0J3QixhQUF4QixFQUF1Q0MsY0FBdkMsRUFBdUR0RCxJQUF2RCxFQUE2REwsUUFBN0QsRUFBdUU7QUFDbkU7QUFDQSxRQUFJSCxjQUFjLENBQWxCO0FBQUEsUUFBcUJDLGVBQWUsQ0FBcEM7QUFDQSxRQUFJOEQsWUFBWSxDQUFoQjtBQUFBLFFBQW1CQyxhQUFhLENBQWhDO0FBQ0EsUUFBSUMsVUFBVSxFQUFkO0FBQ0EsUUFBSUMsVUFBVTFELEtBQUtMLFFBQUwsRUFBZVksSUFBZixDQUFvQlIsWUFBbEM7QUFDQVAsa0JBQWNOLGtCQUFrQixJQUFJd0UsT0FBcEM7QUFDQWpFLG1CQUFlTixnQkFBZjtBQUNBO0FBQ0E7QUFDQSxRQUFJa0UsZ0JBQWdCN0QsV0FBcEIsRUFBaUM7QUFBQztBQUM5QitELG9CQUFZL0QsV0FBWjtBQUNBO0FBQ0FnRSxxQkFBY0QsWUFBWUQsY0FBYixHQUErQkQsYUFBNUM7QUFDQTtBQUNBSSxnQkFBUWhCLFVBQVIsR0FBcUJjLFNBQXJCO0FBQ0FFLGdCQUFRZixXQUFSLEdBQXNCYyxVQUF0QjtBQUNILEtBUEQsTUFPTztBQUFDO0FBQ0pDLGdCQUFRaEIsVUFBUixHQUFxQlksYUFBckI7QUFDQUksZ0JBQVFmLFdBQVIsR0FBc0JZLGNBQXRCO0FBQ0g7QUFDRCxXQUFPRyxPQUFQO0FBQ0g7O0FBRUQsU0FBU0UsZUFBVCxDQUF5QkMsWUFBekIsRUFBdUNDLFdBQXZDLEVBQW9EQyxLQUFwRCxFQUEyRDlELElBQTNELEVBQWlFO0FBQzdELFFBQUkrRCxRQUFRLEVBQVo7QUFDQSxRQUFJdEMsVUFBVXpCLElBQWQ7QUFDQSxRQUFJOEMsTUFBTSxJQUFWO0FBQ0EsU0FBSyxJQUFJVixJQUFJLENBQWIsRUFBZ0JBLElBQUkwQixLQUFwQixFQUEyQjFCLEdBQTNCLEVBQWdDO0FBQzVCLFlBQUk0QixTQUFTdkMsUUFBUW9DLGNBQWN6QixDQUF0QixFQUF5QjZCLEtBQXRDO0FBQ0FGLGNBQU1HLElBQU4sQ0FBV0YsTUFBWDtBQUNIOztBQUVESixtQkFBZUEsZ0JBQWdCLGlCQUEvQjtBQUNBZCxVQUFNcUIsS0FBS0MsS0FBTCxDQUFXLE9BQU9SLFlBQVAsR0FBc0IsT0FBakMsQ0FBTjtBQUNBZCxRQUFJYyxZQUFKLElBQW9CRyxLQUFwQjtBQUNBL0QsU0FBS1MsT0FBTCxDQUFhcUMsR0FBYjtBQUNBOUMsU0FBSzRELFlBQUwsSUFBcUJHLEtBQXJCO0FBQ0g7O0FBRUQ7Ozs7O0FBTUFNLE9BQU9DLE9BQVAsR0FBaUI7QUFDYjVFLGFBQVNBLE9BREk7QUFFYmlFLHFCQUFpQkEsZUFGSjtBQUdiWSxnQkFBWSxvQkFBV0E7QUFIVixDQUFqQiIsImZpbGUiOiJ3eFBhcnNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBhdXRob3I6IERpICjlvq7kv6HlsI/nqIvluo/lvIDlj5Hlt6XnqIvluIgpXG4gKiBvcmdhbml6YXRpb246IFdlQXBwRGV2KOW+ruS/oeWwj+eoi+W6j+W8gOWPkeiuuuWdmykoaHR0cDovL3dlYXBwZGV2LmNvbSlcbiAqICAgICAgICAgICAgICAg5Z6C55u05b6u5L+h5bCP56iL5bqP5byA5Y+R5Lqk5rWB56S+5Yy6XG4gKlxuICogZ2l0aHVi5Zyw5Z2AOiBodHRwczovL2dpdGh1Yi5jb20vaWNpbmR5L3d4UGFyc2VcbiAqXG4gKiBmb3I6IOW+ruS/oeWwj+eoi+W6j+WvjOaWh+acrOino+aekFxuICogZGV0YWlsIDogaHR0cDovL3dlYXBwZGV2LmNvbS90L3d4cGFyc2UtYWxwaGEwLTEtaHRtbC1tYXJrZG93bi8xODRcbiAqL1xuXG4vKipcbiAqIHV0aWxz5Ye95pWw5byV5YWlXG4gKiovXG5pbXBvcnQgc2hvd2Rvd24gZnJvbSAnLi9zaG93ZG93bi5qcyc7XG5pbXBvcnQgSHRtbFRvSnNvbiBmcm9tICcuL2h0bWwyanNvbi5qcyc7XG5cbi8qKlxuICog6YWN572u5Y+K5YWs5pyJ5bGe5oCnXG4gKiovXG52YXIgcmVhbFdpbmRvd1dpZHRoID0gMDtcbnZhciByZWFsV2luZG93SGVpZ2h0ID0gMDtcbnd4LmdldFN5c3RlbUluZm8oe1xuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgcmVhbFdpbmRvd1dpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICAgIHJlYWxXaW5kb3dIZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgfVxufSlcblxuLyoqXG4gKiDkuLvlh73mlbDlhaXlj6PljLpcbiAqKi9cbmZ1bmN0aW9uIHd4UGFyc2UoYmluZE5hbWUgPSAnd3hQYXJzZURhdGEnLCB0eXBlID0gJ2h0bWwnLCBkYXRhID0gJzxkaXYgY2xhc3M9XCJjb2xvcjpyZWQ7XCI+5pWw5o2u5LiN6IO95Li656m6PC9kaXY+JywgdGFyZ2V0LCBpbWFnZVBhZGRpbmcpIHtcbiAgICB2YXIgdGhhdCA9IHRhcmdldDtcbiAgICB2YXIgdHJhbnNEYXRhID0ge307Ly/lrZjmlL7ovazljJblkI7nmoTmlbDmja5cbiAgICBpZiAodHlwZSA9PSAnaHRtbCcpIHtcbiAgICAgICAgdHJhbnNEYXRhID0gSHRtbFRvSnNvbi5odG1sMmpzb24oZGF0YSwgYmluZE5hbWUpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRyYW5zRGF0YSwgJyAnLCAnICcpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJ21kJyB8fCB0eXBlID09ICdtYXJrZG93bicpIHtcbiAgICAgICAgdmFyIGNvbnZlcnRlciA9IG5ldyBzaG93ZG93bi5Db252ZXJ0ZXIoKTtcbiAgICAgICAgdmFyIGh0bWwgPSBjb252ZXJ0ZXIubWFrZUh0bWwoZGF0YSk7XG4gICAgICAgIHRyYW5zRGF0YSA9IEh0bWxUb0pzb24uaHRtbDJqc29uKGh0bWwsIGJpbmROYW1lKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0cmFuc0RhdGEsICcgJywgJyAnKSk7XG4gICAgfVxuICAgIHRyYW5zRGF0YS52aWV3ID0ge307XG4gICAgdHJhbnNEYXRhLnZpZXcuaW1hZ2VQYWRkaW5nID0gMDtcbiAgICBpZiAodHlwZW9mKGltYWdlUGFkZGluZykgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdHJhbnNEYXRhLnZpZXcuaW1hZ2VQYWRkaW5nID0gaW1hZ2VQYWRkaW5nXG4gICAgfVxuICAgIHZhciBiaW5kRGF0YSA9IHt9O1xuICAgIGJpbmREYXRhW2JpbmROYW1lXSA9IHRyYW5zRGF0YTtcbiAgICB0aGF0W2JpbmROYW1lXSA9IHRyYW5zRGF0YVxuXG4gICAgdGhhdC5zZXREYXRhKGJpbmREYXRhKVxuICAgIHRoYXQud3hQYXJzZUltZ0xvYWQgPSB3eFBhcnNlSW1nTG9hZDtcbiAgICB0aGF0Lnd4UGFyc2VJbWdUYXAgPSB3eFBhcnNlSW1nVGFwO1xufVxuXG4vLyDlm77niYfngrnlh7vkuovku7ZcbmZ1bmN0aW9uIHd4UGFyc2VJbWdUYXAoZSkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB2YXIgbm93SW1nVXJsID0gZS50YXJnZXQuZGF0YXNldC5zcmM7XG4gICAgdmFyIHRhZ0Zyb20gPSBlLnRhcmdldC5kYXRhc2V0LmZyb207XG4gICAgaWYgKHR5cGVvZiAodGFnRnJvbSkgIT0gJ3VuZGVmaW5lZCcgJiYgdGFnRnJvbS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHd4LnByZXZpZXdJbWFnZSh7XG4gICAgICAgICAgICBjdXJyZW50OiBub3dJbWdVcmwsIC8vIOW9k+WJjeaYvuekuuWbvueJh+eahGh0dHDpk77mjqVcbiAgICAgICAgICAgIHVybHM6IHRoYXRbdGFnRnJvbV0uaW1hZ2VVcmxzIC8vIOmcgOimgemihOiniOeahOWbvueJh2h0dHDpk77mjqXliJfooahcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbi8qKlxuICog5Zu+54mH6KeG6KeJ5a696auY6K6h566X5Ye95pWw5Yy6XG4gKiovXG5mdW5jdGlvbiB3eFBhcnNlSW1nTG9hZChlKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHZhciB0YWdGcm9tID0gZS50YXJnZXQuZGF0YXNldC5mcm9tO1xuICAgIHZhciBpZHggPSBlLnRhcmdldC5kYXRhc2V0LmlkeDtcbiAgICBpZiAodHlwZW9mICh0YWdGcm9tKSAhPT0gJ3VuZGVmaW5lZCcgJiYgdGFnRnJvbS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNhbE1vcmVJbWFnZUluZm8oZSwgaWR4LCB0aGF0LCB0YWdGcm9tKVxuICAgIH1cbn1cblxuLy8g5YGH5b6q546v6I635Y+W6K6h566X5Zu+54mH6KeG6KeJ5pyA5L2z5a696auYXG5mdW5jdGlvbiBjYWxNb3JlSW1hZ2VJbmZvKGUsIGlkeCwgdGhhdCwgYmluZE5hbWUpIHtcbiAgICB2YXIgdGVtRGF0YSA9IHRoYXRbYmluZE5hbWVdO1xuICAgIGlmICghdGVtRGF0YSB8fCB0ZW1EYXRhLmltYWdlcy5sZW5ndGggPT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0ZW1JbWFnZXMgPSB0ZW1EYXRhLmltYWdlcztcbiAgICAvL+WboOS4uuaXoOazleiOt+WPlnZpZXflrr3luqYg6ZyA6KaB6Ieq5a6a5LmJcGFkZGluZ+i/m+ihjOiuoeeul++8jOeojeWQjuWkhOeQhlxuICAgIHZhciByZWNhbCA9IHd4QXV0b0ltYWdlQ2FsKGUuZGV0YWlsLndpZHRoLCBlLmRldGFpbC5oZWlnaHQsIHRoYXQsIGJpbmROYW1lKTtcbiAgICAvLyB0ZW1JbWFnZXNbaWR4XS53aWR0aCA9IHJlY2FsLmltYWdlV2lkdGg7XG4gICAgLy8gdGVtSW1hZ2VzW2lkeF0uaGVpZ2h0ID0gcmVjYWwuaW1hZ2VoZWlnaHQ7XG4gICAgLy8gdGVtRGF0YS5pbWFnZXMgPSB0ZW1JbWFnZXM7XG4gICAgLy8gdmFyIGJpbmREYXRhID0ge307XG4gICAgLy8gYmluZERhdGFbYmluZE5hbWVdID0gdGVtRGF0YTtcbiAgICAvLyB0aGF0LnNldERhdGEoYmluZERhdGEpO1xuICAgIHZhciBpbmRleCA9IHRlbUltYWdlc1tpZHhdLmluZGV4XG4gICAgdmFyIGtleSA9IGAke2JpbmROYW1lfWBcbiAgICBmb3IgKHZhciBpIG9mIGluZGV4LnNwbGl0KCcuJykpIGtleSArPSBgLm5vZGVzWyR7aX1dYFxuICAgIHZhciBrZXlXID0ga2V5ICsgJy53aWR0aCdcbiAgICB2YXIga2V5SCA9IGtleSArICcuaGVpZ2h0J1xuICAgIHZhciBzdHlsZSA9IHRoYXRbYmluZE5hbWVdLmltYWdlc1swXS5zdHlsZVN0ciB8fCAoJ3dpZHRoOicgKyByZWNhbC5pbWFnZVdpZHRoICsgJ3B4OycgKyAnaGVpZ2h0OicgKyByZWNhbC5pbWFnZWhlaWdodCArICdweCcpXG4gICAgdGhhdC5zZXREYXRhKHtcbiAgICAgICAgW2tleSsnLnN0eWxlJ106IHN0eWxlXG4gICAgfSlcbiAgICB2YXIgbmV3T2JqID0gY2hhbmdlT2JqKGtleSwgdGhhdClcbiAgICBuZXdPYmouc3R5bGUgPSBzdHlsZVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VPYmoobm9kZSwgb2JqLCB2YWx1ZSkge1xuICAgIG5vZGUgPSBub2RlLnJlcGxhY2UoL1xcWyhcXGQrKVxcXS9nLCAnLiQxJylcbiAgICB2YXIgYXJyID0gbm9kZS5zcGxpdCgnLicpXG4gICAgZnVuY3Rpb24gdGVtKG51bSwgb2JqZWN0KSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JqZWN0W2FycltudW1dXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW0obnVtKzEsIG9iamVjdFthcnJbbnVtXV0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIG9iamVjdFthcnJbbnVtXV0gPSB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdFxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0ZW0oMCwgb2JqKVxufVxuXG4vLyDorqHnrpfop4bop4nkvJjlhYjnmoTlm77niYflrr3pq5hcbmZ1bmN0aW9uIHd4QXV0b0ltYWdlQ2FsKG9yaWdpbmFsV2lkdGgsIG9yaWdpbmFsSGVpZ2h0LCB0aGF0LCBiaW5kTmFtZSkge1xuICAgIC8v6I635Y+W5Zu+54mH55qE5Y6f5aeL6ZW/5a69XG4gICAgdmFyIHdpbmRvd1dpZHRoID0gMCwgd2luZG93SGVpZ2h0ID0gMDtcbiAgICB2YXIgYXV0b1dpZHRoID0gMCwgYXV0b0hlaWdodCA9IDA7XG4gICAgdmFyIHJlc3VsdHMgPSB7fTtcbiAgICB2YXIgcGFkZGluZyA9IHRoYXRbYmluZE5hbWVdLnZpZXcuaW1hZ2VQYWRkaW5nO1xuICAgIHdpbmRvd1dpZHRoID0gcmVhbFdpbmRvd1dpZHRoIC0gMiAqIHBhZGRpbmc7XG4gICAgd2luZG93SGVpZ2h0ID0gcmVhbFdpbmRvd0hlaWdodDtcbiAgICAvL+WIpOaWreaMieeFp+mCo+enjeaWueW8j+i/m+ihjOe8qeaUvlxuICAgIC8vIGNvbnNvbGUubG9nKFwid2luZG93V2lkdGhcIiArIHdpbmRvd1dpZHRoKTtcbiAgICBpZiAob3JpZ2luYWxXaWR0aCA+IHdpbmRvd1dpZHRoKSB7Ly/lnKjlm77niYd3aWR0aOWkp+S6juaJi+acuuWxj+W5lXdpZHRo5pe25YCZXG4gICAgICAgIGF1dG9XaWR0aCA9IHdpbmRvd1dpZHRoO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImF1dG9XaWR0aFwiICsgYXV0b1dpZHRoKTtcbiAgICAgICAgYXV0b0hlaWdodCA9IChhdXRvV2lkdGggKiBvcmlnaW5hbEhlaWdodCkgLyBvcmlnaW5hbFdpZHRoO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImF1dG9IZWlnaHRcIiArIGF1dG9IZWlnaHQpO1xuICAgICAgICByZXN1bHRzLmltYWdlV2lkdGggPSBhdXRvV2lkdGg7XG4gICAgICAgIHJlc3VsdHMuaW1hZ2VoZWlnaHQgPSBhdXRvSGVpZ2h0O1xuICAgIH0gZWxzZSB7Ly/lkKbliJnlsZXnpLrljp/mnaXnmoTmlbDmja5cbiAgICAgICAgcmVzdWx0cy5pbWFnZVdpZHRoID0gb3JpZ2luYWxXaWR0aDtcbiAgICAgICAgcmVzdWx0cy5pbWFnZWhlaWdodCA9IG9yaWdpbmFsSGVpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbn1cblxuZnVuY3Rpb24gd3hQYXJzZVRlbUFycmF5KHRlbUFycmF5TmFtZSwgYmluZE5hbWVSZWcsIHRvdGFsLCB0aGF0KSB7XG4gICAgdmFyIGFycmF5ID0gW107XG4gICAgdmFyIHRlbURhdGEgPSB0aGF0O1xuICAgIHZhciBvYmogPSBudWxsO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG90YWw7IGkrKykge1xuICAgICAgICB2YXIgc2ltQXJyID0gdGVtRGF0YVtiaW5kTmFtZVJlZyArIGldLm5vZGVzO1xuICAgICAgICBhcnJheS5wdXNoKHNpbUFycik7XG4gICAgfVxuXG4gICAgdGVtQXJyYXlOYW1lID0gdGVtQXJyYXlOYW1lIHx8ICd3eFBhcnNlVGVtQXJyYXknO1xuICAgIG9iaiA9IEpTT04ucGFyc2UoJ3tcIicgKyB0ZW1BcnJheU5hbWUgKyAnXCI6XCJcIn0nKTtcbiAgICBvYmpbdGVtQXJyYXlOYW1lXSA9IGFycmF5O1xuICAgIHRoYXQuc2V0RGF0YShvYmopO1xuICAgIHRoYXRbdGVtQXJyYXlOYW1lXSA9IGFycmF5XG59XG5cbi8qKlxuICog6YWN572uZW1vamlzXG4gKlxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgd3hQYXJzZTogd3hQYXJzZSxcbiAgICB3eFBhcnNlVGVtQXJyYXk6IHd4UGFyc2VUZW1BcnJheSxcbiAgICBlbW9qaXNJbml0OiBIdG1sVG9Kc29uLmVtb2ppc0luaXRcbn1cbiJdfQ==