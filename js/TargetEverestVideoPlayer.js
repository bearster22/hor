 
if(typeof TARGET == "undefined") TARGET = {};

if(typeof log == "undefined") {
	function log(str) { try { console.log(str); } catch(e) {} }
}

TARGET.EverestVideoPlayer = function(containerId, width, height, playerUrl, name, options) {
	if(typeof TARGET.EverestVideoPlayer.instances == "undefined")
		TARGET.EverestVideoPlayer.instances = [];
		
	this.videoPlayerId = TARGET.EverestVideoPlayer.instances.length;
	TARGET.EverestVideoPlayer.instances.push(this);
		
	this.containerId_ = containerId;
	this.flashId_ = "flashVideoPlayer" + this.videoPlayerId;
	
	this.flashPlayer_ = null;
	this.name = "TARGET.EverestVideoPlayer.instances["+this.videoPlayerId+"]";
	this.playerUrl_ = playerUrl || null;
	this.expressInstallUrl_ = null;

	this.flashParams_ = [
		{"name": "allowScriptAccess", "value": "always"},
		{"name": "allowFullScreen",   "value": "true"},
		{"name": "wmode",             "value": "window"}
	];
	this.flashVars_ = [];
	
	this.width_ = width || 558;
	this.height_ = height || 322;
	this.version_ = "9.0.115";
	
	this.movieLoadTimeout_ = 2000;
	this.retryInterval_ = 50;
	this.flashHasLoaded_ = false;
	this.isSWFReady = false;
	this.currentStream = null;
	
	//set flashvars from options
	if(typeof options == "object"){
		var item;
		for(item in options){
			this.addFlashVar(item, options[item]);
		}
	}
	
	//register callback method and id of this instance
	this.addFlashVar("objectName", this.name);
	this.addFlashVar("readyCallback", this.name+".onSWFReady");
	if(options && options["source"]) this.createFlashPlayer();
};

TARGET.EverestVideoPlayer.prototype.onSWFReady = function() {
	
	log("VideoPlayer :: onSWFReady");
	
	if(this.isSWFReady == true){
		return;
	}
	
	this.isSWFReady = true;
	if(this.movieIsLoaded() && this.currentStream){
		try { 
			this.flashPlayer_.source(this.currentStream);
			log("success");	
		}			
		catch(e) {
			log("error " + e);
		}
	}
};

TARGET.EverestVideoPlayer.prototype.setFlashId = function(flashId) {
	this.flashId_ = flashId;
};

TARGET.EverestVideoPlayer.prototype.setPlayerUrl = function(playerUrl) {
	this.playerUrl_ = playerUrl;
};

TARGET.EverestVideoPlayer.prototype.setVersion = function(version) {
	this.version_ = version;
};

TARGET.EverestVideoPlayer.prototype.setExpressInstallUrl = function(expressInstallUrl) {
	this.expressInstallUrl_ = expressInstallUrl;
};

TARGET.EverestVideoPlayer.prototype.addParameter = function(name, value) {
	var found = false;
	for(var i = 0; !found && i < this.flashParams_.length; ++i) {
		if(name == this.flashParams_[i].name) {
			this.flashParams_[i].value = value;
			found = true;
		}
	}
	if(!found) 
		this.flashParams_.push({"name": name, "value": value});
};

TARGET.EverestVideoPlayer.prototype.addFlashVar = function(name, value) {
	this.flashVars_.push({"name": name, "value": value});
};

TARGET.EverestVideoPlayer.prototype.movieIsLoaded = function() {
	if (this.flashHasLoaded_)
		return true;
	
	try {
		// First make sure the movie's defined. Browsers treat this 
		// differently, so return false on error.
		if (this.flashPlayer_ && this.flashPlayer_.PercentLoaded()) {
			// If it is, check how much of it is loaded.
			if (this.flashPlayer_.PercentLoaded() == 100) {
				this.flashHasLoaded_ = true;
				return true;
			} 
			else {
				return false;
			}
		} 
		else {
			// If the movie isn't defined, it's not loaded.
			return false;
		}
	}
	catch(err){
		log("movieIsLoaded: error" + err);
		return false;
	}
}

TARGET.EverestVideoPlayer.prototype.playVideo = function(options) {
	this.currentStream = options;
	this.flashPlayer_ = this.getFlashPlayer();
	if(this.flashPlayer_ == null) {
		this.createFlashPlayer();
		this.flashPlayer_ = this.getFlashPlayer();
		log("success");	
	}else if(this.isSWFReady){
		this.flashPlayer_.source(options);
	}else{
		this.currentStream = options;
	}
};

TARGET.EverestVideoPlayer.prototype.pause = function() {
	this.flashPlayer_ = this.getFlashPlayer();
	if(this.flashPlayer_ != null) this.flashPlayer_.pause();
}

TARGET.EverestVideoPlayer.prototype.play = function() {
	this.flashPlayer_ = this.getFlashPlayer();
	if(this.flashPlayer_ != null) this.flashPlayer_.playVideo();
}

TARGET.EverestVideoPlayer.prototype.stop = function() {
	this.flashPlayer_ = this.getFlashPlayer();
	if(this.flashPlayer_ != null) this.flashPlayer_.stopVideo();
}

TARGET.EverestVideoPlayer.prototype.close = function() {
	this.flashPlayer_ = this.getFlashPlayer();
	if(this.flashPlayer_ != null) this.flashPlayer_.close();
}

TARGET.EverestVideoPlayer.prototype.getFlashPlayer = function() {
	var r = null;
	var o = document.getElementById(this.flashId_);
	if (o) {
		var n = o.getElementsByTagName("object")[0];
		
		if(!n || (n && typeof(o.SetVariable) != "undefined")) {
	    	r = o;
		} else if (typeof(n.SetVariable) != "undefined") {
			r = n;
		}
	}
	return r;
};

TARGET.EverestVideoPlayer.prototype.createFlashPlayer = function(defaultVideo) {	
	if(typeof swfobject != "undefined") {
		var fv = new Object(); var fp = new Object();
		
		for(var i = 0; i < this.flashVars_.length; ++i) 
			fv[this.flashVars_[i].name] = this.flashVars_[i].value;
		
		if(typeof defaultVideo != "undefined")
			fv["defaultVideo"] = escape(defaultVideo);
		
		if(this.width_ >= 0) fv["width"] = this.width_;
		if(this.height_ >= 0) fv["height"] = this.height_;
		
		for(var i = 0; i < this.flashParams_.length; ++i)
			fp[this.flashParams_[i].name] = this.flashParams_[i].value;
		
		try {
			swfobject.embedSWF(this.playerUrl_, this.containerId_, this.width_, this.height_, this.version_, this.expressInstallUrl_, 
				/* FlashVars */ fv, /* Parameters */ fp, 
				{id:this.flashId_, name:this.flashId_});
			log("player created");
			return true;
		}
		catch(e) {
			log("error " + e);
			return false;
		}
	}
	else if(typeof SWFObject != "undefined") {
		var so = new SWFObject(this.playerUrl_, this.flashId_, this.width_, this.height_, this.version_);
		for(var i = 0; i < this.flashParams_.length; ++i)
			so.addParam(this.flashParams_[i].name, this.flashParams_[i].value);
		
		if(typeof defaultVideo != "undefined") 
			so.addVariable("defaultVideo", escape(defaultVideo));
		
		for(var i = 0; i < this.flashVars_.length; ++i)
			so.addVariable(this.flashVars_[i].name, this.flashVars_[i].value);
			
		if(this.width_ >= 0) so.addVariable("width", this.width_);
		if(this.height_ >= 0) so.addVariable("height", this.height_);
		
		try {
			if(so.write(this.containerId_)) {
				log("player created");
				return true;
			}
			else {
				return false;
			}
		
		}
		catch(e) {
			log("error " + e);
			return false;
		} 
	}
};