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

goog.provide('geneJS.Registry');
goog.require('path');

geneJS.Registry = function (inputFolder) {
    this.inputs = [], that = this;
    var files = fs.readdirSync(inputFolder);

    files.forEach(function(file) {
        // if file is not hidden, get contents
        if(file.indexOf(".") != 0){
            file = path.resolve(inputFolder, file);
            var contents = fs.readFileSync(file, 'utf8');
            that.inputs.push(JSON.parse(contents));
        }
    });
};


geneJS.Registry.prototype.getInputs = function() {
    return this.inputs;
};
