var Blinker;

Blinker = (function() {

  function Blinker( data ) {
    this.images = data.images;
    this.numframes = data.numframes || 2;
    this.frameshash = this.build_frames_hash(2);

    this.delay = data.delay || 1000;
    this.current = 0;
    this.fade = data.fade || false;

    this.timer;
    for (var i = this.images.length - 1; i >= 0; i--) {
      $(this.images[i]).css('display', 'none');
    };
    $(this.images[0]).css('display', 'block');
  }

  Blinker.prototype.build_frames_hash = function() {
    var frames_hash = {};
    for (var i = this.numframes; i >= 1; i--) {
      frames_hash[i] = new Array();
    };

    for (var i = this.images.length - 1; i >= 0; i--) {
      var img = this.images[i];
      // should be $(img).data('frames') -- not sure why it's not woriking
      if($(img).attr('data-frames')){
        var img_data = $(img).attr('data-frames').split(',');
        for (var j = img_data.length - 1; j >= 0; j--) {
          frames_hash[img_data[j]].push(i);
        };
      } else {
        var nodata = true;
      }
    };

    if(nodata){
      for (var k = this.images.length; k >= 1; k--) {
        frames_hash[k].push(k - 1);
      };
    }

    return frames_hash;
  }

  Blinker.prototype.blink = function() {
    if(this.current < this.numframes){
      this.current++;
    } else {
      this.current = 1;
    }
    
    for (var i = this.images.length - 1; i >= 0; i--) {
      this.toggle_opacity($(this.images[i]), 'none');  
    };

    for (var k = this.frameshash[this.current].length - 1; k >= 0; k--) {
      this.toggle_opacity(this.images[this.frameshash[this.current][k]], 'block');  
    };
  }

  Blinker.prototype.toggle_opacity = function( element, onoff ) {
    if(this.fade){
      $(element).fadeTo( this.delay, onoff );
    } else {
      $(element).css('display', onoff);
    }
  }

  Blinker.prototype.start = function() {
    var instance = this;
    instance.timer = setInterval(function(){ instance.blink() }, this.delay);
  }

  return Blinker;
}());

