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

goog.provide('geneJS.Parser');
goog.require('tart.StateMachine');
goog.require('goog.iter');



geneJS.Parser = function (text) {
    goog.base(this);
    this.events = geneJS.Parser.Events;
    this.text = text;
    this.namespaces = {};
    this.currentNamespace = '';
    this.classes = {};
    this.currentClass = null;
};
goog.inherits(geneJS.Parser, tart.StateMachine);

geneJS.Parser.prototype.createStates = function () {
    var INIT = new tart.State(function () {
        this.publish(this.events.START, this.text);
    });

    var STRIP_RELATIONS = new tart.State(function (text) {
        // TODO: strip class relations here.

        this.lines = text.split('\n');
        this.iter = goog.iter.toIterator(this.lines);
        this.parse();
    });

    var STACK_NAMESPACE = new tart.State(function (line) {
        var namespace = /^namespace\s+([\w\d\.]+)/g.exec(line)[1];
        this.namespaces[namespace] = {};
        this.currentNamespace = namespace;
    });

    var CLASS = new tart.State(function (line) {
        var className = /^class\s+([\w\d]*)(.*)/.exec(line)[1];
        className = (this.currentNamespace.length > 0 ? this.currentNamespace + '.' : '') + className;
        var cls = new geneJS.Class(className);
        this.classes[className] = this.currentClass = cls;
    });

    var PROPERTY = new tart.State(function (line) {
        var prop = /^([\+\-])\s*(\S+)\s+:\s+(\S+)/.exec(line);
        var property = new geneJS.Property(prop[2], prop[3], prop[1]);

        this.currentClass.properties.push(property);
    });

    var END_CLASS = new tart.State(function (line) {
        this.currentClass = null;
    });

    var END_NAMESPACE = new tart.State(function (line) {
        this.currentNamespace = '';
    });

    INIT.transitions[this.events.START] = STRIP_RELATIONS;

    STRIP_RELATIONS.transitions[this.events.NAMESPACE] = STACK_NAMESPACE;
    STRIP_RELATIONS.transitions[this.events.CLASS] = CLASS;

    STACK_NAMESPACE.transitions[this.events.NAMESPACE] = STACK_NAMESPACE;
    STACK_NAMESPACE.transitions[this.events.CLASS] = CLASS;
    STACK_NAMESPACE.transitions[this.events.END_NAMESPACE] = END_NAMESPACE;

    END_CLASS.transitions[this.events.CLASS] = CLASS;
    END_CLASS.transitions[this.events.END_NAMESPACE] = END_NAMESPACE;
    END_CLASS.transitions[this.events.NAMESPACE] = STACK_NAMESPACE;

    END_NAMESPACE.transitions[this.events.CLASS] = CLASS;
    END_NAMESPACE.transitions[this.events.NAMESPACE] = STACK_NAMESPACE;

    CLASS.transitions[this.events.PROPERTY] = PROPERTY;

    PROPERTY.transitions[this.events.PROPERTY] = PROPERTY;
    PROPERTY.transitions[this.events.END_CLASS] = END_CLASS;

    this.addState(INIT);
    this.addState(STRIP_RELATIONS);
    this.addState(STACK_NAMESPACE);
    this.addState(CLASS);
    this.addState(PROPERTY);
    this.addState(END_CLASS);
    this.addState(END_NAMESPACE);

    return INIT;
};

geneJS.Parser.Events = {
    START:'0',
    NAMESPACE:'1',
    CLASS:'2',
    PROPERTY:'3',
    END_NAMESPACE:'4',
    END_CLASS:'5'
};

geneJS.Parser.prototype.parse = function () {
    try {
        var line = this.iter.next();
        line = line.replace(/^\s+/, '');
        if (line.indexOf('}') > -1) {
            this.publish(this.events.END_CLASS, line);
        }
        else if (line.indexOf('end namespace') > -1) {
            this.publish(this.events.END_NAMESPACE, line);
        }
        else if (line.indexOf('namespace') > -1) {

            this.publish(this.events.NAMESPACE, line);
        }
        else if (line.indexOf('class') > -1) {
            this.publish(this.events.CLASS, line);
        }
        else if (line.indexOf(':') > -1) {
            this.publish(this.events.PROPERTY, line);
        }
        this.parse();
    }
    catch (e) {
        return;
    }
};

geneJS.Class = function (className) {
    this.className = className;
    this.properties = [];
    this.methods = [];
    this.requires = [];
};

geneJS.Property = function (propName, type, visibility) {
    this.propName = propName;
    this.type = type;
    this.visibility = visibility;
};
