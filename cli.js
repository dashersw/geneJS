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


require('nclosure').nclosure();

goog.provide('geneJS.cli');
goog.require('geneJS.Registry');
goog.require('geneJS.LanguageLoader');
goog.require('geneJS.Generator');
require('fs');



geneJS.cli.process = function(language, inputFolder, outputFolder) {
    var languageLoader = new geneJS.LanguageLoader();
    languageLoader.load();

    var languageObj = languageLoader.languages[language];

    var registry = new geneJS.Registry(inputFolder);
    var generator = new geneJS.Generator(registry.getInputs());

    var outputs = generator.generate(languageObj);
    goog.object.forEach(outputs, function(output, key) {
        fs.writeFile(outputFolder +
            '/' +
            key +
            '.' +
            languageObj.options.fileExtension, 
            output);
    });
};

module.exports = geneJS.cli;

