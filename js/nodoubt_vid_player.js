$(document).keyup(function(a){
	if(a.keyCode==13){
		$(".redroom_overlay").fadeOut()
	}if(a.keyCode==27){
		$(".redroom_overlay").fadeOut()
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
$("#closeButton").click(function(a){
	a.preventDefault();
	videoPlayer.close();
	$(".redroom_overlay").fadeOut();
	return false
});
$("#stream1").click(function(){
	videoPlayer.playVideo({
		source:"http://static.targetimg1.com/ss_redroom/20121104/hor/assets/media/nodoubt/behind_the_scenes_video/DoDoubt_BTS_1.4mb.flv",
		captions:"http://static.targetimg1.com/ss_redroom/20121104/hor/assets/xml/nodoubt_exclusive.xml"
	});return false
});
$("#stream2").click(function(){
	videoPlayer.playVideo({
		source:"http://static.targetimg1.com/ss_redroom/20121104/hor/assets/media/nodoubt/broadcast_spot/NoDoubt_BroadcastSpot_1.4mb.flv",
		captions:"http://static.targetimg1.com/ss_redroom/20121104/hor/assets/xml/nodoubt_broadcast.xml"
	});return false
});
var options={};
options["autoplay"]="true";
options["autosize"]="full";
options["audiodescriptionSourceRatio"]=.5;
videoPlayer=new TARGET.EverestVideoPlayer("flashcontent","550","400","http://static.targetimg1.com/ss_redroom/20121104/hor/TargetEverestVideoPlayer.swf","videoPlayer",options);
videoPlayer.playVideo({source:"http://static.targetimg1.com/ss_redroom/20121104/hor/assets/media/nodoubt/behind_the_scenes_video/NoDoubt_BTS_1.4mb.flv",captions:"http://static.targetimg1.com/ss_redroom/20121104/hor/assets/xml/nodoubt_exclusive.xml"})