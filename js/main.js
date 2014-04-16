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
		// .addTo(map);
	var watershedGridLayer = L.mapbox.gridLayer('chachasikes.i0ah14cg')
		// .addTo(map);

	var flowlineTiles = L.mapbox.tileLayer('chachasikes.i0aoj0cm')
		// .addTo(map);
	var flowlineGridLayer = L.mapbox.gridLayer('chachasikes.i0aoj0cm')
		// .addTo(map);

	var acpwagridTiles = L.mapbox.tileLayer('chachasikes.i07ip513')
		// .addTo(map);
	var acpwagridGridLayer = L.mapbox.gridLayer('chachasikes.i07ip513')
		// .addTo(map);	


	var ui = document.getElementById('map-ui');

	addLayer( watershedTiles, 'Watersheds', 1);
	addLayer( flowlineTiles, 'Flow Lines', 2);
	addLayer( acpwagridTiles, 'Service Area', 3);

	// addLayer(L.mapbox.tileLayer('examples.map-zgrqqx0w'), 'Base Map', 1);
	// addLayer(L.mapbox.tileLayer('examples.bike-lanes'), 'Bike Lanes', 2);
	// addLayer(L.mapbox.tileLayer('examples.bike-locations'), 'Bike Stations', 3);

	function addLayer(layer, name, zIndex) {
	  layer
	    .setZIndex(zIndex)
	    .addTo(map);

	  // Create a simple layer switcher that toggles layers on
	  // and off.
	  var item = document.createElement('li');
	  var link = document.createElement('a');

	  link.href = '#';
	  link.className = 'active';
	  link.innerHTML = name;

	  link.onclick = function(e) {
	    e.preventDefault();
	    e.stopPropagation();

	    if (map.hasLayer(layer)) {
	      map.removeLayer(layer);
	      this.className = '';
	    } else {
	      map.addLayer(layer);
	      this.className = 'active';
	    }
	  };

	  item.appendChild(link);
	  ui.appendChild(item);
	}



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



