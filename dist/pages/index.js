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

var _loading = require('./../components/loading.js');

var _loading2 = _interopRequireDefault(_loading);

var _config = require('./../common/config.js');

var _config2 = _interopRequireDefault(_config);

var _api = require('./../common/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '首页'
        }, _this.$repeat = {}, _this.$props = { "loading": { "xmlns:v-bind": "", "v-bind:fixed.once": "fixed" } }, _this.$events = {}, _this.components = {
            'toast': _wepyComToast2.default,
            'loading': _loading2.default
        }, _this.mixins = [_index2.default], _this.data = {
            fixed: true,
            list: [{
                id: 'menu',
                name: '折叠菜单',
                open: false,
                pages: ['a', 'b', 'c', 'd', 'e']
            }]
        }, _this.computed = {}, _this.methods = {
            toggle: function toggle(id) {
                this.list.forEach(function (v) {
                    v.open = v.id === id ? !v.open : false;
                });
            },
            goUser: function goUser() {
                this.$preload({ userName: 'Gcaufy' });
                wx.switchTab({
                    url: 'user'
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad() {}
    }, {
        key: 'onReady',
        value: function onReady() {
            var _this2 = this;

            setTimeout(function () {
                _this2.$invoke('loading', 'hide');
            }, 1000);
        }
    }, {
        key: 'onShareAppMessage',
        value: function onShareAppMessage() {
            return _config2.default.shareData;
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm1peGlucyIsImRhdGEiLCJmaXhlZCIsImxpc3QiLCJpZCIsIm5hbWUiLCJvcGVuIiwicGFnZXMiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJ0b2dnbGUiLCJmb3JFYWNoIiwidiIsImdvVXNlciIsIiRwcmVsb2FkIiwidXNlck5hbWUiLCJ3eCIsInN3aXRjaFRhYiIsInVybCIsInNldFRpbWVvdXQiLCIkaW52b2tlIiwic2hhcmVEYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNwQkMsTSxHQUFTO0FBQ1JDLG9DQUF3QjtBQURoQixTLFFBR1ZDLE8sR0FBVSxFLFFBQ1ZDLE0sR0FBUyxFQUFDLFdBQVUsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsT0FBdkMsRUFBWCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNaLDJDQURZO0FBRU47QUFGTSxTLFFBS2JDLE0sR0FBUyxpQixRQUVUQyxJLEdBQU87QUFDQUMsbUJBQU8sSUFEUDtBQUVBQyxrQkFBTSxDQUNGO0FBQ0lDLG9CQUFJLE1BRFI7QUFFSUMsc0JBQU0sTUFGVjtBQUdJQyxzQkFBTSxLQUhWO0FBSUlDLHVCQUFPLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCO0FBSlgsYUFERTtBQUZOLFMsUUFZUEMsUSxHQUFXLEUsUUFJWEMsTyxHQUFVO0FBQ0hDLGtCQURHLGtCQUNLTixFQURMLEVBQ1M7QUFDUixxQkFBS0QsSUFBTCxDQUFVUSxPQUFWLENBQWtCLGFBQUs7QUFDbkJDLHNCQUFFTixJQUFGLEdBQVVNLEVBQUVSLEVBQUYsS0FBU0EsRUFBVixHQUFnQixDQUFDUSxFQUFFTixJQUFuQixHQUEwQixLQUFuQztBQUNILGlCQUZEO0FBR0gsYUFMRTtBQU1ITyxrQkFORyxvQkFNTTtBQUNMLHFCQUFLQyxRQUFMLENBQWMsRUFBRUMsVUFBVSxRQUFaLEVBQWQ7QUFDQUMsbUJBQUdDLFNBQUgsQ0FBYTtBQUNUQyx5QkFBSztBQURJLGlCQUFiO0FBR0g7QUFYRSxTOzs7OztpQ0FjQSxDQUVUOzs7a0NBRVM7QUFBQTs7QUFDTkMsdUJBQVcsWUFBTTtBQUNWLHVCQUFLQyxPQUFMLENBQWEsU0FBYixFQUF3QixNQUF4QjtBQUNILGFBRkosRUFFTSxJQUZOO0FBR0E7Ozs0Q0FFbUI7QUFDaEIsbUJBQU8saUJBQU9DLFNBQWQ7QUFDSDs7OztFQXhEOEIsZUFBS0MsSTs7a0JBQW5CN0IsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBNaXhpbiBmcm9tICcuLi9taXhpbnMvaW5kZXgnXG5pbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL2xvYWRpbmcnXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbW1vbi9jb25maWcnXG5pbXBvcnQgYXBpIGZyb20gJy4uL2NvbW1vbi9hcGknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcblx0Y29uZmlnID0ge1xuXHRcdG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpppbpobUnXG5cdH1cbiRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wibG9hZGluZ1wiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6Zml4ZWQub25jZVwiOlwiZml4ZWRcIn19O1xyXG4kZXZlbnRzID0ge307XHJcblx0Y29tcG9uZW50cyA9IHtcblx0XHQndG9hc3QnOiBUb2FzdCxcbiAgICAgICAgJ2xvYWRpbmcnOiBMb2FkaW5nXG5cdH1cblxuXHRtaXhpbnMgPSBbTWl4aW5dXG5cblx0ZGF0YSA9IHtcbiAgICAgICAgZml4ZWQ6IHRydWUsXG4gICAgICAgIGxpc3Q6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogJ21lbnUnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICfmipjlj6Doj5zljZUnLFxuICAgICAgICAgICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBhZ2VzOiBbJ2EnLCAnYicsICdjJywgJ2QnLCAnZSddXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cblx0fVxuXG5cdGNvbXB1dGVkID0ge1xuXG5cdH1cblxuXHRtZXRob2RzID0ge1xuICAgICAgICB0b2dnbGUgKGlkKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3QuZm9yRWFjaCh2ID0+IHtcbiAgICAgICAgICAgICAgICB2Lm9wZW4gPSAodi5pZCA9PT0gaWQpID8gIXYub3BlbiA6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ29Vc2VyKCkge1xuICAgICAgICAgICAgdGhpcy4kcHJlbG9hZCh7IHVzZXJOYW1lOiAnR2NhdWZ5J30pO1xuICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgICAgICAgICB1cmw6ICd1c2VyJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuXHRvbkxvYWQgKCkge1xuXG5cdH1cblxuXHRvblJlYWR5KCkge1xuXHQgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRpbnZva2UoJ2xvYWRpbmcnLCAnaGlkZScpXG4gICAgICAgIH0sIDEwMDApXG4gICAgfVxuXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XG4gICAgICAgIHJldHVybiBjb25maWcuc2hhcmVEYXRhXG4gICAgfVxufVxuIl19