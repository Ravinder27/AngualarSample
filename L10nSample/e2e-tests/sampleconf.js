/**
 * Created by sharp on 4/21/15.
 */
exports.config = {
  allScriptsTimeout: 10000,
  directConnect: true,
  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 10000,
  },
  seleniumAddress: 'http://localhost:9000/',
  specs: ['scenarios/sample.js']
};
