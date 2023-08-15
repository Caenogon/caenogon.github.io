(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AglA0QgBgBABgIIAMgcIgRgTIAAgBIAAgBIABgBIAAAAIAcgGIANgmIAAAAIABgBIABAAIABAAIACAAIABABIAAABIAAAAIAOAhIAAAAIAaAAQAHAAgFAFIgUAZIAAABIABABIAJAVIAAAAIAAABIAAABIAAABIgBAAIAAABIgogLIgBAAIgfAYIgCgBgAACgtIAAAAIgMAhIAAACIgaAGIAQARIABABIAAAAIAAABIAAAAIAAABIAAABIgMAcIABAAIAbgVIAjALIgIgUIAAgCIAAgBIAAgBIATgXIgagBIgNggIgCgBgAjLAoIABgMIAAgPIAAgWIAAgDQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABIABADQAHgFAGAAQAPAAAAAXQAAAIgEAGQgEAHgHAAQgGAAgIgHIAAAMIAAAGQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgDAAAAgEgAjCAUQAFAFAFAAQAKAAAAgRQAAgRgKAAQgEAAgGAEIgDABIAAAWIAAAAQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAgACoAfIAAgSIAAgcIAAgLIAAgFQAAgBAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIAKAAQAKAAAEAEQAEADAAAIQAAAJgJAFQAIAEACAFQACAEAAAFQAAAUgWAAIgHAAIgCAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAgBgACyAdIAFABQAJAAAEgFQADgEAAgIQAAgIgHgEQgFgDgIAAIgDAAIgDAAIAAAfIACAAIADAAgACtgcIAAAVIAIAAQAPAAAAgLQAAgHgFgDIgJgBIgJABgAB9AgIABgDIAAgEIAAgMIAAgNIAAgNIAAgOIAAgCIgBgCQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAIADABIANAAIANAAQAAAAABAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAIgFAAIgHgBIgOABIAAAWIAVAAQABAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAgBAAIgEAAIgEgBIgNABIAAAfIAOgBIAGAAIAFABQABAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAgBAAIgGAAIgIAAIgJAAIgFABQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBgABhAhIgBgDQgDgHgIgdIgNAmQAAABgBAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgCAAIgBgCIgHgiIgDgNIgDgMIgBgCIgBgCQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABQADAEACAPIAIAjIAHgVIAGgPQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABIAKAkIAJghIAFgVQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAIgBADIgBACIgNA1IgBAEQgBABAAABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAgAhgAZQgEgHAAgKQAAgIACgEQAEgKALAAQAJAAADAIQACAEAAAGQAAAEgCAAIgGAAIgGAAIgHAAIgDABIgCAAQAAAKAFAFQACACAFAAQADAAADgCQADgDABgDQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAADgFAFQgFAEgGAAQgHAAgFgGgAhbgGQgDAFgBAFIALgBIAKAAQgBgNgIAAQgFAAgDAEgAiSAdIACgEIAHgIIAIgKIgMgPIgCgCIgBgBQAAgBAAAAQABgBAAAAQAAgBABAAQABAAAAAAIACABIACACIALAOIALgPIADgDQAEAAAAAEIgBABIgCACIgLAPIANASQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAQgCAAgEgFIgLgOIgIALIgHAHIgDACQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAgAg8AaIAAgPIAAgNIAAgZIAAgDIAAgEQAAgBAAAAQABgBAAgBQAAAAABgBQAAAAABAAQADAAAAAEIAAADIgBAEIAAAJIAAALIAAAhIAAADQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAQgCAAAAgEgAigAaIAAgIIAAgKIAAgKIAAgHQAAgFADAAQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIABACIgBAHIAAAMIAAAQIAAAEIgCABQgBAAgBAAQAAAAAAgBQgBAAAAgBQAAgBAAgBgAiggcIgBgCIABgDIADgBQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIABADIgBACQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAAAAAIgDgCg");
	this.shape.setTransform(22.775,4.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(2.4,-0.6,40.800000000000004,10.7), null);


// stage content:
(lib.pxwhtml5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(391.65,75.85,6.0768,6.8042,0,0,0,29.1,4.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AixMOQjIgbiRgeQhrgUhLgYQivg0iGhUQgVglAAgRQAAgGB5hSQB5hUAbgHQjEimhGgwIgGgDIgGgHIADAAQgDgGAAgEQAAgKCghvIAogbIjFAAIgSgbQAAgfA/geQAigRBAgYQgygNgngNQhIgcAAgfQgBgZBSg3QAugcA/ghQhGhPAAgMQABhOE4hgQEKhRCJgFIACAKQAhgKAigFIEVAAQAuAFAoAFIAeAAQBPABBwAUIA/ANQAYADAZAHQBdAVBuAcQA5AGB0AoQB/AsAAAYQAAAihtAaQh2AYgNAEIgPAEIAPAGQC6BYAAAbQgBAfgtAVQgxANgFAAQAFARA6AvQA3AvALAUQAAAEgJAOQgDAEgGACIkUAAQA0ARBbAYQA6ARBLAeIA4AZIAAAXIgRAdQgwAskaDjQEmCwAAAXQAABLk8BfIkDBHQhqAYheANgAvgH4QAVAEBwA3QCDBCAeAKQCUAwEaAmIBnAMIGAAAIBSgMICCgbQAhgLAegGQBbgcBVghIENhlQgvgZhSg9QhuhQgPgjIAAALQgEAEhag/IhqBxQgqlPgMg5QgHAHgMAAQgbAAgthjQgth2gQgiQgchfgOghQgVgtgegkQgZCOi1FOQgOgKgZgvQghg2gKgwQgJgkgDgiQg/DEgxAAIgJAAIgVgEQgHgvgbg5QgPgigIgbQgGAVgJAWQgZBLgdAiIgWgYIAAAHIgPAHQgSgLAAgyQAAhOACgOIAAgCQgqBigPBbQAnADAAAvQAEAAAIgIIAWAEIACB+QAKDfgrAAQgXgGgagFIAAlmQgJA2gVBYQglCpgFAlIhhhSIhCBMQgGgEgDgHQg+Avi7BwgAGviRQAqBOAMB9IAJBYQANBpACAzIBVhOQAPADArArQgEiDgRhbIAAkgQgYi8hNhuQgRgWgTgSQgegeghgYQh6hUi+gVIkEAAQipAviRCIQhQBKg2BVQAPAAAAASQAAADhCD3QgJAogfChQgbCdgEAbQAIgHAXgPQAYgMAHAAQAAADAtAzQAPhzA8jHQBHjtAwgfIACAUIgLAiQAJgQAPgEIAEA9IgKB+QAGgSANgaQAag3ADgJIAHhFQAJgnAhgFIADAiIAAAPQAtAoAiByQAIgeAWgoQBFiTAJgXQAQgkAJhBIAGAAQAFADAIgBQAFABAGgDIAHAAQgWBOgPA8QAPAiANAzIAgCOIAAAOIDXnFQAnANAaA9QAWAvAfBbIBvDnQgUhYgBgHIADgXQASATAQAbgAKbAeQAWAtgBCXIAAA0QASgiBxhfQBbhLBCgoIAtgeIgGAAQghgJh2gsQiYg2gtgVgAvKBEIAOAKQAfAYAwAyQAbAcBHA9QAOAOANAPQAFhhAbifIAZiAQhMA5jHB9gAl1rMQjAAsgqAQQhDAYhdAwQhcAyghAcQBbA9AAARQAAAejCBtQAWAKBMAaQBBAcAAATQAAAxiFArIBzADIASAVQAAAHgJAKQBihEA5gRIAbiIIgMgNQAAhlC5i0QBphmBbgvQgkALgvAKgAGvquQAhAUAeAcQAiAaAaAmQBrCGAGCqIAABZQASAEAVACIDjAEQgRgQgTgWIhAhQQABgfAegHQA2gOAKgHQgQgNhqgvQhUglAAgYQAAg2DcglIAWgHQkXhPgqgKQhDgMhSgOQgegIghgDQgHgDgJAAQAJADAHAHgAjVJHQglhYAAgEIGrgOIACAYQAAA6gzAyQhDBBhsAAQhsAAg6hbgAjDITIAOAYQA4BLBOAAQB1gBAkhGQAJgYANgOgAFLDMIAAiwQASgKAPACIAAAVIAbAAIAAADIAVAEIADAOIAAExQgDAFgPAAQgSABgMgVQgDALAAAOIgSAGQgMgEgDivg");
	this.shape.setTransform(107.1,78.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AixLhIhogMQkZgmiVgwQgegKiDhCQhvg3gVgEQC7hwA9gvQADAHAGAEIBDhMIBgBSQAGglAkipQAWhYAJg2IAAFmQAZAFAYAGQAqAAgJjfIgDh+IgVgEQgJAIgDAAQAAgvgogDQAPhbArhiIAAACQgDAOAABOQAAAyASALIAPgHIAAgHIAWAYQAegiAYhLQAJgWAGgVQAJAbAPAiQAbA5AHAvIAVAEIAJAAQAwAAA/jEQAEAiAJAkQAJAwAhA2QAZAvAPAKQC1lOAZiOQAdAkAVAtQAPAhAcBfQAPAiAuB2QAtBjAbAAQALAAAIgHQAMA5AqFPIBqhxQBaA/ADgEIAAgLQAPAjBuBQQBSA9AvAZIkNBlQhVAhhaAcQgfAGggALIiDAbIhSAMgAkHHrQAAAEAlBYQA6BbBtAAQBrAABDhBQA0gyAAg6IgCgYImsAOgAE/AcIAACwQACCvAMAEIASgGQAAgOAEgLQALAVASgBQAQAAACgFIAAkxIgCgOIgWgEIAAgDIgbAAIAAgVIgFAAQgNAAgOAIgAjBIrIgPgYIFDgKQgMAOgJAYQglBGh0ABQhPAAg3hLgAHiCSIgJhYQgMh9gqhOQgRgbgSgTIgCAXQAAAHAUBYIhujnQgghbgVgvQgbg9gmgNIjXHFIAAgOIghiOQgMgzgQgiQAPg8AWhOIgHAAQgGADgFgBQgHABgFgDIgHAAQgJBBgQAkQgIAXhFCTQgWAogJAeQghhygugoIAAgPIgDgiQggAFgKAnIgGBFQgDAJgbA3QgMAagHASIAKh+IgDg9QgPAEgKAQIAMgiIgDgUQgwAfhHDtQg7DHgPBzQgugzABgDQgIAAgYAMQgXAPgHAHQAEgbAaidQAgihAJgoQBBj3AAgDQAAgSgPAAQA3hVBPhKQCSiICogvIEEAAQC/AVB6BUQAgAYAfAeQASASASAWQBMBuAYC8IAAEgQASBbADCDQgrgrgOgDIhVBOQgDgzgMhpgAKkDiQAAiXgWgtIAAiaQAtAVCZA2QB1AsAiAJIAFAAIgtAeQhCAohaBLQhxBfgSAigAsYDxQhGg9gcgcQgwgygegYIgPgKQDIh9BMg5IgZCAQgcCfgFBhQgMgPgPgOgAtNhaIgSgVIhygDQCEgrAAgxQABgThCgcQhMgagWgKQDDhtAAgeQAAgRhbg9QAggcBdgyQBdgwBCgYQAqgQDAgsQAwgKAkgLQhbAvhpBmQi6C0AABlIANANIgbCIQg6ARhiBEQAJgKAAgHgAK2ivQgWgCgSgEIAAhZQgFiqhriGQgbgmghgaQgfgcgggUQgIgHgJgDQAJAAAIADQAgADAfAIQBRAOBDAMQArAKEWBPIgVAHQjdAlAAA2QAAAYBVAlQBqAvAPANQgJAHg2AOQgfAHAAAfIBABQQASAWASAQg");
	this.shape_1.setTransform(108.35,78.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("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");
	this.shape_2.setTransform(107,77.6433);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("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");
	this.shape_3.setTransform(108.3765,77.6465);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(240.5,77.1,236.5,79.4);
// library properties:
lib.properties = {
	id: '46BF1B21BDC4AC4680603D4176D8FDDF',
	width: 480,
	height: 156,
	fps: 10,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['46BF1B21BDC4AC4680603D4176D8FDDF'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;