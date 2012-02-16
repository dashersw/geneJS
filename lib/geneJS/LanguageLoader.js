// Copyright 2011 Armagan Amcalar. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview
 */

goog.provide('geneJS.LanguageLoader');
goog.require('hogan.js');
goog.require('fs');
goog.require('goog.string');
goog.require('path');
goog.require('goog.object');


geneJS.LanguageLoader = function () {
    this.dir = path.resolve('./lib/geneJS/languages');
};


geneJS.LanguageLoader.prototype.load = function () {
    var that = this;
    var languages = this.languages = {};
    var pending = 0;

    // get base directory
    var files = fs.readdirSync(this.dir);

    // get each directory in it, they will be the language templates.
    files.forEach(function(file) {
        file = path.resolve(that.dir, file);
        
        var stats = fs.statSync(file);

        if (stats.isDirectory()) {
            // this should be a language directory
            var languageName = path.basename(file);
            var languageBaseName = path.resolve(file, 'language.js');

            // load the module
            var languageModule = require(languageBaseName);
            
            // read directory for template filenames
            var templateNames = fs.readdirSync(file);
            var templates = {};

            templateNames.forEach(function(template) {
                var templateFile = path.resolve(file, template);
                var extension = path.extname(templateFile);
                var basename = path.basename(templateFile, extension);

                if (extension == '.gjs') {
                    var contents = fs.readFileSync(templateFile, 'utf8');
                    templates[basename] = global['hogan.js'].compile(contents);
                }
            });

            languages[languageName] = extender(templates, languageModule);        
        }
    });
};


var extender = function(destination, source) {
  for (var property in source) {
    if (source[property] && source[property].constructor &&
     source[property].constructor === Object) {
      destination[property] = destination[property] || {};
      arguments.callee(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }
  return destination;
};