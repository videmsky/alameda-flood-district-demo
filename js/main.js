(function() {

	var map = L.map('map', {
		center: [37.728699, -122.159205],
		zoom: 10
	});

	var tileURL1 = 'http://tile.stamen.com/terrain/{z}/{x}/{y}.png';
	var tileURL2 = 'http://a.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png'

	L.tileLayer(tileURL2, {

	}).addTo(map);

	var url = "http://waterservices.usgs.gov/nwis/iv/?format=json&stateCd=la&parameterCd=00060,99133"

	var watershedTiles = L.mapbox.tileLayer('chachasikes.i0ah14cg')
		.addTo(map);
	var watershedGridLayer = L.mapbox.gridLayer('chachasikes.i0ah14cg')
		.addTo(map);

	var flowlineTiles = L.mapbox.tileLayer('chachasikes.i0aoj0cm')
		.addTo(map);
	var flowlineGridLayer = L.mapbox.gridLayer('chachasikes.i0aoj0cm')
		.addTo(map);

	var acpwagridTiles = L.mapbox.tileLayer('chachasikes.i07ip513')
		.addTo(map);
	var acpwagridGridLayer = L.mapbox.gridLayer('chachasikes.i07ip513')
		.addTo(map);	
	var pdsiGridControl = L.mapbox.gridControl(pdsiGridLayer).addTo(map);


	// pdsiGridLayer.on('mouseover', function(e){
	// 	// console.log(e.data);
	// 	if (e.data == null) {
	// 		return;
	// 	} else {
	// 		document.getElementById('preg').innerHTML = e.data.NAME.toLowerCase();
	// 		document.getElementById('pval').innerHTML = e.data.PDSI;
	// 	}

	// });

	// $.getJSON( url, function( data ) {
		
	// 	// console.log(data.value.timeSeries[0].sourceInfo.geoLocation.geogLocation.latitude);
	// 	// console.log(data.value.timeSeries[0].sourceInfo.geoLocation.geogLocation.longitude);

	// 	var d = data.value.timeSeries;

	// 	$.each(d, function( i, item ) {	
			
	// 		var lat = d[i].sourceInfo.geoLocation.geogLocation.latitude;
	// 		var lng = d[i].sourceInfo.geoLocation.geogLocation.longitude;
	// 		var unit = d[i].variable.unit.unitAbbreviation;		
	// 		var latlng = [lat,lng];

	// 		// console.log(d[i].values);	
	// 		var val = d[i].values;
			
	// 		$.each(val, function( k, item ) {
	// 			// console.log(val[i].value);	
				
	// 			v = val[k].value

	// 			$.each(v, function( n, item ) {
					
	// 				var discharge =  v[n].value;

	// 				console.log(discharge);	
	// 				var cmarker = L.circleMarker(latlng, {
	// 	 				radius: 10

	// 				}).addTo(map);

	// 				cmarker.on('mouseover', function(e) {
	// 				  var popup = L.popup()
	// 						.setLatLng(e.latlng) 
	// 						.setContent("Discharge: " + discharge + "  " + unit);	
	// 					map.openPopup(popup);
	// 				})
	// 				.on('mouseout', function(e){
	// 					map.closePopup();
	// 				});
				
	// 			});
			

	// 		});

	// 	});

	// });



})();	



