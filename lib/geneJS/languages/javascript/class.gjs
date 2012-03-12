goog.provide('{{name}}');
{{#requires}}
goog.require('{{fullName}}');
{{/requires}}

{{=__ __=}}
__#constructors__
/**
 *
 * @constructor
__#inherits__
 * @extends {__fullName__}
__/inherits__
__#parameters__
 * @param {__type__} __paramName__
__/parameters__
 */
__={{ }}=__
{{name}} = function({{#iterator}}{{.}}{{/iterator}}) {
{{/constructors}}

{{^constructors}}
/**
 *
 * @constructor
 */
{{name}} = function() {
{{/constructors}}
{{#inherits}}
    goog.base(this);

{{/inherits}}
{{#properties}}
{{#cmp}}
    this.{{propName}} = new {{type}}();
{{/cmp}}
{{^cmp}}
    this.{{propName}};
{{/cmp}}
{{/properties}}
};
{{#inherits}}
goog.inherits({{name}}, {{fullName}});
{{/inherits}}


{{=__ __=}}
__#methods__
/**
 *
__#parameters__
 * @param {__type__} __paramName__
__/parameters__
__#returns__
 * @return {__returns__}
__/returns__
 */
__={{ }}=__
{{name}}.prototype.{{methodName}} = function({{#iterator}}{{.}}{{/iterator}}) {

};


{{/methods}}