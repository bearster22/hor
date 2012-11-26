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


var options={};
options["autoplay"]="true";
options["autosize"]="full";
options["audiodescriptionSourceRatio"]=.5;
console.log(TARGET);
videoPlayer=new TARGET.EverestVideoPlayer("flashcontent","550","400","http://static.targetimg1.com/ss_redroom/20121104/hor/TargetEverestVideoPlayer.swf","videoPlayer",options);
videoPlayer.playVideo({source:"http://static.targetimg1.com/ss_redroom/20121104/hor/assets/media/andre_exclusive_final.flv",captions:"http://static.targetimg1.com/ss_redroom/20121104/hor/assets/xml/andre_exclusive.xml"})