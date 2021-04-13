//引入封装好的发送请求方法
import { request } from "../../request/index.js";
import regeneratorRuntime from "../../lib/runtime/runtime";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: [{ id: 0, value: "综合", isActive: true }, { id: 1, value: "销量", isActive: false }, { id: 2, value: "价格", isActive: false }],

        goodsList: []
    },

    //接口请求参数
    QueryParams: {
        query: "",
        cid: "",
        pagenum: 1,
        pagesize: 10
    },

    //总记录数
    totalPages: 1,

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.QueryParams.cid = options.cid || "";
        this.QueryParams.query = options.query || "";

        this.GetGoodsList();
    },

    //获取商品列表数据
    async GetGoodsList() {
        const res = await request({ url: "/goods/search", data: this.QueryParams });

        //获取总记录数,用于分页
        const total = res.total;

        //计算总页数
        this.totalPages = Math.ceil(total / this.QueryParams.pagesize);

        this.setData({
            //goodsList: res.goods
            goodsList: [...this.data.goodsList, ...res.goods] //拼接上一页和当前页数据
        })

        //关闭下拉刷新的窗口
        wx.stopPullDownRefresh();
    },

    //标题的点击事件 从子组件传递过来
    handleTabsItemChange(e) {
        //1.获取被点击的标题索引
        const { index } = e.detail;

        //2.修改源数据 产生激活选中效果
        let { tabs } = this.data;
        tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);

        //3.赋值到data中
        this.setData({
            tabs
        })

    },

    //页面上划 滚动条触底事件
    onReachBottom() {
        //1.判断还有没有下一页数据
        if (this.QueryParams.pagenum >= this.totalPages) {
            //没有下一页数据
            wx.showToast({
                title: '没有下一页数据'
            });
        } else {
            this.QueryParams.pagenum++; //请求参数中页码数+1
            this.GetGoodsList();
        }
    },

    //监听页面下拉刷新事件
    onPullDownRefresh() {
        //1.重置数组
        this.setData({
            goodsList: []
        })

        //2.重置页码
        this.QueryParams.pagenum = 1;

        //3.发送请求获取数据
        this.GetGoodsList();
    }

})