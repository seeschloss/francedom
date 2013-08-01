function franceDom() {
	var ε = 1e-6;

	var metropole = d3.geo.conicConformal()
		.center([0, 46.5])
		.rotate([-3, 0])
		.parallels([44, 49]);


	// Départements d'outre-mer
	var guadeloupe = d3.geo.conicEqualArea()
		.rotate([61.5, 0])
		.center([0, 16.25])
		.parallels([8, 18]);

	var martinique = d3.geo.conicEqualArea()
		.rotate([61, 0])
		.center([0, 14.45])
		.parallels([8, 18]);

	var guyane = d3.geo.conicEqualArea()
		.rotate([53, 0])
		.center([0, 4])
		.parallels([0, 8]);

	var reunion = d3.geo.conicEqualArea()
		.rotate([-55.5, 0])
		.center([0, -21])
		.parallels([-25, -35]);

	var mayotte = d3.geo.conicEqualArea()
		.rotate([-45, 0])
		.center([0, -12.7])
		.parallels([-8, -18]);


	// Territoires habités
	var nouvelleCaledonie = d3.geo.conicEqualArea()
		.rotate([-166.45, 0])
		.center([0, -21.25])
		.parallels([-20, -30]);

	var wallis = d3.geo.conicEqualArea()
		.rotate([+176.15, 0])
		.center([0, -13.27])
		.parallels([-10, -20]);

	var futuna = d3.geo.conicEqualArea()
		.rotate([+178.10, 0])
		.center([0, -14.27])
		.parallels([-10, -20]);

	var polynesie = d3.geo.conicEqualArea()
		.rotate([+149.50, 0])
		.center([0, -17.5])
		.parallels([-10, -20]);

	var saintPierreEtMiquelon = d3.geo.conicEqualArea()
		.rotate([+56.33, 0])
		.center([0, +46.9])
		.parallels([40, 50]);


	// Territoires inhabités
	var crozet = d3.geo.conicEqualArea()
		.rotate([-51.5, 0])
		.center([0, -46.4])
		.parallels([-40, -50]);

	var kerguelen = d3.geo.conicEqualArea()
		.rotate([-69.3, 0])
		.center([0, -49.3])
		.parallels([-40, -50]);

	var amsterdam = d3.geo.conicEqualArea()
		.rotate([-77.55, 0])
		.center([0, -37.8])
		.parallels([-30, -40]);

	var saintPaul = d3.geo.conicEqualArea()
		.rotate([-77.5, 0])
		.center([0, -38.7])
		.parallels([-30, -40]);

	var clipperton = d3.geo.conicEqualArea()
		.rotate([+109.25, 0])
		.center([0, +10.3])
		.parallels([8, 18]);



	var point,
		pointStream = {point: function(x, y) { point = [x, y]; }},
		metropolePoint,
		guadeloupePoint,
		martiniquePoint,
		guyanePoint,
		reunionPoint,
		mayottePoint,
		nouvelleCaledoniePoint,
		wallisPoint,
		futunaPoint,
		polynesiePoint,
		saintPierreEtMiquelonPoint,
		crozetPoint,
		kerguelenPoint,
		amsterdamPoint,
		saintPaulPoint,
		clippertonPoint;

	function france(coordinates) {
		var x = coordinates[0], y = coordinates[1];
		point = null;
		(metropolePoint(x, y), point)
			|| (guadeloupePoint(x, y), point)
			|| (martiniquePoint(x, y), point)
			|| (guyanePoint(x, y), point)
			|| (reunionPoint(x, y), point)
			|| (mayottePoint(x, y), point)
			|| (nouvelleCaledoniePoint(x, y), point)
			|| (wallisPoint(x, y), point)
			|| (futunaPoint(x, y), point)
			|| (polynesiePoint(x, y), point)
			|| (saintPierreEtMiquelonPoint(x, y), point)
			|| (crozetPoint(x, y), point)
			|| (kerguelenPoint(x, y), point)
			|| (amsterdamPoint(x, y), point)
			|| (saintPaulPoint(x, y), point)
			|| (clippertonPoint(x, y), point);
		return point;
	}

	france.invert = function(coordinates) {
		var k = metropole.scale(),
			t = metropole.translate(),
			x = (coordinates[0] - t[0]) / k,
			y = (coordinates[1] - t[1]) / k;

		return metropole.invert(coordinates);

		return (
			  y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? guadeloupe
			: y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? martinique
			: y >= 0.204 && y < 0.234 && x >=  0.320 && x <  0.380 ? reunion
			: metropole).invert(coordinates);
	};


	// A naïve multi-projection stream.
	// The projections must have mutually exclusive clip regions on the sphere,
	// as this will avoid emitting interleaving lines and polygons.
	france.stream = function(stream) {
		var metropoleStream  = metropole.stream(stream),
			guadeloupeStream = guadeloupe.stream(stream),
			martiniqueStream = martinique.stream(stream),
			guyaneStream     = guyane.stream(stream),
			reunionStream    = reunion.stream(stream),
			mayotteStream    = mayotte.stream(stream),
			nouvelleCaledonieStream    = nouvelleCaledonie.stream(stream),
			wallisStream    = wallis.stream(stream),
			futunaStream    = futuna.stream(stream),
			polynesieStream    = polynesie.stream(stream),
			saintPierreEtMiquelonStream    = saintPierreEtMiquelon.stream(stream),
			crozetStream    = crozet.stream(stream),
			kerguelenStream    = kerguelen.stream(stream),
			amsterdamStream    = amsterdam.stream(stream),
			saintPaulStream    = saintPaul.stream(stream),
			clippertonStream    = clipperton.stream(stream);
		return {
			point: function(x, y) {
				metropoleStream .point(x, y);
				guadeloupeStream.point(x, y);
				martiniqueStream.point(x, y);
				guyaneStream    .point(x, y);
				reunionStream   .point(x, y);
				mayotteStream   .point(x, y);
				nouvelleCaledonieStream   .point(x, y);
				wallisStream   .point(x, y);
				futunaStream   .point(x, y);
				polynesieStream   .point(x, y);
				saintPierreEtMiquelonStream   .point(x, y);
				crozetStream   .point(x, y);
				kerguelenStream   .point(x, y);
				amsterdamStream   .point(x, y);
				saintPaulStream   .point(x, y);
				clippertonStream   .point(x, y);
			},
			sphere: function() {
				metropoleStream .sphere();
				guadeloupeStream.sphere();
				martiniqueStream.sphere();
				guyaneStream    .sphere();
				reunionStream   .sphere();
				mayotteStream   .sphere();
				nouvelleCaledonieStream   .sphere();
				wallisStream   .sphere();
				futunaStream   .sphere();
				polynesieStream   .sphere();
				saintPierreEtMiquelonStream   .sphere();
				crozetStream   .sphere();
				kerguelenStream   .sphere();
				amsterdamStream   .sphere();
				saintPaulStream   .sphere();
				clippertonStream   .sphere();
			},
			lineStart: function() {
				metropoleStream .lineStart();
				guadeloupeStream.lineStart();
				martiniqueStream.lineStart();
				guyaneStream    .lineStart();
				reunionStream   .lineStart();
				mayotteStream   .lineStart();
				nouvelleCaledonieStream   .lineStart();
				wallisStream   .lineStart();
				futunaStream   .lineStart();
				polynesieStream   .lineStart();
				saintPierreEtMiquelonStream   .lineStart();
				crozetStream   .lineStart();
				kerguelenStream   .lineStart();
				amsterdamStream   .lineStart();
				saintPaulStream   .lineStart();
				clippertonStream   .lineStart();
			 },
			lineEnd: function() {
				metropoleStream .lineEnd();
				guadeloupeStream.lineEnd();
				martiniqueStream.lineEnd();
				guyaneStream    .lineEnd();
				reunionStream   .lineEnd();
				mayotteStream   .lineEnd();
				nouvelleCaledonieStream   .lineEnd();
				wallisStream   .lineEnd();
				futunaStream   .lineEnd();
				polynesieStream   .lineEnd();
				saintPierreEtMiquelonStream   .lineEnd();
				crozetStream   .lineEnd();
				kerguelenStream   .lineEnd();
				amsterdamStream   .lineEnd();
				saintPaulStream   .lineEnd();
				clippertonStream   .lineEnd();
			},
			polygonStart: function() {
				metropoleStream .polygonStart();
				guadeloupeStream.polygonStart();
				martiniqueStream.polygonStart();
				guyaneStream    .polygonStart();
				reunionStream   .polygonStart();
				mayotteStream   .polygonStart();
				nouvelleCaledonieStream   .polygonStart();
				wallisStream   .polygonStart();
				futunaStream   .polygonStart();
				polynesieStream   .polygonStart();
				saintPierreEtMiquelonStream   .polygonStart();
				crozetStream   .polygonStart();
				kerguelenStream   .polygonStart();
				amsterdamStream   .polygonStart();
				saintPaulStream   .polygonStart();
				clippertonStream   .polygonStart();
			},
			polygonEnd: function() {
				metropoleStream .polygonEnd();
				guadeloupeStream.polygonEnd();
				martiniqueStream.polygonEnd();
				guyaneStream    .polygonEnd();
				reunionStream   .polygonEnd();
				mayotteStream   .polygonEnd();
				nouvelleCaledonieStream   .polygonEnd();
				wallisStream   .polygonEnd();
				futunaStream   .polygonEnd();
				polynesieStream   .polygonEnd();
				saintPierreEtMiquelonStream   .polygonEnd();
				crozetStream   .polygonEnd();
				kerguelenStream   .polygonEnd();
				amsterdamStream   .polygonEnd();
				saintPaulStream   .polygonEnd();
				clippertonStream   .polygonEnd();
			}
		};
	};

	france.precision = function(_) {
		if (!arguments.length) return metropole.precision();
		metropole.precision(_);
		guadeloupe.precision(_);
		martinique.precision(_);
		guyane.precision(_);
		reunion.precision(_);
		mayotte.precision(_);
		nouvelleCaledonie.precision(_);
		wallis.precision(_);
		futuna.precision(_);
		polynesie.precision(_);
		saintPierreEtMiquelon.precision(_);
		crozet.precision(_);
		kerguelen.precision(_);
		amsterdam.precision(_);
		saintPaul.precision(_);
		clipperton.precision(_);
		return france;
	};

	france.scale = function(_) {
		if (!arguments.length) return metropole.scale();
		metropole.scale(_);

		guyane.scale(_                * 0.5);
		nouvelleCaledonie.scale(_     * 0.5);

		reunion.scale(_               * 1.0);
		kerguelen.scale(_             * 1.0);
		
		guadeloupe.scale(_            * 1.5);
		martinique.scale(_            * 1.5);
		mayotte.scale(_               * 1.5);
		polynesie.scale(_             * 1.5);
		saintPierreEtMiquelon.scale(_ * 1.5);
		crozet.scale(_                * 1.5);
		amsterdam.scale(_             * 1.5);
		saintPaul.scale(_             * 1.5);

		wallis.scale(_                * 2.0);
		futuna.scale(_                * 2.0);
		clipperton.scale(_            * 2.0);

		return france.translate(metropole.translate());
	};

	var clipping = {
		metropole: {
			x1: -0.455,
			x2: +0.455,

			y1: -0.238,
			y2: +0.238
		},
		guadeloupe: {
			x:  -0.102,
			x1: -0.110,
			x2: -0.090,

			y:  -0.005,
			y1: -0.012,
			y2: +0.012
		},
		martinique: {
			x:  -0.100,
			x1: -0.110,
			x2: -0.095,

			y:  +0.025,
			y1: +0.012,
			y2: +0.072
		},
		guyane: {
			x:  -0.097,
			x1: -0.115,
			x2: -0.082,
			
			y:  +0.050,
			y1: +0.030,
			y2: +0.070
		},
		reunion: {
			x:  -0.070,
			x1: -0.075,
			x2: -0.064,
			
			y:  +0.085,
			y1: +0.080,
			y2: +0.095
		},
		mayotte: {
			x:  -0.100,
			x1: -0.105,
			x2: -0.090,

			y:  +0.082,
			y1: +0.077,
			y2: +0.092
		},
		nouvelleCaledonie: {
			x:  -0.010,
			x1: -0.030,
			x2: -0.000,

			y:  +0.087,
			y1: +0.075,
			y2: +0.103
		},
		wallis: {
			x:  +0.024,
			x1: +0.014,
			x2: +0.034,

			y:  +0.085,
			y1: +0.081,
			y2: +0.089
		},
		futuna: {
			x:  +0.016,
			x1: +0.006,
			x2: +0.026,

			y:  +0.090,
			y1: +0.087,
			y2: +0.094
		},
		polynesie: {
			x:  +0.045,
			x1: +0.034,
			x2: +0.058,

			y:  +0.085,
			y1: +0.080,
			y2: +0.098
		},
		saintPierreEtMiquelon: {
			x:  -0.105,
			x1: -0.108,
			x2: -0.100,

			y:  -0.030,
			y1: -0.042,
			y2: +0.020
		},
		crozet: {
			x:  -0.110,
			x1: -0.111,
			x2: -0.101,

			y:  -0.070,
			y1: -0.075,
			y2: -0.065
		},
		kerguelen: {
			x:  -0.080,
			x1: -0.090,
			x2: -0.064,

			y:  -0.062,
			y1: -0.077,
			y2: -0.052
		},
		amsterdam: {
			x:  -0.040,
			x1: -0.044,
			x2: -0.036,

			y:  -0.077,
			y1: -0.081,
			y2: -0.073
		},
		saintPaul: {
			x:  -0.042,
			x1: -0.045,
			x2: -0.040,

			y:  -0.070,
			y1: -0.072,
			y2: -0.068
		},
		clipperton: {
			x:  +0.042,
			x1: +0.040,
			x2: +0.044,

			y:  -0.070,
			y1: -0.072,
			y2: -0.068
		}
	};

	france.translate = function(_) {
		if (!arguments.length) return metropole.translate();
		var k = metropole.scale(), x = +_[0], y = +_[1];

		metropolePoint = metropole
			.translate(_)
			.clipExtent([
				[x + clipping.metropole.x1 * k, y + clipping.metropole.y1 * k],
				[x + clipping.metropole.x2 * k, y + clipping.metropole.y2 * k]
			])
			.stream(pointStream).point;

		guadeloupePoint = guadeloupe
			.translate([x + clipping.guadeloupe.x * k, y + clipping.guadeloupe.y * k])
			.clipExtent([
				[x + clipping.guadeloupe.x1 * k, y + clipping.guadeloupe.y1 * k],
				[x + clipping.guadeloupe.x2 * k, y + clipping.guadeloupe.y2 * k]
			])
			.stream(pointStream).point;

		martiniquePoint = martinique
			.translate([x + clipping.martinique.x * k, y + clipping.martinique.y * k])
			.clipExtent([
				[x + clipping.martinique.x1 * k, y + clipping.martinique.y1 * k],
				[x + clipping.martinique.x2 * k, y + clipping.martinique.y2 * k]
			])
			.stream(pointStream).point;

		guyanePoint = guyane
			.translate([x + clipping.guyane.x * k, y + clipping.guyane.y * k])
			.clipExtent([
				[x + clipping.guyane.x1 * k, y + clipping.guyane.y1 * k],
				[x + clipping.guyane.x2 * k, y + clipping.guyane.y2 * k]
			])
			.stream(pointStream).point;

		reunionPoint = reunion
			.translate([x + clipping.reunion.x * k, y + clipping.reunion.y * k])
			.clipExtent([
				[x + clipping.reunion.x1 * k, y + clipping.reunion.y1 * k],
				[x + clipping.reunion.x2 * k, y + clipping.reunion.y2 * k]
			])
			.stream(pointStream).point;

		mayottePoint = mayotte
			.translate([x + clipping.mayotte.x * k, y + clipping.mayotte.y * k])
			.clipExtent([
				[x + clipping.mayotte.x1 * k, y + clipping.mayotte.y1 * k],
				[x + clipping.mayotte.x2 * k, y + clipping.mayotte.y2 * k]
			])
			.stream(pointStream).point;

		nouvelleCaledoniePoint = nouvelleCaledonie
			.translate([x + clipping.nouvelleCaledonie.x * k, y + clipping.nouvelleCaledonie.y * k])
			.clipExtent([
				[x + clipping.nouvelleCaledonie.x1 * k, y + clipping.nouvelleCaledonie.y1 * k],
				[x + clipping.nouvelleCaledonie.x2 * k, y + clipping.nouvelleCaledonie.y2 * k]
			])
			.stream(pointStream).point;

		wallisPoint = wallis
			.translate([x + clipping.wallis.x * k, y + clipping.wallis.y * k])
			.clipExtent([
				[x + clipping.wallis.x1 * k, y + clipping.wallis.y1 * k],
				[x + clipping.wallis.x2 * k, y + clipping.wallis.y2 * k]
			])
			.stream(pointStream).point;

		futunaPoint = futuna
			.translate([x + clipping.futuna.x * k, y + clipping.futuna.y * k])
			.clipExtent([
				[x + clipping.futuna.x1 * k, y + clipping.futuna.y1 * k],
				[x + clipping.futuna.x2 * k, y + clipping.futuna.y2 * k]
			])
			.stream(pointStream).point;

		polynesiePoint = polynesie
			.translate([x + clipping.polynesie.x * k, y + clipping.polynesie.y * k])
			.clipExtent([
				[x + clipping.polynesie.x1 * k, y + clipping.polynesie.y1 * k],
				[x + clipping.polynesie.x2 * k, y + clipping.polynesie.y2 * k]
			])
			.stream(pointStream).point;

		saintPierreEtMiquelonPoint = saintPierreEtMiquelon
			.translate([x + clipping.saintPierreEtMiquelon.x * k, y + clipping.saintPierreEtMiquelon.y * k])
			.clipExtent([
				[x + clipping.saintPierreEtMiquelon.x1 * k, y + clipping.saintPierreEtMiquelon.y1 * k],
				[x + clipping.saintPierreEtMiquelon.x2 * k, y + clipping.saintPierreEtMiquelon.y2 * k]
			])
			.stream(pointStream).point;

		crozetPoint = crozet
			.translate([x + clipping.crozet.x * k, y + clipping.crozet.y * k])
			.clipExtent([
				[x + clipping.crozet.x1 * k, y + clipping.crozet.y1 * k],
				[x + clipping.crozet.x2 * k, y + clipping.crozet.y2 * k]
			])
			.stream(pointStream).point;

		kerguelenPoint = kerguelen
			.translate([x + clipping.kerguelen.x * k, y + clipping.kerguelen.y * k])
			.clipExtent([
				[x + clipping.kerguelen.x1 * k, y + clipping.kerguelen.y1 * k],
				[x + clipping.kerguelen.x2 * k, y + clipping.kerguelen.y2 * k]
			])
			.stream(pointStream).point;

		amsterdamPoint = amsterdam
			.translate([x + clipping.amsterdam.x * k, y + clipping.amsterdam.y * k])
			.clipExtent([
				[x + clipping.amsterdam.x1 * k, y + clipping.amsterdam.y1 * k],
				[x + clipping.amsterdam.x2 * k, y + clipping.amsterdam.y2 * k]
			])
			.stream(pointStream).point;

		saintPaulPoint = saintPaul
			.translate([x + clipping.saintPaul.x * k, y + clipping.saintPaul.y * k])
			.clipExtent([
				[x + clipping.saintPaul.x1 * k, y + clipping.saintPaul.y1 * k],
				[x + clipping.saintPaul.x2 * k, y + clipping.saintPaul.y2 * k]
			])
			.stream(pointStream).point;

		clippertonPoint = clipperton
			.translate([x + clipping.clipperton.x * k, y + clipping.clipperton.y * k])
			.clipExtent([
				[x + clipping.clipperton.x1 * k, y + clipping.clipperton.y1 * k],
				[x + clipping.clipperton.x2 * k, y + clipping.clipperton.y2 * k]
			])
			.stream(pointStream).point;

		return france;
	};

	return france.scale(3000);
};

d3.geo.franceDom = franceDom;


