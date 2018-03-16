$(".zpart3 div.tabs").eq(0).show();
$(".zpart2 li").click(function(){
	var num=$(this).index();
	// $("this").addClass("zling").siblings().removeClass('zling');
	$(".zpart3 div.tabs").eq(num).show().siblings().hide();
})


