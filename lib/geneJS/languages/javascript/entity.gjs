goog.provide('{{name}}');
{{#requires}}
goog.require('{{fullName}}');
{{/requires}}

{{=__ __=}}
/**
 *
 * @constructor
__#inherits__
 * @extends {__fullName__}
__/inherits__
 */
__={{ }}=__
{{name}} = function(data) {
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
goog.inherits({{name}}, {{fullName}});
{{/inherits}}


{{=__ __=}}
__#methods__
/**
 *
__#parameters__
 * @param {__#arrays____type____/arrays__} __paramName__
__/parameters__
__#returns__
 * @return {__#arrays____returns____/arrays__}
__/returns__
 */
__={{ }}=__
{{name}}.prototype.{{methodName}} = function({{#iterator}}{{className}}{{/iterator}}) {

};


{{/methods}}