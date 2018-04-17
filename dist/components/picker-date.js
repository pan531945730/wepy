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

function padding(num) {
    num = ~~num;
    if (num === 0) {
        return '0';
    }
    if (num < 10) {
        return '0' + num;
    }
    return num + '';
}
function makeYear(start, end) {
    var years = [];
    start = ~~start;
    end = ~~end;
    for (; start <= end; start++) {
        years.push(padding(start));
    }
    return years;
}
function makeMonth(start, end) {
    var months = [];
    start = ~~start || 1;
    end = ~~end || 12;
    for (; start <= end; start++) {
        months.push(padding(start));
    }
    return months;
}
function makeDay(year, month, oldStart, oldEnd) {
    var days = [];
    var start = 1;
    var end = void 0;
    month = ~~month;
    year = ~~year;
    if (month === 2 && year % 4 === 0) {
        end = 29;
    } else if (month === 2 && year % 4 !== 0) {
        end = 28;
    } else if (/(1|3|5|7|8|10|12)/.test(month)) {
        end = 31;
    } else if (/(4|6|9|11)/.test(month)) {
        end = 30;
    }
    start = ~~oldStart || start;
    end = ~~oldEnd || end;

    for (; start <= end; start++) {
        days.push(padding(start));
    }
    return days;
}
function getValue(opt) {
    var data = [];
    data[0] = opt.years.indexOf(opt.year);
    data[1] = opt.months.indexOf(opt.month);
    data[2] = opt.days.indexOf(opt.day);
    return data;
}
var date = new Date();
var end = date.getFullYear() + '-' + padding(date.getMonth() + 1) + '-' + padding(date.getDate());

var PickerDate = function (_wepy$component) {
    _inherits(PickerDate, _wepy$component);

    function PickerDate() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, PickerDate);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PickerDate.__proto__ || Object.getPrototypeOf(PickerDate)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            start: {
                type: String,
                default: '1900-01-01'
            },
            end: {
                type: String,
                default: end
            }
        }, _this.data = {
            top: 300,
            show: false,
            years: [],
            year: '',
            months: [],
            month: '',
            days: [],
            day: '',
            value: [9999, 1, 1]
        }, _this.methods = {
            change: function change(e) {
                var val = e.detail.value;
                this.changeYear = this.years[val[0]];
                this.changeMonth = this.months[val[1]];
                this.changeDay = this.days[val[2]];
                this.makeData(this.changeYear + '-' + this.changeMonth + '-' + this.changeDay);
            },
            changeReset: function changeReset() {
                this.changeYear = this.changeMonth = this.changeDay = null;
            },
            pickerSure: function pickerSure() {
                var _this2 = this;

                if (!this.changeYear || !this.changeMonth || !this.changeDay) {
                    //防止滑动过程中点击按钮bug
                    return;
                }
                if (this.changeYear !== true) {
                    this.year = this.changeYear;
                    this.month = this.changeMonth;
                    this.day = this.changeDay;
                }

                this.top = 300;

                setTimeout(function () {
                    _this2.show = false;
                    _this2.$apply();
                }, 500);
            },
            pickerShow: function pickerShow() {
                var _this3 = this;

                this.show = true;
                this.changeYear = this.changeMonth = this.changeDay = true;
                setTimeout(function () {
                    _this3.top = 0;
                    _this3.value = getValue({
                        years: _this3.years,
                        year: _this3.year,
                        months: _this3.months,
                        month: _this3.month,
                        days: _this3.days,
                        day: _this3.day
                    });
                    _this3.$apply();
                });
            },
            pickerHide: function pickerHide() {
                var _this4 = this;

                if (!this.changeYear || !this.changeMonth || !this.changeDay) {
                    return;
                }
                this.top = 300;
                this.makeData(this.year + '-' + this.month + '-' + this.day);
                this.value = [0, 0, 0];
                setTimeout(function () {
                    _this4.show = false;
                    _this4.$apply();
                }, 500);
            }
        }, _this.events = {
            dateInit: function dateInit(defaultValue) {
                var data = defaultValue.split(/[-\/]/);
                this.year = data[0];
                this.month = data[1];
                this.day = data[2];

                this.makeData(defaultValue);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(PickerDate, [{
        key: 'makeData',
        value: function makeData(defaultValue) {
            var data = defaultValue.split(/[-\/]/);
            var year = data[0];
            var month = data[1];
            var startData = this.start.split(/[-\/]/);
            var endData = this.end.split(/[-\/]/);
            this.years = makeYear(startData[0], endData[0]);

            if (year === startData[0]) {
                this.months = makeMonth(startData[1]);
                if (month === startData[1]) {
                    this.days = makeDay(year, month, startData[2]);
                } else {
                    this.days = makeDay(year, month);
                }
                return;
            }
            if (year === endData[0]) {
                this.months = makeMonth(1, endData[1]);

                if (month === endData[1]) {
                    this.days = makeDay(year, month, 1, endData[2]);
                } else {
                    this.days = makeDay(year, month);
                }
                return;
            }
            this.months = makeMonth();
            this.days = makeDay(year, month);
        }
    }]);

    return PickerDate;
}(_wepy2.default.component);

exports.default = PickerDate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpY2tlci1kYXRlLmpzIl0sIm5hbWVzIjpbInBhZGRpbmciLCJudW0iLCJtYWtlWWVhciIsInN0YXJ0IiwiZW5kIiwieWVhcnMiLCJwdXNoIiwibWFrZU1vbnRoIiwibW9udGhzIiwibWFrZURheSIsInllYXIiLCJtb250aCIsIm9sZFN0YXJ0Iiwib2xkRW5kIiwiZGF5cyIsInRlc3QiLCJnZXRWYWx1ZSIsIm9wdCIsImRhdGEiLCJpbmRleE9mIiwiZGF5IiwiZGF0ZSIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsIlBpY2tlckRhdGUiLCJwcm9wcyIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwidG9wIiwic2hvdyIsInZhbHVlIiwibWV0aG9kcyIsImNoYW5nZSIsImUiLCJ2YWwiLCJkZXRhaWwiLCJjaGFuZ2VZZWFyIiwiY2hhbmdlTW9udGgiLCJjaGFuZ2VEYXkiLCJtYWtlRGF0YSIsImNoYW5nZVJlc2V0IiwicGlja2VyU3VyZSIsInNldFRpbWVvdXQiLCIkYXBwbHkiLCJwaWNrZXJTaG93IiwicGlja2VySGlkZSIsImV2ZW50cyIsImRhdGVJbml0IiwiZGVmYXVsdFZhbHVlIiwic3BsaXQiLCJzdGFydERhdGEiLCJlbmREYXRhIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFDbEJBLFVBQU0sQ0FBQyxDQUFDQSxHQUFSO0FBQ0EsUUFBSUEsUUFBUSxDQUFaLEVBQWU7QUFDWCxlQUFPLEdBQVA7QUFDSDtBQUNELFFBQUlBLE1BQU0sRUFBVixFQUFjO0FBQ1YsZUFBTyxNQUFNQSxHQUFiO0FBQ0g7QUFDRCxXQUFPQSxNQUFNLEVBQWI7QUFDSDtBQUNELFNBQVNDLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCQyxHQUF6QixFQUE4QjtBQUMxQixRQUFJQyxRQUFRLEVBQVo7QUFDQUYsWUFBUSxDQUFDLENBQUNB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LENBQVIsQ0FBZCxFQUEwQjtBQUN0Qix5QkFBS3hDLElBQUwsR0FBWUwsUUFBUUMsSUFBUixFQUFjQyxLQUFkLEVBQXFCLENBQXJCLEVBQXdCMkMsUUFBUSxDQUFSLENBQXhCLENBQVo7QUFDSCxpQkFGRCxNQUVPO0FBQ0gseUJBQUt4QyxJQUFMLEdBQVlMLFFBQVFDLElBQVIsRUFBY0MsS0FBZCxDQUFaO0FBQ0g7QUFDRDtBQUNIO0FBQ0QsaUJBQUtILE1BQUwsR0FBY0QsV0FBZDtBQUNBLGlCQUFLTyxJQUFMLEdBQVlMLFFBQVFDLElBQVIsRUFBY0MsS0FBZCxDQUFaO0FBRUg7Ozs7RUF2RG1DLGVBQUs0QyxTOztrQkFBeEI3QixVIiwiZmlsZSI6InBpY2tlci1kYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5mdW5jdGlvbiBwYWRkaW5nKG51bSkge1xuICAgIG51bSA9IH5+bnVtXG4gICAgaWYgKG51bSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJzAnXG4gICAgfVxuICAgIGlmIChudW0gPCAxMCkge1xuICAgICAgICByZXR1cm4gJzAnICsgbnVtXG4gICAgfVxuICAgIHJldHVybiBudW0gKyAnJ1xufVxuZnVuY3Rpb24gbWFrZVllYXIoc3RhcnQsIGVuZCkge1xuICAgIGxldCB5ZWFycyA9IFtdXG4gICAgc3RhcnQgPSB+fnN0YXJ0XG4gICAgZW5kID0gfn5lbmRcbiAgICBmb3IgKDsgc3RhcnQgPD0gZW5kOyBzdGFydCsrKSB7XG4gICAgICAgIHllYXJzLnB1c2gocGFkZGluZyhzdGFydCkpXG4gICAgfVxuICAgIHJldHVybiB5ZWFyc1xufVxuZnVuY3Rpb24gbWFrZU1vbnRoKHN0YXJ0LCBlbmQpIHtcbiAgICBsZXQgbW9udGhzID0gW11cbiAgICBzdGFydCA9IH5+c3RhcnQgfHwgMVxuICAgIGVuZCA9IH5+ZW5kIHx8IDEyXG4gICAgZm9yICg7IHN0YXJ0IDw9IGVuZDsgc3RhcnQrKykge1xuICAgICAgICBtb250aHMucHVzaChwYWRkaW5nKHN0YXJ0KSlcbiAgICB9XG4gICAgcmV0dXJuIG1vbnRoc1xufVxuZnVuY3Rpb24gbWFrZURheSh5ZWFyLCBtb250aCwgb2xkU3RhcnQsIG9sZEVuZCkge1xuICAgIGxldCBkYXlzID0gW11cbiAgICBsZXQgc3RhcnQgPSAxXG4gICAgbGV0IGVuZFxuICAgIG1vbnRoID0gfn5tb250aFxuICAgIHllYXIgPSB+fnllYXJcbiAgICBpZiAobW9udGggPT09IDIgJiYgeWVhciU0ID09PSAwKSB7XG4gICAgICAgIGVuZCA9IDI5XG4gICAgfSBlbHNlIGlmIChtb250aCA9PT0gMiAmJiB5ZWFyJTQgIT09IDApIHtcbiAgICAgICAgZW5kID0gMjhcbiAgICB9IGVsc2UgaWYgKC8oMXwzfDV8N3w4fDEwfDEyKS8udGVzdChtb250aCkpIHtcbiAgICAgICAgZW5kID0gMzFcbiAgICB9IGVsc2UgaWYgKC8oNHw2fDl8MTEpLy50ZXN0KG1vbnRoKSkge1xuICAgICAgICBlbmQgPSAzMFxuICAgIH1cbiAgICBzdGFydCA9IH5+b2xkU3RhcnQgfHwgc3RhcnRcbiAgICBlbmQgPSB+fm9sZEVuZCB8fCBlbmRcblxuICAgIGZvciAoOyBzdGFydCA8PSBlbmQ7IHN0YXJ0KyspIHtcbiAgICAgICAgZGF5cy5wdXNoKHBhZGRpbmcoc3RhcnQpKVxuICAgIH1cbiAgICByZXR1cm4gZGF5c1xufVxuZnVuY3Rpb24gZ2V0VmFsdWUob3B0KSB7XG4gICAgbGV0IGRhdGEgPSBbXVxuICAgIGRhdGFbMF0gPSBvcHQueWVhcnMuaW5kZXhPZihvcHQueWVhcilcbiAgICBkYXRhWzFdID0gb3B0Lm1vbnRocy5pbmRleE9mKG9wdC5tb250aClcbiAgICBkYXRhWzJdID0gb3B0LmRheXMuaW5kZXhPZihvcHQuZGF5KVxuICAgIHJldHVybiBkYXRhXG59XG5jb25zdCBkYXRlID0gbmV3IERhdGUoKVxuY29uc3QgZW5kID0gZGF0ZS5nZXRGdWxsWWVhcigpICsgJy0nICsgcGFkZGluZyhkYXRlLmdldE1vbnRoKCkgKyAxKSArICctJyArIHBhZGRpbmcoZGF0ZS5nZXREYXRlKCkpXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlja2VyRGF0ZSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcblx0cHJvcHMgPSB7XG4gICAgICAgIHN0YXJ0OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnMTkwMC0wMS0wMSdcbiAgICAgICAgfSxcbiAgICAgICAgZW5kOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiBlbmRcbiAgICAgICAgfVxuXHR9XG5cblx0ZGF0YSA9IHtcbiAgICAgICAgdG9wOiAzMDAsXG4gICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICB5ZWFyczogW10sXG4gICAgICAgIHllYXI6ICcnLFxuICAgICAgICBtb250aHM6IFtdLFxuICAgICAgICBtb250aDogJycsXG4gICAgICAgIGRheXM6IFtdLFxuICAgICAgICBkYXk6ICcnLFxuICAgICAgICB2YWx1ZTogWzk5OTksIDEsIDFdXG4gICAgfVxuXG4gICAgbWFrZURhdGEoZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGxldCBkYXRhID0gZGVmYXVsdFZhbHVlLnNwbGl0KC9bLVxcL10vKVxuICAgICAgICBsZXQgeWVhciA9IGRhdGFbMF1cbiAgICAgICAgbGV0IG1vbnRoID0gZGF0YVsxXVxuICAgICAgICBsZXQgc3RhcnREYXRhID0gdGhpcy5zdGFydC5zcGxpdCgvWy1cXC9dLylcbiAgICAgICAgbGV0IGVuZERhdGEgPSB0aGlzLmVuZC5zcGxpdCgvWy1cXC9dLylcbiAgICAgICAgdGhpcy55ZWFycyA9IG1ha2VZZWFyKHN0YXJ0RGF0YVswXSwgZW5kRGF0YVswXSlcblxuICAgICAgICBpZiAoeWVhciA9PT0gc3RhcnREYXRhWzBdKSB7XG4gICAgICAgICAgICB0aGlzLm1vbnRocyA9IG1ha2VNb250aChzdGFydERhdGFbMV0pXG4gICAgICAgICAgICBpZiAobW9udGggPT09IHN0YXJ0RGF0YVsxXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF5cyA9IG1ha2VEYXkoeWVhciwgbW9udGgsIHN0YXJ0RGF0YVsyXSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXlzID0gbWFrZURheSh5ZWFyLCBtb250aClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVyblxuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHllYXIgPT09IGVuZERhdGFbMF0pIHtcbiAgICAgICAgICAgIHRoaXMubW9udGhzID0gbWFrZU1vbnRoKDEsIGVuZERhdGFbMV0pXG5cbiAgICAgICAgICAgIGlmIChtb250aCA9PT0gZW5kRGF0YVsxXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF5cyA9IG1ha2VEYXkoeWVhciwgbW9udGgsIDEsIGVuZERhdGFbMl0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF5cyA9IG1ha2VEYXkoeWVhciwgbW9udGgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vbnRocyA9IG1ha2VNb250aCgpXG4gICAgICAgIHRoaXMuZGF5cyA9IG1ha2VEYXkoeWVhciwgbW9udGgpXG5cbiAgICB9XG5cblx0bWV0aG9kcyA9IHtcbiAgICAgICAgY2hhbmdlKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVllYXIgPSB0aGlzLnllYXJzW3ZhbFswXV1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTW9udGggPSB0aGlzLm1vbnRoc1t2YWxbMV1dXG4gICAgICAgICAgICB0aGlzLmNoYW5nZURheSA9IHRoaXMuZGF5c1t2YWxbMl1dXG4gICAgICAgICAgICB0aGlzLm1ha2VEYXRhKHRoaXMuY2hhbmdlWWVhciArICctJyArIHRoaXMuY2hhbmdlTW9udGggKyAnLScgKyB0aGlzLmNoYW5nZURheSlcbiAgICAgICAgfSxcbiAgICAgICAgY2hhbmdlUmVzZXQoKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVllYXIgPSB0aGlzLmNoYW5nZU1vbnRoID0gdGhpcy5jaGFuZ2VEYXkgPSBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHBpY2tlclN1cmUoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hhbmdlWWVhciB8fCAhdGhpcy5jaGFuZ2VNb250aCB8fCAhdGhpcy5jaGFuZ2VEYXkpIHsgLy/pmLLmraLmu5Hliqjov4fnqIvkuK3ngrnlh7vmjInpkq5idWdcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNoYW5nZVllYXIgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnllYXIgPSB0aGlzLmNoYW5nZVllYXJcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnRoID0gdGhpcy5jaGFuZ2VNb250aFxuICAgICAgICAgICAgICAgIHRoaXMuZGF5ID0gdGhpcy5jaGFuZ2VEYXlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy50b3AgPSAzMDBcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICB9LCA1MDApXG4gICAgICAgIH0sXG4gICAgICAgIHBpY2tlclNob3coKSB7XG4gICAgICAgICAgICB0aGlzLnNob3cgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVllYXIgPSB0aGlzLmNoYW5nZU1vbnRoID0gdGhpcy5jaGFuZ2VEYXkgPSB0cnVlXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvcCA9IDBcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gZ2V0VmFsdWUoe1xuICAgICAgICAgICAgICAgICAgICB5ZWFyczogdGhpcy55ZWFycyxcbiAgICAgICAgICAgICAgICAgICAgeWVhcjogdGhpcy55ZWFyLFxuICAgICAgICAgICAgICAgICAgICBtb250aHM6IHRoaXMubW9udGhzLFxuICAgICAgICAgICAgICAgICAgICBtb250aDogdGhpcy5tb250aCxcbiAgICAgICAgICAgICAgICAgICAgZGF5czogdGhpcy5kYXlzLFxuICAgICAgICAgICAgICAgICAgICBkYXk6IHRoaXMuZGF5XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBwaWNrZXJIaWRlKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoYW5nZVllYXIgfHwgIXRoaXMuY2hhbmdlTW9udGggfHwgIXRoaXMuY2hhbmdlRGF5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRvcCA9IDMwMFxuICAgICAgICAgICAgdGhpcy5tYWtlRGF0YSh0aGlzLnllYXIgKyAnLScgKyB0aGlzLm1vbnRoICsgJy0nICsgdGhpcy5kYXkpXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gWzAsIDAsIDBdXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3cgPSBmYWxzZVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgfVxuXHR9XG5cblx0ZXZlbnRzID0ge1xuICAgICAgICBkYXRlSW5pdChkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gZGVmYXVsdFZhbHVlLnNwbGl0KC9bLVxcL10vKVxuICAgICAgICAgICAgdGhpcy55ZWFyID0gZGF0YVswXVxuICAgICAgICAgICAgdGhpcy5tb250aCA9IGRhdGFbMV1cbiAgICAgICAgICAgIHRoaXMuZGF5ID0gZGF0YVsyXVxuXG4gICAgICAgICAgICB0aGlzLm1ha2VEYXRhKGRlZmF1bHRWYWx1ZSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==