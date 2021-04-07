// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    http:'https://m.douban.com/rexxar/api/v2/',
    score:0,
    id:"",
    type:"",
    arrmove:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    
    console.log(options)
     _this.setData({
       id:options.id,
       text:options.text,
       score:options.score
     })
     var that=this;
       var http=that.data.http;
       var text=that.data.text;
       that.setData({
         http:http+text+'/'
       })
       console.log(that.data.http,"拼接地址")
       wx.request({
         url: this.data.http+_this.data.id+'/interests', //仅为示例，并非真实的接口地址
         data: {
           count:20,
           start:10
         },
         header: {
           'content-type': 'application/json' // 默认值
         },
        
         success (res) {
           var mo=res.data.interests;
           
          _this.setData({
           arrmove:mo
         })
           //console.log(_this.data.arrmove,"详情")
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