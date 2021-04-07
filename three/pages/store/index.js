// pages/store/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kind:"",
    moue:[],
    tv:[],
    zunyi:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.request({
      method:"GET",
      url: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items', //仅为示例，并非真实的地址
      data: {
        count:7
      },
      header: {
        'content-type': 'application/json'
        //默认值
      },
      success (res) {
        //console.log(res)
        var a=res.data.subject_collection_items;
        _this.setData({
          move:a
        })
        
        // console.log(_this.data.move,"a")
      }
    }),
    wx.request({
      method:"GET",
      url: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items', //仅为示例，并非真实的地址
      data: {
        count:7
      },
      header: {
        'content-type': 'application/json'
        //默认值
      },
      success (res) {
        //console.log(res)
        var b=res.data.subject_collection_items;
       
        _this.setData({
          tv:b
        })
        
       // console.log(_this.data.tv,"a")
      }
    }),
    wx.request({
      method:"GET",
      url: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items', //仅为示例，并非真实的地址
      data: {
        count:7
      },
      header: {
        'content-type': 'application/json'
        //默认值
      },
      success (res) {
       console.log(res)
        var c=res.data.subject_collection_items;
       
        _this.setData({
          zunyi:c
        })
        
      //  console.log(_this.data.zunyi,"a")
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