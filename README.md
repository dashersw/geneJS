#geneJS

geneJS (pronounced genesis) is a JavaScript tool that generates JavaScript code from PlantUML class diagram source.

Read [this blog post](https://arm.ag/weekend-run-javascript-code-generation-from-plantuml-34b9e68ea394) about the motivation.

I started geneJS as a JavaScript code generator for my class diagrams, and then i thought of doing an abstraction so anyone can put in any language. For that purpose, geneJS uses the brilliant [mustache template engine](http://mustache.github.com).

geneJS parses the PlantUML source, builds an object tree based upon it and then renders it with mustache templates into JavaScript.

Since it's the product of a weekend code run, the code is as messy as it can be.

## Current version

I wanted to see if I could develop a reasonable code generator so I began from the end; coding templates and then the object tree output. The generator works fine with the functionality in the commented out, dummy object registry ( see Registry.js), but conversion from PlantUML is in its very early stages and is but a prototype.

## Near future

+ The code will cover all the class diagram paradigms of PlantUML.
+ It should run in Node with nclosure and read actual PlantUML files and create actual output files.
+ The code should be rearranged to make it possible to structurally add support for more languages.
+ geneJS should be able to generate its entire source code from appropriate PlantUML diagrams. (yeah right.)
