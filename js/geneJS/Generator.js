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

goog.provide('geneJS.Generator');
goog.require('geneJS.templates');
goog.require('goog.object');
goog.require('goog.array');
goog.require('geneJS.Parser');



geneJS.Generator = function (registry) {
    this.registry = registry;
};

geneJS.Generator.prototype.generate = function (text) {
    var output = '', that = this;

    var machine = new geneJS.Parser(text);

    machine.startMachine();

    this.registry.classes = machine.classes;

    goog.object.forEach(this.registry.classes, function (cls) {
        cls.iterator = that.propertyIterator;
        output += Mustache.to_html(geneJS.templates.class, cls) + '******\n';
    })
    return output;
};

geneJS.Generator.prototype.propertyIterator = function () {
    return function () {
        var params = [];
        goog.array.forEach(this.parameters, function (p) {
            params.push(p.paramName);
        });
        return params.join(', ');
    }
}