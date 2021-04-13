//引入封装好的发送请求方法
import { request } from "../../request/index.js";
import regeneratorRuntime from "../../lib/runtime/runtime";
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodsObj: {}, //接口返回数据
        isCollect: false //商品是否被收藏
    },

    //商品对象
    GoodsInfo: {},


    onShow: function() {
        var curPages = getCurrentPages();
        let curPage = curPages[curPages.length - 1];
        let options = curPage.options;
        const { goods_id } = options;
        this.GetGoodsDetail(goods_id);
    },

    //获取商品详情数据
    async GetGoodsDetail(goods_id) {
        const goodsObj = await request({ url: "/goods/detail", data: { goods_id } });
        this.GoodsInfo = goodsObj;
        //1.获取缓存中商品收藏的数组
        let collect = wx.getStorageSync("collect") || [];
        //2.判断当前商品是否被收藏了
        let isCollect = collect.some(v => v.goods_id === this.GoodsInfo.goods_id);

        this.setData({
            goodsObj: {
                goods_name: goodsObj.goods_name,
                goods_price: goodsObj.goods_price,
                goods_introduce: goodsObj.goods_introduce.replace('/\.webp/g', '.jpg'),
                pics: goodsObj.pics
            },
            isCollect
        })
    },

    //点击轮播图放大预览
    handlePrevewImage(e) {
        //1.先构造要预览的字符串数据
        const urls = this.GoodsInfo.pics.map(v => v.pics_mid);
        //2.接收传递过来的图片URL
        const current = e.currentTarget.dataset.url;
        wx.previewImage({
            current: current,
            urls: urls
        });
    },

    //点击 加入购物车
    handleCartAdd() {
        //1.获取缓存中的购物车数组
        let cart = wx.getStorageSync("cart") || [];
        //2.判断商品对象是否存在购物车数组中
        let index = cart.findIndex(v => v.goods_id === this.GoodsInfo.goods_id);
        if (index === -1) {
            //3.不存在,第一次添加
            this.GoodsInfo.num = 1;
            this.GoodsInfo.checked = true;
            cart.push(this.GoodsInfo);
        } else {
            //4.已存在购物车中 执行num++
            cart[index].num++;
        }

        //5.把购物车重新添加回缓存中
        wx.setStorageSync("cart", cart);

        //6.弹出提示
        wx.showToast({
            title: '加入成功',
            icon: 'success',
            mask: true
        });
    },

    //点击收藏图标
    handleCollect() {
        let isCollect = false;
        //1.获取缓存中商品收藏数组
        let collect = wx.getStorageSync("collect") || [];
        //2.判断商品是否被收藏过
        let index = collect.findIndex(v => v.goods_id === this.GoodsInfo.goods_id);
        //3.当index不等于-1时,表示已经收藏过
        if (index !== -1) {
            //已经收藏过  在数组中删除商品
            collect.splice(index, 1);
            isCollect = false;
            wx.showToast({
                title: '取消成功',
                icon: 'success',
                mask: true
            });
        } else {
            //没有收藏过
            collect.push(this.GoodsInfo);
            isCollect = true;
            wx.showToast({
                title: '收藏成功',
                icon: 'success',
                mask: true
            });
        }
        //4.把数组存入到缓存中
        wx.setStorageSync("collect", collect);
        //5.修改data当中的属性 isCollect
        this.setData({
            isCollect
        })
    }

})