// pages/check/components/userInfo.js
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
    status: '',
    name: '服务器异常，请联系管理员',
    idcard: '服务器异常，请联系管理员',
    phone: '服务器异常，请联系管理员',
    aid: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showInfo: function showInfo() {
      console.log("hv")
      var that = this;
      wx.request({
        url: this.server_url + '/activity/signUpTable/list',
        data: {
          commonUserId: wx.getStorageSync('userid'),
          id: that.aid },

        success: function success(res) {
          that.name = res.data.rows[0].name;
          that.phone = res.data.rows[0].tel;
          that.idcard = res.data.rows[0].idNo;
        } });

    },
    goIndex: function goIndex() {
      console.log("ug")
      wx.switchTab({
        url: '/pages/index/index'
       });
    },
    submit: function submit() {var _this = this;
      var that = this;
     wx.request({
        url: this.server_url + '/activity/signUpTable/list',
        data: {
          commonUserId: wx.getStorageSync('userid'),
          id: that.aid },

        success: function success(res) {
          if (res.data.rows.length == 0) {
            wx.navigateTo({
              url: 'checkNoSign' });

          } else {
            if (res.data.rows[0].status != 4) {
              wx.request({
                url: _this.server_url + '/activity/signUpTable/update',
                method: 'POST',
                data: {
                  id: that.aid,
                  commonUserId:wx.getStorageSync('userid'),
                  status: 4 },

                header: {
                  token: wx.getStorageSync('token'),
                  'content-type': 'application/json' // 默认值
                },
                success: function success(res) {
                  wx.navigateTo({
                    url: 'checkSuccess'
                   });

                } });

            } else {
              wx.navigateTo({
                url: 'checkError'
               });

            }
          }
        }
       });
  }
}
})
