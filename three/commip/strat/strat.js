// commip/strat/strat.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    score:{
      type:Number,
      value:""
    },
    x:{
      type:Number,
      value:20
    },
    y:{
      type:Number,
      value:20
    },
    IS:{
      type:Boolean,
      value:true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
   observers:{
    score:function(){
      var that=this;
      var score=this.data.score;
      var INTER=parseInt(score);
      var light=parseInt(INTER/2);
      var helf=INTER%2;
      var gray=(5-light-helf);
      that.setData({
        lights:light,
        helfs:helf,
        grays:gray
      })
    }
   },

  /**
   * 组件的方法列表
   */
  methods: {
  
  },
  lifetimes:{
    attached: function() {
      
    }
  }

})
