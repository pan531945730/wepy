'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2, _initialiseProps;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _list = require('./../demo/list.js');

var _list2 = _interopRequireDefault(_list);

var _panel = require('./../demo/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _counter = require('./../demo/counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _group = require('./../demo/group.js');

var _group2 = _interopRequireDefault(_group);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _index = require('./../mixins/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Demo = (_temp2 = _class = function (_wepy$page) {
	_inherits(Demo, _wepy$page);

	function Demo() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Demo);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Demo.__proto__ || Object.getPrototypeOf(Demo)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Demo, [{
		key: 'onLoad',
		value: function onLoad(e) {
			var self = this;
			console.log(e);
			this.$parent.getUserInfo(function (userInfo) {
				if (userInfo) {
					self.userInfo = userInfo;
				}
				self.normalTitle = '标题已被修改';

				self.setTimeoutTitle = '标题三秒后会被修改';
				setTimeout(function () {
					self.setTimeoutTitle = '到三秒了';
					self.$apply();
				}, 3000);

				self.$apply();
			});
		}
	}]);

	return Demo;
}(_wepy2.default.page), _initialiseProps = function _initialiseProps() {
	var _this2 = this;

	this.config = {
		navigationBarTitleText: 'dom'
	};
	this.$repeat = { "groupList": { "com": "group", "props": "grouplist" } };
	this.$props = { "group": { "v-bind:grouplist.once": { "value": "item", "type": "item", "for": "groupList", "item": "item", "index": "index", "key": "key" }, "v-bind:indexa.once": { "value": "index", "type": "index", "for": "groupList", "item": "item", "index": "index", "key": "key" } }, "counter1": { "bindindex-emit": "counterEmit" }, "counter2": { "xmlns:v-bind": "", "v-bind:num.sync": "mynum" } };
	this.$events = {};
	this.components = {
		panel: _panel2.default,
		counter1: _counter2.default,
		counter2: _counter2.default,
		list: _list2.default,
		group: _group2.default,
		toast: _wepyComToast2.default
	};
	this.mixins = [_index2.default];
	this.data = {
		mynum: 20,
		userInfo: {
			nickName: '加载中...'
		},
		normalTitle: '原始标题',
		setTimeoutTitle: '标题三秒后会被修改',
		count: 0,
		netrst: '',
		groupList: [{
			id: 1,
			name: '点击改变',
			list: [{
				childid: '1.1',
				childname: '子项，点我改变'
			}, {
				childid: '1.2',
				childname: '子项，点我改变'
			}, {
				childid: '1.3',
				childname: '子项，点我改变'
			}]
		}, {
			id: 2,
			name: '点击改变',
			list: [{
				childid: '2.1',
				childname: '子项，点我改变'
			}, {
				childid: '2.2',
				childname: '子项，点我改变'
			}, {
				childid: '2.3',
				childname: '子项，点我改变'
			}]
		}, {
			id: 3,
			name: '点击改变',
			list: [{
				childid: '3.1',
				childname: '子项，点我改变'
			}]
		}]
	};
	this.computed = {
		now: function now() {
			return +new Date();
		}
	};
	this.methods = {
		plus: function plus(par) {
			console.log(par);
			this.mynum++;
		},
		toast: function toast() {
			var promise = this.$invoke('toast', 'show', {
				title: '自定义标题',
				img: 'https://raw.githubusercontent.com/kiinlam/wetoast/master/images/star.png'
			});

			promise.then(function (d) {
				console.log('toast done');
			});
		},
		tap: function tap() {
			console.log('do noting from ' + this.$name);
		},
		communicate: function communicate() {
			console.log(this.$name + ' tap');

			this.$invoke('counter2', 'minus', 45, 6);
			this.$invoke('counter1', 'plus', 45, 6);

			this.$broadcast('index-broadcast', 1, 3, 4);
		},
		request: function request() {
			var self = this;
			var i = 10;
			var map = ['MA==', 'MQo=', 'Mg==', 'Mw==', 'NA==', 'NQ==', 'Ng==', 'Nw==', 'OA==', 'OQ=='];
			while (i--) {
				_wepy2.default.request({
					url: 'https://www.madcoder.cn/tests/sleep.php?time=1&t=css&c=' + map[i] + '&i=' + i,
					success: function success(d) {
						self.netrst += d.data + '.';
						self.$apply();
					}
				});
			}
		},
		counterEmit: function counterEmit() {
			var _ref2;

			var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
			console.log(this.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
		}
	};
	this.events = {
		'index-emit': function indexEmit() {
			var _ref3;

			var $event = (_ref3 = arguments.length - 1, arguments.length <= _ref3 ? undefined : arguments[_ref3]);
			console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
		}
	};
}, _temp2);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Demo , 'pages/demo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8uanMiXSwibmFtZXMiOlsiRGVtbyIsImUiLCJzZWxmIiwiY29uc29sZSIsImxvZyIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwibm9ybWFsVGl0bGUiLCJzZXRUaW1lb3V0VGl0bGUiLCJzZXRUaW1lb3V0IiwiJGFwcGx5IiwicGFnZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJwYW5lbCIsImNvdW50ZXIxIiwiY291bnRlcjIiLCJsaXN0IiwiZ3JvdXAiLCJ0b2FzdCIsIm1peGlucyIsImRhdGEiLCJteW51bSIsIm5pY2tOYW1lIiwiY291bnQiLCJuZXRyc3QiLCJncm91cExpc3QiLCJpZCIsIm5hbWUiLCJjaGlsZGlkIiwiY2hpbGRuYW1lIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsInBsdXMiLCJwYXIiLCJwcm9taXNlIiwiJGludm9rZSIsInRpdGxlIiwiaW1nIiwidGhlbiIsImQiLCJ0YXAiLCIkbmFtZSIsImNvbW11bmljYXRlIiwiJGJyb2FkY2FzdCIsInJlcXVlc3QiLCJpIiwibWFwIiwidXJsIiwic3VjY2VzcyIsImNvdW50ZXJFbWl0IiwiJGV2ZW50IiwibGVuZ3RoIiwic291cmNlIiwiZXZlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBb0laQyxDLEVBQUc7QUFDVixPQUFJQyxPQUFPLElBQVg7QUFDQUMsV0FBUUMsR0FBUixDQUFZSCxDQUFaO0FBQ0EsUUFBS0ksT0FBTCxDQUFhQyxXQUFiLENBQXlCLFVBQVVDLFFBQVYsRUFBb0I7QUFDNUMsUUFBSUEsUUFBSixFQUFjO0FBQ2JMLFVBQUtLLFFBQUwsR0FBZ0JBLFFBQWhC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RTtBQUNBO0FBM0NRLEU7TUE4Q1ZZLE0sR0FBUztBQUNSLGdCQUFjLHFCQUFhO0FBQUE7O0FBQzFCLE9BQUlILGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNBeEQsV0FBUUMsR0FBUixDQUFlLE9BQUs2QyxLQUFwQixpQkFBcUNTLE9BQU96QixJQUE1QyxjQUF5RHlCLE9BQU9FLE1BQVAsQ0FBY1gsS0FBdkU7QUFDQTtBQUpPLEU7O2tCQTdIV2pELEkiLCJmaWxlIjoiZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBMaXN0IGZyb20gJy4uL2RlbW8vbGlzdCdcbmltcG9ydCBQYW5lbCBmcm9tICcuLi9kZW1vL3BhbmVsJ1xuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi4vZGVtby9jb3VudGVyJ1xuaW1wb3J0IEdyb3VwIGZyb20gJy4uL2RlbW8vZ3JvdXAnXG5pbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG5pbXBvcnQgTWl4aW4gZnJvbSAnLi4vbWl4aW5zL2luZGV4J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZW1vIGV4dGVuZHMgd2VweS5wYWdlIHtcblx0Y29uZmlnID0ge1xuXHRcdG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdkb20nXG5cdH1cbiRyZXBlYXQgPSB7XCJncm91cExpc3RcIjp7XCJjb21cIjpcImdyb3VwXCIsXCJwcm9wc1wiOlwiZ3JvdXBsaXN0XCJ9fTtcclxuJHByb3BzID0ge1wiZ3JvdXBcIjp7XCJ2LWJpbmQ6Z3JvdXBsaXN0Lm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJncm91cExpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn0sXCJ2LWJpbmQ6aW5kZXhhLm9uY2VcIjp7XCJ2YWx1ZVwiOlwiaW5kZXhcIixcInR5cGVcIjpcImluZGV4XCIsXCJmb3JcIjpcImdyb3VwTGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifX0sXCJjb3VudGVyMVwiOntcImJpbmRpbmRleC1lbWl0XCI6XCJjb3VudGVyRW1pdFwifSxcImNvdW50ZXIyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpudW0uc3luY1wiOlwibXludW1cIn19O1xyXG4kZXZlbnRzID0ge307XHJcblx0Y29tcG9uZW50cyA9IHtcblx0XHRwYW5lbDogUGFuZWwsXG5cdFx0Y291bnRlcjE6IENvdW50ZXIsXG5cdFx0Y291bnRlcjI6IENvdW50ZXIsXG5cdFx0bGlzdDogTGlzdCxcblx0XHRncm91cDogR3JvdXAsXG5cdFx0dG9hc3Q6IFRvYXN0XG5cdH1cblxuXHRtaXhpbnMgPSBbTWl4aW5dXG5cblx0ZGF0YSA9IHtcblx0XHRteW51bTogMjAsXG5cdFx0dXNlckluZm86IHtcblx0XHRcdG5pY2tOYW1lOiAn5Yqg6L295LitLi4uJ1xuXHRcdH0sXG5cdFx0bm9ybWFsVGl0bGU6ICfljp/lp4vmoIfpopgnLFxuXHRcdHNldFRpbWVvdXRUaXRsZTogJ+agh+mimOS4ieenkuWQjuS8muiiq+S/ruaUuScsXG5cdFx0Y291bnQ6IDAsXG5cdFx0bmV0cnN0OiAnJyxcblx0XHRncm91cExpc3Q6IFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6IDEsXG5cdFx0XHRcdG5hbWU6ICfngrnlh7vmlLnlj5gnLFxuXHRcdFx0XHRsaXN0OiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0Y2hpbGRpZDogJzEuMScsXG5cdFx0XHRcdFx0XHRjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG5cdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0Y2hpbGRpZDogJzEuMicsXG5cdFx0XHRcdFx0XHRjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG5cdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0Y2hpbGRpZDogJzEuMycsXG5cdFx0XHRcdFx0XHRjaGlsZG5hbWU6ICflrZDpobnvvIzngrnmiJHmlLnlj5gnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogMixcblx0XHRcdFx0bmFtZTogJ+eCueWHu+aUueWPmCcsXG5cdFx0XHRcdGxpc3Q6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRjaGlsZGlkOiAnMi4xJyxcblx0XHRcdFx0XHRcdGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcblx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRjaGlsZGlkOiAnMi4yJyxcblx0XHRcdFx0XHRcdGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcblx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHRjaGlsZGlkOiAnMi4zJyxcblx0XHRcdFx0XHRcdGNoaWxkbmFtZTogJ+WtkOmhue+8jOeCueaIkeaUueWPmCdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAzLFxuXHRcdFx0XHRuYW1lOiAn54K55Ye75pS55Y+YJyxcblx0XHRcdFx0bGlzdDogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGNoaWxkaWQ6ICczLjEnLFxuXHRcdFx0XHRcdFx0Y2hpbGRuYW1lOiAn5a2Q6aG577yM54K55oiR5pS55Y+YJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdF1cblx0fVxuXG5cdGNvbXB1dGVkID0ge1xuXHRcdG5vdyAoKSB7XG5cdFx0XHRyZXR1cm4gK25ldyBEYXRlKClcblx0XHR9XG5cdH1cblxuXHRtZXRob2RzID0ge1xuXHRcdHBsdXMgKHBhcikge1xuXHRcdFx0Y29uc29sZS5sb2cocGFyKVxuXHRcdFx0dGhpcy5teW51bSsrXG5cdFx0fSxcblx0XHR0b2FzdCAoKSB7XG5cdFx0XHRsZXQgcHJvbWlzZSA9IHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvdycsIHtcblx0XHRcdFx0dGl0bGU6ICfoh6rlrprkuYnmoIfpopgnLFxuXHRcdFx0XHRpbWc6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20va2lpbmxhbS93ZXRvYXN0L21hc3Rlci9pbWFnZXMvc3Rhci5wbmcnXG5cdFx0XHR9KVxuXG5cdFx0XHRwcm9taXNlLnRoZW4oKGQpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3RvYXN0IGRvbmUnKVxuXHRcdFx0fSlcblx0XHR9LFxuXHRcdHRhcCAoKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZG8gbm90aW5nIGZyb20gJyArIHRoaXMuJG5hbWUpXG5cdFx0fSxcblx0XHRjb21tdW5pY2F0ZSAoKSB7XG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLiRuYW1lICsgJyB0YXAnKVxuXG5cdFx0XHR0aGlzLiRpbnZva2UoJ2NvdW50ZXIyJywgJ21pbnVzJywgNDUsIDYpXG5cdFx0XHR0aGlzLiRpbnZva2UoJ2NvdW50ZXIxJywgJ3BsdXMnLCA0NSwgNilcblxuXHRcdFx0dGhpcy4kYnJvYWRjYXN0KCdpbmRleC1icm9hZGNhc3QnLCAxLCAzLCA0KVxuXHRcdH0sXG5cdFx0cmVxdWVzdCAoKSB7XG5cdFx0XHRsZXQgc2VsZiA9IHRoaXNcblx0XHRcdGxldCBpID0gMTBcblx0XHRcdGxldCBtYXAgPSBbJ01BPT0nLCAnTVFvPScsICdNZz09JywgJ013PT0nLCAnTkE9PScsICdOUT09JywgJ05nPT0nLCAnTnc9PScsICdPQT09JywgJ09RPT0nXVxuXHRcdFx0d2hpbGUgKGktLSkge1xuXHRcdFx0XHR3ZXB5LnJlcXVlc3Qoe1xuXHRcdFx0XHRcdHVybDogJ2h0dHBzOi8vd3d3Lm1hZGNvZGVyLmNuL3Rlc3RzL3NsZWVwLnBocD90aW1lPTEmdD1jc3MmYz0nICsgbWFwW2ldICsgJyZpPScgKyBpLFxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdFx0XHRzZWxmLm5ldHJzdCArPSBkLmRhdGEgKyAnLidcblx0XHRcdFx0XHRcdHNlbGYuJGFwcGx5KClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjb3VudGVyRW1pdCAoLi4uYXJncykge1xuXHRcdFx0bGV0ICRldmVudCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXVxuXHRcdFx0Y29uc29sZS5sb2coYCR7dGhpcy4kbmFtZX0gcmVjZWl2ZSAkeyRldmVudC5uYW1lfSBmcm9tICR7JGV2ZW50LnNvdXJjZS4kbmFtZX1gKVxuXHRcdH1cblx0fVxuXG5cdGV2ZW50cyA9IHtcblx0XHQnaW5kZXgtZW1pdCc6ICguLi5hcmdzKSA9PiB7XG5cdFx0XHRsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdXG5cdFx0XHRjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWApXG5cdFx0fVxuXHR9XG5cblx0b25Mb2FkIChlKSB7XG5cdFx0bGV0IHNlbGYgPSB0aGlzXG5cdFx0Y29uc29sZS5sb2coZSlcblx0XHR0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oZnVuY3Rpb24gKHVzZXJJbmZvKSB7XG5cdFx0XHRpZiAodXNlckluZm8pIHtcblx0XHRcdFx0c2VsZi51c2VySW5mbyA9IHVzZXJJbmZvXG5cdFx0XHR9XG5cdFx0XHRzZWxmLm5vcm1hbFRpdGxlID0gJ+agh+mimOW3suiiq+S/ruaUuSdcblxuXHRcdFx0c2VsZi5zZXRUaW1lb3V0VGl0bGUgPSAn5qCH6aKY5LiJ56eS5ZCO5Lya6KKr5L+u5pS5J1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHNlbGYuc2V0VGltZW91dFRpdGxlID0gJ+WIsOS4ieenkuS6hidcblx0XHRcdFx0c2VsZi4kYXBwbHkoKVxuXHRcdFx0fSwgMzAwMClcblxuXHRcdFx0c2VsZi4kYXBwbHkoKVxuXHRcdH0pXG5cdH1cbn1cbiJdfQ==