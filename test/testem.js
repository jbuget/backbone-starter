module.exports = {
  "framework": "mocha+chai",
  "test_page": "./test/index.mustache",
  "src_files": [
    "src/**/*.js",
    "test/**/*.js"
  ],
  "serve_files": [
    "./build/test/test.bundle.js"
  ],
  "before_tests": "npm run build-test",
  "launch_in_dev": ["PhantomJS", "Chrome"],
  "launch_in_ci": ["PhantomJS"],
  "browser_args": {
    "PhantomJS": "--ignore-ssl-errors=true"
  }
};
