// pages/company/companyCmpt.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    company:{
      type:Array,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    icon1:'/static/index-else-icon/company.png',
    icon2: '/static/index-else-icon/more.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindmonad:function(event){
      console.log('入住单位：',event.currentTarget.dataset.name)   
    },
    more_monad:function(){
      console.log('更多')
    }
  }
})
