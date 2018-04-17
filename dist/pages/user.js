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

var _api = require('./../common/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_wepy$page) {
    _inherits(User, _wepy$page);

    function User() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, User);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = User.__proto__ || Object.getPrototypeOf(User)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '个人中心'
        }, _this.components = {
            'toast': _wepyComToast2.default
        }, _this.mixins = [_index2.default], _this.data = {
            userInfo: {},
            movX: 0,
            movY: 0
        }, _this.computed = {
            now: function now() {
                return +new Date();
            }
        }, _this.methods = {
            goDemo: function goDemo() {
                wx.navigateTo({
                    url: 'demo?id=1'
                });
            },
            goPage: function goPage(url) {
                wx.switchTab({
                    url: url
                });
            },
            move: function move(e) {
                console.log(e.touches[0]);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(User, [{
        key: 'onLoad',
        value: function onLoad(e, data) {
            var _this2 = this;

            var self = this;
            this.$parent.getUserInfo(function (userInfo) {

                if (userInfo) {
                    self.userInfo = userInfo;
                }
                self.$apply();
            }, function () {
                this.$invoke('toast', 'show', {
                    title: '获取个人信息失败'
                });
            });
            _api2.default.newsList().then(function (res) {
                _this2.$invoke('toast', 'show', {
                    title: '获取新闻列表成功',
                    img: '../img/up.png'
                });
            });
            console.log(data.preload);
        }
    }]);

    return User;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(User , 'pages/user'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsiVXNlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwibWl4aW5zIiwiZGF0YSIsInVzZXJJbmZvIiwibW92WCIsIm1vdlkiLCJjb21wdXRlZCIsIm5vdyIsIkRhdGUiLCJtZXRob2RzIiwiZ29EZW1vIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ29QYWdlIiwic3dpdGNoVGFiIiwibW92ZSIsImUiLCJjb25zb2xlIiwibG9nIiwidG91Y2hlcyIsInNlbGYiLCIkcGFyZW50IiwiZ2V0VXNlckluZm8iLCIkYXBwbHkiLCIkaW52b2tlIiwidGl0bGUiLCJuZXdzTGlzdCIsInRoZW4iLCJpbWciLCJwcmVsb2FkIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7c0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFHVEMsVSxHQUFhO0FBQ1Q7QUFEUyxTLFFBSWJDLE0sR0FBUyxpQixRQUVUQyxJLEdBQU87QUFDSEMsc0JBQVUsRUFEUDtBQUVIQyxrQkFBTSxDQUZIO0FBR0hDLGtCQUFNO0FBSEgsUyxRQU1QQyxRLEdBQVc7QUFDUEMsZUFETyxpQkFDQTtBQUNILHVCQUFPLENBQUMsSUFBSUMsSUFBSixFQUFSO0FBQ0g7QUFITSxTLFFBTVhDLE8sR0FBVTtBQUNOQyxrQkFETSxvQkFDRztBQUNMQyxtQkFBR0MsVUFBSCxDQUFjO0FBQ1ZDLHlCQUFLO0FBREssaUJBQWQ7QUFHSCxhQUxLO0FBTU5DLGtCQU5NLGtCQU1DRCxHQU5ELEVBTU07QUFDVkYsbUJBQUdJLFNBQUgsQ0FBYTtBQUNURix5QkFBS0E7QUFESSxpQkFBYjtBQUdELGFBVks7QUFXTkcsZ0JBWE0sZ0JBV0RDLENBWEMsRUFXRTtBQUNKQyx3QkFBUUMsR0FBUixDQUFZRixFQUFFRyxPQUFGLENBQVUsQ0FBVixDQUFaO0FBQ0g7QUFiSyxTOzs7OzsrQkFnQkZILEMsRUFBR2YsSSxFQUFNO0FBQUE7O0FBQ2IsZ0JBQUltQixPQUFPLElBQVg7QUFDQSxpQkFBS0MsT0FBTCxDQUFhQyxXQUFiLENBQXlCLFVBQVVwQixRQUFWLEVBQW9COztBQUV6QyxvQkFBSUEsUUFBSixFQUFjO0FBQ1ZrQix5QkFBS2xCLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0g7QUFDRGtCLHFCQUFLRyxNQUFMO0FBRUgsYUFQRCxFQU9HLFlBQVk7QUFDWCxxQkFBS0MsT0FBTCxDQUFhLE9BQWIsRUFBc0IsTUFBdEIsRUFBOEI7QUFDMUJDLDJCQUFPO0FBRG1CLGlCQUE5QjtBQUdILGFBWEQ7QUFZQSwwQkFBSUMsUUFBSixHQUFlQyxJQUFmLENBQW9CLGVBQU87QUFDdkIsdUJBQUtILE9BQUwsQ0FBYSxPQUFiLEVBQXNCLE1BQXRCLEVBQThCO0FBQzFCQywyQkFBTyxVQURtQjtBQUUxQkcseUJBQUs7QUFGcUIsaUJBQTlCO0FBSUgsYUFMRDtBQU1BWCxvQkFBUUMsR0FBUixDQUFZakIsS0FBSzRCLE9BQWpCO0FBQ0g7Ozs7RUEzRDZCLGVBQUtDLEk7O2tCQUFsQmxDLEkiLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBNaXhpbiBmcm9tICcuLi9taXhpbnMvaW5kZXgnXG5pbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG5pbXBvcnQgYXBpIGZyb20gJy4uL2NvbW1vbi9hcGknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4quS6uuS4reW/gydcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICAgICAgJ3RvYXN0JzogVG9hc3RcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbTWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgICAgICB1c2VySW5mbzoge30sXG4gICAgICAgIG1vdlg6IDAsXG4gICAgICAgIG1vdlk6IDBcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgICAgbm93ICgpIHtcbiAgICAgICAgICAgIHJldHVybiArbmV3IERhdGUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgICAgZ29EZW1vKCkge1xuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgdXJsOiAnZGVtbz9pZD0xJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgZ29QYWdlKHVybCkge1xuICAgICAgICAgIHd4LnN3aXRjaFRhYih7XG4gICAgICAgICAgICAgIHVybDogdXJsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgbW92ZShlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRvdWNoZXNbMF0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQgKGUsIGRhdGEpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbyhmdW5jdGlvbiAodXNlckluZm8pIHtcblxuICAgICAgICAgICAgaWYgKHVzZXJJbmZvKSB7XG4gICAgICAgICAgICAgICAgc2VsZi51c2VySW5mbyA9IHVzZXJJbmZvXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLiRhcHBseSgpXG5cbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93Jywge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn6I635Y+W5Liq5Lq65L+h5oGv5aSx6LSlJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgYXBpLm5ld3NMaXN0KCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdCcsICdzaG93Jywge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn6I635Y+W5paw6Ze75YiX6KGo5oiQ5YqfJyxcbiAgICAgICAgICAgICAgICBpbWc6ICcuLi9pbWcvdXAucG5nJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5wcmVsb2FkKTtcbiAgICB9XG59XG4iXX0=