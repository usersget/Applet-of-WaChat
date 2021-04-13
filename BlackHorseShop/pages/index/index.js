//引入封装好的发送请求方法
import { request } from "../../request/index.js";

Page({
    data: {
        //轮播图数组
        swiperList: [],

        //导航菜单数组
        catesList: [],

        //楼层数据
        floorList: [],
    },
    //页面加载触发事件
    onLoad: function(options) {
        //1.发送异步请求 获取轮播图数据
        // var reqTask = wx.request({
        //     url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
        //     success: (result) => {
        //         console.log(result);
        //         this.setData({
        //             swiperList: result.data.message
        //         })
        //     }
        // });

        //获取轮播图数据
        this.GetSwiperList();

        //获取导航菜单数据
        this.GetCateList();

        //获取楼层数据
        this.GetFloorList();

    },

    //获取轮播图数据
    GetSwiperList() {
        //使用封装的请求方法做请求
        request({ url: "/home/swiperdata" })
            .then(result => {
                result.forEach((v, i) => {
                    result[i].navigator_url = v.navigator_url.replace('main', 'index');
                });
                this.setData({
                    swiperList: result
                })
            })
    },

    //获取导航菜单数据
    GetCateList() {
        //使用封装的请求方法做请求
        request({ url: "/home/catitems" })
            .then(result => {
                this.setData({
                    catesList: result
                })
            })
    },

    //获取楼层数据
    GetFloorList() {
        //使用封装的请求方法做请求
        request({ url: "/home/floordata" })
            .then(result => {
                for (let k = 0; k < result.length; k++) {
                    result[k].product_list.forEach((v, i) => {
                        result[k].product_list[i].navigator_url = v.navigator_url.replace('?', '/index?');
                    });
                }

                this.setData({
                    floorList: result
                })
            })
    },


    onReady: function() {

    },
    onShow: function() {

    },
    onHide: function() {

    },
    onUnload: function() {

    },
    onPullDownRefresh: function() {

    },
    onReachBottom: function() {

    },
    onShareAppMessage: function() {

    },
    onPageScroll: function() {

    },
    //item(index,pagePath,text)
    onTabItemTap: function(item) {

    },


});