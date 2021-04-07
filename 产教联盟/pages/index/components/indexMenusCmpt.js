// pages/index/components/indexMenusCmpt.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    menus:{
      type:Array,
      value:""
    },
    userid:{
      type:String,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindmenus:function(event){
      const dataset = event.target.dataset;
      const number = dataset.number;
        switch (number) {
          case 1:
            console.log("我的关注");
            if (this.properties.userid=="") {
              wx.showModal({
                title: '请先登录',
                // content: '这是一个模态弹窗',
                success (res) {
                  if (res.confirm) {
                    console.log('用户点击确定');
                    wx.reLaunch({
                      url: '/pages/user/user'
                    })
                  } else if (res.cancel) {
                    console.log('用户点击取消')
                  }
                }
              });
            } else {
              
              wx.reLaunch({
                url:'/pages/activityOrderInfo/activityOrderInfo'
              })
             
            }
       break;
      case 2:
         console.log("活动头条");
         wx.showToast({
          title: '该功能尚未开放',
          icon: 'none',
          duration: 2000,
          mask:'true'
        });
         break;
      case 3:
        console.log("扫码签到"); 
            wx.scanCode({
              success: function success(res) {
                console.log('成功后的数据' + JSON.stringify(res));
                console.log('原始数据:'+res.rawData);
                console.log('条码类型：' + res.scanType);
                console.log('条码内容：' + res.result);
                var arrayBuffer = Base64.decode(res.result);
                console.log(arrayBuffer);
                var arr = [];
                arr = arrayBuffer.split('-');
                var aid = arr[1];
                that.$store.commit('actimuat', aid);
               wx.navigateTo({
                  url: '/pages/check/check' });
    
              },
              fail: function fail(err) {
                console.log("失败了",err);
              },
              complete: function complete() {
                
              } });
        break;
      case 4:
        console.log("问卷调查");
        wx.showToast({
          title: '该功能尚未开放',
          icon: 'none',
          duration: 2000,
          mask:'true'
        });
         break;
    }
  }
  }
})
