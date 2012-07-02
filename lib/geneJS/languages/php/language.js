var filterIterator = function(){
    return function () {
        var params = [];
        goog.array.forEach(this.parameters, function (p) {
            console.log(p);
            params.push('$' + p.paramName);
        });
        return params.join(', ');
    }
};

var filterFullClassName = function(){
    return function () {
        var delimiter = '_';
        return [this.namespace.join(delimiter), 
        this.className].join(delimiter);
    }
};

var filterFullUsingName = function(){
    return function(){
        var delimiter = '\\';
        return [delimiter, 
        this.namespace.join(delimiter), 
        delimiter, 
        this.className].join('');
    }
};

var php = {
    options: {
        defaultStereotype: 'class',
        fileExtension: 'php'
    },
    class: {
        filters: {
            iterator: filterIterator,
            fullClassName: filterFullClassName,
            fullUsingName: filterFullUsingName
        }
    },
    entity: {
        filters: {
            iterator: filterIterator,
            fullClassName: filterFullClassName,
            fullUsingName: filterFullUsingName
        }
    }
}

module.exports = php;