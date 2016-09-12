module.exports = {
  "framework": "mocha",
  "src_files": [
    "src/js/**/*.js",
    "test/**/*.js"
  ],
  "serve_files": [
    "build/test.bundle.js"
  ],
  "before_tests": "node node_modules/webpack/bin/webpack --config test/webpack.testem.config.js",
  "launch_in_dev": ["PhantomJS", "Chrome"],
  "launch_in_ci": ["PhantomJS"]
};
