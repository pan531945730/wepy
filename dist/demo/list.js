'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2, _initialiseProps;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = (_temp2 = _class = function (_wepy$component) {
	_inherits(List, _wepy$component);

	function List() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, List);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(List, [{
		key: 'onLoad',
		value: function onLoad() {}
	}]);

	return List;
}(_wepy2.default.component), _initialiseProps = function _initialiseProps() {
	var _this2 = this;

	this.data = {
		list: [{
			id: '0',
			title: 'loading'
		}]
	};
	this.events = {
		'index-broadcast': function indexBroadcast() {
			var _ref2;

			var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
			console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.name);
		}
	};
	this.methods = {
		tap: function tap() {
			// this.num = this.num + 1
			console.log(this.$name + ' tap');
		},
		add: function add() {
			var len = this.list.length;
			this.list.push({ id: len + 1, title: 'title_' + len });
		}
	};
}, _temp2);
exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiTGlzdCIsImNvbXBvbmVudCIsImRhdGEiLCJsaXN0IiwiaWQiLCJ0aXRsZSIsImV2ZW50cyIsIiRldmVudCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCIkbmFtZSIsIm5hbWUiLCJzb3VyY2UiLCJtZXRob2RzIiwidGFwIiwiYWRkIiwibGVuIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQTRCVixDQUNUOzs7O0VBN0JnQyxlQUFLQyxTOzs7TUFDdENDLEksR0FBTztBQUNOQyxRQUFNLENBQ0w7QUFDQ0MsT0FBSSxHQURMO0FBRUNDLFVBQU87QUFGUixHQURLO0FBREEsRTtNQVNQQyxNLEdBQVM7QUFDUixxQkFBbUIsMEJBQWE7QUFBQTs7QUFDL0IsT0FBSUMsa0JBQWMsVUFBS0MsTUFBTCxHQUFjLENBQTVCLDJEQUFKO0FBQ0FDLFdBQVFDLEdBQVIsQ0FBZSxPQUFLQyxLQUFwQixpQkFBcUNKLE9BQU9LLElBQTVDLGNBQXlETCxPQUFPTSxNQUFQLENBQWNELElBQXZFO0FBQ0E7QUFKTyxFO01BT1RFLE8sR0FBVTtBQUNUQyxLQURTLGlCQUNGO0FBQ047QUFDQU4sV0FBUUMsR0FBUixDQUFZLEtBQUtDLEtBQUwsR0FBYSxNQUF6QjtBQUNBLEdBSlE7QUFLVEssS0FMUyxpQkFLRjtBQUNOLE9BQUlDLE1BQU0sS0FBS2QsSUFBTCxDQUFVSyxNQUFwQjtBQUNBLFFBQUtMLElBQUwsQ0FBVWUsSUFBVixDQUFlLEVBQUNkLElBQUlhLE1BQU0sQ0FBWCxFQUFjWixPQUFPLFdBQVdZLEdBQWhDLEVBQWY7QUFDQTtBQVJRLEU7O2tCQWpCVWpCLEkiLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcblx0ZGF0YSA9IHtcblx0XHRsaXN0OiBbXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAnMCcsXG5cdFx0XHRcdHRpdGxlOiAnbG9hZGluZydcblx0XHRcdH1cblx0XHRdXG5cdH1cblxuXHRldmVudHMgPSB7XG5cdFx0J2luZGV4LWJyb2FkY2FzdCc6ICguLi5hcmdzKSA9PiB7XG5cdFx0XHRsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdXG5cdFx0XHRjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLm5hbWV9YClcblx0XHR9XG5cdH1cblxuXHRtZXRob2RzID0ge1xuXHRcdHRhcCAoKSB7XG5cdFx0XHQvLyB0aGlzLm51bSA9IHRoaXMubnVtICsgMVxuXHRcdFx0Y29uc29sZS5sb2codGhpcy4kbmFtZSArICcgdGFwJylcblx0XHR9LFxuXHRcdGFkZCAoKSB7XG5cdFx0XHRsZXQgbGVuID0gdGhpcy5saXN0Lmxlbmd0aFxuXHRcdFx0dGhpcy5saXN0LnB1c2goe2lkOiBsZW4gKyAxLCB0aXRsZTogJ3RpdGxlXycgKyBsZW59KVxuXHRcdH1cblx0fVxuXG5cdG9uTG9hZCAoKSB7XG5cdH1cbn1cbiJdfQ==