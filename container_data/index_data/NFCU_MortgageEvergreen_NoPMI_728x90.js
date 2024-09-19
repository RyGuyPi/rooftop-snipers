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


(lib.patch_top2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#ED780F").s().p("AiKBkIA7hkQBAhkAbAAQAAAcAUAbQAbAmA3AQQAlAjgTAgQgJAQgRAIg");
	this.shape.setTransform(13.8583,10.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.patch_top2, new cjs.Rectangle(0,0,27.7,20.1), null);


(lib.patch_bottom2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D3D6B").s().p("AhUAAQgohEgihGIE2AAQAHBhAAA1Qg6AFgmAxQggAoAAAhQgjgBhQiKg");
	this.shape.setTransform(15.875,13.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.patch_bottom2, new cjs.Rectangle(0,0,31.8,27.7), null);


(lib.mc_ring = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#ECA769","#E9A054"],[0,1],-19,19.1,19.1,-19).s().p("Ai+C/QhPhPAAhwQAAhuBPhQQBQhPBuAAQBwAABPBPQBPBPAABvQAABwhPBPQhPBPhwAAQhvAAhPhPgAizAAQAADcCzAAQBeAAAtg9QApg3AAhoQAAhngpg3Qgtg9heAAQizAAAADbg");
	this.shape.setTransform(26.975,26.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_ring, new cjs.Rectangle(0,0,54,54), null);


(lib.mc_bkgd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(149.9977,299.9992,1,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_bkgd, new cjs.Rectangle(0,0,300,600), null);


(lib.Logo_EHL_white = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0F3D70").s().p("AEaA/IgOgWIgOAAIAAAWIgNAAIAAgzIAlAAQAKAAAFAEQAEADAAAJQAAAGgDADQgEAEgHAAIAOAWgAD+AeIAVAAIAHAAQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBAAIgFgBIgWAAgACxAMIAwAAIAAAKIgjAAIAAAIIAdAAIAAAKIgdAAIAAAMIAjAAIAAAKIgwABgABmA/IAAgzIAbAAQAPAAAIAGQAJAFAAAPQAAAOgIAFQgIAGgRAAgAB0A0IALAAQAJAAAFgDQAFgDAAgIQAAgHgFgEQgFgEgHgBIgNAAgABCA/IgbggIAAAgIgNAAIAAgzIAQAAIAbAfIAAgfIAMAAIAAAzgAgnA/IAAgzIAwAAIAAAKIgiAAIAAAIIAcAAIAAAKIgcAAIAAAMIAiAAIAAALgAhnA/IAAgzIAOAAIAAAnIAjABIAAALgAkcA/IAAg8IgNAAIAAgRIBUgwIBTAxIAAAQIgNAAIAAA8gAkLgLIAAA6IBrAAIAAg6Ig1ghgAjxAgIAAgOIA4AAIAAAOgAjxAKIAAgOIA4AAIAAAOgACXgDQgDgEAAgMIAAgaIAKAAIAAAaQAAAHABADQAAADAEAAQAEAAABgCIABgLIAAgaIAJAAIAAAcQAAAKgEAEQgDADgHAAQgKAAgDgDgAEOgCQgEgEABgLIAAgMQAAgJADgEQADgEAJAAQAGgBAEAEQAEADAAAGIgGACQgBgHgHgBQgEABgBAEIgBAJIAAAJIABAJQABACAEAAQAFABAAgGIAAgGIgFAAIAAgHIAOAAIAAAQQAAAIgNAAQgKAAgDgCgAC6gDQgEgDAAgFIAHgCQACAHAGAAQAGAAAAgEQAAgEgKgHQgKgHAAgGQAAgGAEgEQAEgCAGAAQANAAACAMIgHACQgDgHgFABQgFAAAAAEQAAADALAGQAJAIABAGQgBAFgFADQgEADgGAAQgIAAgDgDgAB0gCQgCgEAAgJIAAgOQAAgRAPAAQAJAAADADQADAEAAAIIAAAOQAAAKgDAEQgDADgJAAQgJAAgEgCgAB8gkIgBAHIAAANQAAAGABACQABACAEAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABgDABgGIAAgMQgBgLgFAAQgEABgBADgAghgEQgCgDAAgKIAAgcIAIAAIAAAaQABAHAAADQABACAFAAQADABABgDIABgJIAAgbIAJAAIAAAaQAAAMgDADQgDAEgJAAQgJAAgDgEgAD7AAIgLgfIAAAfIgHAAIAAgtIALAAIAKAcIAAgcIAIAAIAAAtgADZAAIAAgtIAIAAIAAAtgABiAAIAAgUIgKAAIAAAUIgJAAIAAgtIAJAAIAAASIAKAAIAAgSIAJAAIAAAtgAAjAAIAAgtIAIAAIAAAmIAMAAIAAAHgAAVAAIgDgKIgLAAIgDAKIgIAAIAMgtIAKAAIANAtgAAJgRIAIAAIgFgSgAhoAAIAAgtIAXAAIAAAHIgOAAIAAAMIANAAIAAAHIgNAAIAAAMIAOAAIAAAHgAhDgCQgIgEABgLIAAgLQgBgJAEgFQAEgEAHAAQAKgBADAGQADAEAAAKIAAAJQAAAGgDAGIAIACIgBAEQgVAAgGgCgAhAgkQgBABAAAIIAAAKQAAAHABACQABACADAAQABAAABAAQABAAAAAAQABgBAAAAQABgBAAAAQABgCAAgHIAAgLIAAgJQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAgBAAQgEAAgBACg");
	this.shape.setTransform(29.75,6.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo_EHL_white, new cjs.Rectangle(0,0,59.5,12.5), null);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F3D70").s().p("ABwCoQgFgFAAgIQAAgIAFgFQAGgGAIAAQAHAAAFAGQAGAFAAAIQAAAIgGAFQgFAGgHAAQgIAAgGgGgABzCQQgFAEAAAHQAAAHAFAEQAEAFAHAAQAFAAAFgFQAFgEgBgHQABgHgFgEQgFgFgFAAQgHAAgEAFgACCCmIgCgGQAAgDgDAAIgDAAIAAAJIgEAAIAAgVIAHgBQAEAAACACQAAABABAAQAAAAAAABQAAAAAAABQABABAAAAQgBAEgEABIAAABQADAAACAFIABAFgAB6CaIADAAQAEAAAAgDQAAgEgEAAIgDAAgAhIgSQgfgDgUgWQgUgWAAgeQAAgXANgUIADgEIAAAAQAKgNAOgIQAPgIAQgBIAGgBIAHABQAeADAUAWQAUAWAAAeQAAAegUAWQgUAWgeADIgHAAgAg/gXQAHgCAGgIIgNAAgAhEgXIAAgKIgNAAQAGAIAHACgAgygaQAHgCAHgFIgIAAIgGAHgAhRgaQgEgDgDgEIgIAAQAIAFAHACgAgYgmIADAAQALgJAHgNIgHAAQgGANgIAJgAgpgmIALAAQAJgJAFgNIgRAAQgDAMgFAKgAg/gmIAQAAQAFgJADgNIgYAAgAhVgmIARAAIAAgWIgZAAQADAOAFAIgAhmgmIAMAAQgEgIgEgOIgSAAQAGANAIAJgAhvgmIADAAQgIgJgFgNIgIAAQAIANAKAJgAgIhBIAIAAQAFgNAAgPIgJAAQAAAPgEANgAghhBIATAAQAGgOAAgOIgWAAQAAAPgDANgAg/hBIAaAAQACgNABgPIgdAAgAhehBIAaAAIAAgcIgdAAQAAANADAPgAh2hBIATAAQgCgNgBgPIgVAAQAAAOAFAOgAiEhBIAJAAQgFgOAAgOIgKAAQABAPAFANgAgEhiIAJAAQAAgPgFgNIgIAAQAEANAAAPgAgehiIAWAAQAAgOgGgOIgTAAQADANAAAPgAg/hiIAdAAQgBgPgCgNIgaAAgAhhhiIAdAAIAAgcIgaAAQgDAQAAAMgAh7hiIAVAAQABgPACgNIgTAAQgFAPAAANgAiKhiIAKAAQAAgNAFgPIgJAAQgFAOgBAOgAgKiDIAHAAQgHgMgLgJIgDAAQAJAJAFAMgAghiDIARAAQgFgMgJgJIgLAAQAFAKADALgAg/iDIAYAAQgDgMgFgJIgQAAgAhdiEIAAABIAZAAIAAgVIgRAAQgFAHgDANgAhziEIgBABIASAAIABAAIAAgDIABgCIAGgQIgLAAQgJAIgFAMgAh8iJIgFAGIAHAAIAEgGQAEgIAGgHIgDAAQgIAHgFAIgAgsidIAIAAQgGgFgIgDIAGAIgAg/idIANAAQgGgJgHgBgAhSidIAOAAIAAgKQgHABgHAJgAhgidIAIAAIAGgIQgHADgHAFg");
	this.shape.setTransform(68.7,15.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0F3D70").s().p("AAvDgQgMgLAAgVIAAhIIASAAIAABCQAAAPAEAGQAFALAQAAQAPAAAGgLQADgGAAgPIAAhCIATAAIAABIQAAAVgMALQgLAKgUAAQgUAAgLgKgAl6DZQgNgQAAgZQAAgZANgQQAOgSAXAAQASABAMAJQANALABARIgSAAQgGgVgUAAQgQAAgJANQgHAMAAARQAAASAHALQAJAOAQAAQAMAAAHgJQAGgIABgNIASAAQgBAVgMAMQgMAMgTAAQgXABgOgSgAD7DeQgKgMAAgTQAAgTAKgLQAKgMASAAQASAAAKAMQAKALAAATQAAAUgKALQgKAMgSAAQgSAAgKgMgAEHCsQgFAIAAALQAAAMAFAIQAGAJAKAAQALAAAFgJQAGgIAAgMQAAgLgGgIQgFgJgLAAQgKAAgGAJgAicDeQgIgMAAgTQAAgVAKgLQAJgKAOAAQARAAAIAMIAAgpIAQAAIAABwIgPAAIAAgLIgBAAQgGANgRAAQgRAAgKgMgAiPCsQgFAIAAANQAAALAFAIQAGAIAKAAQALAAAFgJQAFgIAAgMQAAgNgFgIQgGgHgJAAQgMAAgFAJgAjoDeQgKgLAAgTQAAgSAKgNQAKgMARAAQARAAAKAOQAKAOgCATIg3AAQAAAKAFAHQAFAHAKAAQAOAAAEgNIAQAAQgDAMgJAIQgJAHgNAAQgRAAgKgMgAjbCpQgGAGAAAKIAnAAQgBgKgFgGQgFgGgIAAQgJAAgFAGgAgjDjQgDgEgBgLIAAgwIgMAAIAAgNIAMAAIAAgYIARAAIAAAYIAPAAIAAANIgPAAIAAArQAAAHABACQACADAFAAIAHgBIAAAOIgKABQgNAAgFgGgAF4DoIAAgzQgBgKgDgDQgDgFgIAAQgIAAgFAGQgFAGAAAKIAAAvIgRAAIAAhRIAQAAIAAAMIAAAAQAIgOAQAAQAMAAAHAHQAHAHAAAOIAAA3gADXDoIAAhRIARAAIAABRgAC4DoIAAgzQAAgSgPAAQgIAAgFAGQgFAGAAAKIAAAvIgRAAIAAhRIAQAAIAAAMIAAAAQAIgOAQAAQAMAAAHAHQAHAHAAAOIAAA3gAhLDoIAAhRIARAAIAABRgAkeDoIAAhRIAPAAIAAAQIABAAQABgHAHgGQAGgFAIAAIAGABIAAARIgHgBQgJgBgGAIQgGAHAAAOIAAAmgADXCJIAAgRIARAAIAAARgAhLCJIAAgRIARAAIAAARgAmFBgIAAgjIMNAAIAAAjgAEuAtIAAiEIAjAAIAABqIA3AAIAAAagAEDAtIgIgaIgyAAIgJAaIgiAAIAxiEIAqAAIAxCEgADRgEIAiAAIgQg5IgBAAgAB2AtQgCgIgCgVQgBgOgCgCQgDgFgLAAIgPAAIAAAyIgiAAIAAiEIA5AAQARABAIACQAIABAFAHQAJAIAAARQAAARgMAIQgIAFgKACIAAAAQAQABAGAIQADAGADARQAEAaACAGgABSgdIANAAQAMAAACgBQAKgEAAgLQAAgLgIgEQgFgCgLAAIgNAAgAg3AtIAAiDIBcAAIAAAZIg6AAIAAAcIA3AAIAAAZIg3AAIAAAcIA7AAIAAAZgAi7AtIAAiEIA0AAQAhAAAPAMQAXARAAAmQAAAvgiAOQgMAEgYAAgAiYAUIAPAAQAmAAAAgoQAAgagQgKQgIgFgPAAIgOAAgAkkAtIAAiDIBdAAIAAAZIg7AAIAAAcIA4AAIAAAZIg4AAIAAAcIA9AAIAAAZgAmFAtIAAiDIBYAAIAAAZIg1AAIAAAgIAxAAIAAAZIgxAAIAAAxgAAdhkIAAgxIgthUIgtCFIgpAAIgsiGIAmAAIAcBhIAehhIBIAAIAbA4IAcg4IAkAAIgxBXIAAAvgAifhkIgJgbIgxAAIgJAbIgiAAIAxiGIAqAAIAxCGgAjRiYIAhAAIgQg3IAAAAgAk8hkIgrhoIABBoIgfAAIAAiGIAwAAIAqBkIgBhkIAeAAIAACGg");
	this.shape_1.setTransform(39.225,23.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,-2.1,83.1,49), null);


(lib.legalCopy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0F3D70").s().p("AgEAGIAAgLIAJAAIAAALg");
	this.shape.setTransform(98.525,10.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0F3D70").s().p("AAdAmIgJgUIgnAAIgJAUIgJAAIAihLIAHAAIAiBLgAARAKIgRglIgQAlIAhAAg");
	this.shape_1.setTransform(92.725,7.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0F3D70").s().p("AgWAeQgIgJAAgPIAAgrIAIAAIAAAqQAAAMAGAGQAGAIAKAAQALgBAGgGQAGgHAAgLIAAgrIAIAAIAAAqQAAAQgIAJQgJAIgOAAQgNAAgJgIg");
	this.shape_2.setTransform(84.475,7.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0F3D70").s().p("AgWAcQgLgLAAgRQAAgPALgLQALgMAPAAQARAAAMAMIgFAGQgLgKgNAAQgLAAgJAJQgIAJAAAMIAAAAQAAANAIAJQAJAJALAAQANAAALgLIAGAGQgNANgRAAQgPAAgLgLg");
	this.shape_3.setTransform(76.425,7.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0F3D70").s().p("AAZAmIgvg9IAAA9IgJAAIAAhKIAIAAIAvA6IAAg6IAIAAIAABKg");
	this.shape_4.setTransform(67.825,7.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0F3D70").s().p("AgZAhIAEgGQADACAFAAQAEAAACgCQADgDADgFIgag3IAJAAIATAuIASguIAJAAIgXA5QgDAIgEAEQgEADgGAAQgHAAgGgDg");
	this.shape_5.setTransform(56.75,8.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0F3D70").s().p("AgTAcIAAALIgIAAIAAhOIAIAAIAAAiQAJgMALAAQALAAAIAIQAIAIAAAMIAAAAQAAANgIAIQgIAIgLAAQgMAAgIgMgAgNgEQgGAGAAAJIAAAAQAAAJAGAHQAGAGAHAAQAIAAAGgGQAGgGAAgKIAAAAQAAgKgGgFQgGgGgIAAQgHAAgGAGg");
	this.shape_6.setTransform(50.225,6.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0F3D70").s().p("AgTAgQgIgIAAgNIAAAAQAAgMAIgIQAIgIAKAAQANAAAIAMIAAgiIAIAAIAABOIgIAAIAAgLQgIAMgNAAQgKAAgIgIgAgNgEQgGAFAAAKIAAAAQABAKAFAGQAGAGAHAAQAIAAAGgGQAGgHAAgJIAAAAQAAgJgGgGQgGgGgIAAQgIAAgFAGg");
	this.shape_7.setTransform(39.15,6.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0F3D70").s().p("AgRAVQgIgJAAgMIAAAAQAAgMAHgHQAIgJAKAAQAMAAAHAJQAHAIAAALIAAADIgrAAQABAIAFAGQAGAEAGAAQAKABAIgIIAFAEQgJALgOAAQgKAAgIgIgAASgCQgBgJgEgFQgFgFgIAAQgGAAgFAFQgFAFgBAJIAjAAIAAAAg");
	this.shape_8.setTransform(32.375,8.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0F3D70").s().p("AgOAcIAAg2IAIAAIAAAOQADgHAFgEQAGgFAHABIAAAJIAAAAQgJAAgGAGQgGAHAAALIAAAWg");
	this.shape_9.setTransform(27.35,7.9725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0F3D70").s().p("AgSAWQgFgGAAgKIAAghIAIAAIAAAfQAAAIAEAEQAEAFAHAAQAGAAAFgFQAFgFAAgHIAAgfIAIAAIAAA2IgIAAIAAgJQgHAKgLAAQgKAAgGgGg");
	this.shape_10.setTransform(21.325,8.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0F3D70").s().p("AgUAVIAEgGQAJAHAJAAQAFAAADgDQAEgCAAgEIAAAAQAAgEgFgCQgCgCgHgCQgIgCgEgCQgFgEgBgHQAAgHAGgEQAFgFAHAAQALAAAJAGIgEAHQgIgGgIAAQgEAAgDADQgCACgBADIAAABQAAADAFACIAJAEQAIADADABQAGAEABAHIAAAAQgBAIgGAEQgFAFgJAAQgLAAgKgIg");
	this.shape_11.setTransform(15.1,8.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0F3D70").s().p("AAQAcIAAgfQAAgIgEgEQgEgFgHAAQgGAAgGAFQgEAFAAAHIAAAfIgIAAIAAg2IAIAAIAAAJQAHgKALAAQAKAAAGAGQAFAGAAAKIAAAhg");
	this.shape_12.setTransform(9,7.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0F3D70").s().p("AgDAmIAAhKIAHAAIAABKg");
	this.shape_13.setTransform(3.925,7.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.legalCopy, new cjs.Rectangle(0,0,102.4,15.3), null);


(lib.icon_home2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#3B93D0").s().p("AhiDlIAAkDIDFjHIAAHKgAADCmIBOAAIAAhRIhOAAgAADAuIBOAAIAAhNIhOAAg");
	this.shape.setTransform(16.525,30.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7AB4E2").s().p("AhkDlIAAnKIACACIAAgCIAFAGIAFADIC9C+IAAEDgAhPCmIBOAAIAAhRIhOAAgAhPAuIBOAAIAAhNIhOAAg");
	this.shape_1.setTransform(36.525,30.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1B68B2").s().p("AhUEnIAAg5IATAAIDFAAIAAA5gAiDgcIEHkKIAABKIjFDHIgeAdg");
	this.shape_2.setTransform(13.225,29.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#399FD8").s().p("AiFEnIAAg4IDJAAIAQAAIAAA4gABEgUIi9i+IgKgKIgChJIACgBIBhBhIAAg4IBEAAIAAB9IBkBkIglAkg");
	this.shape_3.setTransform(39.825,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.icon_home2, new cjs.Rectangle(0,0,53.2,59), null);


(lib.copy1c = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#ED780F").s().p("AgeBwIAAhUIhViLIBGAAIAtBRIAvhRIBFAAIhVCKIAABVg");
	this.shape.setTransform(248.125,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED780F").s().p("AhaBwIAAjfICzAAIAAA0Ih1AAIAAAjIBqAAIAAAvIhqAAIAAAkIB3AAIAAA1g");
	this.shape_1.setTransform(226.475,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ED780F").s().p("AA0BwIhfh6IAAB6Ig+AAIAAjfIA6AAIBbB1IAAh1IA+AAIAADfg");
	this.shape_2.setTransform(203.075,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ED780F").s().p("AhWBTQgigiAAgwIAAgBQAAgvAjgiQAjgjAyABQA0gBAiAjQAjAhAAAwIAAAAQAAAwgjAjQgjAhgzABQgzgBgjghgAgpgqQgPARAAAZIAAAAQAAAZAQARQAQATAYgBQAZABAQgTQAQgQAAgZIAAgBQAAgYgQgSQgQgRgZgBQgZABgQARg");
	this.shape_3.setTransform(177.475,16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ED780F").s().p("AA5BwIAAh/Ig5BWIAAAAIg6hWIAAB/Ig8AAIAAjfIBCAAIA0BXIA2hXIBBAAIAADfg");
	this.shape_4.setTransform(150.5,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ED780F").s().p("AhaBwIAAjfICzAAIAAA0Ih1AAIAAAjIBqAAIAAAvIhqAAIAAAkIB3AAIAAA1g");
	this.shape_5.setTransform(117.875,16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ED780F").s().p("AgcBxIhbjhIBGAAIAxCNIA0iNIBEAAIhbDhg");
	this.shape_6.setTransform(94.875,16.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ED780F").s().p("AA7BxIgQgpIhWAAIgQApIhBAAIBfjhIA7AAIBfDhgAAYAYIgYg+IgZA+IAxAAg");
	this.shape_7.setTransform(73.425,16.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ED780F").s().p("AhhBOIAjgoQAiAbAlAAQAaAAAAgQIAAgBQAAgHgHgEQgIgFgWgFQgqgKgSgNQgYgPAAgfIAAgBQAAggAXgUQAYgUAnAAQA3AAAlAeIgfAsQgfgWgfAAQgXAAAAAOIAAABQAAAHAIAFQAIAEAWAGQAqAIATAPQAXAPAAAeIAAABQAAAigZATQgZAUgpAAQg+AAgqgmg");
	this.shape_8.setTransform(50.625,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy1c, new cjs.Rectangle(0,0,300,36), null);


(lib.copy1a = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0F3D70").s().p("AAYBNIAAg/QAAgagXAAQgLAAgGAHQgHAGAAANIAAA/IgaAAIAAiZIAaAAIAAA8QANgTAUAAQATAAAKALQALAMAAASIAABHg");
	this.shape.setTransform(209.325,11.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0F3D70").s().p("AgUAnIAAg5IgOAAIAAgWIAOAAIAAgfIAZAAIAAAfIAeAAIAAAWIgeAAIAAA1QAAAOAOAAQAIAAAHgEIAAAVQgKAGgNAAQgfAAAAghg");
	this.shape_1.setTransform(198.425,11.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0F3D70").s().p("AAYA5IAAg+QAAgbgXAAQgLAAgGAHQgHAHAAANIAAA+IgaAAIAAhuIAaAAIAAAQQANgTAUAAQATAAAKAMQALAMAAASIAABHg");
	this.shape_2.setTransform(187.925,13.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0F3D70").s().p("AgpApQgRgRAAgYIAAAAQAAgXARgRQARgRAYAAQAaAAAQARQARARAAAXQAAAYgRARQgRARgZAAQgYAAgRgRgAgXgYQgKAKABAOQAAAPAJAKQAKAKANAAQAPAAAJgKQAKgKgBgPIAAAAQAAgOgJgKQgJgLgPAAQgPAAgIALg");
	this.shape_3.setTransform(174.6,13.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0F3D70").s().p("AA7A5IAAg+QAAgbgXAAQgKgBgHAIQgGAHAAANIAAA+IgZAAIAAg+QAAgOgGgGQgGgIgKABQgLAAgGAHQgHAIAAAMIAAA+IgZAAIAAhuIAZAAIAAAQQAOgTAUAAQAXABAJATQAPgTAWgBQATAAAKAMQAKAKAAAUIAABHg");
	this.shape_4.setTransform(157.875,13.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0F3D70").s().p("AgxBCIAIgTQAIAFAHgBQALAAAFgMIguhuIAbAAIAeBRIAdhRIAbAAIgtBwQgGARgHAIQgIAGgOABQgNAAgNgHg");
	this.shape_5.setTransform(135.5,14.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0F3D70").s().p("AgfA5IAAhuIAZAAIAAAZQALgcAbABIAAAbIgBAAQgRAAgKALQgKALAAAVIAAAqg");
	this.shape_6.setTransform(125.525,13.1483);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0F3D70").s().p("AgkAqQgQgQAAgaIAAAAQgBgXAPgRQAQgRAXAAQAZAAAOASQAOAQAAAZIAAAHIhRAAQACANAJAIQAIAHALAAQARAAANgNIAPANQgQAVgdAAQgXAAgQgQgAAdgHQgCgNgHgIQgHgIgMAAQgLAAgIAIQgHAIgCANIA4AAIAAAAg");
	this.shape_7.setTransform(114.5,13.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0F3D70").s().p("AgKA4IguhvIAbAAIAdBQIAehQIAbAAIguBvg");
	this.shape_8.setTransform(102.65,13.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0F3D70").s().p("AgkAqQgRgQAAgaIAAAAQAAgXAPgRQAQgRAWAAQAaAAAPASQANAQgBAZIAAAHIhQAAQACANAIAIQAJAHAMAAQAQAAANgNIAQANQgSAVgbAAQgYAAgQgQgAAcgHQgBgNgHgIQgIgIgMAAQgKAAgIAIQgIAIgCANIA4AAIAAAAg");
	this.shape_9.setTransform(90.7,13.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copy1a, new cjs.Rectangle(0,0,300,25), null);


(lib.bar_top = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#ED780F").s().p("Eh88ADRIgBmhMD56AAAIABGhgEBRKgBDQghAhAAAsQAAAuAhAhQAhAhAuAAQAuAAAhghQAhgiAAgtQAAgsghghQghgiguAAQguAAghAigEhMygBDQghAhAAAsQAAAuAhAhQAhAhAuAAQAuAAAhghQAhgiAAgtQAAgsghghQghgiguAAQguAAghAig");
	this.shape.setTransform(799.775,17.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bar_top, new cjs.Rectangle(0,-3,1599.6,41.8), null);


(lib.ctaTxt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcAmIAAhLIA4AAIAAALIgqAAIAAAUIAlAAIAAAMIglAAIAAAVIArAAIAAALg");
	this.shape.setTransform(88.225,8.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARAmIgSgbIgRAAIAAAbIgOAAIAAhLIAhAAQAPgBAIAIQAGAHAAAKQAAARgSAFIAVAdgAgSAAIASAAQAIAAAEgDQAEgEAAgFIAAgBQAAgGgEgDQgEgDgIAAIgSAAg");
	this.shape_1.setTransform(80.975,8.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcAcQgLgLAAgRQAAgQALgLQAMgMAQAAQASAAALAMQALALAAAQQAAARgLALQgMAMgRAAQgRAAgLgMgAgSgSQgHAIAAAKQAAAMAHAHQAIAJAKgBQALABAIgJQAHgHAAgMQAAgKgHgIQgIgJgLABQgKgBgIAJg");
	this.shape_2.setTransform(72.325,8.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAYAmIAAg2IgYAjIgYgjIAAA2IgNAAIAAhLIAPAAIAWAkIAXgkIAPAAIAABLg");
	this.shape_3.setTransform(63.225,8.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAWAmIgpg2IAAA2IgOAAIAAhLIANAAIAoA0IAAg0IAOAAIAABLg");
	this.shape_4.setTransform(51.45,8.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARAmIgSgbIgRAAIAAAbIgOAAIAAhLIAhAAQAPgBAIAIQAGAHAAAKQAAARgSAFIAVAdgAgSAAIASAAQAIAAAEgDQAEgEAAgFIAAgBQAAgGgEgDQgEgDgIAAIgSAAg");
	this.shape_5.setTransform(43.725,8.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaAnIgIgTIgkAAIgIATIgNAAIAihNIALAAIAiBNgAANAIIgNgeIgMAeIAZAAg");
	this.shape_6.setTransform(35.45,8.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcAmIAAhLIA4AAIAAALIgqAAIAAAUIAlAAIAAAMIglAAIAAAVIArAAIAAALg");
	this.shape_7.setTransform(27.925,8.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaAmIAAhLIANAAIAAA/IAoAAIAAAMg");
	this.shape_8.setTransform(21.25,8.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaTxt, new cjs.Rectangle(0,2,109,15), null);


(lib.ctaBkgd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED780F").s().p("AoKCCQgJAAgHgGQgGgHAAgJIAAjXQAAgJAGgHQAHgGAJAAIQVAAQAJAAAHAGQAGAHAAAJIAADXQAAAJgGAHQgHAGgJAAg");
	this.shape.setTransform(54.5,13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ctaBkgd, new cjs.Rectangle(0,0,109,26), null);


(lib.bigBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.panel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.icon_home2();
	this.instance.setTransform(679.4,195.5,4.5098,4.5098,0,0,0,26.7,29.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED780F").s().p("AiAHRIAAuhIEBAAIAAOhg");
	this.shape.setTransform(2098.2,203.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED780F").s().p("ADtHRIAAoVIjtFrIgEAAIjtlqIAAIUIj8AAIAAuhIEQAAIDdFoIDeloIERAAIAAOhg");
	this.shape_1.setTransform(2021.15,203.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ED780F").s().p("AmIHRIAAuhIGPAAQCxAABoBWQBoBXAACYIAAADQABCghxBaQhrBViyAAIiBAAIAAEKgAiGgCIB8AAQBCAAApghQAogiAAg3IAAgCQgBh6iUAAIh6AAg");
	this.shape_2.setTransform(1923.95,203.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ED780F").s().p("Am5HRIAAuhIFoAAQDzAACOCBQCKB+AADNIAAACQAADOiMCAQiQCFj0AAgAi4DtIBqAAQB1AABGg+QBFg+AAhwIAAgBQAAhvhFg/QhGg/h1AAIhqAAg");
	this.shape_3.setTransform(1795.15,203.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ED780F").s().p("Al4HRIAAuhILrAAIAADaInsAAIAACOIG9AAIAADLIm9AAIAACTIHyAAIAADbg");
	this.shape_4.setTransform(1702.325,203.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ED780F").s().p("ACEHRIi7kZIhzAAIAAEZIkBAAIAAuhIG3AAQDLAABkBkQBSBSAACGIAAADQAADNi/BRIDeFEgAiqgRICrAAQBBAAAlgeQAkgeAAgzIAAgDQAAhviLAAIiqAAg");
	this.shape_5.setTransform(1614.3,203.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ED780F").s().p("AiAHRIAAuhIEBAAIAAOhg");
	this.shape_6.setTransform(1544,203.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ED780F").s().p("Ak8FyQhzhtgBjVIAAoJIEFAAIAAIEQAADGCrAAQCsAAAAi/IAAoLIEEAAIAAIDQAADZh2BvQhwBojMAAQjLAAhvhog");
	this.shape_7.setTransform(1474.35,204.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ED780F").s().p("AETGNQh7BSifABQjWAAiQiOQiOiKAAjJIAAgDQAAjJCQiNQCRiODWAAQDUAACQCNQCOCLAADKIAAACQAACQhSB7IBgBRIiDCRgAizizQhBBHAABoIAAADQAABnBCBIQBEBMBqAAQAuAAAtgQIh/hvICBiRIB+BzQAQgsAAgxIAAgDQAAhmhChKQhFhMhnAAQhoAAhEBMg");
	this.shape_8.setTransform(1371.875,203.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ED780F").s().p("Al4HRIAAuhILrAAIAADaInsAAIAACOIG9AAIAADLIm9AAIAACTIHyAAIAADbg");
	this.shape_9.setTransform(1276.225,203.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ED780F").s().p("ACEHRIi7kZIhzAAIAAEZIkBAAIAAuhIG3AAQDLAABkBkQBSBSAACGIAAADQAADNi/BRIDeFEgAiqgRICrAAQBBAAAlgeQAkgeAAgzIAAgDQAAhviLAAIiqAAg");
	this.shape_10.setTransform(1188.15,203.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ED780F").s().p("AlmFXQiOiKAAjKIAAgDQAAjJCPiMQCRiODVAAQDWAACQCMQCOCLAADKIAAACQAADKiPCMQiSCOjVAAQjVAAiQiNgAisiwQhBBHAABnIAAACQAABnBCBIQBFBMBnAAQBoAABDhKQBAhIAAhmIAAgDQAAhnhChJQhDhKhoAAQhogBhDBLg");
	this.shape_11.setTransform(1050,203.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#ED780F").s().p("ADXHRImOn9IAAH9Ij/AAIAAuhIDwAAIF+HrIAAnrID/AAIAAOhg");
	this.shape_12.setTransform(944.975,203.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer_2
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0E3E70").s().p("EjC5Ae2Qh8AAhYhYQhYhYAAh9MAAAg0SQAAh7BYhYQBZhZB7AAMGFzAAAQB8AABYBZQBYBXAAB8MAAAA0SQAAB9hYBYQhYBYh8AAgECTkgb2QgqAqAAA9QAAA7AqAqQAqApA8AAQA8AAAqgpQAqgqAAg7QAAg9gqgqQgqgpg8AAQg8AAgqApgEiWegb2QgqAqAAA9QAAA7AqAqQAqApA8AAQA7AAAqgpQArgqAAg7QAAg9grgqQgqgpg7AAQg8AAgqApg");
	this.shape_13.setTransform(1349.375,197.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// Layer_1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(29,61,107,0.247)").s().p("EjC5Ae1Qh8AAhYhXQhYhYAAh8MAAAg0SQAAh8BYhZQBZhXB7AAIbTAAIgBKAIf7AAIAAqAMEG+AAAIAAMbIcSAAIAAsbMAnWAAAQB8AABYBXQBYBZAAB8MAAAA0SQAAB8hYBYQhYBXh8AAg");
	this.shape_14.setTransform(1364.375,212.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.panel, new cjs.Rectangle(72,0,2825.4,409.6), null);


(lib.mc_twoRings = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mc_ring();
	this.instance.setTransform(2038.65,53.8,0.7412,2,0,0,0,27.8,26.9);

	this.instance_1 = new lib.mc_ring();
	this.instance_1.setTransform(20.6,53.8,0.7412,2,0,0,0,27.8,26.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_twoRings, new cjs.Rectangle(0,0,2058.1,107.9), null);


(lib.anime_ring = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// rings
	this.instance = new lib.mc_twoRings();
	this.instance.setTransform(391.95,-376,1,0.9999,0,82.0005,0,293.6,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:295.9,regY:19,scaleY:1,skewX:-24.9997,x:418.1,y:-366},16,cjs.Ease.quadInOut).to({regY:18.9,skewX:14.0006,x:403.95,y:-365.95},10,cjs.Ease.quadInOut).to({regY:19.1,skewX:-9.9992,x:413.05,y:-364.95},9,cjs.Ease.quadInOut).to({regX:295.8,skewX:6.0008,x:406},9,cjs.Ease.quadInOut).to({regX:295.9,regY:19,skewX:-4.0006,x:410.05,y:-365},9,cjs.Ease.quadInOut).to({regY:18.9,skewX:2.0008,x:407.05},8,cjs.Ease.quadInOut).to({regX:295.7,regY:19.1,skewX:0,x:409},8,cjs.Ease.quadInOut).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.3,-386.1,2209.5,110.10000000000002);


(lib.anime_patchRight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// rightPatch
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED780F").s().p("Ap6BkQSgjHAugBQAAAVAKAUQALAVASAJQgMAMnCA8Im/A5g");
	this.shape.setTransform(617.5,-375.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED780F").s().p("AoeBdIEng/QD7g2CngbQAmgFAogKQBEgPAzgEQBMgKAlAEIAXAAIAIABIABACIADAEIACAJIACAIQADAGAEAFIACAEIAHAIIABABIAGAPIhGAIQgZADggAGQggAGghAFQgwAEg5ALQg1AKg9AIIg9AIIglAEIlqAwg");
	this.shape_1.setTransform(627.1,-374.2971);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ED780F").s().p("AnOBbQCFgjBzggIAAAAQDWg7CJgVIAFgBQAbgDAjgLIAGgCQA2gPApAAIAFgBQA8gEAeALIAGACQAHACAGABIAFAAIAFABIACABIABACIABADIADAIIADAGIAEAGIACADIACACIABABIAGAHIABABIABABIAHAIIgBABIgBABIg3AMIgYAGQgKABgOAFIgXAFQgQAFgPADIgXAFQggADgjAJIgVAGQgkAKgoAGIgSACIgiADIgRACIgPABIk3Agg");
	this.shape_2.setTransform(636.425,-374.1133);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ED780F").s().p("AmKBcQBvglBhgiQC3hABygQQAVgBAmgPQAxgSAkADQA2gCAaAUIAQAIIAIACQABAEACACQAEAJAGAGIAEAFQAEAEAFADQAGAFAEABIAAABQgMAHg3AQQgOADgbAMQgaALgTAEQgjADgoAQQgmAPgqAFIgrACIkTAUg");
	this.shape_3.setTransform(644.525,-374.1656);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ED780F").s().p("AlSBdQBbglBTgjIADgCIACgBQCahCBegNIAHAAIAJgCQANgDAVgJIAJgEIAFgCQAigNAZACIALACIAHAAQAhAEATAUIAEAFIAFADIAHAGIAEADIACABIACADIACACIACAFIAIAIIADAEQAEADAEACIABABIAGAEIACABIAAAAIAAABIABABIgBABIgBAFQgHAHgdALIgKAEIgJADIgPAHIgLAEIgcAKIgLADIgOADQgSACgUAJIgNAFIgNAGQgVAJgVAFIgNACIgMABIgPABIgMAAIjxAIg");
	this.shape_4.setTransform(651.05,-374.3202);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ED780F").s().p("AA3BfIlggBQBQgmBIgmIAEgCQCJhFBQgKQAFABAJgDQAMgEATgJIANgHQAegNAWAFQAIABAHADQAcAHAOAXIAGAKIAIAKIAFAEIADAFQAEAGAFACIADADIAHAFIAGAEIACABIABABIACADIADAFQAAAHgdAPIgRAHIgNAGQgSAIgRAFIgWAGQgQACgSAJQgKAEgLAHQgRAKgTAFQgMADgLABIgNAAg");
	this.shape_5.setTransform(656.3754,-374.4444);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ED780F").s().p("AiQBcIh8AAQBGgnBBgnQCAhLBHgHQAGADAjgUQAjgUAXAJQAhAGANAjQAOAjALABQAGAGAJAFQADADAFABIAJAEQAIAMguAWQgfANgfALQgXABgZATQgaAUgbACg");
	this.shape_6.setTransform(660.8348,-374.2373);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ED780F").s().p("Aj5BSQA7gmA3gmIAHgFQBphFA7gKIARACQAHAGAegLQAOgFANAAQAOgBAMAFQAfAJAQAbQAPAbAOABQAGAFAIADQADADADABIABAAIAIAEQALALgmAWIgLAFIgvAVIgEABQgUABgWANQgZAOgaACg");
	this.shape_7.setTransform(665.0823,-373.2077);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ED780F").s().p("AjrBQQA2gnAzgoIAHgEQBjhIA1gIIAOAGQAHAIAagEQANgBAMACQANACALAFQAdAJATAWQARAVAQACIAOAGIAEACIAAAAIAIADQAOAMghAXIgJAEIgsAXIgFAAQgUACgVAJQgYAKgZABg");
	this.shape_8.setTransform(668.369,-373);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ED780F").s().p("AjhBSQAzgpAwgoIAGgEQBghLAwgFQAEAEAIAGQAHAIAYACQALABAMAEQAMADAKAGQAcALAVARQARAQARACIAPAEIACABIABAAIAHAEQARANgeAWIgIAFIgqAWIgEACQgUABgVAGQgXAHgYAAg");
	this.shape_9.setTransform(670.8927,-373.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ED780F").s().p("AjZBTIBdhSIAGgFQBdhMAtgEQACAGAIAHQAHAKAVAFQALAEALAEIAWAKQAaAMAWAOQATAMASACIAOAEIACABIAAAAIAHAEQATAMgbAWIgHAFIgpAYIgDABQgUABgVAEQgXAEgXAAg");
	this.shape_10.setTransform(672.8303,-373.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ED780F").s().p("AjTBUIBZhUIAGgEQBbhOAqgCQACAHAHAHQAHALAUAJIAVAKIAVALIAwAYQATAJATADIAOACIABABIABAAIAHAEQATAMgYAWIgHAGIgoAXIgDACQgUAAgUADQgXACgXABg");
	this.shape_11.setTransform(674.2321,-373.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#ED780F").s().p("AjPBUIBXhUIAFgEQBZhPApgBQABAHAGAIQAIALATALIAUANIAUALQAZANAYAKQATAHAUADIAOACIABAAIAHAEQAUAMgXAWIgGAGIgnAYIgDACIgoABQgWACgXAAg");
	this.shape_12.setTransform(675.2331,-373.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#ED780F").s().p("AjNBVIBVhVIAFgEQBZhPAngBQAAAHAHAJQAHALASANIAUANQAKAHALAGQAYANAYAHQAUAIAUACIAOACIAHADQAVANgWAWIgGAFIgmAZIgDACIgoAAIgtABg");
	this.shape_13.setTransform(675.9128,-373.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#ED780F").s().p("ABrBVIgtAAIkJAAIBThVIAGgEQBYhQAmAAQAAAHAHAKQAHALASANIAUAOIAUANQAYAOAZAGQATAHAVACIAOACIAHAEQAVAMgWAWIgGAFIgmAZIgDACIgnAAg");
	this.shape_14.setTransform(676.2813,-373.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#ED780F").s().p("AjLBVIBUhVQBchUAnAAQAAAVAzAjQA7AnBAAEQAjAPgiAcIgpAbg");
	this.shape_15.setTransform(676.3752,-373.5);

	this.instance = new lib.patch_top2();
	this.instance.setTransform(674.2,-375,1,1,0,0,0,12.2,10.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},8).to({state:[{t:this.instance}]},8).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).wait(9).to({x:678.2},10,cjs.Ease.quadInOut).to({x:674.2},9,cjs.Ease.quadInOut).to({x:678.2},9,cjs.Ease.quadInOut).to({x:675.2},8,cjs.Ease.quadInOut).to({x:677.2},8,cjs.Ease.quadInOut).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(554,-385.1,142.79999999999995,20.900000000000034);


(lib.anime_patchLeft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// leftPatch
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED780F").s().p("Ap6BkQShjHAtgBQAAAVAKAUQALAVASAJQgKAOnIA7QjjAdjiAbg");
	this.shape.setTransform(64.5,-375.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ED780F").s().p("AjxAbQEDg4CpgaIBmgIQDOgbAcAAIABABIAAABIAAADIABAMIAEAMQACAFgBAFQgBAFADAFIAFAHQACAFAEAEQgPAKhTAQIiYAUIiQAUIgwAGIgoAEIktAlIkuADIEthAg");
	this.shape_1.setTransform(72.225,-374.0754);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ED780F").s().p("AjMAOQDfg+COgUIBYABQCpgPAjABIAAABIABACIABAHQAAAFABAEIAEALQABAEgFAEQgEAEACADIAEAHIgEAHQgXANg3AOQgxAFhPALIh4ARIgoAFIgjADIj/AfIg4AEIjJABID/hEg");
	this.shape_2.setTransform(79.6673,-373.1816);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ED780F").s().p("AixAFQDAhCB2gQIBNALQCIgGApACIABABIABADQAAAJADAJIADAJQABADgIADQgHAEABACIACAFIhIAjQgoAChEAKQhhANgkAFIgeADIkHAfIisAAQB0glBlgjg");
	this.shape_3.setTransform(86.5868,-372.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ED780F").s().p("AibAUQClhGBigMIAFAAQAJAEBNgTQBPgTAMACIABAAQAqABgFAaQgDANAAAFQgBAJAKAAIABABIAAAAIABACQAAAIACAIIABAEIACAEQABAEgEADQgEADACACIABADIAAABQgFADgSgDQgSgDgGAEIgXARIgKAEQgLAAgUAOQgUAOgRACIh3ANIgRACIgJAAIjpAYIiXABQBignBXgkg");
	this.shape_4.setTransform(94.1205,-374.4895);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ED780F").s().p("AkrBQICehMIAEgCQCMhGBUgLIAEAAIAGAAQASAIArABIADAAQA7gEAYADIABAAQAfACAJANIADAEIAAADIAAAEQABAHAFAEIAAABIAAABIABABIAEAOIACADIAAABIAAACQAAADgEACQgCADAAADIgBACIAAABQgEAFgKACIgBAAQgKAEgGAHIgKAKIgLADIgIACQgMAAgQAHQgRAGgRACIhsAKIgHAAIgIABIgIAAIgzASg");
	this.shape_5.setTransform(100.15,-373.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ED780F").s().p("AkNBfQBKgoBDgnQCFhMBKgHQAFAFAagRQAcgTAMAFQAbAEAhAiQAfAgARABIACACIACARQADAJAEAIIgRAcQgIAOgKAOQgcACg7AKQg/ALghACg");
	this.shape_6.setTransform(104.9,-374.519);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ED780F").s().p("Aj3BUQA9gmA4gmIAKgGQBmhCA8gMQALAAAMADQAGAGAWgKIABAAQAXgKANAFQAaAGAgAZIAMAIQAVASAOADIABACIAEAOIAIAQQgCALgHAOIgBACQgGAOgIAOIgFACQgdABguAGQg5AIgiACg");
	this.shape_7.setTransform(109.675,-373.4476);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ED780F").s().p("AjnBSQA4gnA0goIAIgFQBihGA1gJIATAJQAFAHATgFIABABQAUgEAOAGQAZAHAgASIAMAHQAVAPANAEIABACIAFANIAJAOQAAALgEANIgBACQgEAOgGAOIgEADQgeAAgqAFQgzAFgjACg");
	this.shape_8.setTransform(113.375,-373.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ED780F").s().p("AjbBTQAzgpAxgoIAIgFQBehJAxgGIAOAOQAFAHAQABIACAAQARABAPAGQAYAIAhANIAMAFQATANANAGIABABIAHAKIAJAQQACAKgCAMIgBADQgDAOgFAOIgDACQgeABgnADQgvAEgkABg");
	this.shape_9.setTransform(116.275,-373.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ED780F").s().p("AjSBUIBehTIAIgFQBbhLAtgEQADAJAIAJQAGAIANADIACABQAQAEAPAHIA4ASIAMADIAgATIABABIAHAJIAJAOQAEALgBAMIAAADIgGAbIgCADIhDADQgsACglABg");
	this.shape_10.setTransform(118.485,-373.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ED780F").s().p("AjMBUIBahTIAHgFQBahNApgCQADAKAGAKQAGAIAMAGIACABIAeANQAYAJAgAIIAMACQASAJANAIIABABIAIAKIAKANQAEAKAAAMIAAADIgEAbIgCAEIhCABIhOACg");
	this.shape_11.setTransform(120.15,-373.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#ED780F").s().p("AjJBUIBXhUIAIgFQBXhNApgBQABAKAGALQAGAJAMAHIABABQAOAJAPAHQAYAJAgAFIAMACQASAJAMAHIABACIAJAJIAJAMQAGALABAMIAAADIgEAbIgBADIhAABIhNABg");
	this.shape_12.setTransform(121.35,-373.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#ED780F").s().p("AjGBVIBVhVIAHgFQBXhOAngBQABAMAGALQAGAJAKAIIACACQAMAJARAHQAXAKAgAEIAMABQASAIANAJIABABIAIAIIAKANQAGALACALIAAADIgEAbIgBAEIg/AAIhNABg");
	this.shape_13.setTransform(122.125,-373.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#ED780F").s().p("ACDBVIhNAAIj6AAIBUhVIAHgFQBWhPAnAAQAAAMAGAMQAFAJAKAJIACABQANAKAQAIQAYAJAgADIAMABQARAJANAHIABABIAJAJIAJANQAGALACALIAAADIgDAbIAAAEIg/AAg");
	this.shape_14.setTransform(122.525,-373.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#ED780F").s().p("AjEBVIBUhVQBchUAnAAQAAAXAYAVQAgAbBAAEQAzAVAHAnIgEAig");
	this.shape_15.setTransform(122.675,-373.5);

	this.instance = new lib.patch_top2();
	this.instance.setTransform(120.65,-375.4,1.2678,0.9448,0,0,0,12.4,9.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},8).to({state:[{t:this.instance}]},8).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).wait(7).to({regX:12.7,regY:9,scaleX:1.1919,scaleY:1.094,x:120.1,y:-377.15},0).wait(1).to({x:119.1},0).wait(1).to({scaleY:1.1935,x:118.1,y:-378.25},0).to({regY:8.8,scaleY:0.9945,x:121.1,y:-376.25},10,cjs.Ease.quadInOut).to({scaleY:1.0939,x:119.1,y:-377.35},9,cjs.Ease.quadInOut).to({x:121.1},9,cjs.Ease.quadInOut).to({x:119.1},8,cjs.Ease.quadInOut).to({x:121.1},8,cjs.Ease.quadInOut).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,-389,141.4,24.100000000000023);


(lib.anime_patch = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// patches
	this.instance = new lib.patch_bottom2();
	this.instance.setTransform(584,-354,0.41,0.4095,0,70.1675,0,15.7,13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:15.3,regY:13.2,scaleX:0.6406,scaleY:0.6393,skewX:69.1758,x:590.5,y:-345.4},1).to({regX:15.2,regY:12.8,scaleX:0.85,scaleY:0.8492,skewX:68.0009,x:595.75,y:-335.6},1).to({regX:21.7,regY:13,scaleX:0.96,scaleY:0.9066,skewX:53.9996,x:607.95,y:-321.95},1).to({regX:21.9,scaleX:1,scaleY:0.9527,skewX:48.0013,x:622.05,y:-310},1).to({regY:12.9,scaleY:0.9594,skewX:29.9994,x:637.2,y:-297.2},1).to({regY:12.8,scaleY:0.9672,skewX:19.3271,x:655.85,y:-290.2},1).to({scaleY:0.9754,skewX:8.2561,x:672.7,y:-286.9},1).to({scaleY:0.9829,skewX:-1.9119,x:686.25,y:-287.05},1).to({scaleY:0.9891,skewX:-10.32,x:697.8,y:-288.7},1).to({scaleY:0.9938,skewX:-16.6826,x:705.8,y:-291.25},1).to({scaleY:0.997,skewX:-21.0893,x:711.4,y:-294.35},1).to({regX:22,scaleY:0.999,skewX:-23.7759,x:715.45,y:-296.15},1).to({regX:15.8,regY:13.8,scaleY:1,skewX:-24.9994,x:706.95,y:-297.05},1).wait(1).to({regX:15.9,regY:13.9,skewX:-24.0097,x:705.6,y:-296.25},0).wait(1).to({regX:15.8,regY:13.8,scaleY:0.9999,skewX:-21.3874,x:701.75,y:-294.55},0).to({skewX:-16.8145,x:695.05,y:-291.9},1).wait(1).to({regX:15.9,regY:13.9,scaleY:1,skewX:-10.2731,x:685.65,y:-289.8},0).wait(1).to({regX:15.8,regY:13.8,skewX:-2.4995,x:674.25,y:-287.55},0).wait(1).to({regX:15.9,regY:13.9,skewX:5.4868,x:662.7,y:-287.95},0).wait(1).to({regX:15.8,regY:13.8,scaleX:0.9999,skewX:11.8987,x:653.3,y:-288.5},0).wait(1).to({regX:15.9,regY:13.9,skewX:16.3233,x:646.9,y:-290.35},0).wait(1).to({skewX:18.9178,x:643.1,y:-291.55},0).wait(1).to({regX:16.1,regY:13.8,skewX:20.0002,x:641.6,y:-292.15},0).wait(1).to({regX:15.9,regY:13.9,skewX:19.2183,x:642.45,y:-291.5},0).wait(1).to({regX:16.1,regY:13.8,skewX:17.0854,x:645.8,y:-290.2},0).wait(1).to({regX:15.9,regY:13.9,skewX:13.3479,x:650.85,y:-289.25},0).wait(1).to({regX:16.1,regY:13.8,skewX:8.1479,x:658.5,y:-288.15},0).wait(1).to({regX:15.9,regY:13.9,scaleX:1,skewX:1.9794,x:667.1,y:-288},0).wait(1).to({regX:16.1,regY:13.7,skewX:-3.3032,x:674.9,y:-288.15},0).wait(1).to({regX:15.9,regY:13.9,skewX:-6.9986,x:679.95,y:-288.2},0).wait(1).to({skewX:-9.1379,x:683,y:-288.4},0).wait(1).to({regY:13.8,skewX:-9.9999,x:684.35,y:-288.7},0).wait(1).to({regY:13.9,skewX:-9.7392,x:683.6,y:-288.5},0).wait(1).to({skewX:-9.0283,x:681.55,y:-288.15},0).wait(1).to({skewX:-7.7824,x:677.95,y:-287.7},0).wait(1).to({regX:16,regY:13.8,skewX:-6.0489,x:672.95,y:-287.1},0).wait(1).to({regX:15.9,regY:13.9,skewX:-3.9925,x:666.85,y:-287.35},0).wait(1).to({skewX:-2.2313,x:661.75,y:-287.65},0).wait(1).to({skewX:-1,x:658.2,y:-287.9},0).wait(1).to({skewX:-0.2872,x:656.1,y:-288},0).wait(1).to({regX:15.8,regY:13.8,skewX:0,x:655.3,y:-288.2},0).to({x:675.3,y:-287.2},9,cjs.Ease.quadInOut).to({x:663.3},8,cjs.Ease.quadInOut).to({x:668.3},8,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(571.2,-355.9,160,83.5);


(lib.anime_panel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// panel
	this.instance = new lib.panel();
	this.instance.setTransform(409.15,-365,1,0.9999,0,91.0003,0,408.6,-65.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:410.8,regY:-63.8,scaleY:1,skewX:-30,x:409,y:-365.05},16,cjs.Ease.quadInOut).to({scaleY:0.9999,skewX:19.9992,x:409.05},10,cjs.Ease.quadInOut).to({regX:411.1,scaleY:1,skewX:-12.0015,x:409.1,y:-365},9,cjs.Ease.quadInOut).to({regX:410.9,regY:-63.7,scaleY:0.9999,skewX:7.9995,x:409.05},9,cjs.Ease.quadInOut).to({regX:410.8,scaleY:1,skewX:-4.9992,x:409},9,cjs.Ease.quadInOut).to({regX:410.9,regY:-63.6,skewX:3.0002,x:409.15,y:-364.95},8,cjs.Ease.quadInOut).to({regX:410.7,skewX:0,x:409,y:-365},8,cjs.Ease.quadInOut).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-387.9,-373.3,3264.6,482.70000000000005);


(lib.Anime_flip = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// topBar_clean
	this.instance = new lib.bar_top();
	this.instance.setTransform(176.75,-385,1,1,0,0,0,264.9,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(96));

	// mask1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eh88gZVIgBmhMD56AAAIABGhgEBRKgdqQghAhAAAtQAAAuAhAiQAhAgAuABQAugBAhggQAhgjAAgtQAAgtghghQghgiguABQgugBghAigEhMygdqQghAhAAAtQAAAuAhAiQAhAgAuABQAugBAhggQAhgjAAgtQAAgtghghQghgiguABQgugBghAig");
	mask.setTransform(711.625,-203.95);

	// left
	this.instance_1 = new lib.anime_patchLeft("synched",0,false);
	this.instance_1.setTransform(164.3,-378.3,1,1,0,0,0,71.7,-377);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(96));

	// right
	this.instance_2 = new lib.anime_patchRight("synched",0,false);
	this.instance_2.setTransform(1172.4,-376,1,1,0,0,0,625.4,-374.7);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(96));

	// ringPatch_blue
	this.instance_3 = new lib.anime_patch("synched",0,false);
	this.instance_3.setTransform(208.35,-350.55,0.5531,0.5299,0,0,0,651.1,-314.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).wait(93));

	// ringPatch_blue
	this.instance_4 = new lib.anime_patch("synched",0,false);
	this.instance_4.setTransform(1219.3,-350.55,0.5531,0.5299,0,0,0,651.4,-314.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).wait(93));

	// anime_ring
	this.instance_5 = new lib.anime_ring("synched",0,false);
	this.instance_5.setTransform(352.75,-355.25,0.5,0.5,0,0,0,381.7,-331.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).wait(96));

	// topBar
	this.instance_6 = new lib.bar_top();
	this.instance_6.setTransform(176.75,-385,1,1,0,0,0,264.9,19.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).wait(96));

	// anime_panel
	this.instance_7 = new lib.anime_panel("synched",0,false);
	this.instance_7.setTransform(177.7,-243.5,0.53,0.53,0,0,0,301.5,-111.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).wait(96));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.5,-407.9,1715,281.7);


(lib.anime_copy1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bIUIAAmFMAu3AAAIAAGFg");
	mask.setTransform(150,53.2427);

	// copy1c
	this.instance = new lib.copy1c();
	this.instance.setTransform(150,119.3,1,1,0,0,0,150,16);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({y:89.4},8,cjs.Ease.quadOut).wait(58));

	// Layer_6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A3bKFIAAjwMAu3AAAIAADwg");
	mask_1.setTransform(150,64.5);

	// copy1a
	this.instance_1 = new lib.copy1a();
	this.instance_1.setTransform(150,140.5,1,1,0,0,0,150,12.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({y:116.5},8,cjs.Ease.quadOut).wait(55));

	// Layer_6 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("A3bKnIAAlxMAu3AAAIAAFxg");
	mask_2.setTransform(150,67.9444);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,129);


(lib.cta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {over:4,out:15,once:24};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.stop();
	}
	this.frame_42 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(10).call(this.frame_21).wait(21).call(this.frame_42).wait(23));

	// Layer_6
	this.instance = new lib.ctaTxt();
	this.instance.setTransform(54,12.6,1,1,0,0,0,54,8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({regY:8.7,scaleX:1.1,scaleY:1.1},6,cjs.Ease.quadOut).wait(5).to({regY:8.6,scaleX:1,scaleY:1},6,cjs.Ease.quadOut).wait(3).to({regY:8.7,scaleX:1.1,scaleY:1.1},5,cjs.Ease.cubicOut).wait(3).to({regY:8.6,scaleX:1,scaleY:1},9,cjs.Ease.quadIn).wait(24));

	// Layer 4
	this.instance_1 = new lib.ctaBkgd();
	this.instance_1.setTransform(53.9,12.8,1,1,0,0,0,53.9,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({scaleX:1.1,scaleY:1.1},6,cjs.Ease.quadOut).wait(5).to({scaleX:1,scaleY:1},6,cjs.Ease.quadOut).wait(3).to({scaleX:1.1,scaleY:1.1},5,cjs.Ease.cubicOut).wait(3).to({scaleX:1,scaleY:1},9,cjs.Ease.quadIn).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,-1.3,120,28.7);


// stage content:
(lib.NFCU_MortgageEvergreen_NoPMI_728x90 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,169,181];
	// timeline functions:
	this.frame_0 = function() {
		// Enable mouse interaction with the stage 
		stage.enableMouseOver();
		
		// Define variables used in the 
		var root = this;
		var bigBtn = root.bigBtn;
		var cta = root.cta;
		
		
		
		// Add event listeners
		bigBtn.addEventListener("click", clickTag);
		canvas.addEventListener("mouseover", rollOver);
		canvas.addEventListener("mouseout", rollOut);
		
		
		
		// Define functions to use throughout 
		function rollOver(){
			cta.gotoAndPlay("over");
		};
		
		function rollOut(){
				cta.gotoAndPlay("out");
		};
		
		function clickTag() {
			window.open(window.clickTag);
		}
	}
	this.frame_169 = function() {
		//this.stop();
		this.cta.gotoAndPlay("once");
	}
	this.frame_181 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(169).call(this.frame_169).wait(12).call(this.frame_181).wait(1));

	// hotspot
	this.bigBtn = new lib.bigBtn();
	this.bigBtn.name = "bigBtn";
	this.bigBtn.setTransform(364,45,2.4266,0.36,0,0,0,150,125);
	new cjs.ButtonHelper(this.bigBtn, 0, 1, 2, false, new lib.bigBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.bigBtn).wait(182));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,0,0,3).p("Eg4ygG8MBxlAAAIAAN5MhxlAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(182));

	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(543.5,44.95,1.08,1.08,0,0,0,40.3,23.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(182));

	// cta
	this.instance_1 = new lib.Logo_EHL_white();
	this.instance_1.setTransform(732.2,30.95,1.08,1.08,0,0,0,78.9,16.6);

	this.instance_2 = new lib.legalCopy();
	this.instance_2.setTransform(657.2,73.7,1,1,0,0,0,49.2,8.7);
	this.instance_2.alpha = 0.8008;

	this.cta = new lib.cta();
	this.cta.name = "cta";
	this.cta.setTransform(679.7,55.3,1,1,0,0,0,75.7,20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cta},{t:this.instance_2},{t:this.instance_1}]}).wait(182));

	// Layer_5
	this.instance_3 = new lib.Anime_flip("single",0);
	this.instance_3.setTransform(100.8,85.2,0.305,0.305,0,0,0,281.4,-127.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(64).to({mode:"synched",loop:false},0).wait(118));

	// Layer_3
	this.instance_4 = new lib.anime_copy1("synched",0,false);
	this.instance_4.setTransform(239,25.15,0.88,0.88,0,0,0,150,71.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({_off:true},99).wait(77));

	// bkgd
	this.instance_5 = new lib.mc_bkgd();
	this.instance_5.setTransform(364,18.75,2.4266,0.15,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(182));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(324.6,37,403.9,86);
// library properties:
lib.properties = {
	id: '4A3FB32C3C8D44DE90778EF3F28D5A73',
	width: 728,
	height: 90,
	fps: 30,
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
an.compositions['4A3FB32C3C8D44DE90778EF3F28D5A73'] = {
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