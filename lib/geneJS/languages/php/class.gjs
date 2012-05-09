<?php

{{#requires}}
use {{fullUsingName}} as {{className}};
{{/requires}}

class {{fullClassName}}{{#inherits}} extends {{className}}{{/inherits}} {

{{#properties}}
    /*
     * @var {{type.name}}
     */
    {{visibility}} ${{propName}}; 

{{/properties}}

{{#constructors}}
    /**
     * Constructor
{{#parameters}}
     * @param {{type.name}} {{paramName}}
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
     * @param {{type.name}} {{paramName}}
{{/parameters}}
{{#returns}}
     * @return {{returns.name}}
{{/returns}}
     */
    {{visibility}} function {{methodName}}({{#iterator}}{{.}}{{/iterator}})
    {
        
    }

{{/methods}}
}
