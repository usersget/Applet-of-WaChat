// pages/dingdan/index.js
Page({
  onShareAppMessage() {
    return {
      title: 'checkbox',
      path: 'page/component/pages/checkbox/checkbox'
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    z:"待支付",
    m:"已支付",
      tupian:"",
      kecheng:"",
      zongjia:0,
      num:0,
      nambum:100,
      jiage:120,
        items: [
         {
           name:'XXX',
          phone:123456789,
          dizhi:"甘肃省兰州市七里河区XXXXXXX"
        }
        ]
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      tupian:options.tupian,
      kecheng:options.kecheng,
      zongjia:options.zongjia,
      num:options.num,
      jiage:options.jiage

  })


},
tishi:function() {
  this.setData({
    z:this.data.m,
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