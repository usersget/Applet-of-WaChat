// pages/activity/components/activityDetailCmpt.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activityInfo:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id,'传递')
    var _this=this;
    wx.request({
      method:"GET",
      url: 'http://129.211.165.250:9527/advertising/advertising/list?id='+options.id,
      header: {
        'content-type': 'application/json'
        //默认值
      },
      success (res) {
        //  console.log(res.data.rows[0].graphicDetails)
        _this.setData({
          activityInfo:res.data.rows[0].graphicDetails
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