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

    setnav(".erji")
    $(".lunboximgs").css("width",$(".imgwidth").width()*4+"px")
    alert($(".imgwidth"))
    alert($(".imgwidth").width()*4)
    var index=0;
    var imgwidth=$(".imgwidth").width()


    function add() {
        $(".lunboximgs").css("marginLeft",-imgwidth+"px")
        $(".lunboximgs").css("transition","all 0.5s")
        setTimeout(function () {
            $(".lunboximgs").append($(".lunboximgs").find("img").eq(0))
            $(".lunboximgs").css("marginLeft",0+"px")
            $(".lunboximgs").css("transition","all 0s")
        },500)
    }
    function reduce() {
        $(".lunboximgs").css("marginLeft",-imgwidth+"px")
        $(".lunboximgs").css("transition","all 0s")
        $(".lunboximgs").prepend($(".lunboximgs").find("img").eq($(".lunboximgs").find("img").length-1))
        setTimeout(function () {
            $(".lunboximgs").css("marginLeft",0+"px")
            $(".lunboximgs").css("transition","all 0.5s")

        },0)
    }
    var luninterval=setInterval(function () {
        add()
    },3000)
    var startlun=true
    $(".jiantou1").click(function () {
        clearInterval(luninterval)
        reduce()
        startlun=false
    })
    $(".jiantou2").click(function () {
        clearInterval(luninterval)
        add()
        startlun=false
    })
    $(".jiantou2").mouseleave(function () {
        if(!startlun){
            setTimeout(function () {
                luninterval=setInterval(function () {
                    add()
                },3000)
                startlun=true;
            },6000)
        }

    })
    $(".jiantou1").mouseleave(function () {
        if(!startlun){
            setTimeout(function () {
                luninterval=setInterval(function () {
                    add()
                },3000)
                startlun=true;
            },6000)
        }
    })




})