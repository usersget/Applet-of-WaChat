// pages/user/components/orderCmpt.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    orderCmpt:[
      {
        image:'/static/user/11.png',
        title:'全部'
      },
      {
        image:'/static/user/12.png',
        title:'待审核'
      },
      {
        image:'/static/user/13.png',
        title:'待参加'
      },
      {
        image:'/static/user/14.png',
        title:'已参加'
      },
      {
        image:'/static/user/15.png',
        title:'待退款'
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    binduser:function(event){
   var name=event.target.dataset.eventOpts;
   switch (name) {
    case '全部':
       console.log('全部')
      break;
    case '待审核':
      console.log('待审核')
      break;
    case '待参加':
      console.log('待参加')
      break;
    case '已参加':
      console.log('已参加')
      break;
    case '待退款':
      console.log('待退款')
      break;
   }
    }
  }
})
