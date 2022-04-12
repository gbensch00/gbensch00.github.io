/**
 * Empty object for groups in scenegraph.
 *
 * @namespace cog1.data
 * @module empty
 */
define(["exports", "data"], function(exports, data) {
  "use strict";

  /**
   * Create an instance of the model defined in this module.
   *
   * @parameter object with fields:
   * @returns instance of this model.
   */
  exports.create = function(parameter) {
    if (parameter) {
      var scale = parameter.scale;
      // Each face shows a different area of the given texture (e.g, a dice).
    }
    // Set default values if parameter is undefined.
    if(scale == undefined){
			scale = 100;
		}
	
    // Instance of the model to be returned.
    var instance = {};
		instance.vertices = [
				//middle part 1
				[-2, -2, 0],
				[-2, -1, 0],
				[2, -2, 0],
			[2, -1, 0],
				//wheel rim left 1
			[-3, -2, 0],
			[-3, -0.5, 0],
			[-2, -0.5, 0],
			//2
			[-2, 0, 0],
			[-6, 0, 0],
			[-6, -0.5, 0],
			//3
				[-5, -2, 0],
			[-6, -2, 0],
			[-6, -0.5, 0],
			[-5, -0.5, 0],
			//wheel left 1
			[-4.5, -2.2, 0],
			[-4.5, -1, 0],
			[-3.5, -2.2, 0],
			[-3.5, -1, 0],
				//wheel rim right 1
			[3, -2, 0],
			[3, -0.5, 0],
			[2, -0.5, 0],
			//2
			[2, 0, 0],
			[6, 0, 0],
			[6, -0.5, 0],
			//3
				[5, -2, 0],
			[6, -2, 0],
			[6, -0.5, 0],
			[5, -0.5, 0],
			//wheel right
			[4.5, -2.2, 0],
			[4.5, -1, 0],
			[3.5, -2.2, 0],
			[3.5, -1, 0],
			//front plate
			[-6, -2, 0],
			[-6, -0.5, 0],
			[-6, -2, -5],
			[-6, -0.5, -5],
			//back plate
			[6, -2,  0],
			[6, 2, 0],
			[6, 2, -5],
			[6, -2, -5],
		
			//middle part 2
				[-2, -2, -5],
				[-2, -1, -5],
				[2, -2, -5],
			[2, -1, -5],
				//wheel rim left 2-1
			[-3, -2, -5],
			[-3, -0.5, -5],
			[-2, -0.5, -5],
			//2-2
			[-2, 0, -5],
			[-6, 0, -5],
			[-6, -0.5, -5],
			//2-3
				[-5, -2, -5],
			[-6, -2, -5],
			[-6, -0.5, -5],
			[-5, -0.5, -5],
				//wheel left 2
			[-4.5, -2.2, -5],
			[-4.5, -1, -5],
			[-3.5, -2.2, -5],
			[-3.5, -1, -5],
				//wheel rim right 2
			[3, -2, -5],
			[3, -0.5, -5],
			[2, -0.5, -5],
			//2-2
			[2, 0, -5],
			[6, 0, -5],
			[6, -0.5, -5],
			//2-3
				[5, -2, -5],
			[6, -2, -5],
			[6, -0.5, -5],
			[5, -0.5, -5],
				//wheel right 2
			[4.5, -2.2, -5],
			[4.5, -1, -5],
			[3.5, -2.2, -5],
			[3.5, -1, -5],
				//top plate
			[6, 2, 0],
			[6, 2, -5],
			[-2, 2, 0],
			[-2, 2, -5],
			//front window
			[-6, 0, 0],
			[-6, 0, -5],
			//pillar left
			[-2, 0, 0],
			[-2, 0, -5],
			//right
			[2, 0, 0],
			[2, 0, -5],
			[2, 2, 0],
			[2,2,-5]

			
		];
		// Use default colors, implicitly.
		// instance.colors = data.colors;

		// Corners of the faces have to fit the texture coordinates.			
		// Faces: bottom/down, top/up, front, right, back, left. 
		instance.polygonVertices = [
			[3, 2, 0, 1],
			[4, 5, 6, 0],
			[7, 8, 9, 6],
			[10, 11, 12, 13],
			[15, 14, 16, 17],
			[18, 19, 20, 2],
			[21, 22, 23, 20],
			[24, 25, 26, 27],
			[29, 28, 30, 31],
			[32, 33, 35, 34],
			[36, 37, 38, 39],
			[43, 42, 40, 41], //middle part 2
			[44, 45, 46, 40],
			[47, 48, 49, 46],
			[50, 51, 52, 53],
			[55, 54, 56, 57],
			[58, 59, 60, 42],
			[62, 63, 60, 61],
			[64, 65, 66, 67],
			[68, 69, 71, 70],
			[73, 75, 74, 72],
			[76, 77, 75, 74],
			[78, 79, 75, 74],
			[80, 81, 83, 82],
			[80,81,79,78]
		
		];	

		instance.polygonColors = [0,2,3,4,6,7,8,9,6,7,7,0,2,3,4,6,7,8,9,6,3,3,3,3,3];
   
    data.applyScale.call(instance, scale);
		
		return instance;	
  };
})