$(document).ready(function(){
	$(document).keyup(function(a){
		if(a.keyCode==13){
			$(".redroom_overlay").fadeOut(function(){
				$(".redroom_overlay").hide()
			})
		}
		if(a.keyCode==27){
			$(".redroom_overlay").fadeOut(function(){
				$(".redroom_overlay").hide()
			})
		}
	});
	$("#playButton").click(function(){
		videoPlayer.play();
		return false
	});
	$("#pauseButton").click(function(){
		videoPlayer.pause();
		return false
	});
	$("#stopButton").click(function(){
		videoPlayer.stop();
		return false
	});
	$("#closeButton").click(function(){
		videoPlayer.close();
		$("a.buy_btn").css("z-index","100000")
		$(".redroom_overlay").fadeOut(function(){
			$(".redroom_overlay").hide();
		});
		

		return false
	});
	
	var a={};
	a["autoplay"]="true";
	a["autosize"]="full";
	a["audiodescriptionSourceRatio"]=.5;
	videoPlayer=new TARGET.EverestVideoPlayer("flashcontent","600","400","http://static.targetimg1.com/ss_redroom/20121022/hor/TargetEverestVideoPlayer.swf","videoPlayer",a);
	videoPlayer.playVideo({
		source:"http://static.targetimg1.com/ss_redroom/20121022/hor/assets/media/onedirection/onedirection_exclusive_final.flv",
		captions:"http://static.targetimg1.com/ss_redroom/20121022/hor/assets/xml/onedirection_exclusive.xml"
	})
})