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

var _api = require('./../common/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Canvas = function (_wepy$page) {
    _inherits(Canvas, _wepy$page);

    function Canvas() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Canvas);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '画布'
        }, _this.components = {
            'toast': _wepyComToast2.default
        }, _this.mixins = [_index2.default], _this.data = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Canvas, [{
        key: 'onLoad',
        value: function onLoad(e, data) {
            var context = wx.createCanvasContext('testCanvas');

            context.setStrokeStyle("#00ff00");
            context.setLineWidth(5);
            context.rect(0, 0, 200, 200);
            context.stroke();
            context.setStrokeStyle("#ff0000");
            context.setLineWidth(2);
            context.moveTo(160, 100);
            context.arc(100, 100, 60, 0, 2 * Math.PI, true);
            context.moveTo(140, 100);
            context.arc(100, 100, 40, 0, Math.PI, false);
            context.moveTo(85, 80);
            context.arc(80, 80, 5, 0, 2 * Math.PI, true);
            context.moveTo(125, 80);
            context.arc(120, 80, 5, 0, 2 * Math.PI, true);
            context.stroke();
            context.draw();
        }
    }]);

    return Canvas;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Canvas , 'pages/canvas'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbnZhcy5qcyJdLCJuYW1lcyI6WyJDYW52YXMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsIm1peGlucyIsImRhdGEiLCJtZXRob2RzIiwiZSIsImNvbnRleHQiLCJ3eCIsImNyZWF0ZUNhbnZhc0NvbnRleHQiLCJzZXRTdHJva2VTdHlsZSIsInNldExpbmVXaWR0aCIsInJlY3QiLCJzdHJva2UiLCJtb3ZlVG8iLCJhcmMiLCJNYXRoIiwiUEkiLCJkcmF3IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7MExBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFHVEMsVSxHQUFhO0FBQ1Q7QUFEUyxTLFFBSWJDLE0sR0FBUyxpQixRQUVUQyxJLEdBQU8sRSxRQUlQQyxPLEdBQVUsRTs7Ozs7K0JBSUZDLEMsRUFBR0YsSSxFQUFNO0FBQ2IsZ0JBQUlHLFVBQVVDLEdBQUdDLG1CQUFILENBQXVCLFlBQXZCLENBQWQ7O0FBRUFGLG9CQUFRRyxjQUFSLENBQXVCLFNBQXZCO0FBQ0FILG9CQUFRSSxZQUFSLENBQXFCLENBQXJCO0FBQ0FKLG9CQUFRSyxJQUFSLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixHQUFuQixFQUF3QixHQUF4QjtBQUNBTCxvQkFBUU0sTUFBUjtBQUNBTixvQkFBUUcsY0FBUixDQUF1QixTQUF2QjtBQUNBSCxvQkFBUUksWUFBUixDQUFxQixDQUFyQjtBQUNBSixvQkFBUU8sTUFBUixDQUFlLEdBQWYsRUFBb0IsR0FBcEI7QUFDQVAsb0JBQVFRLEdBQVIsQ0FBWSxHQUFaLEVBQWlCLEdBQWpCLEVBQXNCLEVBQXRCLEVBQTBCLENBQTFCLEVBQTZCLElBQUlDLEtBQUtDLEVBQXRDLEVBQTBDLElBQTFDO0FBQ0FWLG9CQUFRTyxNQUFSLENBQWUsR0FBZixFQUFvQixHQUFwQjtBQUNBUCxvQkFBUVEsR0FBUixDQUFZLEdBQVosRUFBaUIsR0FBakIsRUFBc0IsRUFBdEIsRUFBMEIsQ0FBMUIsRUFBNkJDLEtBQUtDLEVBQWxDLEVBQXNDLEtBQXRDO0FBQ0FWLG9CQUFRTyxNQUFSLENBQWUsRUFBZixFQUFtQixFQUFuQjtBQUNBUCxvQkFBUVEsR0FBUixDQUFZLEVBQVosRUFBZ0IsRUFBaEIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsRUFBMEIsSUFBSUMsS0FBS0MsRUFBbkMsRUFBdUMsSUFBdkM7QUFDQVYsb0JBQVFPLE1BQVIsQ0FBZSxHQUFmLEVBQW9CLEVBQXBCO0FBQ0FQLG9CQUFRUSxHQUFSLENBQVksR0FBWixFQUFpQixFQUFqQixFQUFxQixDQUFyQixFQUF3QixDQUF4QixFQUEyQixJQUFJQyxLQUFLQyxFQUFwQyxFQUF3QyxJQUF4QztBQUNBVixvQkFBUU0sTUFBUjtBQUNBTixvQkFBUVcsSUFBUjtBQUNIOzs7O0VBckMrQixlQUFLQyxJOztrQkFBcEJwQixNIiwiZmlsZSI6ImNhbnZhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBNaXhpbiBmcm9tICcuLi9taXhpbnMvaW5kZXgnXG5pbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG5pbXBvcnQgYXBpIGZyb20gJy4uL2NvbW1vbi9hcGknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55S75biDJ1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgICAgICAndG9hc3QnOiBUb2FzdFxuICAgIH1cblxuICAgIG1peGlucyA9IFtNaXhpbl1cblxuICAgIGRhdGEgPSB7XG5cbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuXG4gICAgfVxuXG4gICAgb25Mb2FkIChlLCBkYXRhKSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0gd3guY3JlYXRlQ2FudmFzQ29udGV4dCgndGVzdENhbnZhcycpXG5cbiAgICAgICAgY29udGV4dC5zZXRTdHJva2VTdHlsZShcIiMwMGZmMDBcIilcbiAgICAgICAgY29udGV4dC5zZXRMaW5lV2lkdGgoNSlcbiAgICAgICAgY29udGV4dC5yZWN0KDAsIDAsIDIwMCwgMjAwKVxuICAgICAgICBjb250ZXh0LnN0cm9rZSgpXG4gICAgICAgIGNvbnRleHQuc2V0U3Ryb2tlU3R5bGUoXCIjZmYwMDAwXCIpXG4gICAgICAgIGNvbnRleHQuc2V0TGluZVdpZHRoKDIpXG4gICAgICAgIGNvbnRleHQubW92ZVRvKDE2MCwgMTAwKVxuICAgICAgICBjb250ZXh0LmFyYygxMDAsIDEwMCwgNjAsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKVxuICAgICAgICBjb250ZXh0Lm1vdmVUbygxNDAsIDEwMClcbiAgICAgICAgY29udGV4dC5hcmMoMTAwLCAxMDAsIDQwLCAwLCBNYXRoLlBJLCBmYWxzZSlcbiAgICAgICAgY29udGV4dC5tb3ZlVG8oODUsIDgwKVxuICAgICAgICBjb250ZXh0LmFyYyg4MCwgODAsIDUsIDAsIDIgKiBNYXRoLlBJLCB0cnVlKVxuICAgICAgICBjb250ZXh0Lm1vdmVUbygxMjUsIDgwKVxuICAgICAgICBjb250ZXh0LmFyYygxMjAsIDgwLCA1LCAwLCAyICogTWF0aC5QSSwgdHJ1ZSlcbiAgICAgICAgY29udGV4dC5zdHJva2UoKVxuICAgICAgICBjb250ZXh0LmRyYXcoKVxuICAgIH1cbn1cbiJdfQ==