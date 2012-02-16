goog.provide('{{className}}');
{{#requires}}
goog.require('{{.}}');
{{/requires}}


{{=__ __=}}

/**
 *
 * @constructor
__#extends__
 * @extends {__extends__}
__/extends__
 */
__={{ }}=__
{{className}} = function(data) {
{{#extends}}
    goog.base(this, data);
{{/extends}}

{{#properties}}
{{#cmp}}
    this.{{propName}} = new {{type}}(data['{{propName}}']);
{{/cmp}}
{{^cmp}}
    this.{{propName}} = data['{{propName}}'];
{{/cmp}}
{{/properties}}
};
{{#extends}}
goog.inherits({{className}}, {{extends}});
{{/extends}}


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
{{className}}.prototype.{{methodName}} = function({{#iterator}}{{className}}{{/iterator}}) {

};


{{/methods}}