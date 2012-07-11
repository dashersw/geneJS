<?php

{{#requires}}
use {{fullUsingName}};
{{/requires}}

{{classType}} {{fullClassName}}{{#inherits}} extends {{fullClassName}}{{/inherits}} {
{{#id}}
    
   /**
    * @Id
    * @GeneratedValue(strategy="SEQUENCE")
    * @SequenceGenerator(sequenceName="{{parentClassName}}Id", initialValue=1, allocationSize=1)
    * @Column(type="integer", name="id")
    * @EntityResource(
    * 		displayName="", 
    * 		settable=1, resettable=0, searchable=1, sortable=1, gettable=1
    * )
    * @Validate(name={"digits"})
    */
    {{visibility}} ${{propName}};
{{/id}}
{{#params}}
    
   /**
    * @Column(type="{{type.name}}", name="{{propName}}"{{#max}}, length={{max}}{{/max}}{{#unique}}, unique={{unique}}{{/unique}}{{#nullable}}, nullable={{nullable}}{{/nullable}}")
    * @EntityResource(
    * 		{{#displayName}}displayName="{{displayName}}",{{/displayName}}{{^displayName}}displayName="",{{/displayName}}
    * 		{{#settable}}settable={{settable}}{{/settable}}{{^settable}}settable=1{{/settable}}{{#resettable}}, resettable={{resettable}}{{/resettable}}{{^resettable}}, resettable=1{{/resettable}}{{#searchable}}, searchable={{searchable}}{{/searchable}}{{^searchable}}, searchable=1{{/searchable}}{{#sortable}}, sortable={{sortable}}{{/sortable}}{{^sortable}}, sortable=1{{/sortable}}{{#gettable}}, gettable={{gettable}}{{/gettable}}{{^gettable}}, gettable=1{{/gettable}}
    * )
    * @Validate(name={"{{validate}}{{#min}}={"min"={{min}}{{/min}}{{#max}},"max"={{max}}}{{/max}}{{#min}}{{^max}}}{{/max}}{{/min}}"})
    */
    {{visibility}} ${{propName}};
{{/params}}
{{#relations}}
    
    /**
     * @{{name}}(targetEntity="{{fullClassName}}", {{mappedBy}}="{{parentClassName}}"{{#cascade}}, cascade={"all"}{{/cascade}}))
{{#joinColumnName}}
     * @JoinColumn(name="{{joinColumnName}}", referencedColumnName="{{referencedColumnName}}")     
{{/joinColumnName}}
     * @EntityResource(
    * 		settable=1, resettable=1, searchable=1, sortable=1, gettable=1,
    *           targetEntity="{{fullClassName}}"
     * )
     */
    public ${{classProperty}}s;
{{/relations}} 
{{#constructors}}
    
    /**
     * Constructor
{{#parameters}}
     * @param {{type}} {{paramName}}
{{/parameters}}
     */
    {{visibility}} function __construct({{#iterator}}{{.}}{{/iterator}})
    {
{{#oneToManys}}
        $this->{{classProperty}}s = new \Doctrine\Common\Collections\ArrayCollection();    
{{/oneToManys}}
    }
{{/constructors}}
{{^constructors}}

    /**
     * Constructor
     */
    function __construct()
    {
{{#oneToManys}}
        $this->{{classProperty}}s = new \Doctrine\Common\Collections\ArrayCollection();    
{{/oneToManys}}
    }
{{/constructors}}
{{#properties}}
    
    /**
     *
     * @return {{type.name}}
     */
    public function get{{propMethod}}()
    {
        return $this->{{propName}};
    }
    
    /**
     *
     * @param {{type.name}} ${{propName}}
     */
    public function set{{propMethod}}(${{propName}})
    {
        $this->{{propName}} = ${{propName}};
    }
{{/properties}}
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
