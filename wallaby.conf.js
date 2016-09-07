module.exports = function (wallaby) {

    return {
        files: [
            'app/**/*.js'
        ],

        tests: [
            'test/**/*.js'
        ],
        testFramework: 'mocha',
        env: {
            type: 'node'
        }

    };
};
