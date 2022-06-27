/**
 * Empty object for groups in scenegraph.
 * 
 * @namespace cog1.data
 * @module sandclock
 */
define(["exports", "data"], function(exports, data) {
	"use strict";

	let index = 0;
	let instance = {};
	/**
	 * Create an instance of the model defined in this module.
	 * 
	 * @parameter object with fields:
	 * @returns instance of this model.
	 */
	exports.create = function(parameter) {
		
		// Instance of the model to be returned.
		
		var scale = parameter.scale ? parameter.scale : 200;
		
		instance.vertices = [];
		//glas
		const lm1 = newVertex(-0.1, -0.1, 0.1);
		const lm2 = newVertex(0.1, -0.1, 0.1);
		const lm3 = newVertex(0.1, -0.1, -0.1);
		const lm4 = newVertex(-0.1, -0.1, -0.1);
		const lm5 = newVertex(-0.14, -0.1, 0);
		const lm6 = newVertex(0, -0.1, 0.14);
		const lm7 = newVertex(0.14, -0.1, 0);
		const lm8 = newVertex(0, -0.1, -0.14);

		const um1 = newVertex(-0.1, 0.1, 0.1);
		const um2 = newVertex(0.1, 0.1, 0.1);
		const um3 = newVertex(0.1, 0.1, -0.1);
		const um4 = newVertex(-0.1, 0.1, -0.1);
		const um5 = newVertex(-0.14, 0.1, 0);
		const um6 = newVertex(0, 0.1, 0.14);
		const um7 = newVertex(0.14, 0.1, 0);
		const um8 = newVertex(0, 0.1, -0.14);

		const b1 = newVertex(-1, -2, 1);
		const b2 = newVertex(1, -2, 1);
		const b3 = newVertex(1, -2, -1);
		const b4 = newVertex(-1, -2, -1);
		const b5 = newVertex(-1.4, -2, 0);
		const b6 = newVertex(0, -2, 1.4);
		const b7 = newVertex(1.4, -2, 0);
		const b8 = newVertex(0, -2, -1.4);

		const bb1 = newVertex(-0.8, -2.2, 0.8);
		const bb2 = newVertex(0.8, -2.2, 0.8);
		const bb3 = newVertex(0.8, -2.2, -0.8);
		const bb4 = newVertex(-0.8, -2.2, -0.8);
		const bb5 = newVertex(-1.2, -2.2, 0);
		const bb6 = newVertex(0, -2.2, 1.2);
		const bb7 = newVertex(1.2, -2.2, 0);
		const bb8 = newVertex(0, -2.2, -1.2);

		const t1 = newVertex(-1, 2, 1);
		const t2 = newVertex(1, 2, 1);
		const t3 = newVertex(1, 2, -1);
		const t4 = newVertex(-1, 2, -1);
		const t5 = newVertex(-1.4, 2, 0);
		const t6 = newVertex(0, 2, 1.4);
		const t7 = newVertex(1.4, 2, 0);
		const t8 = newVertex(0, 2, -1.4);

		const tt1 = newVertex(-0.8, 2.2, 0.8);
		const tt2 = newVertex(0.8, 2.2, 0.8);
		const tt3 = newVertex(0.8, 2.2, -0.8);
		const tt4 = newVertex(-0.8, 2.2, -0.8);
		const tt5 = newVertex(-1.2, 2.2, 0);
		const tt6 = newVertex(0, 2.2, 1.2);
		const tt7 = newVertex(1.2, 2.2, 0);
		const tt8 = newVertex(0, 2.2, -1.2);

		// holz
		const htb1 = newVertex(-3, 2.2, 3);
		const htb2 = newVertex(3, 2.2, 3);
		const htb3 = newVertex(3, 2.2, -3);
		const htb4 = newVertex(-3, 2.2, -3);
		const htb5 = newVertex(-4, 2.2, 0);
		const htb6 = newVertex(0, 2.2, 4);
		const htb7 = newVertex(4, 2.2, 0);
		const htb8 = newVertex(0, 2.2, -4);

		const htg1_1 = newVertex(0, 2.2, 2.3);
		const htg1_2 = newVertex(0.3, 2.2, 2.5);
		const htg1_3 = newVertex(0.3, 2.2, 2.9);
		const htg1_4 = newVertex(0, 2.2, 3.1);
		const htg1_5 = newVertex(-0.3, 2.2, 2.9);
		const htg1_6 = newVertex(-0.3, 2.2, 2.5);

		const htg2_1 = newVertex(0, 2.2, -2.3);
		const htg2_2 = newVertex(-0.3, 2.2, -2.5);
		const htg2_3 = newVertex(-0.3, 2.2, -2.9);
		const htg2_4 = newVertex(0, 2.2, -3.1);
		const htg2_5 = newVertex(0.3, 2.2, -2.9);
		const htg2_6 = newVertex(0.3, 2.2, -2.5);

		const htb1_1 = newVertex(-3.1, 2.3, 3.1);
		const htb2_2 = newVertex(3.1, 2.3, 3.1);
		const htb3_3 = newVertex(3.1, 2.3, -3.1);
		const htb4_4 = newVertex(-3.1, 2.3, -3.1);
		const htb5_5 = newVertex(-4.2, 2.3, 0);
		const htb6_6 = newVertex(0, 2.3, 4.2);
		const htb7_7 = newVertex(4.2, 2.3, 0);
		const htb8_8 = newVertex(0, 2.3, -4.2);

		const htt1_1 = newVertex(-3.1, 2.5, 3.1);
		const htt2_2 = newVertex(3.1, 2.5, 3.1);
		const htt3_3 = newVertex(3.1, 2.5, -3.1);
		const htt4_4 = newVertex(-3.1, 2.5, -3.1);
		const htt5_5 = newVertex(-4.2, 2.5, 0);
		const htt6_6 = newVertex(0, 2.5, 4.2);
		const htt7_7 = newVertex(4.2, 2.5, 0);
		const htt8_8 = newVertex(0, 2.5, -4.2);

		const htt1 = newVertex(-3, 2.6, 3);
		const htt2 = newVertex(3, 2.6, 3);
		const htt3 = newVertex(3, 2.6, -3);
		const htt4 = newVertex(-3, 2.6, -3);
		const htt5 = newVertex(-4.1, 2.6, 0);
		const htt6 = newVertex(0, 2.6, 4.1);
		const htt7 = newVertex(4.1, 2.6, 0);
		const htt8 = newVertex(0, 2.6, -4.1);

		const hbb1 = newVertex(-3, -2.2, 3);
		const hbb2 = newVertex(3, -2.2, 3);
		const hbb3 = newVertex(3, -2.2, -3);
		const hbb4 = newVertex(-3, -2.2, -3);
		const hbb5 = newVertex(-4, -2.2, 0);
		const hbb6 = newVertex(0, -2.2, 4);
		const hbb7 = newVertex(4, -2.2, 0);
		const hbb8 = newVertex(0, -2.2, -4);

		const hbg1_1 = newVertex(0, -2.2, 2.3);
		const hbg1_2 = newVertex(0.3, -2.2, 2.5);
		const hbg1_3 = newVertex(0.3, -2.2, 2.9);
		const hbg1_4 = newVertex(0, -2.2, 3.1);
		const hbg1_5 = newVertex(-0.3, -2.2, 2.9);
		const hbg1_6 = newVertex(-0.3, -2.2, 2.5);

		const hbg2_1 = newVertex(0, -2.2, -2.3);
		const hbg2_2 = newVertex(-0.3, -2.2, -2.5);
		const hbg2_3 = newVertex(-0.3, -2.2, -2.9);
		const hbg2_4 = newVertex(0, -2.2, -3.1);
		const hbg2_5 = newVertex(0.3, -2.2, -2.9);
		const hbg2_6 = newVertex(0.3, -2.2, -2.5);

		const hbb1_1 = newVertex(-3.1, -2.3, 3.1);
		const hbb2_2 = newVertex(3.1, -2.3, 3.1);
		const hbb3_3 = newVertex(3.1, -2.3, -3.1);
		const hbb4_4 = newVertex(-3.1, -2.3, -3.1);
		const hbb5_5 = newVertex(-4.2, -2.3, 0);
		const hbb6_6 = newVertex(0, -2.3, 4.2);
		const hbb7_7 = newVertex(4.2, -2.3, 0);
		const hbb8_8 = newVertex(0, -2.3, -4.2);

		const hbt1_1 = newVertex(-3.1, -2.5, 3.1);
		const hbt2_2 = newVertex(3.1, -2.5, 3.1);
		const hbt3_3 = newVertex(3.1, -2.5, -3.1);
		const hbt4_4 = newVertex(-3.1, -2.5, -3.1);
		const hbt5_5 = newVertex(-4.2, -2.5, 0);
		const hbt6_6 = newVertex(0, -2.5, 4.2);
		const hbt7_7 = newVertex(4.2, -2.5, 0);
		const hbt8_8 = newVertex(0, -2.5, -4.2);

		const hbt1 = newVertex(-3, -2.6, 3);
		const hbt2 = newVertex(3, -2.6, 3);
		const hbt3 = newVertex(3, -2.6, -3);
		const hbt4 = newVertex(-3, -2.6, -3);
		const hbt5 = newVertex(-4.1, -2.6, 0);
		const hbt6 = newVertex(0, -2.6, 4.1);
		const hbt7 = newVertex(4.1, -2.6, 0);
		const hbt8 = newVertex(0, -2.6, -4.1);

		const s1 = newVertex(0, -0.8, 0);

		instance.polygonVertices = [
			// [lm1, lm6, lm2, lm7, lm3, lm8, lm4, lm5],
			// [um1, um6, um2, um7, um3, um8, um4, um5],
			[lm1, um1, um6, lm6],
			[lm2, um2, um7, lm7],
			[lm3, um3, um8, lm8],
			[lm4, um4, um5, lm5],
			[lm5, um5, um1, lm1],
			[lm6, um6, um2, lm2],
			[lm7, um7, um3, lm3],
			[lm8, um8, um4, lm4],

			[lm1, b1, b6, lm6],
			[lm2, b2, b7, lm7],
			[lm3, b3, b8, lm8],
			[lm4, b4, b5, lm5],
			[lm5, b5, b1, lm1],
			[lm6, b6, b2, lm2],
			[lm7, b7, b3, lm3],
			[lm8, b8, b4, lm4],

			[um1, t1, t6, um6],
			[um2, t2, t7, um7],
			[um3, t3, t8, um8],
			[um4, t4, t5, um5],
			[um5, t5, t1, um1],
			[um6, t6, t2, um2],
			[um7, t7, t3, um3],
			[um8, t8, t4, um4],

			[b1, bb1, bb6, b6],
			[b2, bb2, bb7, b7],
			[b3, bb3, bb8, b8],
			[b4, bb4, bb5, b5],
			[b5, bb5, bb1, b1],
			[b6, bb6, bb2, b2],
			[b7, bb7, bb3, b3],
			[b8, bb8, bb4, b4],

			[t1, tt1, tt6, t6],
			[t2, tt2, tt7, t7],
			[t3, tt3, tt8, t8],
			[t4, tt4, tt5, t5],
			[t5, tt5, tt1, t1],
			[t6, tt6, tt2, t2],
			[t7, tt7, tt3, t3],
			[t8, tt8, tt4, t4],

			[tt1, htb1, htb6, htg1_4, htg1_5, htg1_6, htg1_1, tt6],
			[tt2, htb2, htb7, tt7],
			[tt3, htb3, htb8, htg2_4, htg2_5, htg2_6, htg2_1, tt8],
			[tt4, htb4, htb5, tt5],
			[tt5, htb5, htb1, tt1],
			[tt6, htg1_1, htg1_2, htg1_3, htg1_4, htb6, htb2, tt2],
			[tt7, htb7, htb3, tt3],
			[tt8, htg2_1, htg2_2, htg2_3, htg2_4, htb8, htb4, tt4],

			[htb1, htb1_1, htb6_6, htb6],
			[htb2, htb2_2, htb7_7, htb7],
			[htb3, htb3_3, htb8_8, htb8],
			[htb4, htb4_4, htb5_5, htb5],
			[htb5, htb5_5, htb1_1, htb1],
			[htb6, htb6_6, htb2_2, htb2],
			[htb7, htb7_7, htb3_3, htb3],
			[htb8, htb8_8, htb4_4, htb4],

			[htb1_1, htt1_1, htt6_6, htb6_6],
			[htb2_2, htt2_2, htt7_7, htb7_7],
			[htb3_3, htt3_3, htt8_8, htb8_8],
			[htb4_4, htt4_4, htt5_5, htb5_5],
			[htb5_5, htt5_5, htt1_1, htb1_1],
			[htb6_6, htt6_6, htt2_2, htb2_2],
			[htb7_7, htt7_7, htt3_3, htb3_3],
			[htb8_8, htt8_8, htt4_4, htb4_4],

			[htt1_1, htt1, htt6, htt6_6],
			[htt2_2, htt2, htt7, htt7_7],
			[htt3_3, htt3, htt8, htt8_8],
			[htt4_4, htt4, htt5, htt5_5],
			[htt5_5, htt5, htt1, htt1_1],
			[htt6_6, htt6, htt2, htt2_2],
			[htt7_7, htt7, htt3, htt3_3],
			[htt8_8, htt8, htt4, htt4_4],

			[bb1, hbb1, hbb6, hbg1_4, hbg1_5, hbg1_6, hbg1_1, bb6],
			[bb2, hbb2, hbb7, bb7],
			[bb3, hbb3, hbb8, hbg2_4, hbg2_5, hbg2_6, hbg2_1, bb8],
			[bb4, hbb4, hbb5, bb5],
			[bb5, hbb5, hbb1, bb1],
			[bb6, hbg1_1, hbg1_2, hbg1_3, hbg1_4, hbb6, hbb2, bb2],
			[bb7, hbb7, hbb3, bb3],
			[bb8, hbg2_1, hbg2_2, hbg2_3, hbg2_4, hbb8, hbb4, bb4],

			[hbb1, hbb1_1, hbb6_6, hbb6],
			[hbb2, hbb2_2, hbb7_7, hbb7],
			[hbb3, hbb3_3, hbb8_8, hbb8],
			[hbb4, hbb4_4, hbb5_5, hbb5],
			[hbb5, hbb5_5, hbb1_1, hbb1],
			[hbb6, hbb6_6, hbb2_2, hbb2],
			[hbb7, hbb7_7, hbb3_3, hbb3],
			[hbb8, hbb8_8, hbb4_4, hbb4],

			[hbb1_1, hbt1_1, hbt6_6, hbb6_6],
			[hbb2_2, hbt2_2, hbt7_7, hbb7_7],
			[hbb3_3, hbt3_3, hbt8_8, hbb8_8],
			[hbb4_4, hbt4_4, hbt5_5, hbb5_5],
			[hbb5_5, hbt5_5, hbt1_1, hbb1_1],
			[hbb6_6, hbt6_6, hbt2_2, hbb2_2],
			[hbb7_7, hbt7_7, hbt3_3, hbb3_3],
			[hbb8_8, hbt8_8, hbt4_4, hbb4_4],

			[hbt1_1, hbt1, hbt6, hbt6_6],
			[hbt2_2, hbt2, hbt7, hbt7_7],
			[hbt3_3, hbt3, hbt8, hbt8_8],
			[hbt4_4, hbt4, hbt5, hbt5_5],
			[hbt5_5, hbt5, hbt1, hbt1_1],
			[hbt6_6, hbt6, hbt2, hbt2_2],
			[hbt7_7, hbt7, hbt3, hbt3_3],
			[hbt8_8, hbt8, hbt4, hbt4_4],

			[htg1_1, hbg1_1, hbg1_2, htg1_2],
			[htg1_2, hbg1_2, hbg1_3, htg1_3],
			[htg1_3, hbg1_3, hbg1_4, htg1_4],
			[htg1_4, hbg1_4, hbg1_5, htg1_5],
			[htg1_5, hbg1_5, hbg1_6, htg1_6],
			[htg1_6, hbg1_6, hbg1_1, htg1_1],

			[htg2_1, hbg2_1, hbg2_2, htg2_2],
			[htg2_2, hbg2_2, hbg2_3, htg2_3],
			[htg2_3, hbg2_3, hbg2_4, htg2_4],
			[htg2_4, hbg2_4, hbg2_5, htg2_5],
			[htg2_5, hbg2_5, hbg2_6, htg2_6],
			[htg2_6, hbg2_6, hbg2_1, htg2_1],

			[htt1, htt6, htt2, htt7, htt3, htt8, htt4, htt5],
			[hbt1, hbt6, hbt2, hbt7, hbt3, hbt8, hbt4, hbt5],

			[b1,b5,s1],
			[b5,b4,s1],
			[b4,b8,s1],
			[b8,b3,s1],
			[b3,b7,s1],
			[b7,b2,s1],
			[b2,b6,s1],
			[b6,b1,s1]
		];
		
		instance.polygonColors = [];
		for(var i = 0; i < 40; i++) {
			instance.polygonColors[i] = 11;
		}

		for(var i = 40; i < 118; i++) {
			instance.polygonColors[i] = 7;
		}

		for(var i = 118; i < 126; i++) {
			instance.polygonColors[i] = 9;
		}

		data.applyScale.call(instance, scale);
		
		return instance;		
	};

	function newVertex(x, y, z) {
		const vertex = {index: index++, coord: [x,y,z]};
		instance.vertices.push(vertex.coord);
		return vertex.index;
	}
});