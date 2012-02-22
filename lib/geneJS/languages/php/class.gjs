<?php

{{#requires}}
use {{.}};
{{/requires}}


class {{className}}{{#inherits}} extends {{inherits}}{{/inherits}} {

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
    {{visibility}} function __construct({{#paramIterator}}{{.}}{{/paramIterator}})
    {

    }
{{/constructors}}

{{#methods}}
    /**
     *
{{#parameters}}
     * @param {{type}} {{paramName}}
{{/parameters}}
    {{#returns}}
     * @return {{returns}}
{{/returns}}
     */
    {{visibility}} function {{methodName}}({{#paramIterator}}{{.}}{{/paramIterator}})
    {
        
    }

{{/methods}}
}
