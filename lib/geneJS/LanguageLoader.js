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
            
            // read directory for template files
            var templates = that.getCompiledTemplates(file);

            // read partial templates if exists
            // and register them under templates
            var partials = that.getCompiledTemplates(file + "/partials");
            templates.partials = partials;

            languages[languageName] = extender(templates, languageModule);       
        }
    });
};


/* 
 * Traverses the given directory for templates
 * and returns back a hash of compiled templates
 * if any templates are found,
 **/
geneJS.LanguageLoader.prototype.getCompiledTemplates = function(dir){

    var output = {};
    // check if directory exists
    if(fs.statSync(dir).isDirectory()){
        var names = fs.readdirSync(dir);
        names.forEach(function(name){
            var file = path.resolve(dir, name);
            var extension = path.extname(file);
            var basename = path.basename(file, extension);

            // check if a template file or not
            if (extension == '.gjs') {
                var contents = fs.readFileSync(file, 'utf8');
                output[basename] = global['hogan.js'].compile(contents);
            }
        });
    }

    return output;
}


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