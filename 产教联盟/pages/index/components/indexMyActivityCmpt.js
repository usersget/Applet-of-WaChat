// pages/index/components/indexMyActivityCmpt.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    myActivity:{
      type:Array,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    head:'/static/index-else-icon/myActivity.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindbutton:function(){
      console.log('报名');
      wx.reLaunch({
        url: '/pages/activity/activity'
      })
    }
  }
})
