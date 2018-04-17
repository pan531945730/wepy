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

function log() {
    var arg = [].slice.call(arguments);
    console.log.apply(null, arg);
}

var Mixin = function (_wepy$mixin) {
    _inherits(Mixin, _wepy$mixin);

    function Mixin() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Mixin);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Mixin.__proto__ || Object.getPrototypeOf(Mixin)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            mixin: 'This is mixin data.'
        }, _this.methods = {
            tap: function tap() {
                this.mixin = 'mixin data was changed';
                log('mixin method tap');
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Mixin, [{
        key: 'onLaunch',
        value: function onLaunch() {
            log('mixin onLaunch');
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            console.log(this.$name);
            log('mixin onLoad');
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            log('mixin onShow');
        }
    }, {
        key: 'onReady',
        value: function onReady() {
            log('mixin onReady');
        }
    }, {
        key: 'onHide',
        value: function onHide() {
            log('mixin onHide');
        }
    }, {
        key: 'onError',
        value: function onError() {
            log('mixin onError');
        }
    }]);

    return Mixin;
}(_wepy2.default.mixin);

exports.default = Mixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImxvZyIsImFyZyIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsImNvbnNvbGUiLCJhcHBseSIsIk1peGluIiwiZGF0YSIsIm1peGluIiwibWV0aG9kcyIsInRhcCIsIiRuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsR0FBVCxHQUFlO0FBQ1gsUUFBSUMsTUFBTSxHQUFHQyxLQUFILENBQVNDLElBQVQsQ0FBY0MsU0FBZCxDQUFWO0FBQ0FDLFlBQVFMLEdBQVIsQ0FBWU0sS0FBWixDQUFrQixJQUFsQixFQUF3QkwsR0FBeEI7QUFDSDs7SUFDb0JNLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSSxHQUFPO0FBQ0hDLG1CQUFPO0FBREosUyxRQUdQQyxPLEdBQVU7QUFDTkMsZUFETSxpQkFDQTtBQUNGLHFCQUFLRixLQUFMLEdBQWEsd0JBQWI7QUFDQVQsb0JBQUksa0JBQUo7QUFDSDtBQUpLLFM7Ozs7O21DQU9DO0FBQ1BBLGdCQUFJLGdCQUFKO0FBQ0g7OztpQ0FFUTtBQUNMSyxvQkFBUUwsR0FBUixDQUFZLEtBQUtZLEtBQWpCO0FBQ0FaLGdCQUFJLGNBQUo7QUFDSDs7O2lDQUVRO0FBQ0xBLGdCQUFJLGNBQUo7QUFDSDs7O2tDQUVTO0FBQ05BLGdCQUFJLGVBQUo7QUFDSDs7O2lDQUVRO0FBQ0xBLGdCQUFJLGNBQUo7QUFDSDs7O2tDQUVTO0FBQ05BLGdCQUFJLGVBQUo7QUFDSDs7OztFQWxDOEIsZUFBS1MsSzs7a0JBQW5CRixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZnVuY3Rpb24gbG9nKCkge1xuICAgIHZhciBhcmcgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICBjb25zb2xlLmxvZy5hcHBseShudWxsLCBhcmcpXG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaXhpbiBleHRlbmRzIHdlcHkubWl4aW4ge1xuICAgIGRhdGEgPSB7XG4gICAgICAgIG1peGluOiAnVGhpcyBpcyBtaXhpbiBkYXRhLidcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgICAgdGFwKCkge1xuICAgICAgICAgICAgdGhpcy5taXhpbiA9ICdtaXhpbiBkYXRhIHdhcyBjaGFuZ2VkJ1xuICAgICAgICAgICAgbG9nKCdtaXhpbiBtZXRob2QgdGFwJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTGF1bmNoKCkge1xuICAgICAgICBsb2coJ21peGluIG9uTGF1bmNoJylcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuJG5hbWUpXG4gICAgICAgIGxvZygnbWl4aW4gb25Mb2FkJylcbiAgICB9XG5cbiAgICBvblNob3coKSB7XG4gICAgICAgIGxvZygnbWl4aW4gb25TaG93JylcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBsb2coJ21peGluIG9uUmVhZHknKVxuICAgIH1cblxuICAgIG9uSGlkZSgpIHtcbiAgICAgICAgbG9nKCdtaXhpbiBvbkhpZGUnKVxuICAgIH1cblxuICAgIG9uRXJyb3IoKSB7XG4gICAgICAgIGxvZygnbWl4aW4gb25FcnJvcicpXG4gICAgfVxuXG59XG4iXX0=