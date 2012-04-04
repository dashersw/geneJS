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
{{#type.array}}
    this.{{propName}} = goog.array.map(data['{{propName}}'], function(item) {
        return new {{type.name}}(item);
    });
{{/type.array}}
{{^type.array}}
{{#type.cmp}}
    this.{{propName}} = new {{type.name}}(data['{{propName}}']);
{{/type.cmp}}
{{^type.cmp}}
    this.{{propName}} = data['{{propName}}'];
{{/type.cmp}}
{{/type.array}}
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
 * @param {__#type.array__Array.<__/type.array____type.name____#type.array__>__/type.array__} __paramName__
__/parameters__
__#returns__
 * @return {__#returns.array__Array.<__/returns.array____returns.name____#returns.array__>__/returns.array__}
__/returns__
 */
__={{ }}=__
{{name}}.prototype.{{methodName}} = function({{#iterator}}{{className}}{{/iterator}}) {

};


{{/methods}}