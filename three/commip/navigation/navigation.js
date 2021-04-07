// commip/navigation/navigation.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    value:'',
    search:[
      {
        
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onsearchinput(e){
      console.log(e.detail.value,'input');
      var inputData=e.detail.value
      this.triggerEvent('inputEvent',inputData);
    }
  }
})
