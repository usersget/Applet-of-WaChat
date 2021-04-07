// pages/qqnm/qqnm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.request({
        method:"GET",
        url: 'https://ltssjy.qq.com/uwMROfz2r5zAoaQXGdGnC2df644E7D3uP8M8pmtgwsRK9nEL/ZPlSaP79x9Uz4Usl7ZxDuLbUkUIgz5_ppG-XNPaTvkK1zRKajObVBorZVr7_yUGy5lPV_qRSCqJYkhmbg7aOTF-xXk8e46FbAmfsFb_9IPyuZifvRFTidPnKMexuGRCOq8GBx_xKP0l-e50eqfTv2dux9N9JaKC7Ks2J0lF_5U8/019_e0023xe9evh.321002.1.ts?index=19&start=200833&end=211500&brs=13467568&bre=14157903&ver=4',
        
        header: {
          'content-type': 'application/json'
          //默认值
        },
        success (res){
          console.log(res,"qq")
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