Package.describe({
  name: 'se42:logger',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Custom logger',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.2.7');
  api.use('ecmascript');
  api.mainModule('logger.js');
});

Npm.depends({
  winston: '2.3.1',
});
