'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PickerCity = function (_wepy$component) {
    _inherits(PickerCity, _wepy$component);

    function PickerCity() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, PickerCity);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PickerCity.__proto__ || Object.getPrototypeOf(PickerCity)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            cityData: {
                type: Object,
                default: {}
            },
            name: {
                type: String,
                default: 'name'
            },
            id: {
                type: String,
                default: 'id'
            }
        }, _this.data = {
            top: 300,
            show: false,
            provinceIndex: 0,
            cityIndex: 0,
            areaIndex: 0,
            provinceValue: '',
            cityValue: '',
            areaValue: '',
            provinceId: '',
            cityId: '',
            areaId: '',
            province: [],
            city: [],
            area: [],
            value: [9999, 1, 1]
        }, _this.methods = {
            change: function change(e) {
                var val = e.detail.value;
                this.changeP = val[0] + '';
                this.changeC = val[1] + '';
                this.changeA = val[2] + '';
                this.makeData(this.changeP, this.changeC, this.changeA);
            },
            changeReset: function changeReset() {
                this.changeP = this.changeC = this.changeA = null;
            },
            pickerSure: function pickerSure() {
                var _this2 = this;

                if (!this.changeP || !this.changeC || !this.changeA) {
                    //防止滑动过程中点击按钮bug
                    return;
                }
                if (this.changeP !== true) {
                    this.provinceIndex = this.changeP;
                    this.cityIndex = this.changeC;
                    this.areaIndex = this.changeA;
                }

                this.top = 300;
                this.makeData(this.provinceIndex, this.cityIndex, this.areaIndex);
                this.$emit('citychange', [this.provinceId, this.cityId, this.areaId]);
                setTimeout(function () {
                    _this2.show = false;
                    _this2.$apply();
                }, 500);
            },
            pickerShow: function pickerShow() {
                var _this3 = this;

                this.show = true;
                this.changeP = this.changeC = this.changeA = true;
                setTimeout(function () {
                    _this3.top = 0;
                    _this3.value = [_this3.provinceIndex, _this3.cityIndex, _this3.areaIndex];
                    _this3.$apply();
                });
            },
            pickerHide: function pickerHide() {
                var _this4 = this;

                if (!this.changeP || !this.changeC || !this.changeA) {
                    return;
                }
                this.top = 300;
                this.makeData(this.provinceIndex, this.cityIndex, this.areaIndex);

                this.value = [0, 0, 0];
                setTimeout(function () {
                    _this4.show = false;
                    _this4.$apply();
                }, 500);
            }
        }, _this.events = {
            cityInit: function cityInit(provinceIndex, cityIndex, areaIndex) {
                this.provinceIndex = provinceIndex;
                this.cityIndex = cityIndex;
                this.areaIndex = areaIndex;
                this.province = this.cityData.province;
                this.makeData(provinceIndex, cityIndex, areaIndex);
                this.$emit('citychange', [this.provinceId, this.cityId, this.areaId]);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(PickerCity, [{
        key: 'makeData',
        value: function makeData(provinceIndex, cityIndex, areaIndex) {

            this.provinceValue = this.province[provinceIndex][this.name];
            this.provinceId = this.province[provinceIndex][this.id];

            this.city = this.cityData.city[this.provinceId];
            if (!this.city) {
                this.city = [];
                this.area = [];
                return;
            }
            this.cityValue = this.city[cityIndex][this.name];
            this.cityId = this.city[cityIndex][this.id];

            this.area = this.cityData.area[this.cityId] || [];
            if (!this.area) {
                this.area = [];
                return;
            }
            this.areaValue = this.area[areaIndex][this.name];
            this.areaId = this.area[areaIndex][this.id];
        }
    }]);

    return PickerCity;
}(_wepy2.default.component);

exports.default = PickerCity;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpY2tlci1jaXR5Mi5qcyJdLCJuYW1lcyI6WyJQaWNrZXJDaXR5IiwicHJvcHMiLCJjaXR5RGF0YSIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0IiwibmFtZSIsIlN0cmluZyIsImlkIiwiZGF0YSIsInRvcCIsInNob3ciLCJwcm92aW5jZUluZGV4IiwiY2l0eUluZGV4IiwiYXJlYUluZGV4IiwicHJvdmluY2VWYWx1ZSIsImNpdHlWYWx1ZSIsImFyZWFWYWx1ZSIsInByb3ZpbmNlSWQiLCJjaXR5SWQiLCJhcmVhSWQiLCJwcm92aW5jZSIsImNpdHkiLCJhcmVhIiwidmFsdWUiLCJtZXRob2RzIiwiY2hhbmdlIiwiZSIsInZhbCIsImRldGFpbCIsImNoYW5nZVAiLCJjaGFuZ2VDIiwiY2hhbmdlQSIsIm1ha2VEYXRhIiwiY2hhbmdlUmVzZXQiLCJwaWNrZXJTdXJlIiwiJGVtaXQiLCJzZXRUaW1lb3V0IiwiJGFwcGx5IiwicGlja2VyU2hvdyIsInBpY2tlckhpZGUiLCJldmVudHMiLCJjaXR5SW5pdCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7a01BQ3BCQyxLLEdBQVE7QUFDREMsc0JBQVU7QUFDTkMsc0JBQU1DLE1BREE7QUFFTkMseUJBQVM7QUFGSCxhQURUO0FBS0RDLGtCQUFNO0FBQ0ZILHNCQUFNSSxNQURKO0FBRUZGLHlCQUFTO0FBRlAsYUFMTDtBQVNERyxnQkFBSTtBQUNBTCxzQkFBTUksTUFETjtBQUVBRix5QkFBUztBQUZUO0FBVEgsUyxRQWVSSSxJLEdBQU87QUFDQUMsaUJBQUssR0FETDtBQUVBQyxrQkFBTSxLQUZOO0FBR0FDLDJCQUFlLENBSGY7QUFJQUMsdUJBQVcsQ0FKWDtBQUtBQyx1QkFBVyxDQUxYO0FBTUFDLDJCQUFlLEVBTmY7QUFPQUMsdUJBQVcsRUFQWDtBQVFBQyx1QkFBVyxFQVJYO0FBU0FDLHdCQUFZLEVBVFo7QUFVQUMsb0JBQVEs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QUFZLEVBQVo7QUFDQTtBQUNIO0FBQ0QsaUJBQUtOLFNBQUwsR0FBaUIsS0FBS00sSUFBTCxDQUFVVCxTQUFWLEVBQXFCLEtBQUtSLElBQTFCLENBQWpCO0FBQ0EsaUJBQUtjLE1BQUwsR0FBYyxLQUFLRyxJQUFMLENBQVVULFNBQVYsRUFBcUIsS0FBS04sRUFBMUIsQ0FBZDtBQUNIOzs7O0VBdkRtQyxlQUFLbUMsUzs7a0JBQXhCM0MsVSIsImZpbGUiOiJwaWNrZXItY2l0eTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpY2tlckNpdHkgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG5cdHByb3BzID0ge1xuICAgICAgICBjaXR5RGF0YToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdDoge31cbiAgICAgICAgfSxcbiAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ25hbWUnXG4gICAgICAgIH0sXG4gICAgICAgIGlkOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnaWQnXG4gICAgICAgIH1cblx0fVxuXG5cdGRhdGEgPSB7XG4gICAgICAgIHRvcDogMzAwLFxuICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgcHJvdmluY2VJbmRleDogMCxcbiAgICAgICAgY2l0eUluZGV4OiAwLFxuICAgICAgICBhcmVhSW5kZXg6IDAsXG4gICAgICAgIHByb3ZpbmNlVmFsdWU6ICcnLFxuICAgICAgICBjaXR5VmFsdWU6ICcnLFxuICAgICAgICBhcmVhVmFsdWU6ICcnLFxuICAgICAgICBwcm92aW5jZUlkOiAnJyxcbiAgICAgICAgY2l0eUlkOiAnJyxcbiAgICAgICAgYXJlYUlkOiAnJyxcbiAgICAgICAgcHJvdmluY2U6IFtdLFxuICAgICAgICBjaXR5OiBbXSxcbiAgICAgICAgYXJlYTogW10sXG4gICAgICAgIHZhbHVlOiBbOTk5OSwgMSwgMV1cbiAgICB9XG5cbiAgICBtYWtlRGF0YShwcm92aW5jZUluZGV4LCBjaXR5SW5kZXgsIGFyZWFJbmRleCkge1xuXG4gICAgICAgIHRoaXMucHJvdmluY2VWYWx1ZSA9IHRoaXMucHJvdmluY2VbcHJvdmluY2VJbmRleF1bdGhpcy5uYW1lXVxuICAgICAgICB0aGlzLnByb3ZpbmNlSWQgPSB0aGlzLnByb3ZpbmNlW3Byb3ZpbmNlSW5kZXhdW3RoaXMuaWRdXG5cbiAgICAgICAgdGhpcy5jaXR5ID0gdGhpcy5jaXR5RGF0YS5jaXR5W3RoaXMucHJvdmluY2VJZF1cbiAgICAgICAgaWYgKCF0aGlzLmNpdHkpIHtcbiAgICAgICAgICAgIHRoaXMuY2l0eSA9IFtdXG4gICAgICAgICAgICB0aGlzLmFyZWEgPSBbXVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaXR5VmFsdWUgPSB0aGlzLmNpdHlbY2l0eUluZGV4XVt0aGlzLm5hbWVdXG4gICAgICAgIHRoaXMuY2l0eUlkID0gdGhpcy5jaXR5W2NpdHlJbmRleF1bdGhpcy5pZF1cblxuICAgICAgICB0aGlzLmFyZWEgPSB0aGlzLmNpdHlEYXRhLmFyZWFbdGhpcy5jaXR5SWRdIHx8IFtdXG4gICAgICAgIGlmICghdGhpcy5hcmVhKSB7XG4gICAgICAgICAgICB0aGlzLmFyZWEgPSBbXVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcmVhVmFsdWUgPSB0aGlzLmFyZWFbYXJlYUluZGV4XVt0aGlzLm5hbWVdXG4gICAgICAgIHRoaXMuYXJlYUlkID0gdGhpcy5hcmVhW2FyZWFJbmRleF1bdGhpcy5pZF1cbiAgICB9XG5cblx0bWV0aG9kcyA9IHtcbiAgICAgICAgY2hhbmdlKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVAgPSB2YWxbMF0gKyAnJ1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VDID0gdmFsWzFdICsgJydcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQSA9IHZhbFsyXSArICcnXG4gICAgICAgICAgICB0aGlzLm1ha2VEYXRhKHRoaXMuY2hhbmdlUCwgdGhpcy5jaGFuZ2VDLCB0aGlzLmNoYW5nZUEpXG4gICAgICAgIH0sXG4gICAgICAgIGNoYW5nZVJlc2V0KCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VQID0gdGhpcy5jaGFuZ2VDID0gdGhpcy5jaGFuZ2VBID0gbnVsbFxuICAgICAgICB9LFxuICAgICAgICBwaWNrZXJTdXJlKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoYW5nZVAgfHwgIXRoaXMuY2hhbmdlQyB8fCAhdGhpcy5jaGFuZ2VBKSB7IC8v6Ziy5q2i5ruR5Yqo6L+H56iL5Lit54K55Ye75oyJ6ZKuYnVnXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jaGFuZ2VQICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm92aW5jZUluZGV4ID0gdGhpcy5jaGFuZ2VQXG4gICAgICAgICAgICAgICAgdGhpcy5jaXR5SW5kZXggPSB0aGlzLmNoYW5nZUNcbiAgICAgICAgICAgICAgICB0aGlzLmFyZWFJbmRleCA9IHRoaXMuY2hhbmdlQVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnRvcCA9IDMwMFxuICAgICAgICAgICAgdGhpcy5tYWtlRGF0YSh0aGlzLnByb3ZpbmNlSW5kZXgsIHRoaXMuY2l0eUluZGV4LCB0aGlzLmFyZWFJbmRleClcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NpdHljaGFuZ2UnLCBbdGhpcy5wcm92aW5jZUlkLCB0aGlzLmNpdHlJZCwgdGhpcy5hcmVhSWRdKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICB9LCA1MDApXG4gICAgICAgIH0sXG4gICAgICAgIHBpY2tlclNob3coKSB7XG4gICAgICAgICAgICB0aGlzLnNob3cgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVAgPSB0aGlzLmNoYW5nZUMgPSB0aGlzLmNoYW5nZUEgPSB0cnVlXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvcCA9IDBcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gW3RoaXMucHJvdmluY2VJbmRleCwgdGhpcy5jaXR5SW5kZXgsIHRoaXMuYXJlYUluZGV4XVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHBpY2tlckhpZGUoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hhbmdlUCB8fCAhdGhpcy5jaGFuZ2VDIHx8ICF0aGlzLmNoYW5nZUEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudG9wID0gMzAwXG4gICAgICAgICAgICB0aGlzLm1ha2VEYXRhKHRoaXMucHJvdmluY2VJbmRleCwgdGhpcy5jaXR5SW5kZXgsIHRoaXMuYXJlYUluZGV4KVxuXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gWzAsIDAsIDBdXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3cgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgfVxuXHR9XG5cblx0ZXZlbnRzID0ge1xuICAgICAgICBjaXR5SW5pdChwcm92aW5jZUluZGV4LCBjaXR5SW5kZXgsIGFyZWFJbmRleCkge1xuICAgICAgICAgICAgdGhpcy5wcm92aW5jZUluZGV4ID0gcHJvdmluY2VJbmRleFxuICAgICAgICAgICAgdGhpcy5jaXR5SW5kZXggPSBjaXR5SW5kZXhcbiAgICAgICAgICAgIHRoaXMuYXJlYUluZGV4ID0gYXJlYUluZGV4XG4gICAgICAgICAgICB0aGlzLnByb3ZpbmNlID0gdGhpcy5jaXR5RGF0YS5wcm92aW5jZVxuICAgICAgICAgICAgdGhpcy5tYWtlRGF0YShwcm92aW5jZUluZGV4LCBjaXR5SW5kZXgsIGFyZWFJbmRleClcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NpdHljaGFuZ2UnLCBbdGhpcy5wcm92aW5jZUlkLCB0aGlzLmNpdHlJZCwgdGhpcy5hcmVhSWRdKVxuICAgICAgICB9XG4gICAgfVxufVxuIl19