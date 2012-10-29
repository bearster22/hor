

	$(".vid_nodoubt").click(function(a){
		var b=$(".redroom").height();
		var c=$(".redroom").width();
		$(".redroom_overlay").html('<div class="vid_window nodoubt_window"></div>');
		$(".redroom_overlay").css("height",b+"px").css("width",c+"px");
		var d=getPage("nodoubt_vid_player");
		$(".vid_window").html(d);
		$(".redroom_overlay").fadeIn()
	});
	$(".pic_nodoubt").click(function(a){
		var b=$(".redroom").height();
		var c=$(".redroom").width();
		$(".redroom_overlay").html('<div class="cycle_wrap"></div>');
		$(".redroom_overlay").css("height",b+"px").css("width",c+"px");
		var d=getPage("nodoubt_gallery");
		$(".cycle_wrap").html(d);
		$(".redroom_overlay").fadeIn();
		$(".cycle_gallery").cycle({
			fx:"fade",
			speed:"fast",
			timeout:0,
			next:"#next2",
			prev:"#prev2",
			height:"500"
		});
	});
