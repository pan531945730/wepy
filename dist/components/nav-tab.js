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

var NavTabs = function (_wepy$component) {
    _inherits(NavTabs, _wepy$component);

    function NavTabs() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, NavTabs);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NavTabs.__proto__ || Object.getPrototypeOf(NavTabs)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            tabnav: Array,
            critical: {
                type: Number,
                default: 150
            }
        }, _this.data = {
            tabData: [], //选项卡数据
            tabNum: 0, //选项卡个数
            showtab: 0, //顶部选项卡索引
            startx: 0, //开始的位置x
            endx: 0, //结束的位置x
            marginleft: 0, //滑动距离
            scrollTop: 0 //滚动高度
        }, _this.computed = {
            tabNum: function tabNum() {
                var len = this.tabData.length;
                return len;
            }
        }, _this.methods = {
            setTab: function setTab(e) {
                //设置选项卡选中索引
                var edata = e.currentTarget.dataset;
                this.showtab = Number(edata.index);
                this.$emit('showtab', this.showtab);
                this.$apply();
            },
            scrollTouchstart: function scrollTouchstart(e) {
                var x = e.touches[0].pageX;
                this.startx = x;
                this.startTime = +new Date();
                this.$apply();
            },
            scrollTouchmove: function scrollTouchmove(e) {
                var x = e.touches[0].pageX;
                this.endx = x;
                this.marginleft = x - this.startx;
                this.$apply();
            },
            scrollTouchend: function scrollTouchend(e) {
                if (!this.marginleft) {
                    return;
                }
                var time = +new Date() - this.startTime;
                var speed = this.marginleft / time;

                if (this.marginleft > this.critical) {
                    this.showtab = this.showtab - 1;
                } else if (-1 * this.marginleft > this.critical) {
                    this.showtab = this.showtab + 1;
                } else {
                    if (speed > 0.5) {
                        this.showtab = this.showtab - 1;
                    } else if (speed < -0.5) {
                        this.showtab = this.showtab + 1;
                    }
                }

                if (this.showtab >= this.tabNum - 1) {
                    this.showtab = this.tabNum - 1;
                } else if (this.showtab <= 0) {
                    this.showtab = 0;
                }

                this.startx = 0;
                this.endx = 0;
                this.marginleft = 0;
                this.$emit('showtab', this.showtab);
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return NavTabs;
}(_wepy2.default.component);

exports.default = NavTabs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi10YWIuanMiXSwibmFtZXMiOlsiTmF2VGFicyIsInByb3BzIiwidGFibmF2IiwiQXJyYXkiLCJjcml0aWNhbCIsInR5cGUiLCJOdW1iZXIiLCJkZWZhdWx0IiwiZGF0YSIsInRhYkRhdGEiLCJ0YWJOdW0iLCJzaG93dGFiIiwic3RhcnR4IiwiZW5keCIsIm1hcmdpbmxlZnQiLCJzY3JvbGxUb3AiLCJjb21wdXRlZCIsImxlbiIsImxlbmd0aCIsIm1ldGhvZHMiLCJzZXRUYWIiLCJlIiwiZWRhdGEiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwiJGVtaXQiLCIkYXBwbHkiLCJzY3JvbGxUb3VjaHN0YXJ0IiwieCIsInRvdWNoZXMiLCJwYWdlWCIsInN0YXJ0VGltZSIsIkRhdGUiLCJzY3JvbGxUb3VjaG1vdmUiLCJzY3JvbGxUb3VjaGVuZCIsInRpbWUiLCJzcGVlZCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7OzRMQUNwQkMsSyxHQUFRO0FBQ1BDLG9CQUFRQyxLQUREO0FBRURDLHNCQUFVO0FBQ1pDLHNCQUFNQyxNQURNO0FBRU5DLHlCQUFTO0FBRkg7QUFGVCxTLFFBUVJDLEksR0FBTztBQUNOQyxxQkFBUyxFQURILEVBQ087QUFDYkMsb0JBQVEsQ0FGRixFQUVLO0FBQ0xDLHFCQUFTLENBSFQsRUFHYTtBQUNiQyxvQkFBUSxDQUpSLEVBSVk7QUFDWkMsa0JBQU0sQ0FMTixFQUtTO0FBQ1RDLHdCQUFZLENBTlosRUFNZ0I7QUFDaEJDLHVCQUFXLENBUFgsQ0FPYTtBQVBiLFMsUUFVUEMsUSxHQUFXO0FBQ1ZOLGtCQURVLG9CQUNBO0FBQ04sb0JBQUlPLE1BQU0sS0FBS1IsT0FBTCxDQUFhUyxNQUF2QjtBQUNILHVCQUFPRCxHQUFQO0FBQ0E7QUFKUyxTLFFBT1hFLE8sR0FBVTtBQUNIQyxrQkFERyxrQkFDSUMsQ0FESixFQUNPO0FBQUU7QUFDUixvQkFBTUMsUUFBUUQsRUFBRUUsYUFBRixDQUFnQkMsT0FBOUI7QUFDQSxxQkFBS2IsT0FBTCxHQUFlTCxPQUFPZ0IsTUFBTUcsS0FBYixDQUFmO0FBQ0EscUJBQUtDLEtBQUwsQ0FBVyxTQUFYLEVBQXNCLEtBQUtmLE9BQTNCO0FBQ0EscUJBQUtnQixNQUFMO0FBQ0gsYUFORTtBQU9IQyw0QkFQRyw0QkFPY1AsQ0FQZCxFQU9pQjtBQUNoQixvQkFBSVEsSUFBSVIsRUFBRVMsT0FBRixDQUFVLENBQVYsRUFBYUMsS0FBckI7QUFDQSxxQkFBS25CLE1BQUwsR0FBY2lCLENBQWQ7QUFDQSxxQkFBS0csU0FBTCxHQUFpQixDQUFDLElBQUlDLElBQUosRUFBbEI7QUFDQSxxQkFBS04sTUFBTDtBQUNILGFBWkU7QUFhSE8sMkJBYkcsMkJBYWFiLENBYmIsRUFhZ0I7QUFDZixvQkFBSVEsSUFBSVIsRUFBRVMsT0FBRixDQUFVLENBQVYsRUFBYUMsS0FBckI7QUFDQSxxQkFBS2xCLElBQUwsR0FBWWdCLENBQVo7QUFDQSxxQkFBS2YsVUFBTCxHQUFrQmUsSUFBSSxLQUFLakIsTUFBM0I7QUFDQSxxQkFBS2UsTUFBTDtBQUNILGFBbEJFO0FBbUJIUSwwQkFuQkcsMEJBbUJZZCxDQW5CWixFQW1CZTtBQUNkLG9CQUFJLENBQUMsS0FBS1AsVUFBVixFQUFzQjtBQUNsQjtBQUNIO0FBQ0Qsb0JBQUlzQixPQUFPLENBQUMsSUFBSUgsSUFBSixFQUFELEdBQWUsS0FBS0QsU0FBL0I7QUFDQSxvQkFBSUssUUFBUSxLQUFLdkIsVUFBTCxHQUFrQnNCLElBQTlCOztBQUdBLG9CQUFJLEtBQUt0QixVQUFMLEdBQWtCLEtBQUtWLFFBQTNCLEVBQXFDO0FBQ2pDLHlCQUFLTyxPQUFMLEdBQWUsS0FBS0EsT0FBTCxHQUFlLENBQTlCO0FBQ0gsaUJBRkQsTUFFTyxJQUFJLENBQUMsQ0FBRCxHQUFLLEtBQUtHLFVBQVYsR0FBdUIsS0FBS1YsUUFBaEMsRUFBMEM7QUFDN0MseUJBQUtPLE9BQUwsR0FBZSxLQUFLQSxPQUFMLEdBQWUsQ0FBOUI7QUFDSCxpQkFGTSxNQUVBO0FBQ0gsd0JBQUkwQixRQUFRLEdBQVosRUFBaUI7QUFDYiw2QkFBSzFCLE9BQUwsR0FBZSxLQUFLQSxPQUFMLEdBQWUsQ0FBOUI7QUFDSCxxQkFGRCxNQUVPLElBQUkwQixRQUFRLENBQUMsR0FBYixFQUFrQjtBQUNyQiw2QkFBSzFCLE9BQUwsR0FBZSxLQUFLQSxPQUFMLEdBQWUsQ0FBOUI7QUFDSDtBQUNKOztBQUVELG9CQUFJLEtBQUtBLE9BQUwsSUFBZ0IsS0FBS0QsTUFBTCxHQUFjLENBQWxDLEVBQXFDO0FBQ2pDLHlCQUFLQyxPQUFMLEdBQWUsS0FBS0QsTUFBTCxHQUFjLENBQTdCO0FBQ0gsaUJBRkQsTUFFTyxJQUFJLEtBQUtDLE9BQUwsSUFBZ0IsQ0FBcEIsRUFBdUI7QUFDMUIseUJBQUtBLE9BQUwsR0FBZSxDQUFmO0FBQ0g7O0FBRUQscUJBQUtDLE1BQUwsR0FBYyxDQUFkO0FBQ0EscUJBQUtDLElBQUwsR0FBWSxDQUFaO0FBQ0EscUJBQUtDLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxxQkFBS1ksS0FBTCxDQUFXLFNBQVgsRUFBc0IsS0FBS2YsT0FBM0I7QUFDQSxxQkFBS2dCLE1BQUw7QUFDSDtBQWxERSxTOzs7O0VBMUIwQixlQUFLVyxTOztrQkFBckJ0QyxPIiwiZmlsZSI6Im5hdi10YWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdlRhYnMgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG5cdHByb3BzID0ge1xuXHRcdHRhYm5hdjogQXJyYXksXG4gICAgICAgIGNyaXRpY2FsOiB7XG5cdFx0ICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IDE1MFxuICAgICAgICB9XG5cdH1cblxuXHRkYXRhID0ge1xuXHRcdHRhYkRhdGE6IFtdLCAvL+mAiemhueWNoeaVsOaNrlxuXHRcdHRhYk51bTogMCwgLy/pgInpobnljaHkuKrmlbBcbiAgICAgICAgc2hvd3RhYjogMCwgIC8v6aG26YOo6YCJ6aG55Y2h57Si5byVXG4gICAgICAgIHN0YXJ0eDogMCwgIC8v5byA5aeL55qE5L2N572ueFxuICAgICAgICBlbmR4OiAwLCAvL+e7k+adn+eahOS9jee9rnhcbiAgICAgICAgbWFyZ2lubGVmdDogMCwgIC8v5ruR5Yqo6Led56a7XG4gICAgICAgIHNjcm9sbFRvcDogMCAvL+a7muWKqOmrmOW6plxuXHR9XG5cblx0Y29tcHV0ZWQgPSB7XG5cdFx0dGFiTnVtICgpIHtcblx0XHQgICAgbGV0IGxlbiA9IHRoaXMudGFiRGF0YS5sZW5ndGhcblx0XHRcdHJldHVybiBsZW5cblx0XHR9XG5cdH1cblxuXHRtZXRob2RzID0ge1xuICAgICAgICBzZXRUYWIoZSkgeyAvL+iuvue9rumAiemhueWNoemAieS4ree0ouW8lVxuICAgICAgICAgICAgY29uc3QgZWRhdGEgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldFxuICAgICAgICAgICAgdGhpcy5zaG93dGFiID0gTnVtYmVyKGVkYXRhLmluZGV4KVxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2hvd3RhYicsIHRoaXMuc2hvd3RhYilcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfSxcbiAgICAgICAgc2Nyb2xsVG91Y2hzdGFydChlKSB7XG4gICAgICAgICAgICBsZXQgeCA9IGUudG91Y2hlc1swXS5wYWdlWFxuICAgICAgICAgICAgdGhpcy5zdGFydHggPSB4XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZSA9ICtuZXcgRGF0ZSgpXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH0sXG4gICAgICAgIHNjcm9sbFRvdWNobW92ZShlKSB7XG4gICAgICAgICAgICBsZXQgeCA9IGUudG91Y2hlc1swXS5wYWdlWFxuICAgICAgICAgICAgdGhpcy5lbmR4ID0geFxuICAgICAgICAgICAgdGhpcy5tYXJnaW5sZWZ0ID0geCAtIHRoaXMuc3RhcnR4XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH0sXG4gICAgICAgIHNjcm9sbFRvdWNoZW5kKGUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5tYXJnaW5sZWZ0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdGltZSA9ICtuZXcgRGF0ZSgpIC0gIHRoaXMuc3RhcnRUaW1lXG4gICAgICAgICAgICBsZXQgc3BlZWQgPSB0aGlzLm1hcmdpbmxlZnQgLyB0aW1lXG5cblxuICAgICAgICAgICAgaWYgKHRoaXMubWFyZ2lubGVmdCA+IHRoaXMuY3JpdGljYWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3d0YWIgPSB0aGlzLnNob3d0YWIgLSAxXG4gICAgICAgICAgICB9IGVsc2UgaWYgKC0xICogdGhpcy5tYXJnaW5sZWZ0ID4gdGhpcy5jcml0aWNhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd3RhYiA9IHRoaXMuc2hvd3RhYiArIDFcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHNwZWVkID4gMC41KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd3RhYiA9IHRoaXMuc2hvd3RhYiAtIDFcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNwZWVkIDwgLTAuNSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3d0YWIgPSB0aGlzLnNob3d0YWIgKyAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zaG93dGFiID49IHRoaXMudGFiTnVtIC0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd3RhYiA9IHRoaXMudGFiTnVtIC0gMVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3d0YWIgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd3RhYiA9IDBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zdGFydHggPSAwXG4gICAgICAgICAgICB0aGlzLmVuZHggPSAwXG4gICAgICAgICAgICB0aGlzLm1hcmdpbmxlZnQgPSAwXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdzaG93dGFiJywgdGhpcy5zaG93dGFiKVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICB9XG5cdH1cblxufVxuIl19