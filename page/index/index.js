var app=getApp();
var mymath=require('../../utils/index.js');
Page({
    data: {
       firstnum:"",
       secondnum:"",
        operator:null,
        result:null,
        show:0,
    },
    clear:function(){
        this.setData({
            firstnum:"",
            secondnum:"",
            operator:null,
            result:null,
            show:0,
        })
    },
    cal:function(){
        var r;
        var f=parseFloat(this.data.firstnum);
        var s=parseFloat(this.data.secondnum);
        if(this.data.operator==="-"){
            r=f-s;
        }
        if(this.data.operator==="+"){
            r=f+s;
        }
        if(this.data.operator==="/"){
            r=f/s;
        }
        if(this.data.operator==="*"){
            r=f*s;
        }
        if(this.data.operator==="%"){
            r=f%s;
        }
      this.setData({
          result:r,
          show:r.toFixed(4),
          firstnum: String(r),
          secondnum:'',
          operator:null,
      })  
    },
    seto:function(e){
        var v=e.target.dataset.v;
        this.setData({
            operator:v
        })
    },
    setnum:function(e){
        var n=e.target.dataset.v;
        if(!this.data.operator|| !this.data.firstnum){
            if(n==="."&&this.data.firstnum.indexOf('.')!==-1){
                return;
            }
            var f=this.data.firstnum+n;
            this.setData({
                show:f,
                firstnum:f,
            })
        }else{
            if(n==="."&&this.data.secondnum.indexOf('.')!==-1){
                return;
            }
            var f=this.data.secondnum+n;
            this.setData({
                show:f,
                secondnum:f,
            })
        }

    },
    changename:function(){
      this.setData({
          name:"zhangsan"
      })  
    },
    onLoad: function() {
        // Do some initialize when page load.
    },
    onReady: function() {
        // Do something when page ready.
    },
    onShow: function() {
        // Do something when page show.
    },
    onHide: function() {
        // Do something when page hide.
    },
    onUnload: function() {
        // Do something when page close.
    },
    onPullDownRefresh: function() {
        // Do something when pull down
    }
})