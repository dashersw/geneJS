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

goog.require('goog.events');
goog.provide('geneJS.index');
goog.require('geneJS.Generator');



geneJS.index = function() {
    this.registry = new geneJS.Registry();
    this.generate();
}

geneJS.index.prototype.generate = function() {
    var generator = new geneJS.Generator(this.registry);
    return generator.generate('');
}