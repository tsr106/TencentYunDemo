Page({
    data: {
        list: [
            {
                id: 'form',
                name: '广告监测',
                open: false,
                nav:[{page:'panel',title:'违规检测'}],
            },
            {
                id: 'widget',
                name: '广告主处理',
                open: false,
                nav:[{page:'ggz_reg',title:'广告主登记',para:'index=0'},
                        {page:'ggz_reg',title:'广告主修改',para:'index=1'}],
            },
            {
                id: 'feedback',
                name: '合同处理',
                open: false,
                nav:[{page:'htdj',title:'合同登记',para:'index=0'},
                        {page:'htdj',title:'合同修改',para:'index=1'}],
            },
            {
                id: 'nav',
                name: '我的',
                open: false,
                nav:[{page:'user',title:'我的信息'}],
            }
        ]
    },
    onShow:function(){
        console.debug(getCurrentPages());
    },
    kindToggle: function (e) {
        var id = e.currentTarget.id, list = this.data.list;
        for (var i = 0, len = list.length; i < len; ++i) {
            if (list[i].id == id) {
                list[i].open = !list[i].open
            } else {
                list[i].open = false
            }
        }
        this.setData({
            list: list
        });
    }
});
