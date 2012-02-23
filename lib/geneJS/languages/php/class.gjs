<?php

{{#requires}}
use {{fullUsingName}};
{{/requires}}

class {{fullClassName}}{{#inherits}} extends {{fullClassName}}{{/inherits}} {

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
