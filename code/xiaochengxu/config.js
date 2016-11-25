/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
var host = '72578905.qcloud.la';

var config = {

    // 下面的地址配合云端 Demo 工作
    service: {
        host,

        // 登录地址，用于建立会话
        loginUrl: `https://${host}/login`,

        // 测试的请求地址，用于测试会话
        requestUrl: `https://${host}/user`,

        // 测试的信道服务地址
        tunnelUrl: `https://${host}/tunnel`,
        //获取微信用户的uid
        uidUrl:`https://${host}/form/getuid`,
        //登记URL
        regUrl:`https://${host}/form/reg`,
        //查询
        getUrl:`https://${host}/form/get`,
    }
};

module.exports = config;
