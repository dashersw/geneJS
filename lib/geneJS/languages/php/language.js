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
                        params.push("$" + p.paramName);
                    });
                    return params.join(', ');
                }
            },
            fullClassName: function(){
                return function () {
                    var params = this.namespace;
                    params.push(this.className);
                    return params.join('_');
                }
            },
            fullUsingName: function(){
                return function(){
                    var delimiter = "\\";
                    var all = [];
                    goog.array.forEach(this.namespace, function (i) {
                        all.push(i);
                    });

                    all.push(this.className);
                    return delimiter + all.join(delimiter);
                }
            }
        }
    }
}

module.exports = php;