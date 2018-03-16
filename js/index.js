$(function(){
    var Hei = $('.mg-b-20 img').height();
    var Wid = $('.mg-b-20 .biao').width();
    $('.mg-b-20 .bj-c').height(Hei)
    // $('.bj-c').width(Wid)
    $(window).resize(function(){
        var Hei = $('.mg-b-20').height()
        $('.mg-b-20 .bj-c').height(Hei);
        // $('.bj-c').width(Wid)
    })
    $('.stair').on('hover',function(){
        $('.Relations-e').show()
    })
})