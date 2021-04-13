/* 封装一个微信发送请求的方法 */
//同时发送异步代码的次数
let ajaxTimes = 0;

export const request = (params) => {
    //判断url中是否带有/my/ 请求的是私有的路径,要带上header token请求头
    let header = {...params.header };
    if (params.url.includes("/my/")) {
        header["Authorization"] = wx.getStorageSync("token");
    }

    ajaxTimes++;
    //显示加载loading
    wx.showLoading({
        title: "加载中",
        mask: true
    });

    //定义公共的URL
    const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1";
    return new Promise((resolve, reject) => {
        wx.request({
            ...params,
            header: header,
            url: baseUrl + params.url,
            success: (result) => {
                resolve(result.data.message);
            },
            fail: (err) => {
                reject(err);
            },
            complete: () => {
                ajaxTimes--;
                //关闭loading
                if (ajaxTimes === 0) {
                    wx.hideLoading();
                }
            }
        });
    })
}