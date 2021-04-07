// pages/activity/components/activityListCmpt.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    activityListCmpt:{
      type:Array,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    icon1:'/static/index-else-icon/hotActivity.png',
    icon2:'/static/index-else-icon/huan.png',
    icon3:'/static/index-else-icon/more1.png',
    activityList:[],
    click:0
  },
  /**
   * 组件的方法列表
   */
  methods: {
    bindupdate:function(event){
      const dataset = event.target.dataset;
    const number = dataset.number;
      console.log('换一换');
      var a=this.data.click+5;
      this.setData({
        click:a
      }) 
      this.data.activityList.splice(0,5);
 
      //渲染数据
      this.setData({
          activityList:this.data.activityList
      });
      var f=[];
      for(let i=0;i<=this.properties.activityListCmpt.length;i++){
        if(this.data.click+5==this.properties.activityListCmpt.length){
          this.setData({
            click:0
          })
        }
        if(i>=this.data.click&&i<this.data.click+5){
         f.push(this.properties.activityListCmpt[i]);
          }
        }
        this.setData({
          activityList:f
        })
        console.log(this.data.activityList)
    },
    more_activity:function(){
      console.log('更多活动');
      console.log(this.data.activityList)
      // wx.switchTab({
      //   url: '/pages/activity/activity',
      // })
    }
  }
})