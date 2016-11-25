var qcloud = require('./tencentyun/index');
var config = require('./config');

App({
    onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl);
       
       qcloud.request({
            // 要请求的地址
            url: config.service.uidUrl,

            // 请求之前是否登陆，如果该项指定为 true，会在请求之前进行登录
            login: true,

            success(result) {
                console.debug('请求成功完成');
                console.log('request success', result);
                wx.setStorage({
                    key:"uid",
                    data:result.data
                })
            },

            fail(error) {
                console.debug('请求失败', error);
                console.log('request fail', error);
            },

            complete() {
                console.log('request complete');
            }
        });
        
        console.log('App Launch');
    },
    onShow: function () {
        console.log('App Show')
    },
    onHide: function () {
        console.log('App Hide')
    },
    globalData: {
        hasLogin: false
    }
});