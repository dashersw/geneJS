<?php

{{#requires}}
use {{fullUsingName}} as {{className}};
{{/requires}}

{{classType}} {{fullClassName}}{{#inherits}} extends {{className}} {{/inherits}} {

{{#properties}}
    /**
     * @var {{type.name}}
     */
    {{visibility}} ${{propVariable}};
    
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
{{#properties}}
    /**
     *
     * @return {{type.name}}
     */
    public function get{{propMethod}}()
    {
        return $this->{{propVariable}};
    }
    
    /**
     *
     * @param {{type.name}} ${{propName}}
     */
    public function set{{propMethod}}(${{propName}})
    {
        $this->{{propVariable}} = ${{propName}};
    }
    
{{/properties}}
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
