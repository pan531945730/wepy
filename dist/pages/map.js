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

var Map = function (_wepy$page) {
    _inherits(Map, _wepy$page);

    function Map() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Map);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Map.__proto__ || Object.getPrototypeOf(Map)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '地图'
        }, _this.components = {
            'toast': _wepyComToast2.default
        }, _this.mixins = [_index2.default], _this.data = {
            markers: [{
                iconPath: "../img/culture.png",
                id: 0,
                latitude: 23.099994,
                longitude: 113.324520,
                width: 50,
                height: 50,
                title: '眼镜店',
                label: {
                    content: 'aaa',
                    color: '#ff5500',
                    fontSize: 20,
                    x: 10,
                    y: 10
                }
            }],
            circles: [{
                id: 5,
                latitude: 23.099994,
                longitude: 113.324720,
                fillColor: '#ff5500',
                radius: 50
            }],
            polyline: [{
                points: [{
                    longitude: 113.3245211,
                    latitude: 23.10229
                }, {
                    longitude: 113.324520,
                    latitude: 23.21229
                }],
                color: "#000000",
                width: 2,
                dottedLine: true,
                arrowLine: true
            }],
            controls: [{
                id: 1,
                iconPath: '../img/dollar.png',
                position: {
                    left: 0,
                    top: 0,
                    width: 50,
                    height: 50
                },
                clickable: true
            }]
        }, _this.methods = {
            regionchange: function regionchange(e) {
                console.log(e.type);
            },
            markertap: function markertap(e) {
                console.log(e.markerId);
            },
            controltap: function controltap(e) {
                console.log(e.controlId);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Map, [{
        key: 'onLoad',
        value: function onLoad(e, data) {
            var res = wx.getSystemInfoSync();
            this.controls[0].position.top = res.windowHeight - 50;
            this.$apply();
        }
    }]);

    return Map;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Map , 'pages/map'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5qcyJdLCJuYW1lcyI6WyJNYXAiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsIm1peGlucyIsImRhdGEiLCJtYXJrZXJzIiwiaWNvblBhdGgiLCJpZCIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwid2lkdGgiLCJoZWlnaHQiLCJ0aXRsZSIsImxhYmVsIiwiY29udGVudCIsImNvbG9yIiwiZm9udFNpemUiLCJ4IiwieSIsImNpcmNsZXMiLCJmaWxsQ29sb3IiLCJyYWRpdXMiLCJwb2x5bGluZSIsInBvaW50cyIsImRvdHRlZExpbmUiLCJhcnJvd0xpbmUiLCJjb250cm9scyIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsImNsaWNrYWJsZSIsIm1ldGhvZHMiLCJyZWdpb25jaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJtYXJrZXJ0YXAiLCJtYXJrZXJJZCIsImNvbnRyb2x0YXAiLCJjb250cm9sSWQiLCJyZXMiLCJ3eCIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93SGVpZ2h0IiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsRzs7Ozs7Ozs7Ozs7Ozs7b0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFHVEMsVSxHQUFhO0FBQ1Q7QUFEUyxTLFFBSWJDLE0sR0FBUyxpQixRQUVUQyxJLEdBQU87QUFDSEMscUJBQVMsQ0FDTDtBQUNJQywwQkFBVSxvQkFEZDtBQUVJQyxvQkFBSSxDQUZSO0FBR0lDLDBCQUFVLFNBSGQ7QUFJSUMsMkJBQVcsVUFKZjtBQUtJQyx1QkFBTyxFQUxYO0FBTUlDLHdCQUFRLEVBTlo7QUFPSUMsdUJBQU8sS0FQWDtBQVFJQyx1QkFBTztBQUNIQyw2QkFBUyxLQUROO0FBRUhDLDJCQUFPLFNBRko7QUFHSEMsOEJBQVUsRUFIUDtBQUlIQyx1QkFBRyxFQUpBO0FBS0hDLHVCQUFHO0FBTEE7QUFSWCxhQURLLENBRE47QUFtQkhDLHFCQUFTLENBQ0w7QUFDSVosb0JBQUksQ0FEUjtBQUVJQywwQkFBVSxTQUZkO0FBR0lDLDJCQUFXLFVBSGY7QUFJSVcsMkJBQVcsU0FKZjtBQUtJQyx3QkFBUTtBQUxaLGFBREssQ0FuQk47QUE0QkhDLHNCQUFVLENBQ047QUFDSUMsd0JBQVEsQ0FBQztBQUNMZCwrQkFBVyxXQUROO0FBRUxELDhCQUFVO0FBRkwsaUJBQUQsRUFHTDtBQUNDQywrQkFBVyxVQURaO0FBRUNELDhCQUFVO0FBRlgsaUJBSEssQ0FEWjtBQVFJTyx1QkFBTSxTQVJWO0FBU0lMLHVCQUFPLENBVFg7QUFVSWMsNEJBQVksSUFWaEI7QUFXSUMsMkJBQVc7QUFYZixhQURNLENBNUJQO0FBMkNIQyxzQkFBVSxDQUNOO0FBQ0luQixvQkFBSSxDQURSO0FBRUlELDBCQUFVLG1CQUZkO0FBR0lxQiwwQkFBVTtBQUNOQywwQkFBTSxDQURBO0FBRU5DLHlCQUFLLENBRkM7QUFHTm5CLDJCQUFPLEVBSEQ7QUFJTkMsNEJBQVE7QUFKRixpQkFIZDtBQVNJbUIsMkJBQVc7QUFUZixhQURNO0FBM0NQLFMsUUEwRFBDLE8sR0FBVTtBQUNOQyx3QkFETSx3QkFDT0MsQ0FEUCxFQUNVO0FBQ1pDLHdCQUFRQyxHQUFSLENBQVlGLEVBQUVHLElBQWQ7QUFDSCxhQUhLO0FBSU5DLHFCQUpNLHFCQUlJSixDQUpKLEVBSU87QUFDVEMsd0JBQVFDLEdBQVIsQ0FBWUYsRUFBRUssUUFBZDtBQUNILGFBTks7QUFPTkMsc0JBUE0sc0JBT0tOLENBUEwsRUFPUTtBQUNWQyx3QkFBUUMsR0FBUixDQUFZRixFQUFFTyxTQUFkO0FBQ0g7QUFUSyxTOzs7OzsrQkFZRlAsQyxFQUFHN0IsSSxFQUFNO0FBQ2IsZ0JBQUlxQyxNQUFNQyxHQUFHQyxpQkFBSCxFQUFWO0FBQ0EsaUJBQUtqQixRQUFMLENBQWMsQ0FBZCxFQUFpQkMsUUFBakIsQ0FBMEJFLEdBQTFCLEdBQWdDWSxJQUFJRyxZQUFKLEdBQW1CLEVBQW5EO0FBQ0EsaUJBQUtDLE1BQUw7QUFDSDs7OztFQXBGNEIsZUFBS0MsSTs7a0JBQWpCL0MsRyIsImZpbGUiOiJtYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgTWl4aW4gZnJvbSAnLi4vbWl4aW5zL2luZGV4J1xuaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuaW1wb3J0IGFwaSBmcm9tICcuLi9jb21tb24vYXBpJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXAgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WcsOWbvidcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICAgICAgJ3RvYXN0JzogVG9hc3RcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbTWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgICAgICBtYXJrZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWNvblBhdGg6IFwiLi4vaW1nL2N1bHR1cmUucG5nXCIsXG4gICAgICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICAgICAgbGF0aXR1ZGU6IDIzLjA5OTk5NCxcbiAgICAgICAgICAgICAgICBsb25naXR1ZGU6IDExMy4zMjQ1MjAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogNTAsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfnnLzplZzlupcnLFxuICAgICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdhYWEnLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZjU1MDAnLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMjAsXG4gICAgICAgICAgICAgICAgICAgIHg6IDEwLFxuICAgICAgICAgICAgICAgICAgICB5OiAxMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgY2lyY2xlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiA1LFxuICAgICAgICAgICAgICAgIGxhdGl0dWRlOiAyMy4wOTk5OTQsXG4gICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAxMTMuMzI0NzIwLFxuICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogJyNmZjU1MDAnLFxuICAgICAgICAgICAgICAgIHJhZGl1czogNTBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcG9seWxpbmU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwb2ludHM6IFt7XG4gICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogMTEzLjMyNDUyMTEsXG4gICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiAyMy4xMDIyOVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiAxMTMuMzI0NTIwLFxuICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZTogMjMuMjEyMjlcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBjb2xvcjpcIiMwMDAwMDBcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogMixcbiAgICAgICAgICAgICAgICBkb3R0ZWRMaW5lOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFycm93TGluZTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBjb250cm9sczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIGljb25QYXRoOiAnLi4vaW1nL2RvbGxhci5wbmcnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIHJlZ2lvbmNoYW5nZShlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnR5cGUpXG4gICAgICAgIH0sXG4gICAgICAgIG1hcmtlcnRhcChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLm1hcmtlcklkKVxuICAgICAgICB9LFxuICAgICAgICBjb250cm9sdGFwKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUuY29udHJvbElkKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkIChlLCBkYXRhKSB7XG4gICAgICAgIHZhciByZXMgPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpXG4gICAgICAgIHRoaXMuY29udHJvbHNbMF0ucG9zaXRpb24udG9wID0gcmVzLndpbmRvd0hlaWdodCAtIDUwXG4gICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG5cblxufVxuIl19