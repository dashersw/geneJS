
var ignore  = ['application', 'library', 'cli', 'controllers', 'modules'];
var replace = {
    models : "Model"
}

var filterNames = function(names) {
    var filteredNames = [];
    goog.array.forEach(names, function (name) {
        if (ignore.indexOf(name) < 0) {
            if(replace[name]){
                name = replace[name];
            } 
            filteredNames.push(name);
        }
    });    
    return filteredNames;
}

String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g,"");
}

var filterIterator = function(){
    return function () {
        var params = [];
        goog.array.forEach(this.parameters, function (p) {
            
            var equationParts = p.paramName.split("=");
            
            if (equationParts[0]) {
                var parts = equationParts[0].trim().split(" ");
            } else {
                var parts = p.paramName.trim().split(" ");
            }
            
            if (parts[1]) {
                var paramName = parts[1].trim();

                if (equationParts[1]) {
                    params.push('$' + paramName + " = " + equationParts[1].trim());
                } else {
                    params.push('$' + paramName);
                }
            }
        });
        
        return params.join(', ');
    }
};

var filterRequires = function() {
    var scope = this;
    var out = [];
    goog.array.forEach(this.requires, function (req) {
        req.parentClassName = scope.className.charAt(0).toLowerCase() + scope.className.slice(1);
                
        if (req.name != 'OneToOne') {
            if (req.mappedBy == 'inversedBy') {
                var className = req.className.charAt(0).toLowerCase() + req.className.slice(1);

                req.joinColumnName = req.label ? req.label : className + 'Id';
                req.referencedColumnName = 'id';
            } else {
                req.joinColumnName = 'id';       
                req.referencedColumnName = req.label ? req.label : req.parentClassName + 'Id';
            }
        }
        
        if (scope.inherits && scope.inherits.fullName == req.fullName) {
            return;
        }
        
        out.push(req);
    });
    return out;
}

var filterFullClassName = function(){
    return function () {
        var delimiter = '_';                
        return [filterNames(this.namespace).join(delimiter), 
        this.className].join(delimiter);
    }
};

var filterFullUsingName = function(){
    return function(){
        var delimiter = '\\';
        return [delimiter, 
        filterNames(this.namespace).join(delimiter), 
        delimiter, 
        this.className].join('');
    }
};

var filterType = function(){
    return function () {
        return this.type.replace('_', ' ');
    }
};

var capitalize = function(){
    return function () {
        return this.propName.charAt(0).toUpperCase() + this.propName.slice(1);
    }
}

var decapitalize = function(){
    return function () {
        return this.className.charAt(0).toLowerCase() + this.className.slice(1);
    }
}

var filterVisibility = function(){
    return function () {
        if (this.visibility !== 'public') {
            return '_' + this.propName;
        }
    }
}

var filterIds = function(){
    var scope = this;
    var params = [];
    goog.array.forEach(this.properties, function (property) {
        if (property.propName === 'id') {
            property.parentClassName = scope.className.charAt(0).toLowerCase() + scope.className.slice(1);
            params.push(property); 
        }
    });
    return params;
}

var filterParams = function(){
    var params = [];
    goog.array.forEach(this.properties, function (property) {
        if (property.propName != 'id') {
            
            while (match = /\[(.*?)=(.*?)\]/.exec(property.type.name)) {
                property.type.name = property.type.name.replace(match[0], '');

                var parts = match[0].replace('[','').replace(']','').split('=');
                property[parts[0]] = parts[1];            
            }

            switch (property.type.name) 
            {
                case 'Date':
                    property.type.name = 'string';
                    property.validate = 'date';
                    break;
                    
                case 'String':
                    property.type.name = 'string';
                    property.validate = 'stringLength';
                    break;
            }

            params.push(property); 
        }
    });
    return params;
}

var filterOneToManys = function(){
    var out = [];
    goog.array.forEach(this.requires, function (req) {
        if (req.name == 'OneToMany') {
            out.push(req); 
        }
    });
    return out;
}

var defaultTemplate = {
    filters: {
        classType: filterType,
        iterator: filterIterator,
        fullClassName: filterFullClassName,
        fullUsingName: filterFullUsingName,
        propVariable: filterVisibility,
        propMethod: capitalize,
        classProperty: decapitalize,
        relations: filterRequires,
        id: filterIds,
        params: filterParams,
        oneToManys: filterOneToManys
    }
}

var php = {
    options: {
        defaultStereotype: 'class',
        fileExtension: 'php'
    },
    class: defaultTemplate,
    value: defaultTemplate,
    document: defaultTemplate,
    entity: defaultTemplate
}

module.exports = php;