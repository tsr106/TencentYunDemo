//index.js
//获取应用实例
var constants = require('../../tencentyun/lib/constants');
var SESSION_KEY = 'weapp_session_' + constants.WX_SESSION_MAGIC_ID;


var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    wx.getStorage({
      key: SESSION_KEY,
      success: function(res){
        console.debug("userinfo");
        console.debug(res.data.userInfo);
        console.debug("end");

        that.setData({userInfo:res.data.userInfo})
      },
      fail: function() {
        console.debug("userinfo1");
        // fail
      },
      complete: function() {
        // complete
      }
    })
    
  }
})
