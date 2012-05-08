<?php

{{#requires}}
use {{fullUsingName}} as {{className}};
{{/requires}}

class {{fullClassName}}{{#inherits}} extends {{className}}{{/inherits}} {

{{#properties}}
    {{visibility}} ${{propName}}; // {{type}}
{{/properties}}

{{#constructors}}
    /**
     * Constructor
{{#parameters}}
     * @param {{type}} {{paramName}}
{{/parameters}}
     */
    {{visibility}} function __construct({{#iterator}}{{.}}{{/iterator}})
    {

    }
{{/constructors}}

{{#methods}}
    /**
     *
     *
{{#parameters}}
     * @param {{type}} {{paramName}}
{{/parameters}}
    {{#returns}}
     * @return {{returns}}
{{/returns}}
     */
    {{visibility}} function {{methodName}}({{#iterator}}{{.}}{{/iterator}})
    {
        
    }

{{/methods}}
}
