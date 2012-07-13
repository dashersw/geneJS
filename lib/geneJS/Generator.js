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
goog.require('goog.object');
goog.require('goog.array');
goog.require('fs');

geneJS.Generator = function (inputs) {
    this.inputs = inputs;
    this.outputs = {};
};

geneJS.Generator.prototype.generate = function (language) {
    var that = this;
    
    if(!language) {
        throw new Error('Please select an output language parameter (i.e. bin/genejs php)');
    }
    
    this.inputs.forEach(function(input){
        goog.object.forEach(input, function (cls) {

            var stereotype = language.options.defaultStereotype;
            
            if (cls.stereotype && language[cls.stereotype]) {
                stereotype = cls.stereotype;
            }

            // if stereotype is not registered
            if(!language[stereotype]){
                throw new Error('Stereotype ' + stereotype + ' not found');
            }

            // if stereotype has filters, append them
            if(language[stereotype].filters){
                cls = extender(cls, language[stereotype].filters);
            }

            that.outputs[cls.name] = {
                className: cls.className,
                namespace: cls.namespace,
                contents: language[stereotype].render(cls, language.partials)
            };
        })        
    });

    return this.outputs;
};


geneJS.Generator.prototype.getOutputs = function() {
    return this.outputs;
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