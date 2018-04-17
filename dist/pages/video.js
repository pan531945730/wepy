'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _index = require('./../mixins/index.js');

var _index2 = _interopRequireDefault(_index);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _danmu = require('./../components/danmu.js');

var _danmu2 = _interopRequireDefault(_danmu);

var _api = require('./../common/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Video = function (_wepy$page) {
	_inherits(Video, _wepy$page);

	function Video() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Video);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Video.__proto__ || Object.getPrototypeOf(Video)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
			navigationBarTitleText: '弹幕'
		}, _this.$repeat = {}, _this.$props = { "danmu": { "xmlns:v-bind": "", "v-bind:videoSrc.once": "videoSrc", "v-bind:poster.once": "poster" } }, _this.$events = {}, _this.components = {
			'toast': _wepyComToast2.default,
			'danmu': _danmu2.default
		}, _this.mixins = [_index2.default], _this.data = {
			videoSrc: 'http://image.1hucj.com/Video/20170531/20170531105833440839.mp4',
			poster: 'http://image.1hucj.com/images/20170526/20170526152739944687ee.jpg'
		}, _this.computed = {
			now: function now() {
				return +new Date();
			}
		}, _this.methods = {}, _this.events = {
			danmuEmpty: function danmuEmpty() {
				this.$invoke('toast', 'show', {
					title: '请输入弹幕内容'
				});
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Video, [{
		key: 'onLoad',
		value: function onLoad() {}
	}, {
		key: 'onReachBottom',
		value: function onReachBottom(e) {
			console.log(e);
		}
	}, {
		key: 'onReady',
		value: function onReady() {
			this.$broadcast('danmu');
		}
	}]);

	return Video;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Video , 'pages/video'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvLmpzIl0sIm5hbWVzIjpbIlZpZGVvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm1peGlucyIsImRhdGEiLCJ2aWRlb1NyYyIsInBvc3RlciIsImNvbXB1dGVkIiwibm93IiwiRGF0ZSIsIm1ldGhvZHMiLCJldmVudHMiLCJkYW5tdUVtcHR5IiwiJGludm9rZSIsInRpdGxlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCIkYnJvYWRjYXN0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztrTEFDcEJDLE0sR0FBUztBQUNSQywyQkFBd0I7QUFEaEIsRyxRQUdWQyxPLEdBQVUsRSxRQUNWQyxNLEdBQVMsRUFBQyxTQUFRLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsd0JBQXVCLFVBQTFDLEVBQXFELHNCQUFxQixRQUExRSxFQUFULEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1osa0NBRFk7QUFFTjtBQUZNLEcsUUFLYkMsTSxHQUFTLGlCLFFBRVRDLEksR0FBTztBQUNOQyxhQUFVLGdFQURKO0FBRUFDLFdBQVE7QUFGUixHLFFBS1BDLFEsR0FBVztBQUNWQyxNQURVLGlCQUNIO0FBQ04sV0FBTyxDQUFDLElBQUlDLElBQUosRUFBUjtBQUNBO0FBSFMsRyxRQU1SQyxPLEdBQVUsRSxRQUliQyxNLEdBQVM7QUFDRkMsYUFERSx3QkFDVztBQUNULFNBQUtDLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLE1BQXRCLEVBQThCO0FBQzFCQyxZQUFPO0FBRG1CLEtBQTlCO0FBR0g7QUFMQyxHOzs7OzsyQkFRQyxDQUVUOzs7Z0NBRWdCQyxDLEVBQUc7QUFDYkMsV0FBUUMsR0FBUixDQUFZRixDQUFaO0FBQ0g7Ozs0QkFFUztBQUNOLFFBQUtHLFVBQUwsQ0FBZ0IsT0FBaEI7QUFDSDs7OztFQS9DOEIsZUFBS0MsSTs7a0JBQW5CdkIsSyIsImZpbGUiOiJ2aWRlby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBNaXhpbiBmcm9tICcuLi9taXhpbnMvaW5kZXgnXG5pbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG5pbXBvcnQgRGFubXUgZnJvbSAnLi4vY29tcG9uZW50cy9kYW5tdSdcbmltcG9ydCBhcGkgZnJvbSAnLi4vY29tbW9uL2FwaSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW8gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuXHRjb25maWcgPSB7XG5cdFx0bmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+W8ueW5lSdcblx0fVxuJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJkYW5tdVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dmlkZW9TcmMub25jZVwiOlwidmlkZW9TcmNcIixcInYtYmluZDpwb3N0ZXIub25jZVwiOlwicG9zdGVyXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG5cdGNvbXBvbmVudHMgPSB7XG5cdFx0J3RvYXN0JzogVG9hc3QsXG4gICAgICAgICdkYW5tdSc6IERhbm11XG5cdH1cblxuXHRtaXhpbnMgPSBbTWl4aW5dXG5cblx0ZGF0YSA9IHtcblx0XHR2aWRlb1NyYzogJ2h0dHA6Ly9pbWFnZS4xaHVjai5jb20vVmlkZW8vMjAxNzA1MzEvMjAxNzA1MzExMDU4MzM0NDA4MzkubXA0JyxcbiAgICAgICAgcG9zdGVyOiAnaHR0cDovL2ltYWdlLjFodWNqLmNvbS9pbWFnZXMvMjAxNzA1MjYvMjAxNzA1MjYxNTI3Mzk5NDQ2ODdlZS5qcGcnXG5cdH1cblxuXHRjb21wdXRlZCA9IHtcblx0XHRub3cgKCkge1xuXHRcdFx0cmV0dXJuICtuZXcgRGF0ZSgpXG5cdFx0fVxuXHR9XG5cbiAgICBtZXRob2RzID0ge1xuXG5cdH1cblxuXHRldmVudHMgPSB7XG4gICAgICAgIGRhbm11RW1wdHkoKSB7XG4gICAgICAgICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0JywgJ3Nob3cnLCB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfor7fovpPlhaXlvLnluZXlhoXlrrknXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG5cdG9uTG9hZCAoKSB7XG5cblx0fVxuXG4gICAgb25SZWFjaEJvdHRvbShlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgdGhpcy4kYnJvYWRjYXN0KCdkYW5tdScpXG4gICAgfVxufVxuIl19