//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    time:'100',
    motto: 'Hello World',
    userInfo: {},
    motto:[
      {id:1,name:"txh"},
      {id:2,name:"hhh"}
    ],
    student:[
      {id:1,name:'张三',class:'计算机应用技术2班',isshow:true},
      {id:2,name:'里斯',class:'计算机应用技术2班',isshow:false},
      {id:3,name:'王麻子',class:'计算机应用技术9班',isshow:true},
      {id:4,name:'李四',class:'计算机应用技术2班',isshow:false},
      {id:5,name:'致富',class:'计算机应用技术26',isshow:false},
      {id:6,name:'发财',class:'计算机应用技术6班',isshow:true},
      {id:7,name:'lix',class:'计算机应用技术3班',isshow:true}
    ],
    arr:[1,2,3,4,65,8],
    tt:'3',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  data:{num:0,
  },
hander(e){
var number = e.currentTarget.dataset.number;
// console.log(e.currentTarget.dataset,number)
this.setData({
  num:this.data.num + number
})
}
})
