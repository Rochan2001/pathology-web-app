var viewer = OpenSeadragon({
  id: "openseadragon",
  prefixUrl: "../openseadragon/images/",
  tileSources: "../output_images/mydz.dzi",
  visibilityRatio: 1.0,
  constrainDuringPan: true,
});

var anno = OpenSeadragon.Annotorious(viewer);

Annotorious.Toolbar(anno, document.getElementById("toolbar-container"));

anno.addDrawingTool(plugin);

// // Load annotations in W3C WebAnnotation format
// anno.loadAnnotations("annotations.w3c.json");
