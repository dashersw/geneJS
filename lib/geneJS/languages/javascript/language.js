var javascript = {
    options: {
        defaultStereotype: 'class',
        fileExtension: 'js'
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
            }
        }
    }
}

module.exports = javascript;