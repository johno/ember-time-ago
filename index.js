'use strict';

var path = require('path'),
    fs   = require('fs');

function EmberTimeAgo(project) {
  this.project = project;
  this.name    = 'Ember Time Ago';
}

function unwatchTree(dir) {
  return {
    read: function() {
      return dir;
    },

    cleanup: function() {

    }
  };
}

EmberTimeAgo.prototype.treeFor = function treeFor(name) {
  var treePath = path.join('node_modules', 'ember-time-ago', name + '-addon');

  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberTimeAgo.prototype.included = function included(app) {
  this.app = app;
  this.app.import('vendor/ember-time-ago/app/helpers/time-ago-in-words.js');
};

module.exports = EmberTimeAgo;
