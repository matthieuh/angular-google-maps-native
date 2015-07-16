// package metadata file for Meteor.js
var packageName = 'matthieuh:angular-google-maps-native'; // https://atmospherejs.com/angularui/angular-ui-router
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '1.3.0';

// Meta-data
Package.describe({
  name: packageName,
  version: version,
  summary: 'AngularJS directives for the Google Maps Javascript API using the native way.',
  git: 'https://github.com/matthieuh/angular-google-maps-native',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']); // Meteor versions

  api.use('angular:angular@1.4.0', where); // Dependencies

  api.addFiles('src/angular-google-maps-native.js', where); // Files in use
});