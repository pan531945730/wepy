'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

require('./../npm/wepy-async-function/index.js');

var baseUrl = 'http://testapi.yudoodoo.com/API/jsonApi.aspx'; /*
                                                               *  接口请求文件
                                                               *  日期：2017/6/13.
                                                               *  作者：Math
                                                               * */


var request = function request(data) {
	return new Promise(function (resolve, reject) {
		wx.request({
			url: baseUrl,
			data: data,
			success: function success(res) {
				if (res.statusCode === 200) {
					resolve(res.data);
				} else {
					reject(res);
				}
			},
			fail: function fail(res) {
				reject(res);
			}
		});
	});
};

exports.default = {
	newsList: function newsList() {
		return request({
			wMethod: '211'
		});
	}
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJiYXNlVXJsIiwicmVxdWVzdCIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInd4IiwidXJsIiwic3VjY2VzcyIsInJlcyIsInN0YXR1c0NvZGUiLCJmYWlsIiwibmV3c0xpc3QiLCJ3TWV0aG9kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLQTs7QUFDQSxJQUFNQSxVQUFVLDhDQUFoQixDLENBTkE7Ozs7Ozs7QUFRQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVUsQ0FBVUMsSUFBVixFQUFnQjtBQUMvQixRQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdkNDLEtBQUdMLE9BQUgsQ0FBVztBQUNWTSxRQUFLUCxPQURLO0FBRVZFLFNBQU1BLElBRkk7QUFHVk0sWUFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3ZCLFFBQUlBLElBQUlDLFVBQUosS0FBbUIsR0FBdkIsRUFBNEI7QUFDM0JOLGFBQVFLLElBQUlQLElBQVo7QUFDQSxLQUZELE1BRU87QUFDTkcsWUFBT0ksR0FBUDtBQUNBO0FBQ0QsSUFUUztBQVVWRSxTQUFNLGNBQVVGLEdBQVYsRUFBZTtBQUNwQkosV0FBT0ksR0FBUDtBQUNBO0FBWlMsR0FBWDtBQWNBLEVBZk0sQ0FBUDtBQWdCQSxDQWpCRDs7a0JBbUJlO0FBQ2RHLFNBRGMsc0JBQ0g7QUFDVixTQUFPWCxRQUFRO0FBQ2RZLFlBQVM7QUFESyxHQUFSLENBQVA7QUFHQTtBQUxhLEMiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqICDmjqXlj6Por7fmsYLmlofku7ZcbiAqICDml6XmnJ/vvJoyMDE3LzYvMTMuXG4gKiAg5L2c6ICF77yaTWF0aFxuICogKi9cbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcbmNvbnN0IGJhc2VVcmwgPSAnaHR0cDovL3Rlc3RhcGkueXVkb29kb28uY29tL0FQSS9qc29uQXBpLmFzcHgnXG5cbmNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAoZGF0YSkge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdHd4LnJlcXVlc3Qoe1xuXHRcdFx0dXJsOiBiYXNlVXJsLFxuXHRcdFx0ZGF0YTogZGF0YSxcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcblx0XHRcdFx0aWYgKHJlcy5zdGF0dXNDb2RlID09PSAyMDApIHtcblx0XHRcdFx0XHRyZXNvbHZlKHJlcy5kYXRhKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlamVjdChyZXMpXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRmYWlsOiBmdW5jdGlvbiAocmVzKSB7XG5cdFx0XHRcdHJlamVjdChyZXMpXG5cdFx0XHR9XG5cdFx0fSlcblx0fSlcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRuZXdzTGlzdCgpIHtcblx0XHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0XHR3TWV0aG9kOiAnMjExJ1xuXHRcdH0pXG5cdH1cbn1cbiJdfQ==