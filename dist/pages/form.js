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

var _checkbox = require('./../components/checkbox.js');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _pickerCity = require('./../components/picker-city.js');

var _pickerCity2 = _interopRequireDefault(_pickerCity);

var _pickerCity3 = require('./../components/picker-city2.js');

var _pickerCity4 = _interopRequireDefault(_pickerCity3);

var _pickerDate = require('./../components/picker-date.js');

var _pickerDate2 = _interopRequireDefault(_pickerDate);

var _api = require('./../common/api.js');

var _api2 = _interopRequireDefault(_api);

var _cityData = require('./../common/cityData.js');

var cityData = _interopRequireWildcard(_cityData);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_wepy$page) {
    _inherits(Form, _wepy$page);

    function Form() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Form);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '表单组件'
        }, _this.$repeat = {}, _this.$props = { "mycheckbox": { "xmlns:v-bind": "", "v-bind:labelClass.once": "label", "v-bind:index.once": "index", "v-bind:name.once": "item.name", "v-bind:value.once": "item.value", "v-bind:checked.once": "item.checked" }, "city": { "v-bind:cityData.once": "cityData" }, "city2": { "v-bind:cityData.once": "cityData" }, "pdate": { "v-bind:start.once": "startDate" } }, _this.$events = {}, _this.components = {
            'toast': _wepyComToast2.default,
            'mycheckbox': _checkbox2.default,
            'mycheckbox2': _checkbox2.default,
            'city': _pickerCity2.default,
            'city2': _pickerCity4.default,
            'pdate': _pickerDate2.default
        }, _this.mixins = [_index2.default], _this.data = {
            label: 'label',
            items: [{ name: 'USA', value: '美国' }, { name: 'CHN', value: '中国', checked: true }, { name: 'BRA', value: '巴西' }, { name: 'JPN', value: '日本' }, { name: 'ENG', value: '英国' }, { name: 'TUR', value: '法国' }],
            startDate: '1998-02-22',
            cityData: cityData,
            date: '2016-09-01',
            time: '12:01',
            files: []
        }, _this.computed = {}, _this.methods = {
            checkboxChange: function checkboxChange(e) {
                console.log('checkbox发生change事件，携带value值为：', e.detail.value);
            },
            radioChange: function radioChange(e) {
                console.log('radio发生change事件，携带value值为：', e.detail.value);
            },
            switch1Change: function switch1Change(e) {
                console.log('switch1 发生 change 事件，携带值为', e.detail.value);
            },
            timeChange: function timeChange(e) {
                this.time = e.detail.value;
            },
            dateChange: function dateChange(e) {
                this.date = e.detail.value;
            },
            sliderChange: function sliderChange(e) {
                console.log('slider 发生 change 事件，携带值为', e.detail.value);
            },
            textConfirm: function textConfirm(e) {
                console.log(e.detail.value);
            },
            chooseImage: function chooseImage(e) {
                var _this2 = this;

                return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var res;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return _wepy2.default.chooseImage({
                                        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                                        sourceType: ['album', 'camera'] // 可以指定来源是相册还是相机，默认二者都有
                                    });

                                case 2:
                                    res = _context.sent;

                                    console.log(res);
                                    _this2.files = _this2.files.concat(res.tempFilePaths);

                                    _this2.$apply();

                                case 6:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2);
                }))();
            }
        }, _this.events = {
            citychange: function citychange(data) {
                console.log(data);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Form, [{
        key: 'onLoad',
        value: function onLoad(e) {
            this.$broadcast('cityInit', 1, 0, 0);
            this.$broadcast('dateInit', '2004-05-11');
            console.log(this.$parent.globalData);
        }
    }]);

    return Form;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Form , 'pages/form'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiXSwibmFtZXMiOlsiY2l0eURhdGEiLCJGb3JtIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm1peGlucyIsImRhdGEiLCJsYWJlbCIsIml0ZW1zIiwibmFtZSIsInZhbHVlIiwiY2hlY2tlZCIsInN0YXJ0RGF0ZSIsImRhdGUiLCJ0aW1lIiwiZmlsZXMiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJjaGVja2JveENoYW5nZSIsImUiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwicmFkaW9DaGFuZ2UiLCJzd2l0Y2gxQ2hhbmdlIiwidGltZUNoYW5nZSIsImRhdGVDaGFuZ2UiLCJzbGlkZXJDaGFuZ2UiLCJ0ZXh0Q29uZmlybSIsImNob29zZUltYWdlIiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwicmVzIiwiY29uY2F0IiwidGVtcEZpbGVQYXRocyIsIiRhcHBseSIsImV2ZW50cyIsImNpdHljaGFuZ2UiLCIkYnJvYWRjYXN0IiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLFE7Ozs7Ozs7Ozs7Ozs7O0lBRVNDLEk7Ozs7Ozs7Ozs7Ozs7O3NMQUNwQkMsTSxHQUFTO0FBQ1JDLG9DQUF3QjtBQURoQixTLFFBR1ZDLE8sR0FBVSxFLFFBQ1ZDLE0sR0FBUyxFQUFDLGNBQWEsRUFBQyxnQkFBZSxFQUFoQixFQUFtQiwwQkFBeUIsT0FBNUMsRUFBb0QscUJBQW9CLE9BQXhFLEVBQWdGLG9CQUFtQixXQUFuRyxFQUErRyxxQkFBb0IsWUFBbkksRUFBZ0osdUJBQXNCLGNBQXRLLEVBQWQsRUFBb00sUUFBTyxFQUFDLHdCQUF1QixVQUF4QixFQUEzTSxFQUErTyxTQUFRLEVBQUMs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QUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQztBQUNHLGlCQUFLQSxVQUFMLENBQWdCLFVBQWhCLEVBQTRCLFlBQTVCO0FBQ0FsQixvQkFBUUMsR0FBUixDQUFZLEtBQUtrQixPQUFMLENBQWFDLFVBQXpCO0FBQ047Ozs7RUE5RWdDLGVBQUtDLEk7O2tCQUFsQjNDLEkiLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBNaXhpbiBmcm9tICcuLi9taXhpbnMvaW5kZXgnXG5pbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi4vY29tcG9uZW50cy9jaGVja2JveCdcbmltcG9ydCBQaWNrZXJDaXR5IGZyb20gJy4uL2NvbXBvbmVudHMvcGlja2VyLWNpdHknXG5pbXBvcnQgUGlja2VyQ2l0eTIgZnJvbSAnLi4vY29tcG9uZW50cy9waWNrZXItY2l0eTInXG5pbXBvcnQgUGlja2VyRGF0ZSBmcm9tICcuLi9jb21wb25lbnRzL3BpY2tlci1kYXRlJ1xuaW1wb3J0IGFwaSBmcm9tICcuLi9jb21tb24vYXBpJ1xuaW1wb3J0ICogYXMgY2l0eURhdGEgZnJvbSAnLi4vY29tbW9uL2NpdHlEYXRhJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtIGV4dGVuZHMgd2VweS5wYWdlIHtcblx0Y29uZmlnID0ge1xuXHRcdG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfooajljZXnu4Tku7YnXG5cdH1cbiRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wibXljaGVja2JveFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bGFiZWxDbGFzcy5vbmNlXCI6XCJsYWJlbFwiLFwidi1iaW5kOmluZGV4Lm9uY2VcIjpcImluZGV4XCIsXCJ2LWJpbmQ6bmFtZS5vbmNlXCI6XCJpdGVtLm5hbWVcIixcInYtYmluZDp2YWx1ZS5vbmNlXCI6XCJpdGVtLnZhbHVlXCIsXCJ2LWJpbmQ6Y2hlY2tlZC5vbmNlXCI6XCJpdGVtLmNoZWNrZWRcIn0sXCJjaXR5XCI6e1widi1iaW5kOmNpdHlEYXRhLm9uY2VcIjpcImNpdHlEYXRhXCJ9LFwiY2l0eTJcIjp7XCJ2LWJpbmQ6Y2l0eURhdGEub25jZVwiOlwiY2l0eURhdGFcIn0sXCJwZGF0ZVwiOntcInYtYmluZDpzdGFydC5vbmNlXCI6XCJzdGFydERhdGVcIn19O1xyXG4kZXZlbnRzID0ge307XHJcblx0Y29tcG9uZW50cyA9IHtcblx0XHQndG9hc3QnOiBUb2FzdCxcbiAgICAgICAgJ215Y2hlY2tib3gnOiBDaGVja2JveCxcbiAgICAgICAgJ215Y2hlY2tib3gyJzogQ2hlY2tib3gsXG4gICAgICAgICdjaXR5JzogUGlja2VyQ2l0eSxcbiAgICAgICAgJ2NpdHkyJzogUGlja2VyQ2l0eTIsXG4gICAgICAgICdwZGF0ZSc6IFBpY2tlckRhdGVcblx0fVxuXG5cdG1peGlucyA9IFtNaXhpbl1cblxuXHRkYXRhID0ge1xuICAgICAgICBsYWJlbDogJ2xhYmVsJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtuYW1lOiAnVVNBJywgdmFsdWU6ICfnvo7lm70nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQ0hOJywgdmFsdWU6ICfkuK3lm70nLCBjaGVja2VkOiB0cnVlfSxcbiAgICAgICAgICAgIHtuYW1lOiAnQlJBJywgdmFsdWU6ICflt7Topb8nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnSlBOJywgdmFsdWU6ICfml6XmnKwnfSxcbiAgICAgICAgICAgIHtuYW1lOiAnRU5HJywgdmFsdWU6ICfoi7Hlm70nfSxcbiAgICAgICAgICAgIHtuYW1lOiAnVFVSJywgdmFsdWU6ICfms5Xlm70nfSxcbiAgICAgICAgXSxcbiAgICAgICAgc3RhcnREYXRlOiAnMTk5OC0wMi0yMicsXG4gICAgICAgIGNpdHlEYXRhOiBjaXR5RGF0YSxcbiAgICAgICAgZGF0ZTogJzIwMTYtMDktMDEnLFxuICAgICAgICB0aW1lOiAnMTI6MDEnLFxuXHRcdGZpbGVzOiBbXVxuXHR9XG5cblx0Y29tcHV0ZWQgPSB7XG5cblx0fVxuXG5cdG1ldGhvZHMgPSB7XG4gICAgICAgIGNoZWNrYm94Q2hhbmdlKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGVja2JveOWPkeeUn2NoYW5nZeS6i+S7tu+8jOaQuuW4pnZhbHVl5YC85Li677yaJywgZS5kZXRhaWwudmFsdWUpXG4gICAgICAgIH0sXG4gICAgICAgIHJhZGlvQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyYWRpb+WPkeeUn2NoYW5nZeS6i+S7tu+8jOaQuuW4pnZhbHVl5YC85Li677yaJywgZS5kZXRhaWwudmFsdWUpXG4gICAgICAgIH0sXG4gICAgICAgIHN3aXRjaDFDaGFuZ2UoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N3aXRjaDEg5Y+R55SfIGNoYW5nZSDkuovku7bvvIzmkLrluKblgLzkuLonLCBlLmRldGFpbC52YWx1ZSlcbiAgICAgICAgfSxcbiAgICAgICAgdGltZUNoYW5nZShlKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSBlLmRldGFpbC52YWx1ZVxuXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGVDaGFuZ2UoZSkge1xuICAgICAgICAgICAgdGhpcy5kYXRlID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgc2xpZGVyQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzbGlkZXIg5Y+R55SfIGNoYW5nZSDkuovku7bvvIzmkLrluKblgLzkuLonLCBlLmRldGFpbC52YWx1ZSlcbiAgICAgICAgfSxcbiAgICAgICAgdGV4dENvbmZpcm0oZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUpXG4gICAgICAgIH0sXG5cdFx0YXN5bmMgY2hvb3NlSW1hZ2UgKGUpIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sIC8vIOWPr+S7peaMh+WumuaYr+WOn+Wbvui/mOaYr+WOi+e8qeWbvu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICAgICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10gLy8g5Y+v5Lul5oyH5a6a5p2l5rqQ5piv55u45YaM6L+Y5piv55u45py677yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgIHRoaXMuZmlsZXMgPSB0aGlzLmZpbGVzLmNvbmNhdChyZXMudGVtcEZpbGVQYXRocyk7XG5cbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cblx0fVxuXG5cdG9uTG9hZCAoZSkge1xuXHQgICAgdGhpcy4kYnJvYWRjYXN0KCdjaXR5SW5pdCcsIDEsIDAsIDApXG4gICAgICAgIHRoaXMuJGJyb2FkY2FzdCgnZGF0ZUluaXQnLCAnMjAwNC0wNS0xMScpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhKVxuXHR9XG5cblx0ZXZlbnRzID0ge1xuXHQgICAgY2l0eWNoYW5nZShkYXRhKSB7XG5cdCAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==