// pages/user/components/userList.js
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
    userList:[
      {
        image:'/static/user/21.png',
        title:"我的关注",
        img:'/static/user/20.png'
      },
      {
        image:'/static/user/22.png',
        title:"关于我们",
        img:'/static/user/20.png'
      },
      {
        image:'/static/user/23.png',
        title:"常见问题",
        img:'/static/user/20.png'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bind_user:function(event){
      var name=event.target.dataset.eventOpts;
      switch (name) {
       case '我的关注':
          console.log('我的关注')
         break;
       case '关于我们':
         console.log('关于我们')
         break;
       case '常见问题':
         console.log('常见问题')
         break;
      }
    }
  }
})
