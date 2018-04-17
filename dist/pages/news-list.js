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

var _scrollMore = require('./../components/scroll-more.js');

var _scrollMore2 = _interopRequireDefault(_scrollMore);

var _api = require('./../common/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewsList = function (_wepy$page) {
    _inherits(NewsList, _wepy$page);

    function NewsList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, NewsList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NewsList.__proto__ || Object.getPrototypeOf(NewsList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '新闻'
        }, _this.$repeat = {}, _this.$props = { "scrollmore": { "xmlns:v-bind": "", "v-bind:loading.sync": "loading", "v-bind:noMore.sync": "noMore" } }, _this.$events = {}, _this.components = {
            'toast': _wepyComToast2.default,
            'scrollmore': _scrollMore2.default
        }, _this.mixins = [_index2.default], _this.data = {
            listData: [],
            loading: true,
            noMore: false,
            isLoading: false //数据请求中
        }, _this.computed = {
            now: function now() {
                return +new Date();
            }
        }, _this.methods = {
            tap: function tap() {
                console.log(this.mixin);
            }
        }, _this.events = {
            refresh: function refresh() {
                if (this.listData.length > 50) {
                    this.noMoreData();
                    return;
                }
                this.pulldownData();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(NewsList, [{
        key: 'fetchData',
        value: function fetchData(id) {
            //生成数据
            var newquestions = [];
            id = ~~id;
            for (var i = 0; i < 20; i++) {
                id++;
                newquestions.push({
                    id: id,
                    index: 1,
                    text: '服务ssssssssssssssssssssssssssssssssssssssssssssssssssssss名称适用品类服务实施详情服务期限服务生效时间摔碰管修一年笔记本本服务有效期内，如客户的数码摄照产品在正常使用过程中由于不慎将产品坠落、挤压、碰撞，而产生的硬件故障，本服务将免费提供硬件维修或更换，使产品重新恢复正常运行。12个月购机满30天后开始生效摔碰管修两年笔记本、数码相机、摄像机、手机、小数码'
                });
            }
            return newquestions;
        }
    }, {
        key: 'pulldownData',
        value: function pulldownData() {
            var _this2 = this;

            if (this.isLoading) {
                return;
            }
            this.isLoading = true;
            setTimeout(function () {
                _this2.listData = _this2.listData.concat(_this2.fetchData(_this2.listData.length));
                _this2.isLoading = false;
                _this2.$apply();
            }, 1000);
        }
    }, {
        key: 'noMoreData',
        value: function noMoreData() {
            this.noMore = true;
            this.loading = false;
            this.$apply();
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            var _this3 = this;

            _api2.default.newsList().then(function (res) {
                _this3.$invoke('toast', 'show', {
                    title: '获取新闻列表成功',
                    img: '../img/up.png'
                });
            });
            this.listData = this.fetchData();
            this.$apply();
        }
    }, {
        key: 'onReady',
        value: function onReady() {}
    }]);

    return NewsList;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(NewsList , 'pages/news-list'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MtbGlzdC5qcyJdLCJuYW1lcyI6WyJOZXdzTGlzdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJtaXhpbnMiLCJkYXRhIiwibGlzdERhdGEiLCJsb2FkaW5nIiwibm9Nb3JlIiwiaXNMb2FkaW5nIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsInRhcCIsImNvbnNvbGUiLCJsb2ciLCJtaXhpbiIsImV2ZW50cyIsInJlZnJlc2giLCJsZW5ndGgiLCJub01vcmVEYXRhIiwicHVsbGRvd25EYXRhIiwiaWQiLCJuZXdxdWVzdGlvbnMiLCJpIiwicHVzaCIsImluZGV4IiwidGV4dCIsInNldFRpbWVvdXQiLCJjb25jYXQiLCJmZXRjaERhdGEiLCIkYXBwbHkiLCJuZXdzTGlzdCIsInRoZW4iLCIkaW52b2tlIiwidGl0bGUiLCJpbWciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzhMQUNwQkMsTSxHQUFTO0FBQ1JDLG9DQUF3QjtBQURoQixTLFFBR1ZDLE8sR0FBVSxFLFFBQ1ZDLE0sR0FBUyxFQUFDLGNBQWEsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix1QkFBc0IsU0FBekMsRUFBbUQsc0JBQXFCLFFBQXhFLEVBQWQsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDWiwyQ0FEWTtBQUVOO0FBRk0sUyxRQUtiQyxNLEdBQVMsaUIsUUFFVEMsSSxHQUFPO0FBQ0FDLHNCQUFVLEVBRFY7QUFFQUMscUJBQVMsSUFGVDtBQUdBQyxvQkFBUSxLQUhSO0FBSUFDLHVCQUFXLEtBSlgsQ0FJaUI7QUFKakIsUyxRQU9QQyxRLEdBQVc7QUFDVkMsZUFEVSxpQkFDSDtBQUNOLHVCQUFPLENBQUMsSUFBSUMsSUFBSixFQUFSO0FBQ0E7QUFIUyxTLFFBc0NSQyxPLEdBQVU7QUFDTkMsZUFETSxpQkFDQTtBQUNGQyx3QkFBUUMsR0FBUixDQUFZLEtBQUtDLEtBQWpCO0FBQ0g7QUFISyxTLFFBTVZDLE0sR0FBUztBQUNMQyxtQkFESyxxQkFDSztBQUNOLG9CQUFJLEtBQUtiLFFBQUwsQ0FBY2MsTUFBZCxHQUF1QixFQUEzQixFQUErQjtBQUMzQix5QkFBS0MsVUFBTDtBQUNBO0FBQ0g7QUFDRCxxQkFBS0MsWUFBTDtBQUNIO0FBUEksUzs7Ozs7a0NBdENDQyxFLEVBQUk7QUFBRztBQUNiLGdCQUFNQyxlQUFlLEVBQXJCO0FBQ0FELGlCQUFLLENBQUMsQ0FBQ0EsRUFBUDtBQUNBLGlCQUFLLElBQUlFLElBQUksQ0FBYixFQUFnQkEsSUFBSSxFQUFwQixFQUF3QkEsR0FBeEIsRUFBNkI7QUFDekJGO0FBQ0FDLDZCQUFhRSxJQUFiLENBQWtCO0FBQ2RILHdCQUFJQSxFQURVO0FBRWRJLDJCQUFPLENBRk87QUFHZEMsMEJBQU07QUFIUSxpQkFBbEI7QUFLSDtBQUNELG1CQUFPSixZQUFQO0FBQ0g7Ozt1Q0FFYztBQUFBOztBQUNkLGdCQUFJLEtBQUtmLFNBQVQsRUFBb0I7QUFDYjtBQUNIO0FBQ0QsaUJBQUtBLFNBQUwsR0FBaUIsSUFBakI7QUFDQW9CLHVCQUFXLFlBQU07QUFDYix1QkFBS3ZCLFFBQUwsR0FBZ0IsT0FBS0EsUUFBTCxDQUFjd0IsTUFBZCxDQUFxQixPQUFLQyxTQUFMLENBQWUsT0FBS3pCLFFBQUwsQ0FBY2MsTUFBN0IsQ0FBckIsQ0FBaEI7QUFDQSx1QkFBS1gsU0FBTCxHQUFpQixLQUFqQjtBQUNBLHVCQUFLdUIsTUFBTDtBQUNILGFBSkQsRUFJRyxJQUpIO0FBS0g7OztxQ0FFWTtBQUNULGlCQUFLeEIsTUFBTCxHQUFjLElBQWQ7QUFDQSxpQkFBS0QsT0FBTCxHQUFlLEtBQWY7QUFDQSxpQkFBS3lCLE1BQUw7QUFDSDs7O2lDQWtCTTtBQUFBOztBQUNULDBCQUFJQyxRQUFKLEdBQWVDLElBQWYsQ0FBb0IsZUFBTztBQUMxQix1QkFBS0MsT0FBTCxDQUFhLE9BQWIsRUFBc0IsTUFBdEIsRUFBOEI7QUFDN0JDLDJCQUFPLFVBRHNCO0FBRTdCQyx5QkFBSztBQUZ3QixpQkFBOUI7QUFJQSxhQUxEO0FBTU0saUJBQUsvQixRQUFMLEdBQWdCLEtBQUt5QixTQUFMLEVBQWhCO0FBQ0EsaUJBQUtDLE1BQUw7QUFDTjs7O2tDQUVZLENBRVQ7Ozs7RUF4RmlDLGVBQUtNLEk7O2tCQUF0QnpDLFEiLCJmaWxlIjoibmV3cy1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IE1peGluIGZyb20gJy4uL21peGlucy9pbmRleCdcbmltcG9ydCBUb2FzdCBmcm9tICd3ZXB5LWNvbS10b2FzdCdcbmltcG9ydCBTY3JvbGxNb3JlIGZyb20gJy4uL2NvbXBvbmVudHMvc2Nyb2xsLW1vcmUnXG5pbXBvcnQgYXBpIGZyb20gJy4uL2NvbW1vbi9hcGknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld3NMaXN0IGV4dGVuZHMgd2VweS5wYWdlIHtcblx0Y29uZmlnID0ge1xuXHRcdG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmlrDpl7snXG5cdH1cbiRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wic2Nyb2xsbW9yZVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bG9hZGluZy5zeW5jXCI6XCJsb2FkaW5nXCIsXCJ2LWJpbmQ6bm9Nb3JlLnN5bmNcIjpcIm5vTW9yZVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuXHRjb21wb25lbnRzID0ge1xuXHRcdCd0b2FzdCc6IFRvYXN0LFxuICAgICAgICAnc2Nyb2xsbW9yZSc6IFNjcm9sbE1vcmVcblx0fVxuXG5cdG1peGlucyA9IFtNaXhpbl1cblxuXHRkYXRhID0ge1xuICAgICAgICBsaXN0RGF0YTogW10sXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIG5vTW9yZTogZmFsc2UsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UgLy/mlbDmja7or7fmsYLkuK1cblx0fVxuXG5cdGNvbXB1dGVkID0ge1xuXHRcdG5vdyAoKSB7XG5cdFx0XHRyZXR1cm4gK25ldyBEYXRlKClcblx0XHR9XG5cdH1cblxuICAgIGZldGNoRGF0YShpZCkgeyAgLy/nlJ/miJDmlbDmja5cbiAgICAgICAgY29uc3QgbmV3cXVlc3Rpb25zID0gW107XG4gICAgICAgIGlkID0gfn5pZFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIwOyBpKyspIHtcbiAgICAgICAgICAgIGlkKytcbiAgICAgICAgICAgIG5ld3F1ZXN0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgaW5kZXg6IDEsXG4gICAgICAgICAgICAgICAgdGV4dDogJ+acjeWKoXNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc+WQjeensOmAgueUqOWTgeexu+acjeWKoeWunuaWveivpuaDheacjeWKoeacn+mZkOacjeWKoeeUn+aViOaXtumXtOaRlOeisOeuoeS/ruS4gOW5tOeslOiusOacrOacrOacjeWKoeacieaViOacn+WGhe+8jOWmguWuouaIt+eahOaVsOeggeaRhOeFp+S6p+WTgeWcqOato+W4uOS9v+eUqOi/h+eoi+S4reeUseS6juS4jeaFjuWwhuS6p+WTgeWdoOiQveOAgeaMpOWOi+OAgeeisOaSnu+8jOiAjOS6p+eUn+eahOehrOS7tuaVhemanO+8jOacrOacjeWKoeWwhuWFjei0ueaPkOS+m+ehrOS7tue7tOS/ruaIluabtOaNou+8jOS9v+S6p+WTgemHjeaWsOaBouWkjeato+W4uOi/kOihjOOAgjEy5Liq5pyI6LSt5py65ruhMzDlpKnlkI7lvIDlp4vnlJ/mlYjmkZTnorDnrqHkv67kuKTlubTnrJTorrDmnKzjgIHmlbDnoIHnm7jmnLrjgIHmkYTlg4/mnLrjgIHmiYvmnLrjgIHlsI/mlbDnoIEnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdxdWVzdGlvbnNcbiAgICB9XG5cbiAgICBwdWxsZG93bkRhdGEoKSB7XG5cdCAgICBpZiAodGhpcy5pc0xvYWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubGlzdERhdGEgPSB0aGlzLmxpc3REYXRhLmNvbmNhdCh0aGlzLmZldGNoRGF0YSh0aGlzLmxpc3REYXRhLmxlbmd0aCkpXG4gICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgIH0sIDEwMDApXG4gICAgfVxuXG4gICAgbm9Nb3JlRGF0YSgpIHtcbiAgICAgICAgdGhpcy5ub01vcmUgPSB0cnVlXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgICB0YXAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1peGluKVxuICAgICAgICB9XG5cdH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICAgICAgcmVmcmVzaCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3REYXRhLmxlbmd0aCA+IDUwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub01vcmVEYXRhKClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHVsbGRvd25EYXRhKClcbiAgICAgICAgfVxuICAgIH1cblxuXHRvbkxvYWQgKCkge1xuXHRcdGFwaS5uZXdzTGlzdCgpLnRoZW4ocmVzID0+IHtcblx0XHRcdHRoaXMuJGludm9rZSgndG9hc3QnLCAnc2hvdycsIHtcblx0XHRcdFx0dGl0bGU6ICfojrflj5bmlrDpl7vliJfooajmiJDlip8nLFxuXHRcdFx0XHRpbWc6ICcuLi9pbWcvdXAucG5nJ1xuXHRcdFx0fSlcblx0XHR9KVxuICAgICAgICB0aGlzLmxpc3REYXRhID0gdGhpcy5mZXRjaERhdGEoKVxuICAgICAgICB0aGlzLiRhcHBseSgpXG5cdH1cblxuICAgIG9uUmVhZHkoKSB7XG5cbiAgICB9XG59XG4iXX0=