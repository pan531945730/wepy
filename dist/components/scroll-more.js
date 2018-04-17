'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollMore = function (_wepy$component) {
    _inherits(ScrollMore, _wepy$component);

    function ScrollMore() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ScrollMore);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ScrollMore.__proto__ || Object.getPrototypeOf(ScrollMore)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            loading: {
                type: Boolean,
                default: true
            },
            noMore: {
                type: Boolean,
                default: false
            }
        }, _this.data = {}, _this.methods = {
            scrolling: function scrolling(e) {//滚动监听事件

            },
            tolower: function tolower() {
                this.$emit('refresh');
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return ScrollMore;
}(_wepy2.default.component);

exports.default = ScrollMore;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbC1tb3JlLmpzIl0sIm5hbWVzIjpbIlNjcm9sbE1vcmUiLCJwcm9wcyIsImxvYWRpbmciLCJ0eXBlIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJub01vcmUiLCJkYXRhIiwibWV0aG9kcyIsInNjcm9sbGluZyIsImUiLCJ0b2xvd2VyIiwiJGVtaXQiLCJldmVudHMiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7OztrTUFDcEJDLEssR0FBUTtBQUNEQyxxQkFBUztBQUNYQyxzQkFBTUMsT0FESztBQUVMQyx5QkFBUztBQUZKLGFBRFI7QUFLREMsb0JBQVE7QUFDSkgsc0JBQU1DLE9BREY7QUFFSkMseUJBQVM7QUFGTDtBQUxQLFMsUUFXUkUsSSxHQUFPLEUsUUFJUEMsTyxHQUFVO0FBQ0hDLHFCQURHLHFCQUNPQyxDQURQLEVBQ1UsQ0FBRTs7QUFFZCxhQUhFO0FBSUhDLG1CQUpHLHFCQUlPO0FBQ04scUJBQUtDLEtBQUwsQ0FBVyxTQUFYO0FBQ0g7QUFORSxTLFFBU1ZDLE0sR0FBUyxFOzs7O0VBekI4QixlQUFLQyxTOztrQkFBeEJkLFUiLCJmaWxlIjoic2Nyb2xsLW1vcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbE1vcmUgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG5cdHByb3BzID0ge1xuICAgICAgICBsb2FkaW5nOiB7XG5cdFx0ICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIG5vTW9yZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH1cblx0fVxuXG5cdGRhdGEgPSB7XG5cblx0fVxuXG5cdG1ldGhvZHMgPSB7XG4gICAgICAgIHNjcm9sbGluZyhlKSB7IC8v5rua5Yqo55uR5ZCs5LqL5Lu2XG5cbiAgICAgICAgfSxcbiAgICAgICAgdG9sb3dlcigpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3JlZnJlc2gnKVxuICAgICAgICB9XG5cdH1cblxuXHRldmVudHMgPSB7XG5cbiAgICB9XG59XG4iXX0=