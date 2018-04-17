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

var _navTab = require('./../components/nav-tab.js');

var _navTab2 = _interopRequireDefault(_navTab);

var _pullMore = require('./../components/pull-more.js');

var _pullMore2 = _interopRequireDefault(_pullMore);

var _api = require('./../common/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FinanceList = function (_wepy$page) {
    _inherits(FinanceList, _wepy$page);

    function FinanceList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, FinanceList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FinanceList.__proto__ || Object.getPrototypeOf(FinanceList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '财经'
        }, _this.$repeat = {}, _this.$props = { "navtab": { "xmlns:v-bind": "", "v-bind:tabData.sync": "tabData", "bindshowtab": "showtab" }, "scroll": { "v-bind:pullup.once": "pullup", "v-bind:loading.sync": "loading", "v-bind:noMore.sync": "noMore", "v-bind:mask.sync": "mask" } }, _this.$events = {}, _this.components = {
            'toast': _wepyComToast2.default,
            'navtab': _navTab2.default,
            'scroll': _pullMore2.default
        }, _this.mixins = [_index2.default], _this.data = {
            tabData: [],
            listMap: {},
            noMoreMap: {},
            tabIndex: 0,
            loading: true,
            noMore: false,
            mask: false,
            maskTimer: null,
            pullup: true
        }, _this.computed = {
            now: function now() {
                return +new Date();
            }
        }, _this.methods = {}, _this.events = {
            showtab: function showtab(index) {
                var _this2 = this;

                this.tabIndex = index;

                if (!this.listMap[index]) {
                    this.listMap[index] = this.fetchData(index);
                }
                if (this.pullup) {
                    this.maskTimer && clearTimeout(this.maskTimer);
                    this.maskTimer = setTimeout(function () {
                        _this2.mask = true;
                        _this2.$apply();
                    }, 1500);
                }
                if (this.noMoreMap[this.tabIndex]) {
                    this.noMore = true;
                    this.loading = false;
                } else {
                    this.noMore = false;
                    this.loading = true;
                }
                this.$apply();
            },
            hideMask: function hideMask() {
                this.mask = false;
            },
            touchEnd: function touchEnd(y) {
                if (this.noMore) {
                    this.noMoreData();
                    return;
                }
                if (this.listMap[this.tabIndex].length > 50) {
                    this.noMoreData();
                    return;
                }
                if (y < 0) {
                    this.pulldownData();
                } else {
                    this.pullupData();
                }
            },
            refresh: function refresh() {
                this.mask = true;
                if (this.listMap[this.tabIndex].length > 50) {
                    this.noMoreData();
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(FinanceList, [{
        key: 'fetchData',
        value: function fetchData(index, id) {
            //生成数据
            var newquestions = [];
            id = ~~id;
            for (var i = 0; i < 20; i++) {
                id++;
                newquestions.push({
                    id: id,
                    index: index,
                    text: '服务名称适用品类服务实施详情服务期限服务生效时间摔碰管修一年笔记本本服务有效期内，如客户的数码摄照产品在正常使用过程中由于不慎将产品坠落、挤压、碰撞，而产生的硬件故障，本服务将免费提供硬件维修或更换，使产品重新恢复正常运行。12个月购机满30天后开始生效摔碰管修两年笔记本、数码相机、摄像机、手机、小数码'
                });
            }
            return newquestions;
        }
    }, {
        key: 'pulldownData',
        value: function pulldownData() {
            var _this3 = this;

            setTimeout(function () {
                _this3.listMap[_this3.tabIndex] = _this3.listMap[_this3.tabIndex].concat(_this3.fetchData(_this3.tabIndex, _this3.listMap[_this3.tabIndex].length));
                _this3.mask = false;
                _this3.$broadcast('translateY');
                _this3.$apply();
            }, 1000);
        }
    }, {
        key: 'pullupData',
        value: function pullupData() {
            var _this4 = this;

            setTimeout(function () {
                _this4.listMap[_this4.tabIndex] = _this4.fetchData(_this4.tabIndex, _this4.listMap[_this4.tabIndex].length).concat(_this4.listMap[_this4.tabIndex]);
                _this4.$broadcast('translateY');
                _this4.$apply();
            }, 1000);
        }
    }, {
        key: 'noMoreData',
        value: function noMoreData() {
            this.noMore = true;
            this.loading = false;
            this.noMoreMap[this.tabIndex] = true;
            this.$broadcast('translateY');
            this.$apply();
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            this.tabData = [{
                "id": 1,
                "text": "tab1"
            }, {
                "id": 2,
                "text": "tab2"
            }, {
                "id": 3,
                "text": "tab3"
            }, {
                "id": 4,
                "text": "tab4"
            }];
            if (this.pullup) {
                this.mask = true;
            }
            this.listMap[this.tabIndex] = this.fetchData(this.tabIndex);
            this.$apply();
        }
    }, {
        key: 'onReachBottom',
        value: function onReachBottom() {
            console.log('xxx');
        }
    }]);

    return FinanceList;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(FinanceList , 'pages/finance-list'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmFuY2UtbGlzdC5qcyJdLCJuYW1lcyI6WyJGaW5hbmNlTGlzdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwidGFiRGF0YSIsImxpc3RNYXAiLCJub01vcmVNYXAiLCJ0YWJJbmRleCIsImxvYWRpbmciLCJub01vcmUiLCJtYXNrIiwibWFza1RpbWVyIiwicHVsbHVwIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsImV2ZW50cyIsInNob3d0YWIiLCJpbmRleCIsImZldGNoRGF0YSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCIkYXBwbHkiLCJoaWRlTWFzayIsInRvdWNoRW5kIiwieSIsIm5vTW9yZURhdGEiLCJsZW5ndGgiLCJwdWxsZG93bkRhdGEiLCJwdWxsdXBEYXRhIiwicmVmcmVzaCIsImlkIiwibmV3cXVlc3Rpb25zIiwiaSIsInB1c2giLCJ0ZXh0IiwiY29uY2F0IiwiJGJyb2FkY2FzdCIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7Ozs7b01BQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFHVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixTQUF6QyxFQUFtRCxlQUFjLFNBQWpFLEVBQVYsRUFBc0YsVUFBUyxFQUFDLHNCQUFxQixRQUF0QixFQUErQix1QkFBc0IsU0FBckQsRUFBK0Qsc0JBQXFCLFFBQXBGLEVBQTZGLG9CQUFtQixNQUFoSCxFQUEvRixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNOLDJDQURNO0FBRU4sc0NB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QixLQUFLYSxTQUFMLENBQWUsS0FBS2IsUUFBcEIsQ0FBOUI7QUFDQSxpQkFBS2dCLE1BQUw7QUFDSDs7O3dDQUVlO0FBQ1pnQixvQkFBUUMsR0FBUixDQUFZLEtBQVo7QUFDSDs7OztFQXpKb0MsZUFBS0MsSTs7a0JBQXpCOUMsVyIsImZpbGUiOiJmaW5hbmNlLWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgTWl4aW4gZnJvbSAnLi4vbWl4aW5zL2luZGV4J1xuaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuaW1wb3J0IE5hdlRhYnMgZnJvbSAnLi4vY29tcG9uZW50cy9uYXYtdGFiJ1xuaW1wb3J0IFNjcm9sbCBmcm9tICcuLi9jb21wb25lbnRzL3B1bGwtbW9yZSdcbmltcG9ydCBhcGkgZnJvbSAnLi4vY29tbW9uL2FwaSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmluYW5jZUxpc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i0oue7jydcbiAgICB9XG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIm5hdnRhYlwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGFiRGF0YS5zeW5jXCI6XCJ0YWJEYXRhXCIsXCJiaW5kc2hvd3RhYlwiOlwic2hvd3RhYlwifSxcInNjcm9sbFwiOntcInYtYmluZDpwdWxsdXAub25jZVwiOlwicHVsbHVwXCIsXCJ2LWJpbmQ6bG9hZGluZy5zeW5jXCI6XCJsb2FkaW5nXCIsXCJ2LWJpbmQ6bm9Nb3JlLnN5bmNcIjpcIm5vTW9yZVwiLFwidi1iaW5kOm1hc2suc3luY1wiOlwibWFza1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgICd0b2FzdCc6IFRvYXN0LFxuICAgICAgICAnbmF2dGFiJzogTmF2VGFicyxcbiAgICAgICAgJ3Njcm9sbCc6IFNjcm9sbFxuICAgIH1cblxuICAgIG1peGlucyA9IFtNaXhpbl1cblxuICAgIGRhdGEgPSB7XG4gICAgICAgIHRhYkRhdGE6IFtdLFxuICAgICAgICBsaXN0TWFwOiB7fSxcbiAgICAgICAgbm9Nb3JlTWFwOiB7fSxcbiAgICAgICAgdGFiSW5kZXg6IDAsXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIG5vTW9yZTogZmFsc2UsXG4gICAgICAgIG1hc2s6IGZhbHNlLFxuICAgICAgICBtYXNrVGltZXI6IG51bGwsXG4gICAgICAgIHB1bGx1cDogdHJ1ZVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgICBub3coKSB7XG4gICAgICAgICAgICByZXR1cm4gK25ldyBEYXRlKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZldGNoRGF0YShpbmRleCwgaWQpIHsgIC8v55Sf5oiQ5pWw5o2uXG4gICAgICAgIGNvbnN0IG5ld3F1ZXN0aW9ucyA9IFtdO1xuICAgICAgICBpZCA9IH5+aWRcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XG4gICAgICAgICAgICBpZCsrXG4gICAgICAgICAgICBuZXdxdWVzdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICB0ZXh0OiAn5pyN5Yqh5ZCN56ew6YCC55So5ZOB57G75pyN5Yqh5a6e5pa96K+m5oOF5pyN5Yqh5pyf6ZmQ5pyN5Yqh55Sf5pWI5pe26Ze05pGU56Kw566h5L+u5LiA5bm056yU6K6w5pys5pys5pyN5Yqh5pyJ5pWI5pyf5YaF77yM5aaC5a6i5oi355qE5pWw56CB5pGE54Wn5Lqn5ZOB5Zyo5q2j5bi45L2/55So6L+H56iL5Lit55Sx5LqO5LiN5oWO5bCG5Lqn5ZOB5Z2g6JC944CB5oyk5Y6L44CB56Kw5pKe77yM6ICM5Lqn55Sf55qE56Gs5Lu25pWF6Zqc77yM5pys5pyN5Yqh5bCG5YWN6LS55o+Q5L6b56Gs5Lu257u05L+u5oiW5pu05o2i77yM5L2/5Lqn5ZOB6YeN5paw5oGi5aSN5q2j5bi46L+Q6KGM44CCMTLkuKrmnIjotK3mnLrmu6EzMOWkqeWQjuW8gOWni+eUn+aViOaRlOeisOeuoeS/ruS4pOW5tOeslOiusOacrOOAgeaVsOeggeebuOacuuOAgeaRhOWDj+acuuOAgeaJi+acuuOAgeWwj+aVsOeggSdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld3F1ZXN0aW9uc1xuICAgIH1cblxuICAgIHB1bGxkb3duRGF0YSgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxpc3RNYXBbdGhpcy50YWJJbmRleF0gPSB0aGlzLmxpc3RNYXBbdGhpcy50YWJJbmRleF0uY29uY2F0KHRoaXMuZmV0Y2hEYXRhKHRoaXMudGFiSW5kZXgsIHRoaXMubGlzdE1hcFt0aGlzLnRhYkluZGV4XS5sZW5ndGgpKVxuICAgICAgICAgICAgdGhpcy5tYXNrID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuJGJyb2FkY2FzdCgndHJhbnNsYXRlWScpXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH0sIDEwMDApXG4gICAgfVxuXG4gICAgcHVsbHVwRGF0YSgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxpc3RNYXBbdGhpcy50YWJJbmRleF0gPSB0aGlzLmZldGNoRGF0YSh0aGlzLnRhYkluZGV4LCB0aGlzLmxpc3RNYXBbdGhpcy50YWJJbmRleF0ubGVuZ3RoKS5jb25jYXQodGhpcy5saXN0TWFwW3RoaXMudGFiSW5kZXhdKVxuICAgICAgICAgICAgdGhpcy4kYnJvYWRjYXN0KCd0cmFuc2xhdGVZJylcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfSwgMTAwMClcbiAgICB9XG5cbiAgICBub01vcmVEYXRhKCkge1xuICAgICAgICB0aGlzLm5vTW9yZSA9IHRydWVcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgdGhpcy5ub01vcmVNYXBbdGhpcy50YWJJbmRleF0gPSB0cnVlXG4gICAgICAgIHRoaXMuJGJyb2FkY2FzdCgndHJhbnNsYXRlWScpXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuXG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgICAgICBzaG93dGFiKGluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLnRhYkluZGV4ID0gaW5kZXhcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmxpc3RNYXBbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0TWFwW2luZGV4XSA9IHRoaXMuZmV0Y2hEYXRhKGluZGV4KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHVsbHVwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXNrVGltZXIgJiYgY2xlYXJUaW1lb3V0KHRoaXMubWFza1RpbWVyKVxuICAgICAgICAgICAgICAgIHRoaXMubWFza1RpbWVyID0gc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc2sgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgICAgICB9LCAxNTAwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubm9Nb3JlTWFwW3RoaXMudGFiSW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub01vcmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub01vcmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgfSxcbiAgICAgICAgaGlkZU1hc2soKSB7XG4gICAgICAgICAgICB0aGlzLm1hc2sgPSBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB0b3VjaEVuZCh5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ub01vcmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vTW9yZURhdGEoKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubGlzdE1hcFt0aGlzLnRhYkluZGV4XS5sZW5ndGggPiA1MCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9Nb3JlRGF0YSgpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoeSA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnB1bGxkb3duRGF0YSgpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucHVsbHVwRGF0YSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlZnJlc2goKSB7XG4gICAgICAgICAgICB0aGlzLm1hc2sgPSB0cnVlXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0TWFwW3RoaXMudGFiSW5kZXhdLmxlbmd0aCA+IDUwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub01vcmVEYXRhKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy50YWJEYXRhID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJ0YWIxXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiAyLFxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcInRhYjJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IDMsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwidGFiM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogNCxcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJ0YWI0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgICBpZiAodGhpcy5wdWxsdXApIHtcbiAgICAgICAgICAgIHRoaXMubWFzayA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpc3RNYXBbdGhpcy50YWJJbmRleF0gPSB0aGlzLmZldGNoRGF0YSh0aGlzLnRhYkluZGV4KVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgfVxuXG4gICAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3h4eCcpXG4gICAgfVxufVxuIl19