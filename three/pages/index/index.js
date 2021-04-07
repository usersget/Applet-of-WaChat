Page({

  /**
   * 页面的初始数据
   */
  data: {
     value:'T',
     search:[],
     hosit:[]
  },
  storage(e){
   // console.log(e.currentTarget.dataset.cont,"yasdtf")
    var value = {
      title: e.currentTarget.dataset.cont,
    }
    this.data.hosit.push(value); 
    var a =  this.data.hosit;
    wx.setStorage({
      key:"title",
      data:a,
      success:function() {
        //console.log("baocunchengg")
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //添加缓存
    wx.getStorage({
      key: 'title',
      success:res=>{
        this.setData({
          hosit:res.data
        })
      }
    })
  },
  //点击事件
  clear(){
    //清除缓存
    wx.clearStorage({
      key:'title',
      success:res=>{
        this.setData({
          hosit:[]
        })
      }
    })
    
  },
  //input输入框输入时调用查询接口
  onsearchinput(even){
    var value= even.detail;
    // console.log("even",even);
    var _this = this;
    wx.request({
      method:"GET",
      url:'https://m.douban.com/rexxar/api/v2/search', //仅为示例，并非真实的地址
      data:{
        q:value
      },
      header: {
        'content-type':'application/json'
        //默认值
      },
      success (res){
        console.log(res)
        var a=res.data.subjects;
        _this.setData({
          search:a
        })
       // console.log(_this.data.search,"数组")
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
    wx.setBackgroundTextStyle({
      textStyle: 'dark'
    })
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