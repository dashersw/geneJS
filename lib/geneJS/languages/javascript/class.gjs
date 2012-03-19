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
 * @param {__#type.array__Array.<__/type.array____type.name____#type.array__>__/type.array__} __paramName__
__/parameters__
 */
__name__ = function(__#iterator____.____/iterator__) {
__/constructors__
__^constructors__
/**
 *
 * @constructor
__#inherits__
 * @extends {__fullName__}
__/inherits__
 */
 __={{ }}=__
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
 * @param {__#type.array__Array.<__/type.array____type.name____#type.array__>__/type.array__} __paramName__
__/parameters__
__#returns__
 * @return {__#returns.array__Array.<__/returns.array____returns.name____#returns.array__>__/returns.array__} __paramName__
__/returns__
 */
__={{ }}=__
{{name}}.prototype.{{methodName}} = function({{#iterator}}{{.}}{{/iterator}}) {

};


{{/methods}}