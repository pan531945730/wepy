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

var Scroll = function (_wepy$component) {
    _inherits(Scroll, _wepy$component);

    function Scroll() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Scroll);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            loading: {
                type: Boolean,
                default: true
            },
            noMore: {
                type: Boolean,
                default: false
            },
            mask: {
                type: Boolean,
                default: false
            },
            pulldown: { //下拉刷新
                type: Boolean,
                default: false
            },
            pullup: { //上拉刷新
                type: Boolean,
                default: false
            }
        }, _this.data = {
            startY: 0,
            translateY: 0,
            startX: 0,
            timer: null, //滑动太快maskTouchEnd不触发
            scrollData: [] //scroll个数
        }, _this.methods = {
            scrolling: function scrolling(e) {
                //滚动监听事件

                if (this.pullup && e.detail.deltaY < 0) {
                    this.$emit('hideMask');
                }
                if (this.pulldown && e.detail.deltaY > 0) {
                    this.$emit('hideMask');
                }
                this.translateY = 0;
            },
            scrollTouchstart: function scrollTouchstart() {
                this.translateY = 0;
            },
            maskTouchstart: function maskTouchstart(e) {
                var _this2 = this;

                this.translateY = 0;
                var touches = e.touches[0];
                this.startY = touches.pageY;
                this.startX = touches.pageX;
                this.timer = setTimeout(function () {
                    _this2.translateY = 0;
                    _this2.$apply();
                }, 1000);
            },
            maskTouchmove: function maskTouchmove(e) {
                var touches = e.touches[0];
                var disY = touches.pageY - this.startY;
                var disX = touches.pageX - this.startX;
                if (Math.abs(disY) <= 10 && Math.abs(disX) >= 10) {
                    this.$emit('hideMask');
                    this.translateY = 0;
                    return;
                }
                if (this.pulldown && disY >= 10) {
                    //相反方向时
                    this.$emit('hideMask');
                    this.translateY = 0;
                    return;
                }
                if (this.pullup && disY <= -10) {
                    //相反方向时
                    this.$emit('hideMask');
                    this.translateY = 0;
                    return;
                }
                clearTimeout(this.timer);
                if (disY > 80) {
                    disY = 80;
                } else if (disY < -80) {
                    disY = -80;
                }
                this.translateY = disY;
            },
            maskTouchend: function maskTouchend(e) {
                clearTimeout(this.timer);
                if (Math.abs(this.translateY) > 60) {
                    this.$emit('touchEnd', this.translateY);
                    return;
                }
                this.translateY = 0;
            },
            tolower: function tolower() {
                if (this.pulldown) {
                    this.$emit('refresh');
                }
            },
            toupper: function toupper() {
                if (this.pullup) {
                    this.$emit('refresh');
                }
            }
        }, _this.events = {
            translateY: function translateY() {
                this.startY = 0;
                this.translateY = 0;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Scroll;
}(_wepy2.default.component);

exports.default = Scroll;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1bGwtbW9yZS5qcyJdLCJuYW1lcyI6WyJTY3JvbGwiLCJwcm9wcyIsImxvYWRpbmciLCJ0eXBlIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJub01vcmUiLCJtYXNrIiwicHVsbGRvd24iLCJwdWxsdXAiLCJkYXRhIiwic3RhcnRZIiwidHJhbnNsYXRlWSIsInN0YXJ0WCIsInRpbWVyIiwic2Nyb2xsRGF0YSIsIm1ldGhvZHMiLCJzY3JvbGxpbmciLCJlIiwiZGV0YWlsIiwiZGVsdGFZIiwiJGVtaXQiLCJzY3JvbGxUb3VjaHN0YXJ0IiwibWFza1RvdWNoc3RhcnQiLCJ0b3VjaGVzIiwicGFnZVkiLCJwYWdlWCIsInNldFRpbWVvdXQiLCIkYXBwbHkiLCJtYXNrVG91Y2htb3ZlIiwiZGlzWSIsImRpc1giLCJNYXRoIiwiYWJzIiwiY2xlYXJUaW1lb3V0IiwibWFza1RvdWNoZW5kIiwidG9sb3dlciIsInRvdXBwZXIiLCJldmVudHMiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OzswTEFDcEJDLEssR0FBUTtBQUNEQyxxQkFBUztBQUNYQyxzQkFBTUMsT0FESztBQUVMQyx5QkFBUztBQUZKLGFBRFI7QUFLREMsb0JBQVE7QUFDSkgsc0JBQU1DLE9BREY7QUFFSkMseUJBQVM7QUFGTCxhQUxQO0FBU0RFLGtCQUFNO0FBQ0ZKLHNCQUFNQyxPQURKO0FBRUZDLHlCQUFTO0FBRlAsYUFUTDtBQWFERyxzQkFBVSxFQUFFO0FBQ1JMLHNCQUFNQyxPQURBO0FBRU5DLHlCQUFTO0FBRkgsYUFiVDtBQWlCREksb0JBQVEsRUFBRTtBQUNOTixzQkFBTUMsT0FERjtBQUVKQyx5QkFBUztBQUZMO0FBakJQLFMsUUF1QlJLLEksR0FBTztBQUNBQyxvQkFBUSxDQURSO0FBRUFDLHdCQUFZLENBRlo7QUFHQUMsb0JBQVEsQ0FIUjtBQUlBQyxtQkFBTyxJQUpQLEVBSWE7QUFDYkMsd0JBQVksRUFMWixD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QUFYO0FBQ0g7QUFDSjtBQXBFRSxTLFFBdUVWaUIsTSxHQUFTO0FBQ0YxQixzQkFERSx3QkFDVztBQUNULHFCQUFLRCxNQUFMLEdBQWMsQ0FBZDtBQUNBLHFCQUFLQyxVQUFMLEdBQWtCLENBQWxCO0FBQ0g7QUFKQyxTOzs7O0VBdkcwQixlQUFLMkIsUzs7a0JBQXBCdkMsTSIsImZpbGUiOiJwdWxsLW1vcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcblx0cHJvcHMgPSB7XG4gICAgICAgIGxvYWRpbmc6IHtcblx0XHQgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgbm9Nb3JlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgbWFzazoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHB1bGxkb3duOiB7IC8v5LiL5ouJ5Yi35pawXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgcHVsbHVwOiB7IC8v5LiK5ouJ5Yi35pawXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfVxuXHR9XG5cblx0ZGF0YSA9IHtcbiAgICAgICAgc3RhcnRZOiAwLFxuICAgICAgICB0cmFuc2xhdGVZOiAwLFxuICAgICAgICBzdGFydFg6IDAsXG4gICAgICAgIHRpbWVyOiBudWxsLCAvL+a7keWKqOWkquW/q21hc2tUb3VjaEVuZOS4jeinpuWPkVxuICAgICAgICBzY3JvbGxEYXRhOiBbXSAvL3Njcm9sbOS4quaVsFxuXHR9XG5cblx0bWV0aG9kcyA9IHtcbiAgICAgICAgc2Nyb2xsaW5nKGUpIHsgLy/mu5rliqjnm5HlkKzkuovku7ZcblxuICAgICAgICAgICAgaWYgKHRoaXMucHVsbHVwICYmIGUuZGV0YWlsLmRlbHRhWSA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdoaWRlTWFzaycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wdWxsZG93biAmJiBlLmRldGFpbC5kZWx0YVkgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaGlkZU1hc2snKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVZID0gMFxuICAgICAgICB9LFxuICAgICAgICBzY3JvbGxUb3VjaHN0YXJ0KCkge1xuICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVZID0gMFxuICAgICAgICB9LFxuICAgICAgICBtYXNrVG91Y2hzdGFydChlKSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVkgPSAwXG4gICAgICAgICAgICBsZXQgdG91Y2hlcyA9IGUudG91Y2hlc1swXVxuICAgICAgICAgICAgdGhpcy5zdGFydFkgPSB0b3VjaGVzLnBhZ2VZXG4gICAgICAgICAgICB0aGlzLnN0YXJ0WCA9IHRvdWNoZXMucGFnZVhcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVkgPSAwXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgfSxcbiAgICAgICAgbWFza1RvdWNobW92ZShlKSB7XG4gICAgICAgICAgICBsZXQgdG91Y2hlcyA9IGUudG91Y2hlc1swXVxuICAgICAgICAgICAgbGV0IGRpc1kgPSB0b3VjaGVzLnBhZ2VZIC0gdGhpcy5zdGFydFlcbiAgICAgICAgICAgIGxldCBkaXNYID0gdG91Y2hlcy5wYWdlWCAtIHRoaXMuc3RhcnRYXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlzWSkgPD0gMTAgJiYgTWF0aC5hYnMoZGlzWCkgPj0gMTApIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdoaWRlTWFzaycpXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVZID0gMFxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHVsbGRvd24gJiYgZGlzWSA+PSAxMCkgeyAvL+ebuOWPjeaWueWQkeaXtlxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2hpZGVNYXNrJylcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVkgPSAwXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wdWxsdXAgJiYgZGlzWSA8PSAtMTApIHsgLy/nm7jlj43mlrnlkJHml7ZcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdoaWRlTWFzaycpXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2xhdGVZID0gMFxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXG4gICAgICAgICAgICBpZiAoZGlzWSA+IDgwKSB7XG4gICAgICAgICAgICAgICAgZGlzWSA9IDgwXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpc1kgPCAtODApIHtcbiAgICAgICAgICAgICAgICBkaXNZID0gLTgwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVkgPSBkaXNZXG4gICAgICAgIH0sXG4gICAgICAgIG1hc2tUb3VjaGVuZChlKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcilcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnRyYW5zbGF0ZVkpID4gNjApIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd0b3VjaEVuZCcsIHRoaXMudHJhbnNsYXRlWSlcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudHJhbnNsYXRlWSA9IDBcbiAgICAgICAgfSxcbiAgICAgICAgdG9sb3dlcigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnB1bGxkb3duKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgncmVmcmVzaCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRvdXBwZXIoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wdWxsdXApIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdyZWZyZXNoJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXHR9XG5cblx0ZXZlbnRzID0ge1xuICAgICAgICB0cmFuc2xhdGVZKCkge1xuICAgICAgICAgICAgdGhpcy5zdGFydFkgPSAwXG4gICAgICAgICAgICB0aGlzLnRyYW5zbGF0ZVkgPSAwXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=