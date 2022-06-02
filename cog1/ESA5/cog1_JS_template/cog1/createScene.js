/**
 * Populate the scene-graph with nodes,
 * calling methods form the scene-graph and node modules.
 * 
 * Texture files have to exist in the "textures" sub-directory.
 * 
 * @namespace cog1
 * @module createScene
 */
define(["exports", "scenegraph", "animation"], //
	function(exports, scenegraph, animation) {
		"use strict";

		/**
		 * 	Call methods form the scene-graph (tree) module to create the scene.
		 *
		 */
		function init() {

			var cubeNode = scenegraph.createNodeWithModel("cube", "cube");
			cubeNode.rotateTo([0.19, -3.2, 0]);

			// BEGIN exercise myModel

			// END exercise myModel

			return;

		}

		// Public API.
		exports.init = init;
	});