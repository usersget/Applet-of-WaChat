//引入封装好的发送请求方法
import { request } from "../../request/index.js";
import regeneratorRuntime from "../../lib/runtime/runtime";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        orders: [],
        tabs: [
            { id: 0, value: "全部", isActive: true },
            { id: 1, value: "待付款", isActive: false },
            { id: 2, value: "待发货", isActive: false },
            { id: 3, value: "退款/退货", isActive: false }
        ],
    },

    onShow(options) {
        const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIzLCJpYXQiOjE1NjQ3MzAwNzksImV4cCI6MTAwMTU2NDczMDA3OH0.YPt-XeLnjV-_1ITaXGY2FhxmCe4NvXuRnRB8OMCfnPo";
        wx.setStorageSync("token", token);

        //获取小程序的页面栈-数组 长度最大是10
        var curPages = getCurrentPages();

        //数组中最大索引的值即为当前页面
        let currPage = curPages[curPages.length - 1];

        //获取URL上的type参数
        const { type } = currPage.options;

        //根据type值激活选中订单查询页面的标题
        this.changeTitleByIndex(type - 1);
        this.getOrders(type);
    },

    //获取订单列表
    async getOrders(type) {
        const res = await request({ url: "/my/orders/all", data: { type } });
        this.setData({
            orders: res.orders.map(v => ({...v, create_time_cn: new Date(v.create_time * 1000).toLocaleString() }))
        });
    },

    //根据标题索引来激活选中标题数据
    changeTitleByIndex(index) {
        //2.修改源数据 产生激活选中效果
        let { tabs } = this.data;
        tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);

        //3.赋值到data中
        this.setData({
            tabs
        })
    },

    //标题的点击事件 从子组件传递过来
    handleTabsItemChange(e) {
        //1.获取被点击的标题索引
        const { index } = e.detail;
        this.changeTitleByIndex(index);

        //2.重新发送请求获取列表数据
        this.getOrders(index + 1);
    },

})