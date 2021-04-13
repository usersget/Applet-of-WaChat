//引入封装好的发送请求方法
import { request } from "../../request/index.js";
import regeneratorRuntime from "../../lib/runtime/runtime";
import { login } from "../../utils/asyncWx.js"

Page({
    //获取用户信息
    async handleGetUserInfo(e) {
        try {
            //1.获取用户信息
            const { encryptedData, rawData, iv, signature } = e.detail;

            //获取小程序登录成功后的code
            const { code } = await login();

            //发送请求 获取用户token
            //const loginParams = { encryptedData, rawData, iv, signature, code };
            //const res = await request({ url: "/users/wxlogin", date: loginParams, method: "post" });

            // var reqTask = wx.request({
            //     url: 'https://api.weixin.qq.com/cgi-bin/token',
            //     data: { grant_type: "client_credential", appid: "wxfce9ec7adb6cb2b3", secret: "2fa9977a5283a9a9e779299e9feecf29" },
            //     header: { 'content-type': 'application/json' },
            //     method: 'GET',
            //     dataType: 'json',
            //     responseType: 'text',
            //     success: (result) => {
            //         //把token存储到缓存中 同时跳转到上一个页面
            //         wx.setStorageSync("token", result.data.access_token);
            //         wx.navigateBack({
            //             delta: 1
            //         });
            //     }
            // });
        } catch (error) {
            console.log(error);
        }

    }
})