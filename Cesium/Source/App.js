 var viewer = new Cesium.Viewer('cesiumContainer');
    var modelMatrix=Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees(-35.665439,139.712533,200));
    var entity = viewer.entities.add(Cesium.Model.fromGltf({
    url:https//:yutatsu.github.io/AoyamaArchive/Cesium/Source/model.glb,
    modelMatrix : modelMatrix,
    scale : 10.0
    }));
 var viewer.camera.flyTo({
    destination : Cesium.Cartesian3.fromDegrees(-35.665439,139.712533,1000)});