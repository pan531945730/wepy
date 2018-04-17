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

var GroupItem = function (_wepy$component) {
	_inherits(GroupItem, _wepy$component);

	function GroupItem() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, GroupItem);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GroupItem.__proto__ || Object.getPrototypeOf(GroupItem)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
			gitem: {}
		}, _this.data = {}, _this.methods = {
			tap: function tap() {
				this.gitem.childname = 'Child Random(' + Math.random() + ')';
				console.log('Clicked Group ' + this.$parent.$index + '. Item ' + this.$index + ', ID is ' + this.gitem.childid);
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	return GroupItem;
}(_wepy2.default.component);

exports.default = GroupItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwaXRlbS5qcyJdLCJuYW1lcyI6WyJHcm91cEl0ZW0iLCJwcm9wcyIsImdpdGVtIiwiZGF0YSIsIm1ldGhvZHMiLCJ0YXAiLCJjaGlsZG5hbWUiLCJNYXRoIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsIiRwYXJlbnQiLCIkaW5kZXgiLCJjaGlsZGlkIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7MExBQ3BCQyxLLEdBQVE7QUFDUEMsVUFBTztBQURBLEcsUUFHUkMsSSxHQUFPLEUsUUFDUEMsTyxHQUFVO0FBQ1RDLE1BRFMsaUJBQ0Y7QUFDTixTQUFLSCxLQUFMLENBQVdJLFNBQVgscUJBQXVDQyxLQUFLQyxNQUFMLEVBQXZDO0FBQ0FDLFlBQVFDLEdBQVIsb0JBQTZCLEtBQUtDLE9BQUwsQ0FBYUMsTUFBMUMsZUFBMEQsS0FBS0EsTUFBL0QsZ0JBQWdGLEtBQUtWLEtBQUwsQ0FBV1csT0FBM0Y7QUFDQTtBQUpRLEc7Ozs7RUFMNEIsZUFBS0MsUzs7a0JBQXZCZCxTIiwiZmlsZSI6Imdyb3VwaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JvdXBJdGVtIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuXHRwcm9wcyA9IHtcblx0XHRnaXRlbToge31cblx0fVxuXHRkYXRhID0ge31cblx0bWV0aG9kcyA9IHtcblx0XHR0YXAgKCkge1xuXHRcdFx0dGhpcy5naXRlbS5jaGlsZG5hbWUgPSBgQ2hpbGQgUmFuZG9tKCR7TWF0aC5yYW5kb20oKX0pYFxuXHRcdFx0Y29uc29sZS5sb2coYENsaWNrZWQgR3JvdXAgJHt0aGlzLiRwYXJlbnQuJGluZGV4fS4gSXRlbSAke3RoaXMuJGluZGV4fSwgSUQgaXMgJHt0aGlzLmdpdGVtLmNoaWxkaWR9YClcblx0XHR9XG5cdH1cbn1cbiJdfQ==