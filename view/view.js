var viewer1 = OpenSeadragon({
  id: "openseadragon1",
  prefixUrl: "../openseadragon/images/",
  tileSources: "../output_images/mydz.dzi",
  visibilityRatio: 1.0,
  constrainDuringPan: true,
});

var viewer2 = OpenSeadragon({
  id: "openseadragon2",
  prefixUrl: "../openseadragon/images/",
  tileSources: "../output_images/mydz_mask.dzi",
  visibilityRatio: 1.0,
  constrainDuringPan: true,
});

var anno1 = OpenSeadragon.Annotorious(viewer2);
var anno2 = OpenSeadragon.Annotorious(viewer1);

Annotorious.Toolbar(anno1, document.getElementById("toolbar-container2"));
Annotorious.Toolbar(anno2, document.getElementById("toolbar-container1"));

viewer1.addHandler("canvas-drag", function () {
  const center1 = viewer1.viewport.getCenter();
  viewer2.viewport.panTo(center1);
  console.log(center1);
});

viewer2.addHandler("canvas-drag", function () {
  const center2 = viewer2.viewport.getCenter();
  viewer1.viewport.panTo(center2);
  console.log(center2);
});

viewer1.addHandler("canvas-scroll", function () {
  const zoom1 = viewer1.viewport.getZoom();
  const center1 = viewer1.viewport.getCenter();
  viewer2.viewport.panTo(center1);
  viewer2.viewport.zoomTo(zoom1);
});

viewer2.addHandler("canvas-scroll", function () {
  const zoom2 = viewer2.viewport.getZoom();
  const center2 = viewer2.viewport.getCenter();
  viewer1.viewport.panTo(center2);
  viewer1.viewport.zoomTo(zoom2);
});

// // Load annotations in W3C WebAnnotation format
// anno.loadAnnotations("annotations.w3c.json");
