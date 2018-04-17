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

var Checkbox = function (_wepy$component) {
    _inherits(Checkbox, _wepy$component);

    function Checkbox() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Checkbox);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            labelClass: {
                type: String,
                default: ''
            },
            index: {
                type: Number,
                default: 0
            },
            name: {
                type: String,
                default: ''
            },
            value: {
                type: String,
                default: ''
            },
            checked: {
                type: Boolean,
                default: false
            }
        }, _this.data = {
            showData: {},
            checkedData: {}
        }, _this.methods = {
            change: function change(e) {
                var index = e.currentTarget.dataset.index;
                if (typeof this.checkedData[index] === 'undefined') {
                    this.showData[index] = true;
                    this.checkedData[index] = !e.currentTarget.dataset.checked;
                } else {
                    this.checkedData[index] = !this.checkedData[index];
                }
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Checkbox;
}(_wepy2.default.component);

exports.default = Checkbox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrYm94LmpzIl0sIm5hbWVzIjpbIkNoZWNrYm94IiwicHJvcHMiLCJsYWJlbENsYXNzIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJpbmRleCIsIk51bWJlciIsIm5hbWUiLCJ2YWx1ZSIsImNoZWNrZWQiLCJCb29sZWFuIiwiZGF0YSIsInNob3dEYXRhIiwiY2hlY2tlZERhdGEiLCJtZXRob2RzIiwiY2hhbmdlIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZXZlbnRzIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7OExBQ3BCQyxLLEdBQVE7QUFDREMsd0JBQVk7QUFDUkMsc0JBQU1DLE1BREU7QUFFUkMseUJBQVM7QUFGRCxhQURYO0FBS0RDLG1CQUFPO0FBQ0hILHNCQUFNSSxNQURIO0FBRUhGLHlCQUFTO0FBRk4sYUFMTjtBQVNERyxrQkFBTTtBQUNGTCxzQkFBTUMsTUFESjtBQUVGQyx5QkFBUztBQUZQLGFBVEw7QUFhREksbUJBQU87QUFDSE4sc0JBQU1DLE1BREg7QUFFSEMseUJBQVM7QUFGTixhQWJOO0FBaUJESyxxQkFBUztBQUNMUCxzQkFBTVEsT0FERDtBQUVMTix5QkFBUztBQUZKO0FBakJSLFMsUUF1QlJPLEksR0FBTztBQUNIQyxzQkFBVSxFQURQO0FBRUFDLHlCQUFhO0FBRmIsUyxRQUtQQyxPLEdBQVU7QUFDSEMsa0JBREcsa0JBQ0lDLENBREosRUFDTztBQUNOLG9CQUFJWCxRQUFRVyxFQUFFQyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QmIsS0FBcEM7QUFDQSxvQkFBSSxPQUFPLEtBQUtRLFdBQUwsQ0FBaUJSLEtBQWpCLENBQVAsS0FBbUMsV0FBdkMsRUFBb0Q7QUFDaEQseUJBQUtPLFFBQUwsQ0FBY1AsS0FBZCxJQUF1QixJQUF2QjtBQUNBLHlCQUFLUSxXQUFMLENBQWlCUixLQUFqQixJQUEwQixDQUFDVyxFQUFFQyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QlQsT0FBbkQ7QUFDSCxpQkFIRCxNQUdPO0FBQ0gseUJBQUtJLFdBQUwsQ0FBaUJSLEtBQWpCLElBQTBCLENBQUMsS0FBS1EsV0FBTCxDQUFpQlIsS0FBakIsQ0FBM0I7QUFDSDtBQUNKO0FBVEUsUyxRQVlWYyxNLEdBQVMsRTs7OztFQXpDNEIsZUFBS0MsUzs7a0JBQXRCckIsUSIsImZpbGUiOiJjaGVja2JveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG5cdHByb3BzID0ge1xuICAgICAgICBsYWJlbENsYXNzOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICB9LFxuICAgICAgICBpbmRleDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICB9LFxuICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICB9LFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfSxcbiAgICAgICAgY2hlY2tlZDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH1cblx0fVxuXG5cdGRhdGEgPSB7XG5cdCAgICBzaG93RGF0YToge30sXG4gICAgICAgIGNoZWNrZWREYXRhOiB7fVxuICAgIH1cblxuXHRtZXRob2RzID0ge1xuICAgICAgICBjaGFuZ2UoZSkge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5jaGVja2VkRGF0YVtpbmRleF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RGF0YVtpbmRleF0gPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkRGF0YVtpbmRleF0gPSAhZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY2hlY2tlZFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWREYXRhW2luZGV4XSA9ICF0aGlzLmNoZWNrZWREYXRhW2luZGV4XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cdH1cblxuXHRldmVudHMgPSB7XG5cbiAgICB9XG59XG4iXX0=