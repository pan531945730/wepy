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

var Danmu = function (_wepy$component) {
    _inherits(Danmu, _wepy$component);

    function Danmu() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Danmu);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Danmu.__proto__ || Object.getPrototypeOf(Danmu)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            videoSrc: String,
            poster: String,
            danmuList: Array,
            height: Number
        }, _this.data = {
            inputValue: ''
        }, _this.events = {
            danmu: function danmu() {
                this.videoContext = wx.createVideoContext('video');
            }
        }, _this.methods = {
            getVideo: function getVideo() {
                var that = this;
                wx.chooseVideo({
                    sourceType: ['album', 'camera'],
                    maxDuration: 60,
                    camera: ['front', 'back'],
                    success: function success(res) {
                        that.videoSrc = res.tempFilePath;
                        that.$apply();
                    }
                });
            },
            inputBlur: function inputBlur(e) {
                this.inputValue = e.detail.value;
            },
            sendDanmu: function sendDanmu() {
                if (!this.inputValue || /^\s+|\s+$/.test(this.inputValue)) {
                    this.$emit('danmuEmpty');
                    return;
                }
                this.videoContext.sendDanmu({
                    text: this.inputValue,
                    color: this.getRandomColor()
                });
                this.inputValue = '';
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Danmu, [{
        key: 'getRandomColor',
        value: function getRandomColor() {
            var rgb = [];
            for (var i = 0; i < 3; ++i) {
                var color = Math.floor(Math.random() * 256).toString(16);
                color = color.length == 1 ? '0' + color : color;
                rgb.push(color);
            }
            return '#' + rgb.join('');
        }
    }]);

    return Danmu;
}(_wepy2.default.component);

exports.default = Danmu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhbm11LmpzIl0sIm5hbWVzIjpbIkRhbm11IiwicHJvcHMiLCJ2aWRlb1NyYyIsIlN0cmluZyIsInBvc3RlciIsImRhbm11TGlzdCIsIkFycmF5IiwiaGVpZ2h0IiwiTnVtYmVyIiwiZGF0YSIsImlucHV0VmFsdWUiLCJldmVudHMiLCJkYW5tdSIsInZpZGVvQ29udGV4dCIsInd4IiwiY3JlYXRlVmlkZW9Db250ZXh0IiwibWV0aG9kcyIsImdldFZpZGVvIiwidGhhdCIsImNob29zZVZpZGVvIiwic291cmNlVHlwZSIsIm1heER1cmF0aW9uIiwiY2FtZXJhIiwic3VjY2VzcyIsInJlcyIsInRlbXBGaWxlUGF0aCIsIiRhcHBseSIsImlucHV0Qmx1ciIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsInNlbmREYW5tdSIsInRlc3QiLCIkZW1pdCIsInRleHQiLCJjb2xvciIsImdldFJhbmRvbUNvbG9yIiwicmdiIiwiaSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwibGVuZ3RoIiwicHVzaCIsImpvaW4iLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsSyxHQUFRO0FBQ0pDLHNCQUFVQyxNQUROO0FBRUpDLG9CQUFRRCxNQUZKO0FBR0pFLHVCQUFXQyxLQUhQO0FBSUpDLG9CQUFRQztBQUpKLFMsUUFPUkMsSSxHQUFPO0FBQ0hDLHdCQUFZO0FBRFQsUyxRQUlQQyxNLEdBQVM7QUFDTEMsaUJBREssbUJBQ0c7QUFDSixxQkFBS0MsWUFBTCxHQUFvQkMsR0FBR0Msa0JBQUgsQ0FBc0IsT0FBdEIsQ0FBcEI7QUFDSDtBQUhJLFMsUUFnQlRDLE8sR0FBVTtBQUNOQyxvQkFETSxzQkFDSztBQUNQLG9CQUFJQyxPQUFPLElBQVg7QUFDQUosbUJBQUdLLFdBQUgsQ0FBZTtBQUNYQyxnQ0FBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBREQ7QUFFWEMsaUNBQWEsRUFGRjtBQUdYQyw0QkFBUSxDQUFDLE9BQUQsRUFBVSxNQUFWLENBSEc7QUFJWEMsNkJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNuQk4sNkJBQUtoQixRQUFMLEdBQWdCc0IsSUFBSUMsWUFBcEI7QUFDQVAsNkJBQUtRLE1BQUw7QUFDSDtBQVBVLGlCQUFmO0FBU0gsYUFaSztBQWFOQyxxQkFiTSxxQkFhSUMsQ0FiSixFQWFPO0FBQ1QscUJBQUtsQixVQUFMLEdBQWtCa0IsRUFBRUMsTUFBRixDQUFTQyxLQUEzQjtBQUNILGFBZks7QUFnQk5DLHFCQWhCTSx1QkFnQk07QUFDUixvQkFBSSxDQUFDLEtBQUtyQixVQUFOLElBQW9CLFlBQVlzQixJQUFaLENBQWlCLEtBQUt0QixVQUF0QixDQUF4QixFQUEyRDtBQUN2RCx5QkFBS3VCLEtBQUwsQ0FBVyxZQUFYO0FBQ0E7QUFDSDtBQUNELHFCQUFLcEIsWUFBTCxDQUFrQmtCLFNBQWxCLENBQTRCO0FBQ3hCRywwQkFBTSxLQUFLeEIsVUFEYTtBQUV4QnlCLDJCQUFPLEtBQUtDLGNBQUw7QUFGaUIsaUJBQTVCO0FBSUEscUJBQUsxQixVQUFMLEdBQWtCLEVBQWxCO0FBQ0g7QUExQkssUzs7Ozs7eUNBVk87QUFDYixnQkFBSTJCLE1BQU0sRUFBVjtBQUNBLGlCQUFLLElBQUlDLElBQUksQ0FBYixFQUFpQkEsSUFBSSxDQUFyQixFQUF3QixFQUFFQSxDQUExQixFQUE0QjtBQUN4QixvQkFBSUgsUUFBUUksS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLEtBQWdCLEdBQTNCLEVBQWdDQyxRQUFoQyxDQUF5QyxFQUF6QyxDQUFaO0FBQ0FQLHdCQUFRQSxNQUFNUSxNQUFOLElBQWdCLENBQWhCLEdBQW9CLE1BQU1SLEtBQTFCLEdBQWtDQSxLQUExQztBQUNBRSxvQkFBSU8sSUFBSixDQUFTVCxLQUFUO0FBQ0g7QUFDRCxtQkFBTyxNQUFNRSxJQUFJUSxJQUFKLENBQVMsRUFBVCxDQUFiO0FBQ0g7Ozs7RUExQjhCLGVBQUtDLFM7O2tCQUFuQjlDLEsiLCJmaWxlIjoiZGFubXUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhbm11IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgICB2aWRlb1NyYzogU3RyaW5nLFxuICAgICAgICBwb3N0ZXI6IFN0cmluZyxcbiAgICAgICAgZGFubXVMaXN0OiBBcnJheSxcbiAgICAgICAgaGVpZ2h0OiBOdW1iZXJcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgICBpbnB1dFZhbHVlOiAnJ1xuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICAgICAgZGFubXUoKSB7XG4gICAgICAgICAgICB0aGlzLnZpZGVvQ29udGV4dCA9IHd4LmNyZWF0ZVZpZGVvQ29udGV4dCgndmlkZW8nKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UmFuZG9tQ29sb3IoKSB7XG4gICAgICAgIGxldCByZ2IgPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCAzOyArK2kpe1xuICAgICAgICAgICAgbGV0IGNvbG9yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KS50b1N0cmluZygxNilcbiAgICAgICAgICAgIGNvbG9yID0gY29sb3IubGVuZ3RoID09IDEgPyAnMCcgKyBjb2xvciA6IGNvbG9yXG4gICAgICAgICAgICByZ2IucHVzaChjb2xvcilcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyMnICsgcmdiLmpvaW4oJycpXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgICAgZ2V0VmlkZW8oKSB7XG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICAgICAgICAgIHd4LmNob29zZVZpZGVvKHtcbiAgICAgICAgICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxuICAgICAgICAgICAgICAgIG1heER1cmF0aW9uOiA2MCxcbiAgICAgICAgICAgICAgICBjYW1lcmE6IFsnZnJvbnQnLCAnYmFjayddLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LnZpZGVvU3JjID0gcmVzLnRlbXBGaWxlUGF0aFxuICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgaW5wdXRCbHVyKGUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIHNlbmREYW5tdSgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pbnB1dFZhbHVlIHx8IC9eXFxzK3xcXHMrJC8udGVzdCh0aGlzLmlucHV0VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnZGFubXVFbXB0eScpXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZpZGVvQ29udGV4dC5zZW5kRGFubXUoe1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuaW5wdXRWYWx1ZSxcbiAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5nZXRSYW5kb21Db2xvcigpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gJydcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==