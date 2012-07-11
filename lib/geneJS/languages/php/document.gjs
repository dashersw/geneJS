<?php

use Doctrine\ODM\MongoDB\Mapping\Annotations as ODM;
{{#requires}}
use {{fullUsingName}} as {{className}};
{{/requires}}

/** @ODM\EmbeddedDocument **/
{{classType}} {{fullClassName}}{{#inherits}} extends {{className}}{{/inherits}} {

{{#properties}}
    /** @ODM\{{type.name}} */
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
    public function get{{propMethod}}()
    {
        return $this->{{propVariable}};
    }
    
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
