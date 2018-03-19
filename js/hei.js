$(function(){

    $(window).load(function(){
        var hei = $('.hei').height();
        $('.w-fzlc-con .container').height(hei);
        $(window).resize(function(){
            var hei1 = $('.hei').height();
            $('.w-fzlc-con .container').height(hei1);
        })

        var hei2 = $('.img11').height();
        $('.container-ren').height(hei2);
        console.log(hei2)

        /*alert("123")
         alert(hei2)*/
        $(window).resize(function(){
            hei2 = $('.img11').height();
            $('.container-ren').height(hei2);
        })
        var boo = $('.iusa img').height();
        $('.iusa').height(boo)
        $('.ban-ren').height(boo)

    })
    var kuan = $('.kuan').width()
    $('.img12').width(kuan)
})