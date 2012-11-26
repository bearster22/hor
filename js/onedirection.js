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
	
// open/close the room

	$("#button_click").click(function(){
		$(this).toggleClass("clicked");
		// open experience
		if ($("#button_click").is('.clicked')) {
			$(".x0y0.w4").css("height","650px");
			$(".redroom").css("height","705px");
			$(".onedirectionpage, #onedirection_color").animate({height:705}, 1000);
			$("#onedirection_color").animate({opacity:1}, 1000);
			$(".xtra_info").animate({top:430}, 1000, function () {
				$(".extras, .video").animate({left:590}, 500);
				});
			$("#button_text").css("opacity","0");
			// IE alternative for nonrotation
			if (!$.support.leadingWhitespace) {
				$(".button_1d").animate({bottom:1050,left:20}, 1500);
				$("#overlay_1d").animate({bottom:365}, 1500);
			} 
			// normal behavior
			else {
				$("#overlay_1d").rotate({
					angle: 0,
					animateTo:-15,
					duration: 1500
					});
				$("#overlay_1d").animate({bottom:345}, 1500);
				$(".button_1d").animate({bottom:1025,left:820}, 1500);
				$("#button_click").rotate({
					angle:0,
					animateTo:525,
					duration:1500
					});
			}
						
		 } // end open function
		 
		// close experience
		else { 
			$(".redroom, .onedirectionpage").css("height","517px");
			$("#onedirection_color").animate({height:517}, 1000, "linear");
			$(".extras, .video").animate({left:1000}, 500);
			$(".xtra_info").animate({top:240}, 1000);
			$("#onedirection_color").animate({opacity:0}, 1000);
			// IE alternative for nonrotation
			if (!$.support.leadingWhitespace) {
				$(".button_1d").animate({bottom:900,left:500}, 1000);				
				$("#overlay_1d").animate({bottom:285}, 1000);
				setTimeout(function () {	
					$("#button_text").animate({opacity:1}, 1000);
				}, 1000);
			} 
			// normal behavior
			else {
				$(".button_1d").animate({bottom:900,left:500}, 1000);
				$("#overlay_1d").animate({bottom:285}, 1000);
				$("#overlay_1d").rotate({
					angle: -15,
					animateTo:0,
					duration: 2000
					});
				$("#button_click").rotate({
					angle:525,
					animateTo:0,
					duration:2000
					});
				setTimeout(function () {	
					$("#button_text").animate({opacity:1}, 1000);
				}, 1000);
			}
			setTimeout(function () {	
				$(".x0y0.w4").css("height","450px");
			}, 1000);
		} // end close function
	
	});	// end button click
	
	
// fix z-index issue on buy now button	
$("a.buy_btn").click(function(){
	$("a.buy_btn").css("z-index","1");
	});

$(".icon-sprite").click(function(){
	$("a.buy_btn").css("z-index","100000");
});


