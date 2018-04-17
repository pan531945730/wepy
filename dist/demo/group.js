'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _groupitem = require('./groupitem.js');

var _groupitem2 = _interopRequireDefault(_groupitem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Group = function (_wepy$component) {
	_inherits(Group, _wepy$component);

	function Group() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Group);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Group.__proto__ || Object.getPrototypeOf(Group)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
			grouplist: {},
			index: {}
		}, _this.$repeat = { "grouplist": { "com": "groupitem", "props": "gitem" } }, _this.$props = { "groupitem": { "xmlns:v-bind": { "value": "", "for": "grouplist.list", "item": "item", "index": "index", "key": "key" }, "v-bind:gitem.once": { "value": "item", "type": "item", "for": "grouplist.list", "item": "item", "index": "index", "key": "key" } } }, _this.$events = {}, _this.components = {
			groupitem: _groupitem2.default
		}, _this.methods = {
			tap: function tap() {
				this.grouplist.name = 'Parent Random(' + Math.random() + ')';
				console.log('Clicked Group ' + this.$index + ', ID is ' + this.grouplist.id);
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	return Group;
}(_wepy2.default.component);

exports.default = Group;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLmpzIl0sIm5hbWVzIjpbIkdyb3VwIiwicHJvcHMiLCJncm91cGxpc3QiLCJpbmRleCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImdyb3VwaXRlbSIsIm1ldGhvZHMiLCJ0YXAiLCJuYW1lIiwiTWF0aCIsInJhbmRvbSIsImNvbnNvbGUiLCJsb2ciLCIkaW5kZXgiLCJpZCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7a0xBQ3BCQyxLLEdBQVE7QUFDUEMsY0FBVyxFQURKO0FBRVBDLFVBQU87QUFGQSxHLFFBS1RDLE8sR0FBVSxFQUFDLGFBQVksRUFBQyxPQUFNLFdBQVAsRUFBbUIsU0FBUSxPQUEzQixFQUFiLEUsUUFDVkMsTSxHQUFTLEVBQUMsYUFBWSxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxnQkFBbEIsRUFBbUMsUUFBTyxNQUExQyxFQUFpRCxTQUFRLE9BQXpELEVBQWlFLE9BQU0sS0FBdkUsRUFBaEIsRUFBOEYscUJBQW9CLEVBQUMsU0FBUSxNQUFULEVBQWdCLFFBQU8sTUFBdkIsRUFBOEIsT0FBTSxnQkFBcEMsRUFBcUQsUUFBTyxNQUE1RCxFQUFtRSxTQUFRLE9BQTNFLEVBQW1GLE9BQU0sS0FBekYsRUFBbEgsRUFBYixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNaQztBQURZLEcsUUFHYkMsTyxHQUFVO0FBQ1RDLE1BRFMsaUJBQ0Y7QUFDTixTQUFLUixTQUFMLENBQWVTLElBQWYsc0JBQXVDQyxLQUFLQyxNQUFMLEVBQXZDO0FBQ0FDLFlBQVFDLEdBQVIsb0JBQTZCLEtBQUtDLE1BQWxDLGdCQUFtRCxLQUFLZCxTQUFMLENBQWVlLEVBQWxFO0FBQ0E7QUFKUSxHOzs7O0VBWndCLGVBQUtDLFM7O2tCQUFuQmxCLEsiLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgR3JvdXBJdGVtIGZyb20gJy4vZ3JvdXBpdGVtJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91cCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcblx0cHJvcHMgPSB7XG5cdFx0Z3JvdXBsaXN0OiB7fSxcblx0XHRpbmRleDoge31cblx0fVxuXG4kcmVwZWF0ID0ge1wiZ3JvdXBsaXN0XCI6e1wiY29tXCI6XCJncm91cGl0ZW1cIixcInByb3BzXCI6XCJnaXRlbVwifX07XHJcbiRwcm9wcyA9IHtcImdyb3VwaXRlbVwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwiZ3JvdXBsaXN0Lmxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn0sXCJ2LWJpbmQ6Z2l0ZW0ub25jZVwiOntcInZhbHVlXCI6XCJpdGVtXCIsXCJ0eXBlXCI6XCJpdGVtXCIsXCJmb3JcIjpcImdyb3VwbGlzdC5saXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuXHRjb21wb25lbnRzID0ge1xuXHRcdGdyb3VwaXRlbTogR3JvdXBJdGVtXG5cdH1cblx0bWV0aG9kcyA9IHtcblx0XHR0YXAgKCkge1xuXHRcdFx0dGhpcy5ncm91cGxpc3QubmFtZSA9IGBQYXJlbnQgUmFuZG9tKCR7TWF0aC5yYW5kb20oKX0pYFxuXHRcdFx0Y29uc29sZS5sb2coYENsaWNrZWQgR3JvdXAgJHt0aGlzLiRpbmRleH0sIElEIGlzICR7dGhpcy5ncm91cGxpc3QuaWR9YClcblx0XHR9XG5cdH1cbn1cbiJdfQ==