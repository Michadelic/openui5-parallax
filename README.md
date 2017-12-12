# OpenUI5-parallax

A simple OpenUI5 control library wrapping [parallax.js](https://github.com/wagerfield/parallax) in UI5 controls to create stunning layered effects, for more information check out the [parallax.js demo](http://matthew.wagerfield.com/parallax/).

![Preview](https://raw.githubusercontent.com/Michadelic/openui5-parallax/master/preview.png)

## Getting started

1. Install node.js (get it from [nodejs.org](http://nodejs.org/)).
 * If working behind a proxy, you need to configure it properly (HTTP_PROXY / HTTPS_PROXY / NO_PROXY environment variables)

2. Clone the repository and navigate into it
```sh
git clone https://github.com/michadelic/openui5-parallax
cd openui5-parallax
```
3. Install all npm dependencies (also installs all bower dependencies)
```sh
npm install
```

4. Run npm start to lint, build and run a local server (have a look into `Gruntfile.js` to see all the tasks).
```sh
npm start
```

5. The [UI5Lab-browser](https://github.com/openui5/UI5Lab-browser) is loaded as a dependency to display the library content for testing during development. Open it to see the libary samples in action: http://localhost:8080/test-resources/ui5lab/browser/](http://localhost:8080/test-resources/ui5lab/browser/)

### Directions

[Browser](http://localhost:8080/test-resources/ui5lab/browser/index.html) A sample browser showcasing artifacts from one or more libraries

[Test page](http://localhost:8080/test-resources/openui5/parallax/ParallaxScroller.html) An HTML test page instantiating the control

### Contributing

Instructions how to connect to the community and contribute to the UI5lab project can be found in the [main repository](https://github.com/openui5/UI5Lab/)!

### Credits

Thank you to [@wagerfield](https://github.com/wagerfield/parallax) for this great parallax implementation!
