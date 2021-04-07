// pages/goumai/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      jiage:120,
      tupian:"",
      miaoshu:"",
      num:0,
      zongjia:0,
      kecheng:"0"
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options)
      this.setData({
        jiage:options.jiage,
        tupian:options.tupian,
        miaoshu:options.miaoshu,
        kecheng:options.kecheng
      })

      
  },
  hander(e){
    var number = e.currentTarget.dataset.number;
    var a = (this.data.num+number)*this.data.jiage
    console.log(a)
    this.setData({
      num:this.data.num + number,
      zongjia: a

    })
    },
tishi(){
    wx.showToast({
      title: '您还没有购买商品',
      icon:'none',
      duration: 2000
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