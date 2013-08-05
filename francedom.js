function franceDom() {
	var ε = 1e-6;

	function france(coordinates) {
		var x = coordinates[0], y = coordinates[1];

		point = null;

		france.areasValues.some(function(d) {
			if (x > d.clip[0][0] && x < d.clip[1][0]
			 && y < d.clip[0][1] && y > d.clip[1][1]) {
				point = d.projection(coordinates);
				return point;
			}
		});

		if (point === null) {
			return france.areas.metropole.projection(coordinates);
		}

		return point;
	}

	france.areas = {};
	france.areasMap = d3.map();
	france.areasValues = [];
	
	france.defineAreas = function(showPolynesie) {
		france.areas = {
			metropole: {
				clip: [
					[- 6.50, 51.50],
					[+11.00, 40.70]
				],

				scale: 1.0,
				projection: d3.geo.conicConformal()
					.center([0, 46.5])
					.rotate([-3, 0])
					.parallels([44, 49])
			},
			guadeloupe: {
				center: [-5.55, 46.45],
				clip: [
					[-61.95,  16.60],
					[-60.86,  15.77]
				],

				scale: 1.5,
				projection: d3.geo.conicEqualArea()
					.rotate([61.5, 0])
					.center([0, 16.25])
					.parallels([8, 18])
			},
			martinique: {
				center: [-5.10, 44.80],
				clip: [
					[-61.40,  15.00],
					[-60.70,  14.30]
				],

				scale: 1.5,
				projection: d3.geo.conicEqualArea()
					.rotate([61, 0])
					.center([0, 14.45])
					.parallels([8, 18])
			},
			guyane: {
				center: [-4.65, 43.38],
				clip: [
					[-55.20,   6.10],
					[-51.00,   1.90]
				],

				scale: 0.5,
				projection: d3.geo.conicEqualArea()
					.rotate([53, 0])
					.center([0, 4])
					.parallels([0, 8])
			},
			reunion: {
				center: [-2.40, 41.50],
				clip: [
					[55.00, -20.60],
					[56.20, -21.60]
				],

				scale: 1.0,
				projection: d3.geo.conicEqualArea()
					.rotate([-55.5, 0])
					.center([0, -21])
					.parallels([-25, -35])
			},
			mayotte: {
				center: [-4.60, 41.50],
				clip: [
					[44.90, -12.50],
					[45.40, -13.10]
				],

				scale: 1.5,
				projection: d3.geo.conicEqualArea()
					.rotate([-45, 0])
					.center([0, -12.7])
					.parallels([-8, -18])
			},
			nouvelleCaledonie: {
				center: [2.30, 41.50],
				clip: [
					[162.60, -19.00],
					[168.80, -23.00]
				],

				scale: 0.5,
				projection: d3.geo.conicEqualArea()
					.rotate([-166.45, 0])
					.center([0, -21.25])
					.parallels([-20, -30])
			},
			wallis: {
				center: [5.05, 41.60],
				clip: [
					[-176.40, -13.10],
					[-176.00, -13.50]
				],

				scale: 2.0,
				projection: d3.geo.conicEqualArea()
					.rotate([+176.15, 0])
					.center([0, -13.27])
					.parallels([-10, -20])
			},
			futuna: {
				center: [4.43, 41.33],
				clip: [
					[-178.30, -14.20],
					[-177.80, -14.40]
				],

				scale: 2.0,
				projection: d3.geo.conicEqualArea()
					.rotate([+178.10, 0])
					.center([0, -14.27])
					.parallels([-10, -20])
			},
			saintPierreEtMiquelon: {
				center: [-6.00, 47.90],
				clip: [
					[-56.48, 47.15],
					[-56.00, 46.70]
				],

				scale: 1.5,
				projection: d3.geo.conicEqualArea()
					.rotate([+56.33, 0])
					.center([0, +46.9])
					.parallels([40, 50])
			},
			crozet: {
				center: [-6.77, 50.10],
				clip: [
					[51.60, -46.30],
					[52.00, -46.60]
				],

				scale: 1.5,
				projection: d3.geo.conicEqualArea()
					.rotate([-51.5, 0])
					.center([0, -46.4])
					.parallels([-40, -50])
			},
			kerguelen: {
				center: [-3.45, 50.00],
				clip: [
					[68.40, -48.50],
					[70.80, -49.80]
				],

				scale: 1.0,
				projection: d3.geo.conicEqualArea()
					.rotate([-69.3, 0])
					.center([0, -49.3])
					.parallels([-40, -50])
			},
			amsterdam: {
				center: [-0.35, 50.80],
				clip: [
					[77.45, -37.70],
					[77.67, -37.91]
				],

				scale: 1.5,
				projection: d3.geo.conicEqualArea()
					.rotate([-77.55, 0])
					.center([0, -37.8])
					.parallels([-30, -40])
			},
			saintPaul: {
				center: [-0.44, 50.35],
				clip: [
					[77.47, -38.68],
					[77.57, -38.75]
				],

				scale: 1.5,
				projection: d3.geo.conicEqualArea()
					.rotate([-77.5, 0])
					.center([0, -38.7])
					.parallels([-30, -40])
			},
			clipperton: {
				center: [6.40, 50.40],
				clip: [
					[-109.28, 10.33],
					[-109.18, 10.27]
				],

				scale: 2.0,
				projection: d3.geo.conicEqualArea()
					.rotate([+109.25, 0])
					.center([0, +10.3])
					.parallels([8, 18])
			}
		};

		if (showPolynesie) {
			france.areas.societe = {
				center: [ 9.70, 46.00],
				clip: [
					[-154.89, -15.88],
					[-147.96, -17.99]
				],

				scale: 0.5,
				projection: d3.geo.conicEqualArea()
					.rotate([+151.45, 0])
					.center([0, -16.733])
					.parallels([-10, -20])
					.clipAngle(1)
			};
			france.areas.tuamotu = {
				center: [ 8.00, 46.50],
				clip: [
					[-148.98, -13.62],
					[-134.73, -23.32]
				],

				scale: 0.4,
				projection: d3.geo.conicEqualArea()
					.rotate([+151.45, 0])
					.center([0, -16.733])
					.parallels([-10, -20])
					.clipAngle(1)
			};
			france.areas.marquises = {
				center: [ 8.00, 46.00],
				clip: [
					[-141.13, - 7.50],
					[-137.95, -10.98]
				],

				scale: 0.4,
				projection: d3.geo.conicEqualArea()
					.rotate([+151.45, 0])
					.center([0, -16.733])
					.parallels([-10, -20])
					.clipAngle(1)
			};
			france.areas.australes = {
				center: [10.00, 47.00],
				clip: [
					[-154.88, -21.69],
					[-143.19, -28.06]
				],

				scale: 0.4,
				projection: d3.geo.conicEqualArea()
					.rotate([+151.45, 0])
					.center([0, -16.733])
					.parallels([-10, -20])
					.clipAngle(1)
			};
		} else {
			france.areas.tahitiMoorea = {
				center: [6.60, 41.60],
				clip: [
					[-150.00, -17.40],
					[-149.10, -17.99]
				],

				scale: 1.0,
				projection: d3.geo.conicEqualArea()
					.rotate([+149.50, 0])
					.center([0, -17.5])
					.parallels([-10, -20])
					.clipAngle(1)
			};
		}

		france.areasMap = d3.map(france.areas);
		france.areasValues = france.areasMap.values();
	};

	france.defineAreas(false);


	france.showPolynesie = function(showPolynesie) {
		var scale = france.scale();
		france.defineAreas(showPolynesie);
		france.scale(scale);

		return france;
	};

	france.invert = function(coordinates) {
		return france.areas.metropole.projection.invert(coordinates);
	};

	france.precision = function(_) {
		if (!arguments.length) return france.areas.metropole.projection.precision();

		france.areasMap.forEach(function(i, d) {
			d.projection.precision(_);
		});

		return france;
	};

	france.scale = function(_) {
		if (!arguments.length) return france.areas.metropole.projection.scale();

		france.areasMap.forEach(function(i, d) {
			d.projection.scale(_ * d.scale);
		});

		return france.translate(france.areas.metropole.projection.translate());
	};

	france.translate = function(_) {
		if (!arguments.length) return france.areas.metropole.projection.translate();

		france.areasMap.forEach(function(i, d) {
			if (d.center) {
				d.projection.translate(france.areas.metropole.projection(d.center));
			}
		});

		return france;
	};

	return france.scale(3000);
};

d3.geo.franceDom = franceDom;


