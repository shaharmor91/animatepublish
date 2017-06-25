(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.button3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAlIAAhHIASAAIAAAKQAFgIADgCQADgCAFAAQAGAAAHAEIgGAQQgFgDgEAAQgEAAgDACQgCADgCAFQgBAGAAARIAAAXg");
	this.shape.setTransform(75.6,22.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaAaQgHgKAAgQQAAgRAKgKQAJgKAOAAQAPAAAKALQAJAKAAAVIgvAAQAAAJAEAFQAFAFAGAAQAEAAADgDQADgCABgGIATADQgDALgIAFQgIAGgMAAQgSAAgJgMgAgJgSQgEAFAAAIIAbAAQAAgJgDgEQgFgEgFAAQgGAAgEAEg");
	this.shape_1.setTransform(68.4,22.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgCAwQgEgCgCgCIgDgIIAAgNIAAgfIgJAAIAAgPIAJAAIAAgPIASgLIAAAaIANAAIAAAPIgNAAIAAAcIAAALIACACIADABIAIgCIACAPQgIADgIAAQgFAAgDgCg");
	this.shape_2.setTransform(62.3,21);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAOAlIAAglQAAgLgBgDQgBgEgEgCQgCgCgEAAQgEABgEACQgEADgBAEQgCAFAAALIAAAhIgTAAIAAhHIASAAIAAAKQAJgMANAAQAHAAAGACQAEADAEADQACADABAFIABANIAAAsg");
	this.shape_3.setTransform(55.7,22.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJAyIAAhHIATAAIAABHgAgJgfIAAgSIATAAIAAASg");
	this.shape_4.setTransform(49.5,20.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSAhQgJgEgFgJQgEgJgBgLQABgKAEgJQAFgJAIgEQAJgFAKAAQAQAAALALQALAKAAAQQAAAQgLALQgLALgQAAQgJAAgJgFgAgMgQQgEAGAAAKQAAALAEAFQAGAGAGAAQAIAAAEgGQAGgFAAgLQAAgKgGgGQgEgFgIAAQgGAAgGAFg");
	this.shape_5.setTransform(43.3,22.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgjAzIAAhjIASAAIAAAKQAEgFAGgEQAGgDAGAAQANAAAIAKQAJAKAAASQAAARgJAKQgIAKgNAAQgFAAgFgDQgFgCgFgGIAAAlgAgLgdQgFAFABALQAAAMAEAFQAFAGAGAAQAHAAAFgGQAEgEAAgMQAAgMgFgFQgFgGgGAAQgGAAgFAGg");
	this.shape_6.setTransform(35,23.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66FF00").s().p("AqODSIAAmjIUdAAIAAGjg");
	this.shape_7.setTransform(65.5,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131,42);


(lib.button2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjAzIAAhjIASAAIAAAKQAEgFAGgEQAGgDAGAAQAMAAAJAKQAKAKgBASQABARgKAKQgJAKgMAAQgFAAgFgDQgFgCgGgGIAAAlgAgLgdQgFAFAAALQABAMAFAFQAEAGAGAAQAHAAAEgGQAFgEAAgMQAAgMgFgFQgEgGgHAAQgGAAgFAGg");
	this.shape.setTransform(71.7,21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAyIAAhjIATAAIAABjg");
	this.shape_1.setTransform(65.3,19.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaAaQgHgKAAgQQAAgRAJgKQAKgKAOAAQAQAAAJALQAJAKAAAVIgwAAQABAJAFAFQAEAFAFAAQAFAAADgDQADgCABgGIAUADQgEALgIAFQgIAGgMAAQgSAAgJgMgAgJgSQgEAFAAAIIAcAAQgBgJgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_2.setTransform(59.4,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAOAyIAAgnQAAgLgBgCQgCgDgCgCQgDgCgEAAQgEABgDACQgFACgBAEQgCAEAAAKIAAAkIgTAAIAAhjIATAAIAAAlQAJgLAMAAQAHAAAGACQAEACAEAEQACAFABAEIABANIAAArg");
	this.shape_3.setTransform(51.3,19.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AqODSIAAmjIUdAAIAAGjg");
	this.shape_4.setTransform(65.5,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131,42);


(lib.button1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjAzIAAhjIASAAIAAAKQAEgFAGgEQAGgDAGAAQAMAAAKAKQAJAKAAASQAAARgJAKQgKAKgMAAQgFAAgFgDQgFgCgGgGIAAAlgAgLgdQgEAFgBALQAAAMAGAFQAEAGAGAAQAHAAAEgGQAFgEAAgMQAAgMgFgFQgFgGgGAAQgGAAgFAGg");
	this.shape.setTransform(88.6,21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgSAhQgJgEgEgJQgGgJAAgLQAAgKAGgJQAEgJAIgEQAKgFAJAAQAQAAALALQALAKgBAQQABAQgLALQgLALgQAAQgJAAgJgFgAgLgQQgFAGgBAKQABALAFAFQAEAGAHAAQAHAAAGgGQAFgFAAgLQAAgKgFgGQgGgFgHAAQgHAAgEAFg");
	this.shape_1.setTransform(79.9,20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXAlIAAhHIASAAIAAAKQAFgIADgCQADgCAFAAQAGAAAHAEIgGAQQgFgDgEAAQgEAAgDACQgCADgCAFQgBAGAAARIAAAXg");
	this.shape_2.setTransform(73.4,20.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaApQgJgKAAgSQAAgSAJgJQAJgKAOAAQAKAAAKAKIAAgkIASAAIAABjIgRAAIAAgKQgFAGgFADQgHADgFAAQgMAAgKgKgAgKgEQgFAFAAAKQAAAMAEAFQAEAIAHAAQAHAAAFgGQAEgGABgLQgBgMgEgFQgEgFgIAAQgFAAgFAFg");
	this.shape_3.setTransform(65.8,19.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSAKIAAgTIAlAAIAAATg");
	this.shape_4.setTransform(59.7,20.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSAhQgJgEgEgJQgGgJAAgLQAAgKAGgJQAEgJAIgEQAKgFAJAAQAQAAALALQAKAKAAAQQAAAQgKALQgLALgQAAQgJAAgJgFgAgLgQQgGAGAAAKQAAALAGAFQAEAGAHAAQAHAAAGgGQAFgFAAgLQAAgKgFgGQgGgFgHAAQgHAAgEAFg");
	this.shape_5.setTransform(52.8,20.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAOAlIAAglQAAgLgCgDQgBgEgCgCQgDgCgEAAQgEABgEACQgEADgCAEQgBAFAAALIAAAhIgTAAIAAhHIASAAIAAAKQAJgMAOAAQAGAAAFACQAFACAEAEQACADABAFIABANIAAAsg");
	this.shape_6.setTransform(44.3,20.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AqODSIAAmjIUdAAIAAGjg");
	this.shape_7.setTransform(65.5,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131,42);


// stage content:
(lib.changeCursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.button1.addEventListener("mouseover", MouseOverButton1.bind(this));
		
		function MouseOverButton1()
		{
			this.button1.cursor = "no-drop";
		}
		
		
		
		this.button2.addEventListener("mouseover", MouseOverButton2.bind(this));
		
		function MouseOverButton2()
		{
				this.button2.cursor = "help";
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCAyIAAgNQAAgFABgEIAFgLIACgCQAEgFgBgHIAAgIIglAAIAAgsIATAAIAAAbIAmAAIAAATIgBAOQgBAFgDAEIgDAEIgEAHIgBAHIAAAMg");
	this.shape.setTransform(506.5,346.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAMAlIAAgkQAAgLgGgFQgFgFgMAAIgRACIgCgPQAKgDANAAQASAAAKAJQAKAIAAASIAAAmg");
	this.shape_1.setTransform(499.2,347.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgfAZQgLgNAAgYIgBgYIATAAIAAATIABALIAAAEQAEAAAEgCQAEgCABgEIABgNIABgNIARAAIAAASIgCALQgBADgDAEQgDADgFADQgGADgJABQABAFAGAEQAFAEAHAAQALAAAGgHQAGgHACgTIABgaIATAAIgCAbQgCARgEAJQgEAIgJAGQgKAGgOAAQgTAAgLgMg");
	this.shape_2.setTransform(490.9,347.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJAUIAAgnIATAAIAAAng");
	this.shape_3.setTransform(484,345.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AABAlIAAgRIASAAIAAgOQAAgOgDgFQgCgGgGAAQgGAAgDAHQgFAHgDARIgEAZIgVAAIAEgQIAFgVIgMgjIARAAIAFAQQAKgRAPAAQANAAAHALQAIAKAAAWIAAAeg");
	this.shape_4.setTransform(477.4,347.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAPAlIAAgiQAAgNgHgFQgGgFgMAAIgWACIgBgQQALgCAPAAQAPAAAJAFQAJAFAEAHQAEAHAAAMIAAAlgAghAlIAAglIAUAAIAAAlg");
	this.shape_5.setTransform(469,347.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAPAlIAAgiQAAgNgHgFQgGgFgMAAIgWACIgBgQQALgCAPAAQAPAAAJAFQAJAFAEAHQAEAHAAAMIAAAlgAghAlIAAglIAUAAIAAAlg");
	this.shape_6.setTransform(456.5,347.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AABAlIAAgRIASAAIAAgOQAAgOgDgFQgCgGgGAAQgGAAgDAHQgFAHgDARIgEAZIgVAAIAEgQIAFgVIgMgjIARAAIAFAQQAKgRAPAAQANAAAHALQAIAKAAAWIAAAeg");
	this.shape_7.setTransform(447.5,347.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgCAyIAAgNQAAgFABgEIAFgLIACgCQAEgFAAgHIAAgIIgmAAIAAgsIATAAIAAAbIAmAAIAAATIgBAOQgBAFgDAEIgDAEIgEAHIgBAHIAAAMg");
	this.shape_8.setTransform(439.8,346.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAOAkIgYgkQgFAFgBARIgBAOIgTAAIACgPQABgQAEgGQAEgGAGgEIgRgYIAXAAIATAdQAGgEABgNIABgMIASAAIgBAJQgCAPgEAGQgEAGgGAEIAWAfg");
	this.shape_9.setTransform(432.6,347.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAPAlIAAgiQAAgNgHgFQgGgFgMAAIgWACIgBgQQALgCAPAAQAPAAAJAFQAJAFAEAHQAEAHAAAMIAAAlgAghAlIAAglIAUAAIAAAlg");
	this.shape_10.setTransform(424,347.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgJAkIAAgTIATAAIAAATgAgJgQIAAgTIATAAIAAATg");
	this.shape_11.setTransform(417.3,347.4);

	this.text = new cjs.Text("https://www.w3schools.com/cssref/pr_class_cursor.asp", "bold 14px 'Arial'");
	this.text.lineHeight = 18;
	this.text.parent = this;
	this.text.setTransform(29,338.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AghAaIATgEIgNg/IAUAAIAJA5QAHgCADgGQACgFAAgJIABgjIATAAIgBAaIgBARQgBAGgDAGQgDAGgGAFQgHAFgMAEQgNAFgSADg");
	this.shape_12.setTransform(357.5,59);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgiAlIAAgRIAmAAIAAgTQAAgLgEgFQgFgFgMAAIgRACIgBgPQAKgDALAAQASAAAKAJQAKAIAAASIAAAVIAMAAIAAARg");
	this.shape_13.setTransform(350.1,58.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAMAlIAAgkQAAgLgGgFQgGgFgMAAIgRACIgBgPQAKgDANAAQATAAAJAJQAKAIAAASIAAAmg");
	this.shape_14.setTransform(342,58.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgJAkIAAhHIATAAIAABHg");
	this.shape_15.setTransform(336.8,58.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AghAaIATgEIgNg/IAUAAIAJA5QAHgCADgGQACgFAAgJIABgjIATAAIgBAaIgBARQgBAGgDAGQgDAGgGAFQgHAFgMAEQgNAFgSADg");
	this.shape_16.setTransform(326.8,59);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgCAyIAAgNQAAgFABgFIAFgKIACgCQAEgFgBgHIAAgIIglAAIAAgsIATAAIAAAcIAmAAIAAASIgBAOQgBAFgDAEIgDAEIgEAIIgBAGIAAAMg");
	this.shape_17.setTransform(319.8,57.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAPAlIAAgiQAAgNgHgFQgGgFgMAAIgWACIgBgQQALgCAPAAQAPAAAJAFQAJAFAEAHQAEAHAAAMIAAAlgAghAlIAAglIAUAAIAAAlg");
	this.shape_18.setTransform(308.2,58.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgcAjIADgPQAHADAFAAQALAAAFgHQAGgGAAgKQAAgJgGgGQgFgHgLAAQgFAAgHADIgDgPQAIgCAJAAQANAAAIAEQAJAEAFAIQAFAIAAAMQAAAMgFAIQgEAIgKAFQgJAEgMAAQgJAAgIgCg");
	this.shape_19.setTransform(300.5,58.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgiAhIAEgNQAKAEAKAAQALAAAHgGQAHgHAAgLQAAgKgGgHQgGgHgJABIgIABIAAAIQAAAKAIAAIACAAIAEAKQgFACgGAAQgFAAgFgCQgFgBgDgFQgDgEAAgMIAAgRQANgDANgBQASAAAMALQALAKAAAPQAAASgMAKQgNALgTAAQgMAAgNgFg");
	this.shape_20.setTransform(293,58.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgoAiIADgMIAHABQAEAAACgBIABgIIAAgiIgOABIgCgOQARgDATAAQAQAAAJADQAJADAGAHQAEAIAAANIAAAmIgTAAIAAgjQAAgNgEgFQgFgEgRAAIAAAjQAAAKgBAEQgCAEgEACQgEADgIAAQgJAAgIgDg");
	this.shape_21.setTransform(283.8,58.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgJAkIAAhHIATAAIAABHg");
	this.shape_22.setTransform(277.5,58.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAMAlIAAgkQAAgLgGgFQgFgFgNAAIgQACIgCgPQAKgDANAAQATAAAJAJQAKAIAAASIAAAmg");
	this.shape_23.setTransform(271.7,58.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgJAUIAAgnIATAAIAAAng");
	this.shape_24.setTransform(266.4,56.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AghAlIAAhGQANgDAOAAQARAAAIAFQAIAEADAHQAEAHAAAMIAAAmgAgOgTIAAAnIAdAAIAAgUQAAgKgEgFQgEgFgLAAIgKABg");
	this.shape_25.setTransform(260.3,58.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAPAlIAAgiQAAgNgHgFQgGgFgMAAIgWACIgBgQQALgCAPAAQAPAAAJAFQAJAFAEAHQAEAHAAAMIAAAlgAghAlIAAglIAUAAIAAAlg");
	this.shape_26.setTransform(247.8,58.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgfAZQgLgNAAgYIgBgYIATAAIAAATIABALIAAAEQAEAAAEgCQAEgCABgEIABgNIABgNIARAAIAAASIgCALQgBADgDAEQgDADgFADQgGADgJABQABAFAGAEQAFAEAHAAQALAAAGgHQAGgHACgTIABgaIATAAIgCAbQgCARgEAJQgEAIgJAGQgKAGgOAAQgTAAgLgMg");
	this.shape_27.setTransform(238.5,58.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgJAkIAAhHIATAAIAABHg");
	this.shape_28.setTransform(231.6,58.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgSAlIAAgRIATAAIAAgaQAAgIgDgDQgDgDgHAAIgGAAIgBgOQAFgCAIAAQANAAAHAHQAGAHAAAOIAAAtg");
	this.shape_29.setTransform(226.8,58.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgJAUIAAgnIATAAIAAAng");
	this.shape_30.setTransform(222.4,56.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AghAlIAAhGQAOgDANAAQAQAAAJAFQAIAEADAHQAEAHAAAMIAAAmgAgOgTIAAAnIAdAAIAAgUQAAgKgFgFQgDgFgLAAIgKABg");
	this.shape_31.setTransform(216.3,58.4);

	this.button3 = new lib.button3();
	this.button3.parent = this;
	this.button3.setTransform(275.5,283,1,1,0,0,0,65.5,21);
	new cjs.ButtonHelper(this.button3, 0, 1, 1);

	this.button2 = new lib.button2();
	this.button2.parent = this;
	this.button2.setTransform(275.5,206.5,1,1,0,0,0,65.5,21);
	new cjs.ButtonHelper(this.button2, 0, 1, 1);

	this.button1 = new lib.button1();
	this.button1.parent = this;
	this.button1.setTransform(277.5,130.1,1,1,0,0,0,65.5,21);
	new cjs.ButtonHelper(this.button1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button1},{t:this.button2},{t:this.button3},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.text},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(302,247.4,528,308.6);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;