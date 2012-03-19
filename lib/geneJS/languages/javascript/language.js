var filterIterator = function () {
    return function () {
        var params = [];
        goog.array.forEach(this.parameters, function (p) {
            params.push(p.paramName);
        });
        return params.join(', ');
    }
};

var javascript = {
    options: {
        defaultStereotype: 'class',
        fileExtension: 'js'
    },
    class: {
        filters: {
            iterator: filterIterator

        }
    },
    entity: {
        filters: {
            iterator: filterIterator
        }
    }
}

module.exports = javascript;