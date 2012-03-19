var filterIterator = function () {
    return function () {
        var params = [];
        goog.array.forEach(this.parameters, function (p) {
            params.push(p.paramName);
        });
        return params.join(', ');
    }
};

var filterArrays = function () {
    return function () {
        var type = this.type|| this.returns || "";
        var arrayRep = '[]';

        if(type.indexOf(arrayRep) > 0){
            return 'Array.<' + type.replace(arrayRep, '') + '>';
        }
        return type;
    }
};

var javascript = {
    options: {
        defaultStereotype: 'class',
        fileExtension: 'js'
    },
    class: {
        filters: {
            iterator: filterIterator,
            arrays: filterArrays

        }
    },
    entity: {
        filters: {
            iterator: filterIterator,
            arrays: filterArrays
        }
    }
}

module.exports = javascript;