'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _class, _temp2, _initialiseProps;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import abc from 'abc'

var Counter = (_temp2 = _class = function (_wepy$component) {
	_inherits(Counter, _wepy$component);

	function Counter() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Counter);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Counter.__proto__ || Object.getPrototypeOf(Counter)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
	}

	return Counter;
}(_wepy2.default.component), _initialiseProps = function _initialiseProps() {
	var _this2 = this;

	this.props = {
		num: {
			type: [Number, String],
			coerce: function coerce(v) {
				return +v;
			},
			default: 50
		}
	};
	this.data = {};
	this.events = {
		'index-broadcast': function indexBroadcast() {
			var _ref2;

			var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
			console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
		}
	};
	this.methods = {
		plus: function plus() {
			this.num = this.num + 1;
			console.log(this.$name + ' plus tap');

			this.$emit('index-emit', 1, 2, 3);
		},
		minus: function minus() {
			this.num = this.num - 1;
			console.log(this.$name + ' minus tap');
		}
	};
}, _temp2);
exports.default = Counter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuanMiXSwibmFtZXMiOlsiQ291bnRlciIsImNvbXBvbmVudCIsInByb3BzIiwibnVtIiwidHlwZSIsIk51bWJlciIsIlN0cmluZyIsImNvZXJjZSIsInYiLCJkZWZhdWx0IiwiZGF0YSIsImV2ZW50cyIsIiRldmVudCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCIkbmFtZSIsIm5hbWUiLCJzb3VyY2UiLCJtZXRob2RzIiwicGx1cyIsIiRlbWl0IiwibWludXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFnQixlQUFLQyxTOzs7TUFDekNDLEssR0FBUTtBQUNQQyxPQUFLO0FBQ0pDLFNBQU0sQ0FBQ0MsTUFBRCxFQUFTQyxNQUFULENBREY7QUFFSkMsV0FBUSxnQkFBVUMsQ0FBVixFQUFhO0FBQ3BCLFdBQU8sQ0FBQ0EsQ0FBUjtBQUNBLElBSkc7QUFLSkMsWUFBUztBQUxMO0FBREUsRTtNQVVSQyxJLEdBQU8sRTtNQUNQQyxNLEdBQVM7QUFDUixxQkFBbUIsMEJBQWE7QUFBQTs7QUFDL0IsT0FBSUMsa0JBQWMsVUFBS0MsTUFBTCxHQUFjLENBQTVCLDJEQUFKO0FBQ0FDLFdBQVFDLEdBQVIsQ0FBZSxPQUFLQyxLQUFwQixpQkFBcUNKLE9BQU9LLElBQTVDLGNBQXlETCxPQUFPTSxNQUFQLENBQWNGLEtBQXZFO0FBQ0E7QUFKTyxFO01BT1RHLE8sR0FBVTtBQUNUQyxNQURTLGtCQUNEO0FBQ1AsUUFBS2pCLEdBQUwsR0FBVyxLQUFLQSxHQUFMLEdBQVcsQ0FBdEI7QUFDQVcsV0FBUUMsR0FBUixDQUFZLEtBQUtDLEtBQUwsR0FBYSxXQUF6Qjs7QUFFQSxRQUFLSyxLQUFMLENBQVcsWUFBWCxFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQjtBQUNBLEdBTlE7QUFPVEMsT0FQUyxtQkFPQTtBQUNSLFFBQUtuQixHQUFMLEdBQVcsS0FBS0EsR0FBTCxHQUFXLENBQXRCO0FBQ0FXLFdBQVFDLEdBQVIsQ0FBWSxLQUFLQyxLQUFMLEdBQWEsWUFBekI7QUFDQTtBQVZRLEU7O2tCQW5CVWhCLE8iLCJmaWxlIjoiY291bnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbi8vIGltcG9ydCBhYmMgZnJvbSAnYWJjJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VudGVyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuXHRwcm9wcyA9IHtcblx0XHRudW06IHtcblx0XHRcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG5cdFx0XHRjb2VyY2U6IGZ1bmN0aW9uICh2KSB7XG5cdFx0XHRcdHJldHVybiArdlxuXHRcdFx0fSxcblx0XHRcdGRlZmF1bHQ6IDUwXG5cdFx0fVxuXHR9XG5cblx0ZGF0YSA9IHt9XG5cdGV2ZW50cyA9IHtcblx0XHQnaW5kZXgtYnJvYWRjYXN0JzogKC4uLmFyZ3MpID0+IHtcblx0XHRcdGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cblx0XHRcdGNvbnNvbGUubG9nKGAke3RoaXMuJG5hbWV9IHJlY2VpdmUgJHskZXZlbnQubmFtZX0gZnJvbSAkeyRldmVudC5zb3VyY2UuJG5hbWV9YClcblx0XHR9XG5cdH1cblxuXHRtZXRob2RzID0ge1xuXHRcdHBsdXMgKCkge1xuXHRcdFx0dGhpcy5udW0gPSB0aGlzLm51bSArIDFcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMuJG5hbWUgKyAnIHBsdXMgdGFwJylcblxuXHRcdFx0dGhpcy4kZW1pdCgnaW5kZXgtZW1pdCcsIDEsIDIsIDMpXG5cdFx0fSxcblx0XHRtaW51cyAoKSB7XG5cdFx0XHR0aGlzLm51bSA9IHRoaXMubnVtIC0gMVxuXHRcdFx0Y29uc29sZS5sb2codGhpcy4kbmFtZSArICcgbWludXMgdGFwJylcblx0XHR9XG5cdH1cblxufVxuIl19