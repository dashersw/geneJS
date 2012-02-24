var php = {
    options: {
        defaultStereotype: 'class',
        fileExtension: 'php'
    },
    class: {
        filters: {
            iterator: function () {
                return function () {
                    var params = [];
                    goog.array.forEach(this.parameters, function (p) {
                        params.push(p.paramName);
                    });
                    return params.join(', ');
                }
            },
            paramIterator: function () {
                return function () {
                    var params = [];
                    goog.array.forEach(this.parameters, function (p) {
                        params.push('$' + p.paramName);
                    });
                    return params.join(', ');
                }
            },
            fullClassName: function(){
                return function () {
                    var delimiter = '_';
                    return [this.namespace.join(delimiter), 
                        this.className].join(delimiter);
                }
            },
            fullUsingName: function(){
                return function(){
                    var delimiter = '\\';
                    return [delimiter, 
                        this.namespace.join(delimiter), 
                        delimiter, 
                        this.className].join('');
                }
            }
        }
    }
}

module.exports = php;