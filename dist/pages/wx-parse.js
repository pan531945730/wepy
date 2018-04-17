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

var _wxParse = require('./../wxParse/wxParse.js');

var _wxParse2 = _interopRequireDefault(_wxParse);

var _api = require('./../common/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ParseHtml = function (_wepy$page) {
    _inherits(ParseHtml, _wepy$page);

    function ParseHtml() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ParseHtml);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ParseHtml.__proto__ || Object.getPrototypeOf(ParseHtml)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '解析html'
        }, _this.components = {
            'toast': _wepyComToast2.default
        }, _this.mixins = [_index2.default], _this.data = {
            insertData: [],
            tempData: []
        }, _this.methods = {
            wxParseTagATap: function wxParseTagATap(e) {
                var href = e.currentTarget.dataset.src;
                console.log(href);
            },
            insertNodeTap: function insertNodeTap() {
                var len = this.tempData.length + 1;
                var img = len < 10 ? '0' + len : len;
                var insert = '<div style="color:red;text-align:center;padding:20px;"><div style="color: blue;">' + len + '摇一摇</div>我是一个被插入的元素,喜欢[' + img + ']<img src="http://www.jq22.com/demo/jQueryWaterfallFlow20160830/img/' + img + '.jpg" /></div>';
                this.tempData.push(insert);
                _wxParse2.default.wxParse('insert' + (len - 1), 'html', insert, this, 50);
                _wxParse2.default.wxParseTemArray("insertData", 'insert', len, this);
            },
            wxParseImgLoad: function wxParseImgLoad(e) {
                this.wxParseImgLoad(e);
            },
            wxParseImgTap: function wxParseImgTap(e) {
                this.wxParseImgTap(e);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ParseHtml, [{
        key: 'onLoad',
        value: function onLoad(e, data) {
            var aHrefHrefData = '<div style="color:red;text-align:center;padding:20px;"><a href="https://weappdev.com/index.html">点击我，可以跳转</a></div>';
            _wxParse2.default.wxParse('aHrefHrefData', 'html', aHrefHrefData, this);

            _wxParse2.default.emojisInit();
            var emojisData = '<div style="color:red;text-align:center;padding:20px;"><a href="https://weappdev.com/index.html">点击我，可以跳转</a>我带有小表情[00][01][02][03]</div>';
            _wxParse2.default.wxParse('emojisData', 'html', emojisData, this);
        }
    }]);

    return ParseHtml;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(ParseHtml , 'pages/wx-parse'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4LXBhcnNlLmpzIl0sIm5hbWVzIjpbIlBhcnNlSHRtbCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwibWl4aW5zIiwiZGF0YSIsImluc2VydERhdGEiLCJ0ZW1wRGF0YSIsIm1ldGhvZHMiLCJ3eFBhcnNlVGFnQVRhcCIsImUiLCJocmVmIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzcmMiLCJjb25zb2xlIiwibG9nIiwiaW5zZXJ0Tm9kZVRhcCIsImxlbiIsImxlbmd0aCIsImltZyIsImluc2VydCIsInB1c2giLCJ3eFBhcnNlIiwid3hQYXJzZVRlbUFycmF5Iiwid3hQYXJzZUltZ0xvYWQiLCJ3eFBhcnNlSW1nVGFwIiwiYUhyZWZIcmVmRGF0YSIsImVtb2ppc0luaXQiLCJlbW9qaXNEYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7OztnTUFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUdUQyxVLEdBQWE7QUFDVDtBQURTLFMsUUFJYkMsTSxHQUFTLGlCLFFBRVRDLEksR0FBTztBQUNIQyx3QkFBWSxFQURUO0FBRUhDLHNCQUFVO0FBRlAsUyxRQUtQQyxPLEdBQVU7QUFDTkMsMEJBRE0sMEJBQ1NDLENBRFQsRUFDWTtBQUNkLG9CQUFJQyxPQUFPRCxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsR0FBbkM7QUFDQUMsd0JBQVFDLEdBQVIsQ0FBWUwsSUFBWjtBQUNILGFBSks7QUFLTk0seUJBTE0sMkJBS1U7QUFDWixvQkFBSUMsTUFBTSxLQUFLWCxRQUFMLENBQWNZLE1BQWQsR0FBdUIsQ0FBakM7QUFDQSxvQkFBSUMsTUFBTUYsTUFBTSxFQUFOLEdBQVcsTUFBTUEsR0FBakIsR0FBdUJBLEdBQWpDO0FBQ0Esb0JBQUlHLFNBQVMsc0ZBQXFGSCxHQUFyRixHQUEwRix5QkFBMUYsR0FBcUhFLEdBQXJILEdBQTBILHNFQUExSCxHQUFrTUEsR0FBbE0sR0FBdU0sZ0JBQXBOO0FBQ0EscUJBQUtiLFFBQUwsQ0FBY2UsSUFBZCxDQUFtQkQsTUFBbkI7QUFDQSxrQ0FBUUUsT0FBUixDQUFnQixZQUFZTCxNQUFJLENBQWhCLENBQWhCLEVBQW9DLE1BQXBDLEVBQTRDRyxNQUE1QyxFQUFvRCxJQUFwRCxFQUEwRCxFQUExRDtBQUNBLGtDQUFRRyxlQUFSLENBQXdCLFlBQXhCLEVBQXNDLFFBQXRDLEVBQWdETixHQUFoRCxFQUFxRCxJQUFyRDtBQUNILGFBWks7QUFhTk8sMEJBYk0sMEJBYVNmLENBYlQsRUFhWTtBQUNkLHFCQUFLZSxjQUFMLENBQW9CZixDQUFwQjtBQUNILGFBZks7QUFnQk5nQix5QkFoQk0seUJBZ0JRaEIsQ0FoQlIsRUFnQlc7QUFDYixxQkFBS2dCLGFBQUwsQ0FBbUJoQixDQUFuQjtBQUNIO0FBbEJLLFM7Ozs7OytCQXFCRkEsQyxFQUFHTCxJLEVBQU07QUFDYixnQkFBSXNCLGdCQUFnQixxSEFBcEI7QUFDQSw4QkFBUUosT0FBUixDQUFnQixlQUFoQixFQUFpQyxNQUFqQyxFQUF5Q0ksYUFBekMsRUFBd0QsSUFBeEQ7O0FBRUEsOEJBQVFDLFVBQVI7QUFDQSxnQkFBSUMsYUFBYSwySUFBakI7QUFDQSw4QkFBUU4sT0FBUixDQUFnQixZQUFoQixFQUE4QixNQUE5QixFQUFzQ00sVUFBdEMsRUFBa0QsSUFBbEQ7QUFDSDs7OztFQTNDa0MsZUFBS0MsSTs7a0JBQXZCOUIsUyIsImZpbGUiOiJ3eC1wYXJzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBNaXhpbiBmcm9tICcuLi9taXhpbnMvaW5kZXgnXG5pbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG5pbXBvcnQgV3hQYXJzZSBmcm9tICcuLi93eFBhcnNlL3d4UGFyc2UnXG5pbXBvcnQgYXBpIGZyb20gJy4uL2NvbW1vbi9hcGknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnNlSHRtbCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6Kej5p6QaHRtbCdcbiAgICB9XG4gICAgY29tcG9uZW50cyA9IHtcbiAgICAgICAgJ3RvYXN0JzogVG9hc3RcbiAgICB9XG5cbiAgICBtaXhpbnMgPSBbTWl4aW5dXG5cbiAgICBkYXRhID0ge1xuICAgICAgICBpbnNlcnREYXRhOiBbXSxcbiAgICAgICAgdGVtcERhdGE6IFtdXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgICAgd3hQYXJzZVRhZ0FUYXAoZSkge1xuICAgICAgICAgICAgdmFyIGhyZWYgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5zcmNcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGhyZWYpXG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydE5vZGVUYXAoKSB7XG4gICAgICAgICAgICBsZXQgbGVuID0gdGhpcy50ZW1wRGF0YS5sZW5ndGggKyAxXG4gICAgICAgICAgICBsZXQgaW1nID0gbGVuIDwgMTAgPyAnMCcgKyBsZW4gOiBsZW5cbiAgICAgICAgICAgIHZhciBpbnNlcnQgPSAnPGRpdiBzdHlsZT1cImNvbG9yOnJlZDt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjIwcHg7XCI+PGRpdiBzdHlsZT1cImNvbG9yOiBibHVlO1wiPicrIGxlbiArJ+aRh+S4gOaRhzwvZGl2PuaIkeaYr+S4gOS4quiiq+aPkuWFpeeahOWFg+e0oCzllpzmrKJbJysgaW1nICsnXTxpbWcgc3JjPVwiaHR0cDovL3d3dy5qcTIyLmNvbS9kZW1vL2pRdWVyeVdhdGVyZmFsbEZsb3cyMDE2MDgzMC9pbWcvJysgaW1nICsnLmpwZ1wiIC8+PC9kaXY+J1xuICAgICAgICAgICAgdGhpcy50ZW1wRGF0YS5wdXNoKGluc2VydClcbiAgICAgICAgICAgIFd4UGFyc2Uud3hQYXJzZSgnaW5zZXJ0JyArIChsZW4tMSksICdodG1sJywgaW5zZXJ0LCB0aGlzLCA1MClcbiAgICAgICAgICAgIFd4UGFyc2Uud3hQYXJzZVRlbUFycmF5KFwiaW5zZXJ0RGF0YVwiLCAnaW5zZXJ0JywgbGVuLCB0aGlzKVxuICAgICAgICB9LFxuICAgICAgICB3eFBhcnNlSW1nTG9hZChlKSB7XG4gICAgICAgICAgICB0aGlzLnd4UGFyc2VJbWdMb2FkKGUpXG4gICAgICAgIH0sXG4gICAgICAgIHd4UGFyc2VJbWdUYXAoZSkge1xuICAgICAgICAgICAgdGhpcy53eFBhcnNlSW1nVGFwKGUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQgKGUsIGRhdGEpIHtcbiAgICAgICAgdmFyIGFIcmVmSHJlZkRhdGEgPSAnPGRpdiBzdHlsZT1cImNvbG9yOnJlZDt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjIwcHg7XCI+PGEgaHJlZj1cImh0dHBzOi8vd2VhcHBkZXYuY29tL2luZGV4Lmh0bWxcIj7ngrnlh7vmiJHvvIzlj6/ku6Xot7Povaw8L2E+PC9kaXY+J1xuICAgICAgICBXeFBhcnNlLnd4UGFyc2UoJ2FIcmVmSHJlZkRhdGEnLCAnaHRtbCcsIGFIcmVmSHJlZkRhdGEsIHRoaXMpXG5cbiAgICAgICAgV3hQYXJzZS5lbW9qaXNJbml0KClcbiAgICAgICAgdmFyIGVtb2ppc0RhdGEgPSAnPGRpdiBzdHlsZT1cImNvbG9yOnJlZDt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjIwcHg7XCI+PGEgaHJlZj1cImh0dHBzOi8vd2VhcHBkZXYuY29tL2luZGV4Lmh0bWxcIj7ngrnlh7vmiJHvvIzlj6/ku6Xot7Povaw8L2E+5oiR5bim5pyJ5bCP6KGo5oOFWzAwXVswMV1bMDJdWzAzXTwvZGl2PidcbiAgICAgICAgV3hQYXJzZS53eFBhcnNlKCdlbW9qaXNEYXRhJywgJ2h0bWwnLCBlbW9qaXNEYXRhLCB0aGlzKVxuICAgIH1cbn1cbiJdfQ==