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

goog.provide('geneJS.templates');
goog.require('hogan.js');
goog.require('fs');
goog.require('goog.string');


geneJS.templates = function (done) {
    var dir = './lib/geneJS/languages';

    fs.readdir(dir, function(err, languages) {
        if (err) return done(err);
        var pending = languages.length;

        languages.forEach(function(language) {
            var file = dir + '/' + language;
            if (goog.string.endsWith(file, '.gjs')) {
                fs.readFile(file, 'utf8', function(err, contents) {
                    pending--;
                    language = language.substr(0, language.length - 4);
                    geneJS.templates[language] = global['hogan.js'].compile(contents);
                    if (!pending) done(null);
                });
            }
        });
    });
};
