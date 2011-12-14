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
goog.require('goog.dom');
goog.require('geneJS.Generator');



geneJS.index = function() {
    this.generateBtn = goog.dom.getElement('generate');
    this.plantUML = goog.dom.getElement('plantUML');
    this.generated = goog.dom.getElement('generated');
    this.registry = new geneJS.Registry();

    goog.events.listen(this.generateBtn, goog.events.EventType.CLICK, this.generate, false, this);
}

geneJS.index.prototype.generate = function() {
    var uml = this.plantUML.value;

    var generator = new geneJS.Generator(this.registry);
    uml = generator.generate(uml);
    this.generated.innerHTML = uml;
}