$(".redroom").removeClass("landing");
$(".nav_btn").hover(function(){
	var a=this;
	interval=self.setInterval(function(){
		move(a.id)
	},12)
},function(){
	interval=window.clearInterval(interval)
});
$(".door").unbind('click').click(function(){
	var artistRoom=this.id.replace("_door","");
	$(".redroom").animate({
		opacity:0
	},500,function(){
		if(artistRoom=="taylor"){
			window.location="http://www.target.com/c/taylor-swift-ways-to-shop-entertainment/-/N-56f6a";
			return false
		}else{
			var a=getPage(artistRoom);
			$(".redroom").html(a);
			hideCD(artistRoom);
			closeTray(illuminateRoom(),false)
		}
	})
});
$(".door").each(function(a){
	var that=this;
	var amtDoors=$("#"+that.id+" img").length;
	if(amtDoors>0){
		$("#"+this.id+" img").each(function(index){
			var b=$(this).attr("class");
			if(a+1==amtDoors){
				$(this).attr("src","http://static.targetimg1.com/ss_redroom/20121022/hor/img/"+that.id.replace("_door","")+"_"+b+".jpg").load(function(){
					isLoaded=true
				})
			}else{
				$(this).attr("src","http://static.targetimg1.com/ss_redroom/20121022/hor/img/"+that.id.replace("_door","")+"_"+b+".jpg")
			}
		})
	}
});
$(".door").hover(function(){
	doorOpen(this)
},function(){
	doorClose(this)
});

$(".portrait").click(function () {
	$(this).addClass("clicked");
});

$(".portrait").hover(function () {}, function () {
	$(this).removeClass("clicked");	
});


$(".movie_open").click(function(a){
	var portrait = $(this).parent().attr("id");
	//tony_bennet
	var b=$(".redroom").height();
	var c=$(".redroom").width();
	$(".redroom_overlay").html('<div class="vid_window ' + portrait + 'bennet_window"></div>');
	$(".redroom_overlay").css("height",b+"px").css("width",c+"px");
	var d=getPage(portrait + "_vid_player");
	$(".vid_window").html(d);
	$(".redroom_overlay").fadeIn()
	
});