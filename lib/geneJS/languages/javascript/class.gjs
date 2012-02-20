goog.provide('{{className}}');
{{#requires}}
goog.require('{{.}}');
{{/requires}}


{{=__ __=}}

/**
 *
 * @constructor
__#superClass__
 * @extends {__superClass__}
__/superClass__
__#constructors__
__#parameters__
 * @param {__type__} __paramName__
__/parameters__
 */
__={{ }}=__
{{className}} = function({{#iterator}}{{.}}{{/iterator}}) {
{{/constructors}}
{{^constructors}}
{{className}} = function() {
{{/constructors}}
{{#superClass}}
    goog.base(this);
{{#properties}}

{{/properties}}
{{/superClass}}
{{#properties}}
{{#cmp}}
    this.{{propName}} = new {{type}}();
{{/cmp}}
{{^cmp}}
    this.{{propName}};
{{/cmp}}
{{/properties}}
};
{{#superClass}}
goog.inherits({{className}}, {{superClass}});
{{/superClass}}


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
{{className}}.prototype.{{methodName}} = function({{#iterator}}{{.}}{{/iterator}}) {

};


{{/methods}}