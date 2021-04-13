// pages/feedback/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: [{ id: 0, value: "体验问题", isActive: true }, { id: 1, value: "商品、商家投诉", isActive: false }],

        //上传的图片路径数组
        chooseImgs: [],

        //文本域内容
        textVal: ""
    },

    //外网的图片路径数组
    UpLoadImgs: [],

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

    //点击加号选择图片事件
    handleChooseImg() {
        //调用小程序内置图片api
        wx.chooseImage({
            count: 9,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: (result) => {
                this.setData({
                    //图片数组 进行拼接 
                    chooseImgs: [...this.data.chooseImgs, ...result.tempFilePaths]
                })
            }
        });
    },

    //点击自定义图片组件
    handleRemoveImg(e) {
        //1 获取被点击图片的索引
        const { index } = e.currentTarget.dataset;

        //2 获取data中图片数组
        let { chooseImgs } = this.data;

        //3 删除元素
        chooseImgs.splice(index, 1);

        //4.将删除后的数组填充回data中
        this.setData({
            chooseImgs
        })

    },

    //文本域的输入事件
    handleTextInput(e) {
        this.setData({
            textVal: e.detail.value
        })
    },

    //提交按钮点击事件
    handleFormSubmit() {
        //1 获取文本域的内容
        const { textVal, chooseImgs } = this.data;
        //2 合法性验证
        if (!textVal.trim()) {
            wx.showToast({
                title: '输入不合法',
                icon: 'none',
                mask: true
            });

            return;
        }

        //3 遍历图片数组
        chooseImgs.forEach((v, i) => {
            //准备上传图片到专门服务器
            var upTask = wx.uploadFile({
                url: 'https://images.ac.cn/Home/Index/UploadAction/',
                filePath: v,
                name: "file",
                formData: {},
                success: (result) => {
                    console.log(result);
                }
            });
        });
    }



})