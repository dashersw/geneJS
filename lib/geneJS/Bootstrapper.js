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
 * @fileoverview Bootstrapper for geneJS.
 */

goog.provide('geneJS.Bootstrapper');
goog.require('geneJS.index');
goog.require('geneJS.Registry');



/**
 * Bootstrapper class includes things to do on startup.
 * @constructor
 */
geneJS.Bootstrapper = function() {
    var registry = new geneJS.Registry();
    var index = new geneJS.index();
    geneJS.templates();
    index.generate();
};