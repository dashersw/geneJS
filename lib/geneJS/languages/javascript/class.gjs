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
 * @param {__#arrays____type____/arrays__} __paramName__
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
 * @param {__#arrays____type____/arrays__} __paramName__
__/parameters__
__#returns__
 * @return {__#arrays____returns____/arrays__}
__/returns__
 */
__={{ }}=__
{{name}}.prototype.{{methodName}} = function({{#iterator}}{{.}}{{/iterator}}) {

};


{{/methods}}