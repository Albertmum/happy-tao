$(function() {
    var letao = new LeTao;
    letao.initslide();
    letao.initscroll();
})



var LeTao = function() {};

LeTao.prototype = {
    // 初始化轮播图代码
    initslide: function() {
        var gallery = mui('.mui-slider');
        gallery.slider({
            interval: 1000 //自动轮播周期，若为0则不自动播放，默认为0；
        });
    },
    //区域滚动初始化代码
    initscroll: function() {
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    }









}