goog.provide('{{className}}');
{{#requires}}
goog.require('{{.}}');
{{/requires}}


{{=__ __=}}

/**
 *
 * @constructor
__#inherits__
 * @extends {__inherits__}
__/inherits__
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
{{#inherits}}
    goog.base(this);
{{#properties}}

{{/properties}}
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
goog.inherits({{className}}, {{inherits}});
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
{{className}}.prototype.{{methodName}} = function({{#iterator}}{{.}}{{/iterator}}) {

};


{{/methods}}