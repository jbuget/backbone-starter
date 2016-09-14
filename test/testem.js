module.exports = {
  "framework": "mocha+chai",
  "src_files": [
    "src/**/*.js",
    "test/**/*.js"
  ],
  "serve_files": [
    "./build/test/test.bundle.js"
  ],
  "before_tests": "npm run build-test",
  "launch_in_dev": ["PhantomJS", "Chrome"],
  "launch_in_ci": ["PhantomJS"]
};
