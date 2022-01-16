var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_BS_1 = new ol.format.GeoJSON();
var features_BS_1 = format_BS_1.readFeatures(json_BS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BS_1.addFeatures(features_BS_1);
var lyr_BS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BS_1, 
                style: style_BS_1,
                interactive: true,
                title: '<img src="styles/legend/BS_1.png" /> BS'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_BS_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_BS_1];
lyr_BS_1.set('fieldAliases', {'NAME': 'NAME', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'BUILDING T': 'BUILDING T', 'ADDRESS': 'ADDRESS', 'DEVELOPER': 'DEVELOPER', 'AMENITIES': 'AMENITIES', 'CONNECTIVI': 'CONNECTIVI', 'CONFIGURAT': 'CONFIGURAT', 'RERA REGIS': 'RERA REGIS', 'PHOTOS': 'PHOTOS', });
lyr_BS_1.set('fieldImages', {'NAME': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'BUILDING T': 'TextEdit', 'ADDRESS': 'TextEdit', 'DEVELOPER': 'TextEdit', 'AMENITIES': 'TextEdit', 'CONNECTIVI': 'TextEdit', 'CONFIGURAT': 'TextEdit', 'RERA REGIS': 'TextEdit', 'PHOTOS': 'ExternalResource', });
lyr_BS_1.set('fieldLabels', {'NAME': 'header label', 'LATITUDE': 'header label', 'LONGITUDE': 'header label', 'BUILDING T': 'header label', 'ADDRESS': 'header label', 'DEVELOPER': 'header label', 'AMENITIES': 'header label', 'CONNECTIVI': 'header label', 'CONFIGURAT': 'header label', 'RERA REGIS': 'header label', 'PHOTOS': 'header label', });
lyr_BS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});