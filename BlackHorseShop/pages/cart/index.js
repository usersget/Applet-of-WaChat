import { getSetting, chooseAddress, openSetting, showModal, showToast } from '../../utils/asyncWx.js'
import regeneratorRuntime from "../../lib/runtime/runtime";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        address: {},
        cart: [],
        allChecked: false,
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
        const cart = wx.getStorageSync("cart") || [];

        //给data赋值
        this.setData({
            address
        })

        this.setCart(cart);
    },

    //点击收货地址按钮触发
    async handleChooseAddress() {
        // //1.获取权限状态
        // wx.getSetting({
        //     success: (result) => {
        //         const scopeAddress = result.authSetting["scope.address"];
        //         if (scopeAddress === true || scopeAddress === undefined) {
        //             //2.获取收货地址
        //             wx.chooseAddress({
        //                 success: (result1) => {
        //                     console.log(result1);
        //                 }
        //             });
        //         } else {
        //             //3.用于拒绝过授予权限,先诱导用于打开授权页面
        //             wx.openSetting({
        //                 success: (result2) => {
        //                     //4.获取收货地址
        //                     wx.chooseAddress({
        //                         success: (result3) => {
        //                             console.log(result3);
        //                         }
        //                     });
        //                 }
        //             });
        //         }
        //     }
        // });

        try {
            //1.获取权限状态
            const res1 = await getSetting();
            const scopeAddress = res1.authSetting["scope.address"];
            //2.判断权限状态
            if (scopeAddress === false) {
                //3.诱导用于打开授权页面
                await openSetting();
            }
            //4.调用获取收货地址代码api
            let address = await chooseAddress();
            address.all = address.provinceName + address.cityName + address.countyName + address.detailInfo; //完整的收货地址
            //5.把收货地址信息放到本地缓存中
            wx.setStorageSync("address", address);
        } catch (error) {
            console.error(error);
        }

    },

    //商品的选中和取消选中
    handleItemChange(e) {
        //获取被修改的商品ID
        const goods_id = e.currentTarget.dataset.id;

        //获取购物车数组
        let { cart } = this.data;

        //找到被修改的商品对象
        let index = cart.findIndex(v => v.goods_id === goods_id);

        //选中状态取反
        cart[index].checked = !cart[index].checked;

        this.setCart(cart);
    },

    //设置购物车状态 重新计算 底部工具栏的数据 全选 总价格 购买的数量
    setCart(cart) {
        //计算全选
        let allChecked = true;

        //总价格 总数量 计算
        let totalPrice = 0;
        let totalNum = 0;
        cart.forEach(v => {
            if (v.checked) {
                totalPrice += v.num * v.goods_price;
                totalNum += v.num;
            } else {
                allChecked = false;
            }
        });

        //判断数据是否为空
        allChecked = cart.length != 0 ? allChecked : false;

        this.setData({
            cart,
            totalPrice,
            totalNum,
            allChecked
        });

        //把购物车数据重新设置回data和缓存中
        wx.setStorageSync("cart", cart);
    },

    //商品的全选/全不选 功能
    handleItemAllCheck() {
        //获取data中数据
        let { cart, allChecked } = this.data;

        //修改值
        allChecked = !allChecked;

        //循环修改cart数组中商品的选中状态
        cart.forEach(v => v.checked = allChecked);

        //把修改后的值都填充回data中或缓存中
        this.setCart(cart);
    },

    //商品数量加减
    async handleItemNumEdit(e) {
        //获取商品ID和操作类型
        const { id, operation } = e.currentTarget.dataset;

        //获取购物车数组
        let { cart } = this.data;

        //找到需要修改的商品的索引
        const index = cart.findIndex(v => v.goods_id === id);

        //判断是否要执行修改数量操作
        if (cart[index].num === 1 && operation === -1) {
            //弹窗提示
            const res = await showModal({ content: "您是否要删除?" });
            if (res.confirm) {
                cart.splice(index, 1);
                this.setCart(cart);
            }
        } else {
            //进行修改商品的数量
            cart[index].num += operation;

            //把修改后的值都填充回data中或缓存中
            this.setCart(cart);
        }
    },

    //点击 结算按钮
    async handlePay() {
        //判断收货地址
        const { address, totalNum } = this.data;

        if (!address.userName) {
            await showToast({ title: "您还没有选择收货地址" });
            return;
        }

        //判断用户有没有选择商品
        if (totalNum === 0) {
            await showToast({ title: "您还没有选购商品" });
            return;
        }

        //跳转到支付页面
        wx.navigateTo({
            url: '/pages/pay/index'
        });
    }
})