var fs = require('fs-extra');

try {
	fs.copySync('./node_modules/parallax-js/dist/parallax.min.js', './src/openui5/parallax/thirdparty/parallax.min.js');
	fs.copySync('./node_modules/parallax-js/dist/parallax.js', './src/openui5/parallax/thirdparty/parallax.js');
} catch (e) {
	console.log("an error occured post-processing the openui5.parallax library: " + e.message);
}
