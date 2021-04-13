import { getSetting, chooseAddress, openSetting, showModal, showToast, requestPayment } from '../../utils/asyncWx.js'
import regeneratorRuntime from "../../lib/runtime/runtime";
import { request } from "../../request/index.js";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        address: {},
        cart: [],
        totalPrice: 0,
        totalNum: 0
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        //获取缓存中的收货信息
        const address = wx.getStorageSync("address");

        //获取缓存中的购物车数据
        let cart = wx.getStorageSync("cart") || [];

        //过滤后的购物车数组checked=true
        cart = cart.filter(v => v.checked);

        //总价格 总数量 计算
        let totalPrice = 0;
        let totalNum = 0;
        cart.forEach(v => {
            totalPrice += v.num * v.goods_price;
            totalNum += v.num;
        });

        //给data赋值
        this.setData({
            cart,
            totalPrice,
            totalNum,
            address
        });
    },

    //点击支付按钮
    async handleOrderPay() {
        try {
            //1.获取缓存中token
            //const token = wx.getStorageSync("token");

            //2.判断缓存中是否有token
            // if (!token) {
            //     wx.navigateTo({
            //         url: '/pages/auth/index',
            //     });
            //     return;
            // }

            //3.创建订单
            //3.1准备请求头参数
            //const header = { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIzLCJpYXQiOjE1NjQ3MzAwNzksImV4cCI6MTAwMTU2NDczMDA3OH0.YPt-XeLnjV-_1ITaXGY2FhxmCe4NvXuRnRB8OMCfnPo" };
            //3.2准备请求体参数
            // const order_price = this.data.totalPrice;
            // const consignee_addr = this.data.address.all;
            // const cart = this.data.cart;
            // let goods = [];
            // cart.forEach(v => goods.push({
            //     goods_id: v.goods_id,
            //     goods_number: v.num,
            //     goods_price: v.goods_price
            // }))

            //const orderParams = { order_price, consignee_addr, goods };
            //4发送请求 创建订单 获取订单编号
            // const { order_number } = await request({ url: "/my/orders/create", date: orderParams, method: "post" });
            //5.发起与支付接口
            //const { pay } = await request({ url: "/my/orders/req_unifiedorder", date: { order_number }, method: "post" });
            //6.发起微信支付
            //await requestPayment(pay);
            //7.查询订单
            //const res = await request({ url: "/my/orders/chkOrder", date: { order_number }, method: "post" });
            await showToast("支付成功");

            //8.删除缓存中已经支付过的商品数据
            let newCart = wx.getStorageSync("cart");
            newCart = newCart.filter(v => !v.checked); //未被选中的商品
            wx.setStorageSync("cart", newCart);

            //9.支付成功了 跳转到订单页面
            wx.navigateTo({
                url: '/pages/order/index'
            });
        } catch (error) {
            await showToast("支付失败");
            console.log(error);
        }
    }
})