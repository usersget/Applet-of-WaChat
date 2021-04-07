
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userid:'',
      menus:[
        {
          url:'/static/index-icon/one.png',
          text:'我的关注',
          id:1
        },
        {
          url:'/static/index-icon/two.png',
          text:'活动头条',
          id:2
        },
        {
          url:'/static/index-icon/three.png',
          text:'扫码签到',
          id:3
        },
        {
          url:'/static/index-icon/four.png',
          text:'问卷调查',
          id:4
        },
      ],
      company:[
         {
        companyLogo: '/static/temp/sz.png',
        companyName: '山东商业职业学院',
        id:1
       },

      {
        companyLogo: '/static/temp/55.png',
        companyName: '南京55所',
        id:2
       },

      {
        companyLogo: '/static/temp/eyun.png',
        companyName: '一道云',
        id:3
       }
      ],
      indexBannerCmpt:[],
      list_cmpt:[],
      activityListCmpt:[],
      Status:'true',
      myActivity:[],
      activityList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    //轮播图接口
    wx.request({
      method:"GET",
      url: 'http://129.211.165.250:9527/advertising/advertising/list?type=0',
      header: {
        'content-type': 'application/json'
        //默认值
      },
      success (res) {
        console.log(res)
        var a=res.data.rows;
        _this.setData({
          indexBannerCmpt:a
        })
        
        console.log(_this.data.indexBannerCmpt,"indexBannerCmpt")
      }
    }),
    //热门活动接口
    wx.request({
      method:"GET",
      url: 'https://service.sdcjlm.cn/activity/activity/list',
      header: {
        'content-type': 'application/json'
        //默认值
      },
      success (res) {
        // console.log(res)
        var a=res.data.rows;
        _this.setData({
          activityListCmpt:a
        })
        
        console.log(_this.data.activityListCmpt,"list_cmpt")
      }
    }),
    //我的活动接口
    wx.request({
      url:'https://service.sdcjlm.cn/activity/signUpTable/list',
      data:{
        commonUserId : wx.getStorageSync('userid'),
        status4Split : 1 + "," + 3
      },
      success: (res) => {
        console.log(res.data.rows,'ftg');
        _this.setData({
          myActivity:res.data.rows,
          Status :false
        })
      }
    })
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})