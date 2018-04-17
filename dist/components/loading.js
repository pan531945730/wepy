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

var Loading = function (_wepy$component) {
    _inherits(Loading, _wepy$component);

    function Loading() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Loading);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loading.__proto__ || Object.getPrototypeOf(Loading)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            fixed: {
                type: Boolean,
                default: false
            }
        }, _this.data = {
            show: true
        }, _this.methods = {
            hide: function hide() {
                this.show = false;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Loading;
}(_wepy2.default.component);

exports.default = Loading;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmcuanMiXSwibmFtZXMiOlsiTG9hZGluZyIsInByb3BzIiwiZml4ZWQiLCJ0eXBlIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJkYXRhIiwic2hvdyIsIm1ldGhvZHMiLCJoaWRlIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7NExBQ3BCQyxLLEdBQVE7QUFDREMsbUJBQU87QUFDSEMsc0JBQU1DLE9BREg7QUFFSEMseUJBQVM7QUFGTjtBQUROLFMsUUFPUkMsSSxHQUFPO0FBQ0hDLGtCQUFNO0FBREgsUyxRQUlQQyxPLEdBQVU7QUFDSEMsZ0JBREcsa0JBQ0k7QUFDSCxxQkFBS0YsSUFBTCxHQUFZLEtBQVo7QUFDSDtBQUhFLFM7Ozs7RUFaMEIsZUFBS0csUzs7a0JBQXJCVixPIiwiZmlsZSI6ImxvYWRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG5cdHByb3BzID0ge1xuICAgICAgICBmaXhlZDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH1cblx0fVxuXG5cdGRhdGEgPSB7XG5cdCAgICBzaG93OiB0cnVlXG4gICAgfVxuXG5cdG1ldGhvZHMgPSB7XG4gICAgICAgIGhpZGUoKSB7XG4gICAgICAgICAgICB0aGlzLnNob3cgPSBmYWxzZVxuICAgICAgICB9XG5cdH1cbn1cbiJdfQ==