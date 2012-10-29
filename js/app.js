$(document).ready(function(){

  $(".neon").each(function(){
    // why doesn't $(this).data('numframes') work?
    var frames = $(this).attr('data-numframes');
    var neons = new Blinker({
                      images: $(this).find("img"),
                      delay: 500,
                      numframes: frames
                    });
    neons.start();
  });
  
  // $(".band").each(function(){
  //   // why doesn't $(this).data('numframes') work?
  //   var frames = $(this).attr('data-numframes');
  //   var bands = new Blinker({
  //                     images: $(this).find("img"),
  //                     delay: 8000,
  //                     fade: true,
  //                     numframes: frames
  //                   });
  //   bands.start();
  // });

  $(".click_button").click(function(){
    $("#frame_1").fadeOut();
    $("#frame_2").fadeIn();
    $(".redroom").css("height", "904px");	
	$("#catgoryHeaderContainer").css("height", "950px");
    $('.nodoubtpage #extras').animate({
      left: 328
    }, 1000, function () {
		
	});
  });

  $(".back_button").click(function(){
    $("#frame_2").fadeOut();
    $("#frame_1").fadeIn();
    $(".redroom").css("height", "517px");
	$("#catgoryHeaderContainer").css("height", "550px");
    $('.nodoubtpage #extras').animate({
      left: 1000
    }, 1000, function () {
			
	});
  });
});
