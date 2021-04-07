// pages/even/even.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    move:{},
    kind:"",
    // grade:0,
    abb:0,
    url:[
      "https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items",
      "https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items",
      "https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items"
      
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    console.log(options);
    console.log(options.kind,'77')
    // _this.setData({
    //   kind:options.kind
    // })
    var kind = options.kind;
    var abb;
    
  switch(kind){
    case"电影":abb=0;break;
    case"电视剧":abb=1;break;
    case"综艺":abb=2;break;
  }
  // console.log(this.data.url[abb],'url')
    wx.request({
      method:"GET",
      url: this.data.url[abb], //仅为示例，并非真实的地址
      data: {
        count:25
      },
      header: {
        'content-type': 'application/json'
        //默认值
      },
      success (res) {
        var a=res.data.subject_collection_items;
       
        _this.setData({
          move:a
        })
        console.log(_this.data.move,"a")
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