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
    const Year = 0.01;
    const Day = 1;

    var sun = scenegraph.createNodeWithModel("Sonne", "sphere", {
      recursionDepth: 1,
      scale: 120,
      color: 5,
    });
    sun.rotate([-100, -200, 0]);
    var earth = scenegraph.createNodeWithModel(
      "Earth",
      "sphere", {
        recursionDepth: 1,
        scale: 100,
        color: 2
      },
      sun
    );
    earth.translate([1000, 0, 0]);
    var moon = scenegraph.createNodeWithModel(
      "Moon",
      "sphere", {
        recursionDepth: 1,
        scale: 30,
        color: 7
      },
      earth
    );
    moon.translate([300, 0, 0]);

    animation.assign(sun, "rotate", {
      rotationSpeed: [0, 0.2 * Year, 0]
    });
    animation.assign(earth, "rotate", {
      rotationSpeed: [0, Day, 0]
    });
    animation.assign(moon, "rotate", {
      rotationSpeed: [0, 24 * Day, 0]
    });



    sun.setVisible(true);
    earth.setVisible(true);
    moon.setVisible(true);
    // BEGIN exercise myModel

    // END exercise myModel

    return;

  }

  // Public API.
  exports.init = init;
});