var fs = require('fs-extra');

fs.copySync('./node_modules/parallax-js/dist/parallax.min.js', './src/openui5/parallax/thirdparty/parallax.min.js');
fs.copySync('./node_modules/parallax-js/dist/parallax.js', './src/openui5/parallax/thirdparty/parallax.js');
