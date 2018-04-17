'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
	_inherits(_default, _wepy$app);

	function _default() {
		_classCallCheck(this, _default);

		var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

		_this.config = {
			pages: ['pages/index', 'pages/user', 'pages/form', 'pages/wx-parse', 'pages/map', 'pages/canvas', 'pages/demo', 'pages/news-list', 'pages/finance-list', 'pages/video'],
			window: {
				backgroundTextStyle: 'light',
				navigationBarBackgroundColor: '#555',
				navigationBarTitleText: '聚红',
				navigationBarTextStyle: '#fff'
			},
			tabBar: {
				color: '#000',
				selectedColor: '#f50',
				backgroundColor: '#fff',
				borderStyle: 'black',
				position: 'bottom',
				list: [{
					pagePath: 'pages/index',
					text: '首页',
					iconPath: './img/home.png',
					selectedIconPath: './img/home-on.png'
				}, {
					pagePath: 'pages/finance-list',
					text: '拉动刷新',
					iconPath: './img/dollar.png',
					selectedIconPath: './img/dollar-on.png'
				}, {
					pagePath: 'pages/news-list',
					text: '滚动刷新',
					iconPath: './img/media.png',
					selectedIconPath: './img/media-on.png'
				}, {
					pagePath: 'pages/video',
					text: '弹幕',
					iconPath: './img/culture.png',
					selectedIconPath: './img/culture-on.png'
				}, {
					pagePath: 'pages/user',
					text: '个人中心',
					iconPath: './img/user.png',
					selectedIconPath: './img/user-on.png'
				}]
			}
		};
		_this.globalData = {
			userInfo: null
		};

		_this.use('promisify');
		_this.use('requestfix');
		_this.system = wx.getSystemInfoSync();
		return _this;
	}

	_createClass(_default, [{
		key: 'onLaunch',
		value: function onLaunch(options) {
			this.testAsync();
		}
	}, {
		key: 'sleep',
		value: function sleep(s) {
			return new Promise(function (resolve, reject) {
				setTimeout(function () {
					resolve('promise resolved');
				}, s * 1000);
			});
		}
	}, {
		key: 'testAsync',
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
				var data;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return this.sleep(3);

							case 2:
								data = _context.sent;

							case 3:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function testAsync() {
				return _ref.apply(this, arguments);
			}

			return testAsync;
		}()
	}, {
		key: 'getUserInfo',
		value: function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(success, fail) {
				var code, getInfo;
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								if (!this.globalData.userInfo) {
									_context2.next = 3;
									break;
								}

								success(this.globalData.userInfo);
								return _context2.abrupt('return');

							case 3:
								_context2.prev = 3;
								_context2.next = 6;
								return _wepy2.default.login();

							case 6:
								code = _context2.sent;
								_context2.next = 9;
								return _wepy2.default.getUserInfo();

							case 9:
								getInfo = _context2.sent;

								this.globalData.userInfo = getInfo.userInfo;
								success && success(getInfo.userInfo);
								_context2.next = 17;
								break;

							case 14:
								_context2.prev = 14;
								_context2.t0 = _context2['catch'](3);

								fail && fail(_context2.t0);

							case 17:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this, [[3, 14]]);
			}));

			function getUserInfo(_x, _x2) {
				return _ref2.apply(this, arguments);
			}

			return getUserInfo;
		}()
	}]);

	return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJTdHlsZSIsInBvc2l0aW9uIiwibGlzdCIsInBhZ2VQYXRoIiwidGV4dCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsInN5c3RlbSIsInd4IiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJvcHRpb25zIiwidGVzdEFzeW5jIiwicyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInNsZWVwIiwiZGF0YSIsInN1Y2Nlc3MiLCJmYWlsIiwibG9naW4iLCJjb2RlIiwiZ2V0VXNlckluZm8iLCJnZXRJbmZvIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFvRUMscUJBQWU7QUFBQTs7QUFBQTs7QUFBQSxRQWpFZkEsTUFpRWUsR0FqRU47QUFDUkMsVUFBTyxDQUNILGFBREcsRUFFSCxZQUZHLEVBR0gsWUFIRyxFQUlHLGdCQUpILEVBS0csV0FMSCxFQU1HLGNBTkgsRUFPRyxZQVBILEVBUUcsaUJBUkgsRUFTRyxvQkFUSCxFQVVHLGFBVkgsQ0FEQztBQWNSQyxXQUFRO0FBQ1BDLHlCQUFxQixPQURkO0FBRVBDLGtDQUE4QixNQUZ2QjtBQUdQQyw0QkFBd0IsSUFIakI7QUFJUEMsNEJBQXdCO0FBSmpCLElBZEE7QUFvQlJDLFdBQVE7QUFDUEMsV0FBTyxNQURBO0FBRVBDLG1CQUFlLE1BRlI7QUFHUEMscUJBQWlCLE1BSFY7QUFJUEMsaUJBQWEsT0FKTjtBQUtQQyxjQUFVLFFBTEg7QUFNUEMsVUFBTSxDQUNMO0FBQ0NDLGVBQVUsYUFEWDtBQUVDQyxXQUFNLElBRlA7QUFHQ0MsZUFBVSxnQkFIWDtBQUlDQyx1QkFBa0I7QUFKbkIsS0FESyxFQU9MO0FBQ0NILGVBQVUsb0JBRFg7QUFFQ0MsV0FBTSxNQUZQO0FBR0NDLGVBQVUsa0JBSFg7QUFJQ0MsdUJBQWtCO0FBSm5CLEtBUEssRUFhTDtBQUNDSCxlQUFVLGlCQURYO0FBRUNDLFdBQU0sTUFGUDtBQUdDQyxlQUFVLGlCQUhYO0FBSUNDLHVCQUFrQjtBQUpuQixLQWJLLEVBbUJMO0FBQ0NILGVBQVUsYUFEWDtBQUVDQyxXQUFNLElBRlA7QUFHQ0MsZUFBVSxtQkFIWDtBQUlDQyx1QkFBa0I7QUFKbkIsS0FuQkssRUF5Qk87QUFDSUgsZUFBVSxZQURkO0FBRUlDLFdBQU0sTUFGVjtBQUdJQyxlQUFVLGdCQUhkO0FBSUlDLHVCQUFrQjtBQUp0QixLQXpCUDtBQU5DO0FBcEJBLEdBaUVNO0FBQUEsUUFKZkMsVUFJZSxHQUpGO0FBQ1pDLGFBQVU7QUFERSxHQUlFOztBQUVkLFFBQUtDLEdBQUwsQ0FBUyxXQUFUO0FBQ0EsUUFBS0EsR0FBTCxDQUFTLFlBQVQ7QUFDTSxRQUFLQyxNQUFMLEdBQWNDLEdBQUdDLGlCQUFILEVBQWQ7QUFKUTtBQUtkOzs7OzJCQUVTQyxPLEVBQVM7QUFDbEIsUUFBS0MsU0FBTDtBQUVBOzs7d0JBRU1DLEMsRUFBRztBQUNULFVBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN2Q0MsZUFBVyxZQUFNO0FBQ2hCRixhQUFRLGtCQUFSO0FBQ0EsS0FGRCxFQUVHRixJQUFJLElBRlA7QUFHQSxJQUpNLENBQVA7QUFLQTs7Ozs7Ozs7Ozs7ZUFHbUIsS0FBS0ssS0FBTCxDQUFXLENBQVgsQzs7O0FBQWJDLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUZBSVlDLE8sRUFBU0MsSTs7Ozs7O2FBQ3ZCLEtBQUtoQixVQUFMLENBQWdCQyxROzs7OztBQUNuQmMsZ0JBQVMsS0FBS2YsVUFBTCxDQUFnQkMsUUFBekI7Ozs7OztlQUlpQixlQUFLZ0IsS0FBTCxFOzs7QUFBYkMsWTs7ZUFDZ0IsZUFBS0MsV0FBTCxFOzs7QUFBaEJDLGU7O0FBQ0osYUFBS3BCLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCbUIsUUFBUW5CLFFBQW5DO0FBQ0FjLG1CQUFXQSxRQUFRSyxRQUFRbkIsUUFBaEIsQ0FBWDs7Ozs7Ozs7QUFFQWUsZ0JBQVFBLGtCQUFSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdEcwQixlQUFLSyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG5cdGNvbmZpZyA9IHtcblx0XHRwYWdlczogW1xuXHRcdCAgICAncGFnZXMvaW5kZXgnLFxuXHRcdCAgICAncGFnZXMvdXNlcicsXG5cdFx0ICAgICdwYWdlcy9mb3JtJyxcbiAgICAgICAgICAgICdwYWdlcy93eC1wYXJzZScsXG4gICAgICAgICAgICAncGFnZXMvbWFwJyxcbiAgICAgICAgICAgICdwYWdlcy9jYW52YXMnLFxuICAgICAgICAgICAgJ3BhZ2VzL2RlbW8nLFxuICAgICAgICAgICAgJ3BhZ2VzL25ld3MtbGlzdCcsXG4gICAgICAgICAgICAncGFnZXMvZmluYW5jZS1saXN0JyxcbiAgICAgICAgICAgICdwYWdlcy92aWRlbycsXG5cblx0XHRdLFxuXHRcdHdpbmRvdzoge1xuXHRcdFx0YmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0Jyxcblx0XHRcdG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjNTU1Jyxcblx0XHRcdG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfogZrnuqInLFxuXHRcdFx0bmF2aWdhdGlvbkJhclRleHRTdHlsZTogJyNmZmYnXG5cdFx0fSxcblx0XHR0YWJCYXI6IHtcblx0XHRcdGNvbG9yOiAnIzAwMCcsXG5cdFx0XHRzZWxlY3RlZENvbG9yOiAnI2Y1MCcsXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcblx0XHRcdGJvcmRlclN0eWxlOiAnYmxhY2snLFxuXHRcdFx0cG9zaXRpb246ICdib3R0b20nLFxuXHRcdFx0bGlzdDogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cGFnZVBhdGg6ICdwYWdlcy9pbmRleCcsXG5cdFx0XHRcdFx0dGV4dDogJ+mmlumhtScsXG5cdFx0XHRcdFx0aWNvblBhdGg6ICcuL2ltZy9ob21lLnBuZycsXG5cdFx0XHRcdFx0c2VsZWN0ZWRJY29uUGF0aDogJy4vaW1nL2hvbWUtb24ucG5nJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cGFnZVBhdGg6ICdwYWdlcy9maW5hbmNlLWxpc3QnLFxuXHRcdFx0XHRcdHRleHQ6ICfmi4nliqjliLfmlrAnLFxuXHRcdFx0XHRcdGljb25QYXRoOiAnLi9pbWcvZG9sbGFyLnBuZycsXG5cdFx0XHRcdFx0c2VsZWN0ZWRJY29uUGF0aDogJy4vaW1nL2RvbGxhci1vbi5wbmcnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwYWdlUGF0aDogJ3BhZ2VzL25ld3MtbGlzdCcsXG5cdFx0XHRcdFx0dGV4dDogJ+a7muWKqOWIt+aWsCcsXG5cdFx0XHRcdFx0aWNvblBhdGg6ICcuL2ltZy9tZWRpYS5wbmcnLFxuXHRcdFx0XHRcdHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltZy9tZWRpYS1vbi5wbmcnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwYWdlUGF0aDogJ3BhZ2VzL3ZpZGVvJyxcblx0XHRcdFx0XHR0ZXh0OiAn5by55bmVJyxcblx0XHRcdFx0XHRpY29uUGF0aDogJy4vaW1nL2N1bHR1cmUucG5nJyxcblx0XHRcdFx0XHRzZWxlY3RlZEljb25QYXRoOiAnLi9pbWcvY3VsdHVyZS1vbi5wbmcnXG5cdFx0XHRcdH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3VzZXInLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn5Liq5Lq65Lit5b+DJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvblBhdGg6ICcuL2ltZy91c2VyLnBuZycsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltZy91c2VyLW9uLnBuZydcbiAgICAgICAgICAgICAgICB9XG5cdFx0XHRdXG5cdFx0fVxuXHR9XG5cblx0Z2xvYmFsRGF0YSA9IHtcblx0XHR1c2VySW5mbzogbnVsbFxuXHR9XG5cblx0Y29uc3RydWN0b3IgKCkge1xuXHRcdHN1cGVyKClcblx0XHR0aGlzLnVzZSgncHJvbWlzaWZ5Jyk7XG5cdFx0dGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxuICAgICAgICB0aGlzLnN5c3RlbSA9IHd4LmdldFN5c3RlbUluZm9TeW5jKClcblx0fVxuXG5cdG9uTGF1bmNoIChvcHRpb25zKSB7XG5cdFx0dGhpcy50ZXN0QXN5bmMoKVxuXG5cdH1cblxuXHRzbGVlcCAocykge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0cmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpXG5cdFx0XHR9LCBzICogMTAwMClcblx0XHR9KVxuXHR9XG5cblx0YXN5bmMgdGVzdEFzeW5jICgpIHtcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zbGVlcCgzKVxuXG5cdH1cblxuXHRhc3luYyBnZXRVc2VySW5mbyAoc3VjY2VzcywgZmFpbCkge1xuXHRcdGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcblx0XHRcdHN1Y2Nlc3MoIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyApXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0dHJ5e1xuXHRcdFx0bGV0IGNvZGUgPSBhd2FpdCB3ZXB5LmxvZ2luKClcblx0XHRcdGxldCBnZXRJbmZvID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpXG5cdFx0XHR0aGlzLmdsb2JhbERhdGEudXNlckluZm8gPSBnZXRJbmZvLnVzZXJJbmZvXG5cdFx0XHRzdWNjZXNzICYmIHN1Y2Nlc3MoZ2V0SW5mby51c2VySW5mbylcblx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdGZhaWwgJiYgZmFpbChlKVxuXHRcdH1cblx0fVxufVxuIl19