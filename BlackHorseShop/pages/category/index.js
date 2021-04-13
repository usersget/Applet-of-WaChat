//引入封装好的发送请求方法
import { request } from "../../request/index.js";
import regeneratorRuntime from "../../lib/runtime/runtime";
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //左侧的菜单数据
        leftMenuList: [],

        //右侧的商品数据
        rightContent: [],

        //被点击的左侧菜单
        currentIndex: 0,

        //右侧内容滚动条距离顶部距离
        scrollTop: 0
    },

    //接口的返回数据
    Cates: [],

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        /**
         * 先判断本地有没有旧的数据,没有的话调用接口获取
         * 有旧的数据 同时数据没有过期 就是用本地数据
         * {time:Date.now(),data:[]}
         */

        //1.获取本地存储中的数据
        const Cates = wx.getStorageSync("cates");

        //2.判断
        if (!Cates) {
            //本地没有存储 调接口获取
            this.GetCates();
        } else {
            //本地存储中有数据 判断一下是否过期
            if (Date.now() - Cates.time > 1000 * 60 * 5) {
                //本地存储过期 重新获取数据
                this.GetCates();
            } else {
                //本地存储未过期 直接渲染数据
                this.Cates = Cates.data;

                //构造左侧大菜单数据
                let leftMenuList = this.Cates.map(v => v.cat_name);

                //构造右侧商品数据
                let rightContent = this.Cates[0].children;

                this.setData({
                    leftMenuList,
                    rightContent
                })
            }
        }
    },

    //获取分类数据
    async GetCates() {
        // request({
        //     url: "/categories"
        // })

        // .then(res => {
        //     this.Cates = res.data.message;

        //     //把接口数据放到本地存储中
        //     wx.setStorageSync("cates", { time: Date.now(), data: this.Cates });

        //     //构造左侧大菜单数据
        //     let leftMenuList = this.Cates.map(v => v.cat_name);

        //     //构造右侧商品数据
        //     let rightContent = this.Cates[0].children;

        //     this.setData({
        //         leftMenuList,
        //         rightContent
        //     })
        // })

        //使用es7 async wait 语法 发送请求
        const res = await request({ url: "/categories" });

        this.Cates = res;

        //把接口数据放到本地存储中
        wx.setStorageSync("cates", { time: Date.now(), data: this.Cates });

        //构造左侧大菜单数据
        let leftMenuList = this.Cates.map(v => v.cat_name);

        //构造右侧商品数据
        let rightContent = this.Cates[0].children;

        this.setData({
            leftMenuList,
            rightContent
        })

    },

    //左侧菜单的点击事件
    handleItemTap(e) {

        //1.获取所点击菜单的索引
        //2.给data中的currentIndex赋值
        //3.根据不同的索引渲染右侧商品列表
        const { index } = e.currentTarget.dataset;

        let rightContent = this.Cates[index].children;

        this.setData({
            currentIndex: index,
            rightContent,
            scrollTop: 0 //初始化右侧内容的距离顶部的距离
        })
    }
})