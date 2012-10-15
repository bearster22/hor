// JavaScript Document
// Kevin Truckenmiller @ Sevnthsin.com
// Aug 11th, 2012
var address = String(window.location);
var addyArr = address.split("?");
var page = "";
var newPage = "";
for(i=0; i <= addyArr.length-1;i++) {
	
	var x = addyArr[i].split("=");
	if(x[0] == "request"){
		page = x[1];
		page = page.split("#")[0];
		
		page = page.split("&")[0];
		
	}
}
	
//function that gets content based upon page string
function getPage(strPage) {
	for (p in elements) {
		if(elements[p].page == strPage) {
			return elements[p].content + "<script type='text/javascript' src='http://static.targetimg1.com/ss_redroom/20121022/hor/js/" + elements[p].javascript + "'></script>";
		}
	}
}
function move(btnID) {
	var leftPos = $(".lobby").css("left").replace('px', '');
	if(btnID == "nav_left") {
		$("#nav_right").show();	
		leftPos = parseInt(leftPos) + 5;
		if(leftPos <= 0) {
			$(".lobby").css("left", leftPos + "px");
		}else {
			$("#nav_left").hide();	
		}
	}else if(btnID == "nav_right") {
		leftPos = parseInt(leftPos) - 5;
		$("#nav_left").show();	
		if(leftPos >= -2325) {
			$(".lobby").css("left", leftPos + "px");
		}else {
			$("#nav_right").hide();	
		}
	}
	return false;
}	
	
/**
*	callback - callback function
*
*	openDoor - "open" - open the door, "close" - close the door "toggle" - toggle the door
*
**/	
var opening = false;
var isOpen = false;
function toggleTray (callback, doorState) {	
	if(!opening) {
		opening = true;
		if(isOpen) {
			$(".exclusive_artists").slideToggle('slow', function () {
				$(".open_close span.text").html("our exclusive artists").css("margin-left", "20px");
				$(".open_close span.btn_cross").css("background-position", "-15px");
				isOpen = false;
				opening = false;
			});
		}else {
			$(".exclusive_artists").slideToggle('slow', function () {
				$(".open_close span.text").html("hide").css("margin-left", "70px");
				$(".open_close span.btn_cross").css("background-position", "0px");
				isOpen = true;
				opening = false;
			});
		}
		
		if(callback) {	
			callback();
		}
	}
}
function openTray (callback) {
	if(!opening) {
		opening = true;
		$(".exclusive_artists").slideDown('slow', function () {
			$(".open_close span.text").html("hide").css("margin-left", "70px");
			$(".open_close span.btn_cross").css("background-position", "0px");
			isOpen = true;
			opening = false;
			if(callback) {	
				callback();
			}	
		});		
	}
}
function closeTray (callback) {
	if(!opening) {
		opening = true;
		$(".exclusive_artists").slideUp('slow', function () {
			$(".open_close span.text").html("our exclusive artists").css("margin-left", "20px");
			$(".open_close span.btn_cross").css("background-position", "-15px");
			isOpen = false;
			opening = false;
			if(callback) {	
				callback();
			}
		});	
	}
}


function doorOpen(parentHood) {
	var theId = $(parentHood).attr("id");
	var allImages = $("#"+ theId + " img");	
	var len = $(allImages).length;
	$(allImages).each(function (index) {
		$(this).css("opacity", "0").css("display","block");
		
		$(this).animate({opacity:1}, (75 * index), function () {
			if(len != index+1) {
				$(this).animate({opacity:0}, 75);
			}
		});
	});	
	return false;
}

function hideCD(page) {
		$("li.artist").show();
		$("#" + page + "_cd").parent().parent().hide();
		$("#back_home").show();	
}

function doorClose(parentHood) {
	var theId = $(parentHood).attr("id");
	var allImages = $("#"+ theId + " img");	
	var len = allImages.length;	
	$(allImages).css("opacity", "1");

	$($(allImages).get().reverse()).each(function (index) {
		$(this).animate({opacity:0}, (50 * index), function () {
				
		});
	});
	return false;
}
function goLobby (callback) {
	var once = true;
	$(".redroom").animate({opacity:0,height:517}, 1000, function () {
		
			$("#back_home").hide();
			$(".artist").show();
			var myHtml = getPage("lobby") + getPage("back_home");
			$(".redroom").html(myHtml);
			$("#catgoryHeaderContainer").css("height","550px");	
			
			$(document).ready(function () {
				if(callback) {	
					illuminateRoom(callback);
				}
				

			});					
		
	});		
	
}
function illuminateRoom(callback){
	$(".redroom").animate({opacity:1, height:517},500, function () {
		if(callback) {
			callback();
		}	
	});

}








	
/** 
*	Constructor for Dynamic Loading of pages
*	elements is an object that stores pages and calls them based upon click states
**/		
var elements = [{
				
		page: 'lobby',
		content: 
		'<a href="#nogo" id="nav_left" class="nav_btn">left</a>\
		<div class="lobby_wrap zoomViewport">\
			<div class="lobby">\
				<div class="portrait" id="tony_bennet">\
						<div class="movie_open"></div>\
						<p>exclusive<br>video</p>\
						<a href="/QuickInfoView?partNumber=14262846&catEntryId=205271471&categoryId=4502&productId=205271470&overlayId=QuickView&validation=true&position=targetCenter&slotPosition=medium%3a1%3a24&omnitureSuperCatgValue=&lnk=srch_qi_grid_1_24" class="buy_btn quickInfo layer" >\
							<span>buy CD now</span>\
						</a>\
				</div>\
				<div class="portrait" id="coming_1"></div>\
				<div class="portrait" id="coming_2"></div>\
				<div class="portrait" id="coming_3"></div>\
				<div class="door" id="nodoubt_door">\
					<img src="" class="one"/><img src="" class="two"/>\
					<img src="" class="three"/><img src="" class="four"/>\
					<img src="" class="five"/>\
				</div>\
				<div class="door" id="taylor_door">\
					<img src="" class="one"/><img src="" class="two"/>\
					<img src="" class="three"/><img src="" class="four"/>\
					<img src="" class="five"/>\
				</div>\
				<div class="door" id="pink_door">\
					<img src="" class="one"/>\
					<img src="" class="two"/>\
					<img src="" class="three"/>\
					<img src="" class="four"/>\
					<img src="" class="five"/>\
				</div>\
				<div class="door" id="onedirection_door">\
					<img src="" class="one" />\
					<img src="" class="two" />\
					<img src="" class="three" />\
					<img src="" class="four" />\
				</div>\
			</div>\
		</div>\
		<a href="#nogo" id="nav_right" class="nav_btn">right</a><script type="text/javascript" language="javascript" src="http://static.targetimg1.com/ss_redroom/20121022/hor/assets/js/43935137.js"> </script><script type="text/javascript" language="javascript" src="http://static.targetimg1.com/ss_redroom/20121022/hor/assets/js/TargetEverestVideoPlayer.js"> </script>',
		javascript: 'lobby.js'
},{
		page: 'pink',
		content: '<link href="http://static.targetimg1.com/ss_redroom/20121022/hor/css/jquery-ui.css" rel="stylesheet" type="text/css"/><div class="pink_space scalable"><img class="bubbles_anchor scalable one" src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/bg_bubbles_anchor.png"/><img class="pink scalable one" src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/img_pink_herself.png"/><img class="orb1 scalable" src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/orb1.png" /><img class="orb2 scalable" src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/orb2.png" /><img class="orb3 scalable" src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/orb3.png" /></div><div class="redroom scalable"><div class="slider_bar"></div><div class="cd_info"><img src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/logo_pink.png" class="logo_pink"/><br><img src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/cd_pink.png" class="cd_pink"/><h2>the truth about love</h2><p>with <em>4 exclusive songs</em>. only at Target<span class="r_ball">&#174;</span>.</p><p><a class="productOmniClick preorder layer" id="prodImage-medium-1-3" title="P!nk - The Truth About Love - Only at Target Quick Info" href="/QuickInfoView?partNumber=14203903&amp;catEntryId=205124546&amp;categoryId=89010&amp;productId=205124545&amp;overlayId=QuickView&amp;validation=true&amp;position=targetCenter&amp;omnitureSuperCatgValue=&amp;lnk=plp_qi_grid_1_3 ">buy <span>CD</span> now</a></p><div class="exclusive_media"><h2>exclusive vids & pics</h2><a class="vid_pink_1 vid" href="#exclusive_media_2"></a><a class="pic_pink pic" href="#exclusive_media_3"></a></div><div class="digital_downloads"><h2>digital downloads</h2><a class="digital_pic vid" href="http://static.targetimg1.com/ss_redroom/20121022/hor/assets/downloads/P!NK.zip"></a></div></div></div></div> <script type="text/javascript" src="http://malsup.github.com/jquery.cycle.all.js"> </script><script type="text/javascript" language="javascript" src="http://static.targetimg1.com/ss_redroom/20121022/hor/assets/js/43935137.js"> </script><script type="text/javascript" language="javascript" src="http://static.targetimg1.com/ss_redroom/20121022/hor/assets/js/TargetEverestVideoPlayer.js"> </script>',
		javascript: 'pink.js'
},{
		page: 'taylor',
		content: '',
		javascript: 'taylor.js'
},{
		page: 'pink_gallery',
		content: '<div class="cycle_gallery"><img src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/pink_gallery/pink_photo_1.jpg"/><img src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/pink_gallery/pink_photo_2.jpg"/><img src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/pink_gallery/pink_photo_3.jpg"/><img src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/pink_gallery/pink_photo_4.jpg"/><img src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/pink_gallery/pink_photo_5.jpg"/><img src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/pink_gallery/pink_photo_6.jpg"/><img src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/pink_gallery/pink_photo_7.jpg"/><img src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/pink_gallery/pink_photo_8.jpg"/></div><div id="nav"><a href="#nogo" id="prev2">prev</a><a href="#nogo" id="next2">next</a></div><a href="#nogo" class="btn_close"></a>',
		javascript: 'pink_gallery.js'		
},{
		page: 'pink_vid_player',
		content: '<div id="page"><div id="body"><div style="float:left;width:30%"><div id="flashcontent"></div><img id="logo_pink_small" src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/logo_pink_small.png"><div id="player_btns"><a id="playButton" class="btn play">Play</a><a id="pauseButton" class="btn pause">Pause</a><a id="stopButton" class="btn stop">Stop</a><a id="closeButton" class="btn close">Close</a><a href="#" class="btn" id="stream2">Video 2</a><a href="#" class="btn" id="stream1">Video 1</a></div></div></div></div>',
		javascript: 'pink_vid_player.js'	
},{
		page: 'back_home',
		content: '',	
		javascript: 'back_home.js'
}, {
		page: 'nodoubt',
		content: '<div class="nodoubtpage"><div class="cd_info"><img class="logo" src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/logo-8.png"><h2>Push and Shove</h2><p>with <b>5 exclusive songs</b> - only at Target<span class="r_ball">&#174;</span>.</p><a href="/QuickInfoView?partNumber=14230916&catEntryId=205211483&categoryId=89010&productId=205211482&overlayId=QuickView&validation=true&position=targetCenter&omnitureSuperCatgValue=&lnk=srch_qi_grid_1_5" class="preorder_button productOmniClick layer"><img src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/cover-8.png" class="border-glow" style=""><img class="cover" src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/buy_button-8.png"/></a><div id="extras"><div class="exclusive"><h2>exclusive<br>vids & pics</h2><a class="vid_nodoubt border-glow" href="#exclusive_media_2"></a><a class="pic_nodoubt border-glow" href="#exclusive_media_3"></a></div><div class="digital"><h2>digital<br>extras</h2><a class="digital_nodoubt border-glow" href="http://static.targetimg1.com/ss_redroom/20121022/hor/assets/downloads/NoDoubt_Wallpapers.zip"></a></div></div></div><div id="frame_2"><div class="band"><img src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/bandimages/frame_2/band.jpg"></div><div class="neon back_button"><img class="frame_1" src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/neons_new/frame_2/button/back_1-8.png"><img class="frame_2" src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/neons_new/frame_2/button/back_2-8.png"></div><div class="neon skyline" data-numframes="6"><img class="building_1" data-frames="1,2,3,5,6" src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/neons_new/frame_2/skyline/building_1-8.png"><img class="building_2" data-frames="2,3,4,6" src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/neons_new/frame_2/skyline/building_2-8.png"><img class="pinks" data-frames="1,2,3,4,5" src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/neons_new/frame_2/skyline/pinks-8.png"><img class="blues" data-frames="2,3,4" src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/neons_new/frame_2/skyline/blues-8.png"><img class="yellows" data-frames="3" src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/neons_new/frame_2/skyline/yellows-8.png"></div></div><div id="frame_1"><div class="band"><img src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/bandimages/frame_1/band.jpg"></div><div class="neon skyline" data-numframes="5"><img class="building_1" data-frames="3,4" src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/neons_new/frame_1/skyline/building_1.png"><img class="building_2" data-frames="2,3,5" src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/neons_new/frame_1/skyline/building_2.png"><img class="building_3" data-frames="1,2,3" src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/neons_new/frame_1/skyline/building_3.png"><img class="yellows" data-frames="3,5" src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/neons_new/frame_1/skyline/yellows.png"><img class="pinks" data-frames="2,3,4" src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/neons_new/frame_1/skyline/pinks.png"><img class="blues_1" data-frames="1,2,4" src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/neons_new/frame_1/skyline/blues_1.png"><img class="blues_2" data-frames="1,2,4" src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/neons_new/frame_1/skyline/blues_2.png"></div><div class="neon click_button"><img class="click" src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/neons_new/frame_1/button/click.png"><img class="now" src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/neons_new/frame_1/button/now.png"></div></div></div><script type="text/javascript" language="javascript" src="http://g-ecx.images-amazon.com/images/G/16/00/00/00/43/93/51/43935137.js"></script><script type="text/javascript" language="javascript" src="http://static.targetimg1.com/ss_redroom/20121022/hor/assets/js/TargetEverestVideoPlayer.js"></script><script type="text/javascript" src="http://malsup.github.com/jquery.cycle.all.js"></script><script type="text/javascript" src="http://static.targetimg1.com/ss_redroom/20121022/hor/js/lib/blinker.js"></script><script type="text/javascript" src="http://static.targetimg1.com/ss_redroom/20121022/hor/js/app.js"></script>',
		javascript: 'no_doubt.js'	
},{
		page: 'nodoubt_gallery',
		content: '<div class="cycle_gallery"><img src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/gallery/nodoubt_1.jpg"/><img src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/gallery/nodoubt_2.jpg"/><img src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/gallery/nodoubt_3.jpg"/><img src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/gallery/nodoubt_4.jpg"/><img src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/gallery/nodoubt_5.jpg"/><img src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/gallery/nodoubt_6.jpg"/><img src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/gallery/nodoubt_7.jpg"/><img src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/gallery/nodoubt_8.jpg"/><img src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/gallery/nodoubt_9.jpg"/><img src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/nodoubt/gallery/nodoubt_10.jpg"/></div><div id="nav"><a href="#nogo" id="prev2">prev</a><a href="#nogo" id="next2">next</a></div><a href="#nogo" class="btn_close"></a>',
		javascript: 'nodoubt_gallery.js'		
},{
		page: 'nodoubt_vid_player',
		content: '<div id="page"><div id="body"><div style="float:left;width:30%"><div id="flashcontent"></div><div id="player_btns"><a id="playButton" class="btn play">Play</a><a id="pauseButton" class="btn pause">Pause</a><a id="stopButton" class="btn stop">Stop</a><a id="closeButton" class="btn close">Close</a><a href="#" class="btn" id="stream2">Video 2</a><a href="#" class="btn" id="stream1">Video 1</a></div></div></div></div>',
		javascript: 'nodoubt_vid_player.js'	
},{
		page: 'tony_bennet_vid_player',
		content: '<div id="page"><div id="body"><div style="float:left;width:30%"><div id="flashcontent"></div><div id="player_btns"><a id="playButton" class="btn play">Play</a><a id="pauseButton" class="btn pause">Pause</a><a id="stopButton" class="btn stop">Stop</a><a id="closeButton" class="btn close">Close</a></div></div></div></div>',
		javascript: 'bennet_vid_player.js'	
},{
		page: 'onedirection',
		content: '<div class="onedirectionpage">\
			<div class="xtra_info">\
				<img id="logo" src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/logo_1d.png" />\
				<div class="album_1d">\
					<img class="ss_cd" src="http://static.targetimg1.com/ss_redroom/20121022/hor/img/img_1d_album.png" />\
					<p id="available">available Nov. 13th<br />only at Target<span class="r_ball">&#174;</span></p>\
				</div>\
				<h4>Take Me Home</h4>\
				<p>with <em>5 exclusive songs:</em></p>\
				<p><em>Truly, Madly, Deeply<br />Magic<br />Irresistable<br />One Thing (Live)<br />I Wish (Live)<br /></em></p>\
				<a href="/QuickInfoView?partNumber=14258662&catEntryId=205263825&categoryId=4503&productId=205263824&overlayId=QuickView&validation=true&position=targetCenter&slotPosition=medium%3a1%3a7&omnitureSuperCatgValue=&lnk=srch_qi_grid_1_7" class="btn quickInfo layer"><span>pre-order now</span></a>\
			</div>\
			<div class="video">\
				<h4>exclusive video</h4>\
				<a class="video_1d"></a>\
			</div>\
		</div>\
		<script type="text/javascript" src="http://malsup.github.com/jquery.cycle.all.js"></script>\
	  	<script type="text/javascript" language="javascript" src="http://static.targetimg1.com/ss_redroom/20121022/hor/assets/js/43935137.js"></script>\
	  	<script type="text/javascript" language="javascript" src="http://static.targetimg1.com/ss_redroom/20121022/hor/assets/js/TargetEverestVideoPlayer.js"></script>',
		
		javascript: 'onedirection.js'
},{
		page: 'onedirection_vid_player',
		content: '<div id="page"><div id="body"><div style="float:left;width:30%"><div id="flashcontent"></div><div id="player_btns"><a id="playButton" class="btn play">Play</a><a id="pauseButton" class="btn pause">Pause</a><a id="stopButton" class="btn stop">Stop</a><a id="closeButton" class="btn close">Close</a></div></div></div></div>',
		javascript: 'onedirection_vid_player.js'	
}]
		var popup = '<div class="tab_top">\
                <a class="open_close" id="tab_open" href="#nogo">\
                    <span class="btn_cross"></span>\
                    <span class="text">our exclusive artists</span>\
                </a>\
            </div>\
            <div class="exclusive_artists">\
                <h1>our exclusive artists</h1>\
                <!-- <p>use the arrows above or click on any artist below to get more music, more exclusives, more surprises</p> -->\
                <div class="bar"></div>\
                <ul>\
                    <li class="back_home" id="back_home">\
                        <div class="cd" style="background-image:url(http://static.targetimg1.com/ss_redroom/20120920/img/cd_lobby.jpg);"></div>\
                        <h2><a href="#back_home" id="go_to_lobby">back home</a></h2>\
                        <p></p>\
                        <div class="bar"></div>\
                    </li>\
                    <li class="artist">\
                        <div class="cd" style="background-image:url(http://static.targetimg1.com/ss_redroom/20121022/hor/img/cd_pink.jpg);"></div>\
                        <h2><a href="#pink" id="pink_cd">p!nk</a></h2> \
                        <p>The Truth About Love<br>Available CD</p> \
                        <div class="bar"></div> \
                    </li> \
                    <li class="artist">\
                        <div class="cd" style="background-image:url(http://static.targetimg1.com/ss_redroom/20121022/hor/img/cd_no_doubt.jpg);"></div>\
                        <h2><a id="nodoubt_cd" href="#nogo">no doubt</a></h2>\
                        <p>Push And Shove<br>Available Now</p>   \
                         <div class="bar"></div>\
                    </li>\
                    <li class="artist">\
                        <div class="cd" style="background-image:url(http://static.targetimg1.com/ss_redroom/20121022/hor/img/cd_taylor.jpg);"></div>\
                        <h2><a id="taylor_cd" href="#nogo">taylor swift</a></h2>\
                        <p>Red<br>Available Now</p> \
                         <div class="bar"></div> \
                    </li>\
                    <li class="artist">\
                        <div class="cd" style="background-image:url(http://static.targetimg1.com/ss_redroom/20121022/hor/img/cd_1d.jpg);"></div>\
                        <h2><a id="onedirection_cd" href="#nogo">one direction</a></h2>\
                        <p>Take Me Home<br>Pre-order Now</p> \
                         <div class="bar"></div> \
                    </li>\
                    <li class="artist">\
                        <div class="cd" style="background-image:url(http://static.targetimg1.com/ss_redroom/20121022/hor/img/cd_bennet.jpg);"></div>\
                        <h2><a id="tony_cd" href="#nogo">tony bennett</a></h2>\
                        <p>Duets II<br>Available Now</p> \
                         <div class="bar"></div> \
                    </li>\
                    <li class="artist">\
                        <div class="cd" style="background-image:url(http://static.targetimg1.com/ss_redroom/20121022/hor/img/cd_upcoming.jpg);"></div>\
                        <h2><a id="comingsoon_1" href="#nogo">coming soon</a></h2>\
                        <p>Available Nov. 4</p> \
                         <div class="bar"></div> \
                    </li>\
					<li class="artist">\
                        <div class="cd" style="background-image:url(http://static.targetimg1.com/ss_redroom/20121022/hor/img/cd_upcoming.jpg);"></div>\
                        <h2><a id="comingsoon_2" href="#nogo">coming soon</a></h2>\
                        <p>Available Nov. 4</p> \
                         <div class="bar"></div> \
                    </li>\
					<li class="artist">\
                        <div class="cd" style="background-image:url(http://static.targetimg1.com/ss_redroom/20121022/hor/img/cd_upcoming.jpg);"></div>\
                        <h2><a id="comingsoon_3" href="#nogo">coming soon</a></h2>\
                        <p>Available Nov. 13</p> \
                         <div class="bar"></div> \
                    </li>\
                </ul>\
                <div class="clearfix"></div>\
            </div>';
	
	
	
	
	
	
	
	
	
	
$(document).ready(function () {
	$(".popup").html(popup);
	switch(page) {
		case "taylor": 
		case "pink": 
		case "nodoubt":
		case "1d":
		case "onedirection":
		case "lobby":
			if(page == "1d"){
				page = "onedirection";
			}
			pageHtml = getPage(page);
			$(".redroom").html(pageHtml).removeClass("landing");
			hideCD(page);
			$(".redroom").animate({opacity:1, height:517},500, function () {
				// fix for pinks page - backwards designing leads to fixes like this
				if(page == "pink") {
					$(".pink_space").css("height", "517px");
					$(".nodoubtpage").css("height", "517px");
				}
				// fix for 1Ds page (taller)
				else if(page == "onedirection") {
					$(".redroom").css("height","643px");
					$("#catgoryHeaderContainer").css("height","657px");  // Sarah's test to fix resizing issue (not working)
				}
				$(".popup").animate({opacity:1},500);	
				openTray(null);
				var interact = false;
				setTimeout(function () {
					if(!interact) {
						closeTray(null);
					}
				}, 3000);	
				$(".exclusive_artists").hover(function () {
					interact = true;	
				});				
			});
			
			break;		
		case "tony":
		var tony = 1;
		default:
			// Default action. Open the doors and go to the lobby
			$(window).load( function () {
				//Front Door animation 
				$(".redroom").css("opacity", "1");
				$(".intro img").each(function (index){
					var cName = $(this).attr('class');
					if((index + 1) == 6) {
						var parent = $(this).parent();
						$(this).attr("src", "http://static.targetimg1.com/ss_redroom/20121022/hor/img/intro_" + cName + ".png").load(function () {
							setTimeout(function () {
								$("div.front").fadeOut(1);
								doorOpen(parent);
								setTimeout(function() { $('.redroom').animate({opacity:0}, 500 , function () {
								
									$(".door_lobby").fadeIn("fast");
									var page = getPage("lobby");
									//Load up lobby
									$(".redroom").html(page);
									$(".redroom").animate({opacity:1},500, function () {
										//hide backhome button
										$("#back_home").css("display", "none");
										$(".popup").animate({opacity:1},500);	
										openTray(null);
										var interact = false;
										if(tony == 1) {
											$(".lobby").animate({left:0},2000);
										}
										setTimeout(function () {
											if(!interact) {
												closeTray(null);
											}
										}, 3000);	
										$(".exclusive_artists").hover(function () {
											interact = true;	
										});
									});	
								}); }, 1000);
							}, 2000);	
						});
					} else {
						$(this).attr("src", "http://static.targetimg1.com/ss_redroom/20121022/hor/img/intro_" + cName + ".png");
					}
				});	
					
			});
	}
	
	

	//Open and Close Artist Tray
	$(".open_close").click(function () {
		
		toggleTray(null, "toggle");
	});
	


	//Tray Back Button
	$("#go_to_lobby").click(function () {
		
		$(".redroom").removeClass("scalable");
		toggleTray(goLobby(function () {}), false);
	});
	
	// Toggle Artists room- remove their cd, add back to home cd tray item
	//, a #pink_cd
	$(".artist a, .door").unbind('click').click(function () {
		var newPage = this.id;
		newPage = newPage.replace("_cd", "");
		
		if(newPage == "pink" || newPage == "nodoubt"){
			$(".redroom").animate({opacity:0, height:517},500,function(){
				$("#catgoryHeaderContainer").css("height","550px");	
				var a=getPage(newPage);
				$(".redroom").html(a);
				hideCD(newPage);
				closeTray(illuminateRoom(), false)
			});
		} else if (newPage == "onedirection") {
			$(".redroom").animate({opacity:0, height:643},500, function () {
				$("#catgoryHeaderContainer").css("height","657px");	
				var a=getPage(newPage);
				$(".redroom").html(a);
				hideCD(newPage);
				closeTray(function () {
					$(".redroom").animate({opacity:1, height:643},500);	
				});	
			});	

		}else if(newPage == "taylor") {
			window.location = "http://www.target.com/c/taylor-s-picks-ways-to-shop-entertainment/-/N-56f6a";
			return false;
		}else if(newPage == "tony") {
			$(".redroom").removeClass("scalable");
			toggleTray(goLobby(function () {
				$(".lobby").animate({left:0},2000);
			}
			), false);	
			
			
		}
	});
	
	
	
});




