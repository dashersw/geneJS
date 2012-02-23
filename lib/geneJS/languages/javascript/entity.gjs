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
 */
__={{ }}=__
{{className}} = function(data) {
{{#inherits}}
    goog.base(this, data);

{{/inherits}}
{{#properties}}
{{#cmp}}
    this.{{propName}} = new {{type}}(data['{{propName}}']);
{{/cmp}}
{{^cmp}}
    this.{{propName}} = data['{{propName}}'];
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
{{className}}.prototype.{{methodName}} = function({{#iterator}}{{className}}{{/iterator}}) {

};


{{/methods}}