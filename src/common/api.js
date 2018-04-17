/*
 *  接口请求文件
 *  日期：2017/6/13.
 *  作者：Math
 * */
import 'wepy-async-function'
const baseUrl = 'http://testapi.yudoodoo.com/API/jsonApi.aspx'

const request = function (data) {
	return new Promise((resolve, reject) => {
		wx.request({
			url: baseUrl,
			data: data,
			success: function (res) {
				if (res.statusCode === 200) {
					resolve(res.data)
				} else {
					reject(res)
				}
			},
			fail: function (res) {
				reject(res)
			}
		})
	})
}

export default {
	newsList() {
		return request({
			wMethod: '211'
		})
	}
}
