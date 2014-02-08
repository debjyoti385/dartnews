		
		var cloudmadeUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
			cloudmadeAttribution = 'Map data &copy; 2014 OpenStreetMap contributors, Imagery &copy; 2014 debjyotipaul.in',
			cloudmade = L.tileLayer(cloudmadeUrl, {maxZoom: 19, attribution: cloudmadeAttribution});

		var Esri_WorldTopoMap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
				attribution: ''
			});
		var Esri_WorldStreetMap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
				attribution: ''
			});
		var Esri_WorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
				attribution: ''
			});

		var OpenStreetMap_BlackAndWhite = L.tileLayer('http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png', {
				attribution: ''
			});


		var map = new L.Map('map', {
			layers: [cloudmade, Esri_WorldTopoMap,Esri_WorldStreetMap,Esri_WorldImagery],
			center: new L.LatLng(28.64, 77.23),
			zoom: 10,
			fullscreenControl: true,
			fullscreenControlOptions: { // optional
				title:"Show me the fullscreen !"
			}
		});

		var sidebar = L.control.sidebar('sidebar', {
            closeButton: true,
            position: 'left'
        });
        map.addControl(sidebar);

		var MyIcon = L.Icon.extend({
			options: {
				// shadowUrl: 'images/leaf-shadow.png',
				iconSize:     [38, 38],
				// shadowSize:   [50, 64],
				iconAnchor:   [19, 19],
				// shadowAnchor: [4, 62],
				popupAnchor:  [-10, -50]
			}
		});

		var greenIcon = new MyIcon({iconUrl: 'images/leaf-green.png'}),
			blueIcon = new MyIcon({iconUrl: 'images/pin_blue.png'}),
			blackInside = new MyIcon({iconUrl: 'images/marker_icon/blackInside.png'}),
			blackInsideGreen = new MyIcon({iconUrl: 'images/marker_icon/blackInsideGreen.png'}),
			blueBall = new MyIcon({iconUrl: 'images/marker_icon/blueBall.png'}),
			blueBallPin = new MyIcon({iconUrl: 'images/marker_icon/blueBallPin.png'}),
			blueBubble = new MyIcon({iconUrl: 'images/marker_icon/blueBubble.png'}),
			blueDrawPin = new MyIcon({iconUrl: 'images/marker_icon/blueDrawPin.png'}),
			blueFlagCurl = new MyIcon({iconUrl: 'images/marker_icon/blueFlagCurl.png'}),
			blueInside = new MyIcon({iconUrl: 'images/marker_icon/blueInside.png'}),
			bluePin = new MyIcon({iconUrl: 'images/marker_icon/bluePin.png'}),
			bluePushPin = new MyIcon({iconUrl: 'images/marker_icon/bluePushPin.png'}),
			boardGreenPin = new MyIcon({iconUrl: 'images/marker_icon/boardGreenPin.png'}),
			boardPin = new MyIcon({iconUrl: 'images/marker_icon/boardPin.png'}),
			boardPinPink = new MyIcon({iconUrl: 'images/marker_icon/boardPinPink.png'}),
			greeFlagCurl = new MyIcon({iconUrl: 'images/marker_icon/greeFlagCurl.png'}),
			greenBall = new MyIcon({iconUrl: 'images/marker_icon/greenBall.png'}),
			greenBallPin = new MyIcon({iconUrl: 'images/marker_icon/greenBallPin.png'}),
			greenBubble = new MyIcon({iconUrl: 'images/marker_icon/greenBubble.png'}),
			greenDrawing = new MyIcon({iconUrl: 'images/marker_icon/greenDrawing.png'}),
			greenFlag = new MyIcon({iconUrl: 'images/marker_icon/greenFlag.png'}),
			greenFlagCheq = new MyIcon({iconUrl: 'images/marker_icon/greenFlagCheq.png'}),
			greenInside = new MyIcon({iconUrl: 'images/marker_icon/greenInside.png'}),
			greenPin = new MyIcon({iconUrl: 'images/marker_icon/greenPin.png'}),
			pinkBallPin = new MyIcon({iconUrl: 'images/marker_icon/pinkBallPin.png'}),
			pinkFlag = new MyIcon({iconUrl: 'images/marker_icon/pinkFlag.png'}),
			pinkFlagCurl = new MyIcon({iconUrl: 'images/marker_icon/pinkFlagCurl.png'}),
			pinkFlagRight = new MyIcon({iconUrl: 'images/marker_icon/pinkFlagRight.png'}),
			pinkInside = new MyIcon({iconUrl: 'images/marker_icon/pinkInside.png'}),
			pinkPin = new MyIcon({iconUrl: 'images/marker_icon/pinkPin.png'}),
			pinkPushPin = new MyIcon({iconUrl: 'images/marker_icon/pinkPushPin.png'}),
			smallPinkFlag = new MyIcon({iconUrl: 'images/marker_icon/smallPinkFlag.png'}),
			pinkIcon = new MyIcon({iconUrl: 'images/pink.png'});
		var newsLayer = L.markerClusterGroup();
		var markers = [];		
		for (var i = 0; i < addressPoints.length - 100; i++) {
			var a = addressPoints[i];
			var title = a[2];
			var marker = new MyCustomMarker(new L.LatLng(a[0], a[1]), { icon: pinkFlagCurl, title: title });
			marker.bindPopup( title +" " + a[0]+ " "+ a[1] + "<div id='cssmenu'> <ul>  <li class='has-sub'><a href='#'><span>Blogs</span></a> <ul  > <li><a href='http://www.labnol.org' target='_blank'><span>Digital Inspiration</span></a></li> <li><a href='http://www.extremetech.com' target='_blank'><span>Extreme Tech</span></a></li> <li><a href='http://www.lifehacker.com' target='_blank'><span>Lifehacker</span></a></li> <li><a href='http://blogs.ittoolbox.com' target='_blank'><span>IT Tool box</span></a></li> <li><a href='http://valleywag.com' target='_blank'><span>Valleywag</span></a></li> </ul> </li> <li class='has-sub'><a href='#'><span>Sports</span></a> <ul> <li><a href='http://espnstar.com' target='_blank'><span>ESPN Star</span></a></li> </ul> </li> </ul> </div>", {
            	showOnMouseOver: true
       	 	});
       	 	markers.push(marker);
			newsLayer.addLayer(marker);
		}
		map.addLayer(newsLayer);

		var newsLayer2 = L.markerClusterGroup();
		for (var i = addressPoints.length - 100; i < addressPoints.length; i++) {
			var a = addressPoints[i];
			var title = a[2];
			var marker = new MyCustomMarker(new L.LatLng(a[0], a[1]), { icon: greenFlagCheq, title: title });
			marker.bindPopup( title +" " + a[0]+ " "+ a[1] + "<img src='http://api.webthumbnail.org?width=300&height=300&screen=1024&url=http://timesofindia.indiatimes.com/india/Cabinet-clears-Telangana-bill-Andhra-Pradesh-CM-ready-to-be-sacked/articleshow/30005769.cms' alt='Generated by WebThumbnail.org' />", {
            	showOnMouseOver: true
       	 	});
       	 	markers.push(marker);
			newsLayer2.addLayer(marker);
		}
		map.addLayer(newsLayer2);



		var baseMaps = {
			"Imagery" : Esri_WorldImagery,
		    "WorldStreet": Esri_WorldStreetMap,
		    "TopoMap": Esri_WorldTopoMap,
		    "BlackWhite" : OpenStreetMap_BlackAndWhite		    
		};

		var overlayMaps = {
		    "News": newsLayer,
		    "News2": newsLayer2
		};

		L.control.layers(baseMaps, overlayMaps).addTo(map);

		map.on('popupopen', function(e) {
  			var marker = e.popup._source;
  			// window.console.log(marker._popup.getContent());  			
  			

  			// sidebar.hide();
  			setTimeout(function () {
  				sidebar.setContent(marker._popup.getContent());
    	        sidebar.show();
    	        // prepareMenu();
	        }, 1000);
  			
  			setTimeout(function(){
  				prepareMenu();
  			},1500);
		});

        map.on('click', function () {
        	rightSidebar.toggle();
            sidebar.hide();
        })

        sidebar.on('show', function () {
            console.log('Sidebar visible.');
        });

        sidebar.on('hide', function () {
            console.log('Sidebar hidden.');
        });

        L.DomEvent.on(sidebar.getCloseButton(), 'click', function () {
            console.log('Close button clicked.');
        });

		// detect fullscreen toggling
		map.on('enterFullscreen', function(){
			if(window.console) window.console.log('enterFullscreen');
		});
		map.on('exitFullscreen', function(){
			if(window.console) window.console.log('exitFullscreen');
		});

		map.on('move', function() {
	            // construct an empty list to fill with onscreen markers
	            var inBounds = [],
	            // get the map bounds - the top-left and bottom-right locations
	                bounds = map.getBounds();

	            // for each marker, consider whether it is currently visible by comparing
	            // with the current map bounds

	            for (var i = 0, len = markers.length; i < len; i++) {
	                var marker = markers[i];
	                if (bounds.contains(marker.getLatLng())) {
	                    inBounds.push(marker._popup.getContent());
	                    console.log(marker.options.title);
	                }
	            }

	            if(inBounds.length < 30){
	            // display a list of markers.
	            sidebar.setContent(inBounds.join('<br>\n'));
	            prepareMenu();
	        }
	    });


