// pages/account/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"admin",
    card_num:"192015658546",
    care:"会员卡号:",
    option_menu:[
      {
        picture:"/pages/imges/icons/1.png",
        address:"/pages/balance/index",
        content:"余额",
        symbol:"充值",
        iconic:"￥10"
      },
      {
        picture:"/pages/imges/icons/2.png",
        content:"消费记录",
        address:"/pages/consume/index",
        symbol:"/pages/imges/icons/right.png"
      },
      {
        picture:"/pages/imges/icons/3.png",
        address:"/pages/recharge/index",
        content:"充值记录",
        symbol:"/pages/imges/icons/right.png"
      },
      {
        picture:"/pages/imges/icons/4.png",
        address:"/pages/material/index",
        content:"我的资料",
        symbol:"/pages/imges/icons/right.png"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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