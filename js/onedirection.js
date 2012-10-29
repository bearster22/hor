$(".redroom").addClass("scalable");
$(".video_1d").click(function(){
	var a=$(".redroom").height();
	var b=$(".redroom").width();
	$("a.buy_btn").css("z-index","1");
	$(".redroom_overlay").html('<div class="vid_window_larger"></div>');
	$(".redroom_overlay").css("height",a+"px").css("width",b+"px");
	var c=getPage("onedirection_vid_player");
	$(".vid_window_larger").html(c);
	$(".redroom_overlay").fadeIn()
});
