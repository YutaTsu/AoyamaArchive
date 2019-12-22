var viewer = new Cesium.Viewer('cesiumContainer');
viewer.dataSources.add(Cesium.KmlDataSource.load("https://yutatsu.github.io/AoyamaArchive/Cesium/Apps/aoyama_localshops.kml"));