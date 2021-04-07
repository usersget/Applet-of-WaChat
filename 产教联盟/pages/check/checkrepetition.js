// pages/check/checkrepetition.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    image:'/static/error.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindscan_code:function(){
    console.log("扫码签到");
    // wx.scanCode({
    //   success: (res) => {
    //     console.log(res)  
        wx.scanCode({
          success: function success(res) {
            console.log('成功后的数据' + JSON.stringify(res));
            console.log('原始数据:'+res.rawData);
            console.log('条码类型：' + res.scanType);
            console.log('条码内容：' + res.result);
            // var arrayBuffer = Base64.decode(res.result);
            // console.log(arrayBuffer);
            // var arr = [];
            // arr = arrayBuffer.split('-');
            // var aid = arr[1];
            // that.$store.commit('actimuat', aid);
            wx.navigateTo({
              url: '/pages/check/check' });

          },
          fail: function fail(err) {
            console.log("失败了",err);
          },
          complete: function complete() {
            
          } })
  },
  canceled:function(){
    console.log('df');
   wx.switchTab({
     url: '/pages/index/index',
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