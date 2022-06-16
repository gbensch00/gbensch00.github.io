/**
 * Populate the scene-graph with nodes,
 * calling methods form the scene-graph and node modules.
 *
 * Texture files have to exist in the "textures" sub-directory.
 *
 * @namespace cog1
 * @module createScene
 */
define(["exports", "scenegraph", "animation"], function(
  //
  exports,
  scenegraph,
  animation
) {
  "use strict";

  /**
   * 	Call methods form the scene-graph (tree) module to create the scene.
   *
   */
  function init() {
    const AU = 2000;
    const Year = 0.01;
    const Day = 1;

    //var cubeNode = scenegraph.createNodeWithModel("cube", "cube", {scale:100, textureURL:"brickWall.jpg"});
    var cubeNode1 = scenegraph.createNodeWithModel("cube 1", "cube", {
      scale: 70,
    });
    var sphereNode1 = scenegraph.createNodeWithModel("sphere 1", "sphere", {
      scale: 70,
    }, cubeNode1);
    var cubeNode2 = scenegraph.createNodeWithModel(
      "cube 2",
      "cube", {
        scale: 70,
      },
      cubeNode1
    );
    var sphereNode2 = scenegraph.createNodeWithModel("sphere 2", "sphere", {
      scale: 70,
    }, cubeNode2);
    var cubeNode3 = scenegraph.createNodeWithModel(
      "cube 3",
      "cube", {
        scale: 70,
      },
      cubeNode2
    );
    cubeNode2.translate([50, 300, 0]);
    cubeNode3.translate([-50, 300, 0]);
    sphereNode1.translate([0, 150, 0]);
    sphereNode2.translate([-50, 150, 0])
    return;
  }

  // Public API.
  exports.init = init;
});