var qcloud = require('../../tencentyun/index');
var config = require('../../config');
Page({
    data: {
        showTopTips: true,
        errinfo:'错误信息',
        nameerr:false,

        tabs: ["登记", "查询修改"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,

        ggzs:[],
        uid:0,
        
        type:['公司','个人','政府','其他组织'],
        typeIndex:0,

        isAgree: false
    },
    tabClick: function (e) {
        console.debug(e.currentTarget);
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id,
        });
    },
    onLoad: function (e) {
        var off = 0;
        if(e.index==1){
            off = 180;
        }else{
            e.index = 0;
        }
        var that = this;
        wx.getStorage({
            key: 'uid',
            success: function(res) {
                that.setData({
                    uid:res.data,
                    activeIndex: e.index,
                    sliderOffset:off
                })
            } 
        })
    },
    formUpdateSubmit:function(e){
        wx.showToast({
            title: '正在查询',
            icon: 'loading',
            duration: 10000
        });
        var that = this;
        qcloud.request({
            url:config.service.getUrl,
            login:true,
            data:e.detail.value,
            header: {
          		'content-type': 'application/x-www-form-urlencoded',
          	},
            method:"POST",
            success(res){
                console.debug(res.data);
                wx.showToast({
                        title: '查询成功',
                        icon: 'success',
                        duration: 2000
                });
                
            },
            fail(res){
                console.debug('fail');
            }
        });
    },
    formRegSubmit: function(e) {
        if(!e.detail.value['name']){
            this.setData({
                nameerr:true,
                showTopTips:true,
                errinfo:'广告主名字不能为空',
            })
            return;
        }
        wx.showToast({
            title: '正在提交',
            icon: 'loading',
            duration: 10000
        });
        qcloud.request({
            url:config.service.regUrl,
            login:true,
            data:e.detail.value,
            header: {
          		'content-type': 'application/x-www-form-urlencoded',
          	},
            method:"POST",
            success(res){
                console.debug(res.data);
                wx.showToast({
                    title: '提交成功',
                    icon: 'success',
                    duration: 1000
                });
            },
            fail(res){

            }
        });

    },
    bindTypeChange: function(e){
        this.setData({
            typeIndex: e.detail.value
        })
    }
});
