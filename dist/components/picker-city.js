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
            children: {
                type: String,
                default: 'children'
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
            area: []
        }, _this.methods = {
            provinceChange: function provinceChange(e) {
                var obj = this.province[e.detail.value];
                this.provinceValue = obj[this.name];
                this.provinceId = obj[this.id];

                this.city = this.cityData.city[this.provinceId];
                if (!this.city) {
                    this.city = [];
                    this.area = [];
                    return;
                }
                this.cityValue = this.city[0][this.name];
                this.cityId = this.city[0][this.id];

                this.area = this.cityData.area[this.cityId];
                if (!this.area) {
                    this.area = [];
                    return;
                }
                this.areaValue = this.area[0][this.name];
                this.areaId = this.area[0][this.id];
                this.$emit('citychange', [this.provinceId, this.cityId, this.areaId]);
            },
            cityChange: function cityChange(e) {
                var obj = this.city[e.detail.value];
                this.cityValue = obj[this.name];
                this.cityId = obj[this.id];

                this.area = this.cityData.area[this.cityId];
                if (!this.area) {
                    this.area = [];
                    return;
                }
                this.areaValue = this.area[0][this.name];
                this.areaId = this.area[0][this.id];
                this.$emit('citychange', [this.provinceId, this.cityId, this.areaId]);
            },
            areaChange: function areaChange(e) {
                this.areaValue = this.area[e.detail.value][this.name];
                this.areaId = this.area[e.detail.value][this.id];
                this.$emit('citychange', [this.provinceId, this.cityId, this.areaId]);
            }
        }, _this.events = {
            cityInit: function cityInit(provinceIndex, cityIndex, areaIndex) {
                this.provinceIndex = provinceIndex;
                this.cityIndex = cityIndex;
                this.areaIndex = areaIndex;

                this.province = this.cityData.province;
                this.provinceValue = this.province[provinceIndex][this.name];
                this.provinceId = this.province[provinceIndex][this.id];

                this.city = this.cityData.city[this.provinceId];
                this.cityValue = this.city[cityIndex][this.name];
                this.cityId = this.city[cityIndex][this.id];

                this.area = this.cityData.area[this.cityId];
                this.areaValue = this.area[areaIndex][this.name];
                this.areaId = this.area[areaIndex][this.id];
                this.$emit('citychange', [this.provinceId, this.cityId, this.areaId]);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return PickerCity;
}(_wepy2.default.component);

exports.default = PickerCity;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpY2tlci1jaXR5LmpzIl0sIm5hbWVzIjpbIlBpY2tlckNpdHkiLCJwcm9wcyIsImNpdHlEYXRhIiwidHlwZSIsIk9iamVjdCIsImRlZmF1bHQiLCJjaGlsZHJlbiIsIlN0cmluZyIsIm5hbWUiLCJpZCIsImRhdGEiLCJwcm92aW5jZUluZGV4IiwiY2l0eUluZGV4IiwiYXJlYUluZGV4IiwicHJvdmluY2VWYWx1ZSIsImNpdHlWYWx1ZSIsImFyZWFWYWx1ZSIsInByb3ZpbmNlSWQiLCJjaXR5SWQiLCJhcmVhSWQiLCJwcm92aW5jZSIsImNpdHkiLCJhcmVhIiwibWV0aG9kcyIsInByb3ZpbmNlQ2hhbmdlIiwiZSIsIm9iaiIsImRldGFpbCIsInZhbHVlIiwiJGVtaXQiLCJjaXR5Q2hhbmdlIiwiYXJlYUNoYW5nZSIsImV2ZW50cyIsImNpdHlJbml0IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7a01BQ3BCQyxLLEdBQVE7QUFDREMsc0JBQVU7QUFDTkMsc0JBQU1DLE1BREE7QUFFTkMseUJBQVM7QUFGSCxhQURUO0FBS0RDLHNCQUFVO0FBQ05ILHNCQUFNSSxNQURBO0FBRU5GLHlCQUFTO0FBRkgsYUFMVDtBQVNERyxrQkFBTTtBQUNGTCxzQkFBTUksTUFESjtBQUVGRix5QkFBUztBQUZQLGFBVEw7QUFhREksZ0JBQUk7QUFDQU4sc0JBQU1JLE1BRE47QUFFQUYseUJBQVM7QUFGVDtBQWJILFMsUUFtQlJLLEksR0FBTztBQUNBQywyQkFBZSxDQURmO0FBRUFDLHVCQUFXLENBRlg7QUFHQUMsdUJBQVcsQ0FIWDtBQUlBQywyQkFBZSxFQUpmO0FBS0FDLHVCQUFXLEVBTFg7QUFNQUMsdUJBQVcsRUFOWDtBQU9BQyx3QkFBWSxFQVBaO0FBUUFDLG9CQUFRLEVBUlI7QUFTQUMsb0JBQVEsRUFUUjtBQVVBQyxzQkFBVSxFQVZWO0FBV0FDLGtCQUFNLEVBWE47QUFZQUMsa0JBQU07QUFaTixTLFFBZVBDLE8sR0FBVTtBQUNIQywwQkFERywwQkFDWUMsQ0FEWixFQUNlO0FBQ2Qsb0JBQUlDLE1BQU0sS0FBS04sUUFBTCxDQUFjSyxFQUFFRSxNQUFGLENBQVNDLEtBQXZCLENBQVY7QUFDQSxxQkFBS2QsYUFBTCxHQUFxQlksSUFBSSxLQUFLbEIsSUFBVCxDQUFyQjtBQUNBLHFCQUFLUyxVQUFMLEdBQWtCUyxJQUFJLEtBQUtqQixFQUFULENBQWxCOztBQUVBLHFCQUFLWSxJQUFMLEdBQVksS0FBS25CLFFBQUwsQ0FBY21CLElBQWQsQ0FBbUIsS0FBS0osVUFBeEIsQ0FBWjtBQUNBLG9CQUFJLENBQUMsS0FBS0ksSUFBVixFQUFnQjtBQUNaLHlCQUFLQSxJQUFMLEdBQVksRUFBWjtBQUNBLHlCQUFLQyxJQUFMLEdBQVksRUFBWjtBQUNBO0FBQ0g7QUFDRCxxQkFBS1AsU0FBTCxHQUFpQixLQUFLTSxJQUFMLENBQVUsQ0FBVixFQUFhLEtBQUtiLElBQWxCLENBQWpCO0FBQ0EscUJBQUtVLE1BQUwsR0FBYyxLQUFLRyxJQUFMLENBQVUsQ0FBVixFQUFhLEtBQUtaLEVBQWxCLENBQWQ7O0FBRUEscUJBQUthLElBQUwsR0FBWSxLQUFLcEIsUUFBTCxDQUFjb0IsSUFBZCxDQUFtQixLQUFLSixNQUF4QixDQUFaO0FBQ0Esb0JBQUksQ0FBQyxLQUFLSSxJQUFWLEVBQWdCO0FBQ1oseUJBQUtBLElBQUwsR0FBWSxFQUFaO0FBQ0E7QUFDSDtBQUNELHFCQUFLTixTQUFMLEdBQWlCLEtBQUtNLElBQUwsQ0FBVSxDQUFWLEVBQWEsS0FBS2QsSUFBbEIsQ0FBakI7QUFDQSxxQkFBS1csTUFBTCxHQUFjLEtBQUtHLElBQUwsQ0FBVSxDQUFWLEVBQWEsS0FBS2IsRUFBbEIsQ0FBZDtBQUNBLHFCQUFLb0IsS0FBTCxDQUFXLFlBQVgsRUFBeUIsQ0FBQyxLQUFLWixVQUFOLEVBQWtCLEtBQUtDLE1BQXZCLEVBQStCLEtBQUtDLE1BQXBDLENBQXpCO0FBRUgsYUF4QkU7QUF5QkhXLHNCQXpCRyxzQkF5QlFMLENBekJSLEVBeUJXO0FBQ1Ysb0JBQUlDLE1BQU0sS0FBS0wsSUFBTCxDQUFVSSxFQUFFRSxNQUFGLENBQVNDLEtBQW5CLENBQVY7QUFDQSxxQkFBS2IsU0FBTCxHQUFpQlcsSUFBSSxLQUFLbEIsSUFBVCxDQUFqQjtBQUNBLHFCQUFLVSxNQUFMLEdBQWNRLElBQUksS0FBS2pCLEVBQVQsQ0FBZDs7QUFFQSxxQkFBS2EsSUFBTCxHQUFZLEtBQUtwQixRQUFMLENBQWNvQixJQUFkLENBQW1CLEtBQUtKLE1BQXhCLENBQVo7QUFDQSxvQkFBSSxDQUFDLEtBQUtJLElBQVYsRUFBZ0I7QUFDWix5QkFBS0EsSUFBTCxHQUFZLEVBQVo7QUFDQTtBQUNIO0FBQ0QscUJBQUtOLFNBQUwsR0FBaUIsS0FBS00sSUFBTCxDQUFVLENBQVYsRUFBYSxLQUFLZCxJQUFsQixDQUFqQjtBQUNBLHFCQUFLVyxNQUFMLEdBQWMsS0FBS0csSUFBTCxDQUFVLENBQVYsRUFBYSxLQUFLYixFQUFsQixDQUFkO0FBQ0EscUJBQUtvQixLQUFMLENBQVcsWUFBWCxFQUF5QixDQUFDLEtBQUtaLFVBQU4sRUFBa0IsS0FBS0MsTUFBdkIsRUFBK0IsS0FBS0MsTUFBcEMsQ0FBekI7QUFDSCxhQXRDRTtBQXVDSFksc0JBdkNHLHNCQXVDUU4sQ0F2Q1IsRUF1Q1c7QUFDVixxQkFBS1QsU0FBTCxHQUFpQixLQUFLTSxJQUFMLENBQVVHLEVBQUVFLE1BQUYsQ0FBU0MsS0FBbkIsRUFBMEIsS0FBS3BCLElBQS9CLENBQWpCO0FBQ0EscUJBQUtXLE1BQUwsR0FBYyxLQUFLRyxJQUFMLENBQVVHLEVBQUVFLE1BQUYsQ0FBU0MsS0FBbkIsRUFBMEIsS0FBS25CLEVBQS9CLENBQWQ7QUFDQSxxQkFBS29CLEtBQUwsQ0FBVyxZQUFYLEVBQXlCLENBQUMsS0FBS1osVUFBTixFQUFrQixLQUFLQyxNQUF2QixFQUErQixLQUFLQyxNQUFwQyxDQUF6QjtBQUNIO0FBM0NFLFMsUUE4Q1ZhLE0sR0FBUztBQUNGQyxvQkFERSxvQkFDT3RCLGFBRFAsRUFDc0JDLFNBRHRCLEVBQ2lDQyxTQURqQyxFQUM0QztBQUMxQyxxQkFBS0YsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxxQkFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxxQkFBS0MsU0FBTCxHQUFpQkEsU0FBakI7O0FBRUEscUJBQUtPLFFBQUwsR0FBZ0IsS0FBS2xCLFFBQUwsQ0FBY2tCLFFBQTlCO0FBQ0EscUJBQUtOLGFBQUwsR0FBcUIsS0FBS00sUUFBTCxDQUFjVCxhQUFkLEVBQTZCLEtBQUtILElBQWxDLENBQXJCO0FBQ0EscUJBQUtTLFVBQUwsR0FBa0IsS0FBS0csUUFBTCxDQUFjVCxhQUFkLEVBQTZCLEtBQUtGLEVBQWxDLENBQWxCOztBQUVBLHFCQUFLWSxJQUFMLEdBQVksS0FBS25CLFFBQUwsQ0FBY21CLElBQWQsQ0FBbUIsS0FBS0osVUFBeEIsQ0FBWjtBQUNBLHFCQUFLRixTQUFMLEdBQWlCLEtBQUtNLElBQUwsQ0FBVVQsU0FBVixFQUFxQixLQUFLSixJQUExQixDQUFqQjtBQUNBLHFCQUFLVSxNQUFMLEdBQWMsS0FBS0csSUFBTCxDQUFVVCxTQUFWLEVBQXFCLEtBQUtILEVBQTFCLENBQWQ7O0FBRUEscUJBQUthLElBQUwsR0FBWSxLQUFLcEIsUUFBTCxDQUFjb0IsSUFBZCxDQUFtQixLQUFLSixNQUF4QixDQUFaO0FBQ0EscUJBQUtGLFNBQUwsR0FBaUIsS0FBS00sSUFBTCxDQUFVVCxTQUFWLEVBQXFCLEtBQUtMLElBQTFCLENBQWpCO0FBQ0EscUJBQUtXLE1BQUwsR0FBYyxLQUFLRyxJQUFMLENBQVVULFNBQVYsRUFBcUIsS0FBS0osRUFBMUIsQ0FBZDtBQUNBLHFCQUFLb0IsS0FBTCxDQUFXLFlBQVgsRUFBeUIsQ0FBQyxLQUFLWixVQUFOLEVBQWtCLEtBQUtDLE1BQXZCLEVBQStCLEtBQUtDLE1BQXBDLENBQXpCO0FBQ0g7QUFsQkMsUzs7OztFQWpGOEIsZUFBS2UsUzs7a0JBQXhCbEMsVSIsImZpbGUiOiJwaWNrZXItY2l0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlja2VyQ2l0eSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcblx0cHJvcHMgPSB7XG4gICAgICAgIGNpdHlEYXRhOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICBkZWZhdWx0OiB7fVxuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2NoaWxkcmVuJ1xuICAgICAgICB9LFxuICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnbmFtZSdcbiAgICAgICAgfSxcbiAgICAgICAgaWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdpZCdcbiAgICAgICAgfVxuXHR9XG5cblx0ZGF0YSA9IHtcbiAgICAgICAgcHJvdmluY2VJbmRleDogMCxcbiAgICAgICAgY2l0eUluZGV4OiAwLFxuICAgICAgICBhcmVhSW5kZXg6IDAsXG4gICAgICAgIHByb3ZpbmNlVmFsdWU6ICcnLFxuICAgICAgICBjaXR5VmFsdWU6ICcnLFxuICAgICAgICBhcmVhVmFsdWU6ICcnLFxuICAgICAgICBwcm92aW5jZUlkOiAnJyxcbiAgICAgICAgY2l0eUlkOiAnJyxcbiAgICAgICAgYXJlYUlkOiAnJyxcbiAgICAgICAgcHJvdmluY2U6IFtdLFxuICAgICAgICBjaXR5OiBbXSxcbiAgICAgICAgYXJlYTogW11cbiAgICB9XG5cblx0bWV0aG9kcyA9IHtcbiAgICAgICAgcHJvdmluY2VDaGFuZ2UoZSkge1xuICAgICAgICAgICAgbGV0IG9iaiA9IHRoaXMucHJvdmluY2VbZS5kZXRhaWwudmFsdWVdXG4gICAgICAgICAgICB0aGlzLnByb3ZpbmNlVmFsdWUgPSBvYmpbdGhpcy5uYW1lXVxuICAgICAgICAgICAgdGhpcy5wcm92aW5jZUlkID0gb2JqW3RoaXMuaWRdXG5cbiAgICAgICAgICAgIHRoaXMuY2l0eSA9IHRoaXMuY2l0eURhdGEuY2l0eVt0aGlzLnByb3ZpbmNlSWRdXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2l0eSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2l0eSA9IFtdXG4gICAgICAgICAgICAgICAgdGhpcy5hcmVhID0gW11cbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2l0eVZhbHVlID0gdGhpcy5jaXR5WzBdW3RoaXMubmFtZV1cbiAgICAgICAgICAgIHRoaXMuY2l0eUlkID0gdGhpcy5jaXR5WzBdW3RoaXMuaWRdXG5cbiAgICAgICAgICAgIHRoaXMuYXJlYSA9IHRoaXMuY2l0eURhdGEuYXJlYVt0aGlzLmNpdHlJZF1cbiAgICAgICAgICAgIGlmICghdGhpcy5hcmVhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcmVhID0gW11cbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYXJlYVZhbHVlID0gdGhpcy5hcmVhWzBdW3RoaXMubmFtZV1cbiAgICAgICAgICAgIHRoaXMuYXJlYUlkID0gdGhpcy5hcmVhWzBdW3RoaXMuaWRdXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjaXR5Y2hhbmdlJywgW3RoaXMucHJvdmluY2VJZCwgdGhpcy5jaXR5SWQsIHRoaXMuYXJlYUlkXSlcblxuICAgICAgICB9LFxuICAgICAgICBjaXR5Q2hhbmdlKGUpIHtcbiAgICAgICAgICAgIGxldCBvYmogPSB0aGlzLmNpdHlbZS5kZXRhaWwudmFsdWVdXG4gICAgICAgICAgICB0aGlzLmNpdHlWYWx1ZSA9IG9ialt0aGlzLm5hbWVdXG4gICAgICAgICAgICB0aGlzLmNpdHlJZCA9IG9ialt0aGlzLmlkXVxuXG4gICAgICAgICAgICB0aGlzLmFyZWEgPSB0aGlzLmNpdHlEYXRhLmFyZWFbdGhpcy5jaXR5SWRdXG4gICAgICAgICAgICBpZiAoIXRoaXMuYXJlYSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXJlYSA9IFtdXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFyZWFWYWx1ZSA9IHRoaXMuYXJlYVswXVt0aGlzLm5hbWVdXG4gICAgICAgICAgICB0aGlzLmFyZWFJZCA9IHRoaXMuYXJlYVswXVt0aGlzLmlkXVxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2l0eWNoYW5nZScsIFt0aGlzLnByb3ZpbmNlSWQsIHRoaXMuY2l0eUlkLCB0aGlzLmFyZWFJZF0pXG4gICAgICAgIH0sXG4gICAgICAgIGFyZWFDaGFuZ2UoZSkge1xuICAgICAgICAgICAgdGhpcy5hcmVhVmFsdWUgPSB0aGlzLmFyZWFbZS5kZXRhaWwudmFsdWVdW3RoaXMubmFtZV1cbiAgICAgICAgICAgIHRoaXMuYXJlYUlkID0gdGhpcy5hcmVhW2UuZGV0YWlsLnZhbHVlXVt0aGlzLmlkXVxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2l0eWNoYW5nZScsIFt0aGlzLnByb3ZpbmNlSWQsIHRoaXMuY2l0eUlkLCB0aGlzLmFyZWFJZF0pXG4gICAgICAgIH1cblx0fVxuXG5cdGV2ZW50cyA9IHtcbiAgICAgICAgY2l0eUluaXQocHJvdmluY2VJbmRleCwgY2l0eUluZGV4LCBhcmVhSW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMucHJvdmluY2VJbmRleCA9IHByb3ZpbmNlSW5kZXhcbiAgICAgICAgICAgIHRoaXMuY2l0eUluZGV4ID0gY2l0eUluZGV4XG4gICAgICAgICAgICB0aGlzLmFyZWFJbmRleCA9IGFyZWFJbmRleFxuXG4gICAgICAgICAgICB0aGlzLnByb3ZpbmNlID0gdGhpcy5jaXR5RGF0YS5wcm92aW5jZVxuICAgICAgICAgICAgdGhpcy5wcm92aW5jZVZhbHVlID0gdGhpcy5wcm92aW5jZVtwcm92aW5jZUluZGV4XVt0aGlzLm5hbWVdXG4gICAgICAgICAgICB0aGlzLnByb3ZpbmNlSWQgPSB0aGlzLnByb3ZpbmNlW3Byb3ZpbmNlSW5kZXhdW3RoaXMuaWRdXG5cbiAgICAgICAgICAgIHRoaXMuY2l0eSA9IHRoaXMuY2l0eURhdGEuY2l0eVt0aGlzLnByb3ZpbmNlSWRdXG4gICAgICAgICAgICB0aGlzLmNpdHlWYWx1ZSA9IHRoaXMuY2l0eVtjaXR5SW5kZXhdW3RoaXMubmFtZV1cbiAgICAgICAgICAgIHRoaXMuY2l0eUlkID0gdGhpcy5jaXR5W2NpdHlJbmRleF1bdGhpcy5pZF1cblxuICAgICAgICAgICAgdGhpcy5hcmVhID0gdGhpcy5jaXR5RGF0YS5hcmVhW3RoaXMuY2l0eUlkXVxuICAgICAgICAgICAgdGhpcy5hcmVhVmFsdWUgPSB0aGlzLmFyZWFbYXJlYUluZGV4XVt0aGlzLm5hbWVdXG4gICAgICAgICAgICB0aGlzLmFyZWFJZCA9IHRoaXMuYXJlYVthcmVhSW5kZXhdW3RoaXMuaWRdXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjaXR5Y2hhbmdlJywgW3RoaXMucHJvdmluY2VJZCwgdGhpcy5jaXR5SWQsIHRoaXMuYXJlYUlkXSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==