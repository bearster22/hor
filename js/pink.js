
$(document).ready(function () {
	var upOrDown=parseInt(70);
	$(".slider_bar").slider({
		orientation:"vertical",
		step:1,
		value:100,
		animate:true,
		stop:function(a,b){
			$(".scalable").removeClass("one two three");
			if(b.value>=upOrDown){
				$(".slider_bar").slider("option","value",100);
				$(".exclusive_media, .digital_downloads").slideUp();
				$(".scalable").addClass("one");
				$(".redroom, .pink_space").css("height","517px");
				$("#catgoryHeaderContainer").css("height", "550px");
				upOrDown=70
			}else{
				$(".slider_bar").slider("option","value",0);
				$(".exclusive_media").slideDown("fast",function(){
					$(".digital_downloads").slideDown("fast")
				});
				$(".slider_bar").slider("option","value",0);
				$(".scalable").addClass("three");
				$(".redroom, .pink_space").css("height","900px");
				$("#catgoryHeaderContainer").css("height", "950px");
				upOrDown=30
			}
		}
	}).height(300);
	$(".redroom").addClass("scalable");
	$(".vid_pink_1").click(function(){
		var a=$(".redroom").height();
		var b=$(".redroom").width();
		$(".redroom_overlay").html('<div class="vid_window"></div>');
		$(".redroom_overlay").css("height",a+"px").css("width",b+"px");
		var c=getPage("pink_vid_player");
		$(".vid_window").html(c);
		$(".redroom_overlay").fadeIn()
	});
	$(".pic_pink").click(function(){
		var a=$(".redroom").height();
		var b=$(".redroom").width();
		$(".redroom_overlay").html('<div class="cycle_wrap"></div>');
		$(".redroom_overlay").css("height",a+"px").css("width",b+"px");
		var c=getPage("pink_gallery");
		$(".cycle_wrap").html(c);
		$(".redroom_overlay").fadeIn();
		$(".cycle_gallery").cycle({
			fx:"fade",
			speed:"fast",
			timeout:0,
			next:"#next2",
			prev:"#prev2",
			height:"500"
		})
	})
})