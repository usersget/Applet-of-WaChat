//引入封装好的发送请求方法
import { request } from "../../request/index.js";
import regeneratorRuntime from "../../lib/runtime/runtime";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        goods: [],
        //取消按钮是否显示
        isHiddenBtn: true,

        //输入框的值
        inputVal: ""
    },
    TimeID: -1,

    //输入框值改变触发事件
    handleInput(e) {
        //1.获取输入框的值
        const { value } = e.detail;

        //2.检验合法性
        if (!value.trim()) {
            clearTimeout(this.TimeID);
            this.TimeID = setTimeout(() => {
                this.setData({
                    goods: [],
                    isHiddenBtn: true
                });
            }, 500);

            return;
        }

        this.setData({
            isHiddenBtn: false
        })

        //3.防抖
        clearTimeout(this.TimeID);
        this.TimeID = setTimeout(() => {
            //4.准备发送请求获取数据
            this.getRequestData(value);
        }, 1000);


    },

    //发送请求 获取数据
    async getRequestData(queryKey) {
        const res = await request({ url: "/goods/search", data: { query: queryKey } });
        this.setData({
            goods: res.goods
        })
    },

    //点击取消按钮
    handleCancel() {
        this.setData({
            inputVal: "",
            isHiddenBtn: true,
            goods: [],
        })
    }
})