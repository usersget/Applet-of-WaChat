// pages/dingdanfis/index.js
Page({

  /**
   * 页面的初始数据
   */
  active(e){
    var id=e.currentTarget.dataset.num;
    this.setData({
      num:id
    })
  },
  data: {
    num:1,
    arr:[
      {
        id:1,
        text:"全部"
      },
      {
        id:2,
        text:"待付款"
      },
      {
        id:3,
        text:"配送中"
      }
    ],
    arraa:[
      {
        id:1,
        arr:[
          {
            id:"/pages/imges/manager/tabs/bg1.jpg",
            openstack:"云计算课程",
            gouman:"查看",
            piace:'单号12549905454',
            fangshi:"待付款"
          },
          {
            id:"/pages/imges/manager/tabs/bg1.jpg",
            openstack:"openstack课程",
            gouman:"查看",
            piace:'单号124546645454',
            fangshi:"待付款"
          },
          {
            id:"/pages/imges/manager/tabs/bg1.jpg",
            openstack:"小程序",
            gouman:"查看",
            piace:'单号12545485454',
            fangshi:"待付款"
          },
          {
            id:"/pages/imges/manager/tabs/bg1.jpg",
            openstack:"云计算课程",
            gouman:"查看",
            piace:'单号12549905454',
            fangshi:"正在配送..."
          },
          {
            id:"/pages/imges/manager/tabs/bg1.jpg",
            openstack:"openstack课程",
            gouman:"查看",
            piace:'单号124546645454',
            fangshi:"正在配送..."
          },
          {
            id:"/pages/imges/manager/tabs/bg1.jpg",
            openstack:"小程序",
            gouman:"查看",
            piace:'单号12545485454',
            fangshi:"正在配送..."
          }
        ]},
      {
        id:2,
        arr:[
          {
            id:"/pages/imges/manager/tabs/bg1.jpg",
            openstack:"云计算课程",
            gouman:"查看",
            piace:'单号12549905454',
            fangshi:"待付款"
          },
          {
            id:"/pages/imges/manager/tabs/bg1.jpg",
            openstack:"openstack课程",
            gouman:"查看",
            piace:'单号124546645454',
            fangshi:"待付款"
          },
          {
            id:"/pages/imges/manager/tabs/bg1.jpg",
            openstack:"小程序",
            gouman:"查看",
            piace:'单号12545485454',
            fangshi:"待付款"
          }
        ]},
        {
          id:3,
          arr:[
            {
              id:"/pages/imges/manager/tabs/bg1.jpg",
              openstack:"云计算课程",
              gouman:"查看",
              piace:'单号12549905454',
              fangshi:"正在配送..."
            },
            {
              id:"/pages/imges/manager/tabs/bg1.jpg",
              openstack:"openstack课程",
              gouman:"查看",
              piace:'单号124546645454',
              fangshi:"正在配送..."
            },
            {
              id:"/pages/imges/manager/tabs/bg1.jpg",
              openstack:"小程序",
              gouman:"查看",
              piace:'单号12545485454',
              fangshi:"正在配送..."
            }
          ]}
      ],
   
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