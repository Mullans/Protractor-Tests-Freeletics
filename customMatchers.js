var customMatchers = {

    toHaveClass: function () {
        return {
            compare: function (element, className) {
                return {
                    pass: element.getAttribute('class').then(function (classes) {
                        return classes.split(' ').indexOf(className) !== -1||classes.split(' ').indexOf(className+"\n") !== -1;
                    }),
                    message: "Expected elemenet to have class: "+className
                }
            },
            negativeCompare: function(element, className){
                return {
                    pass: element.getAttribute('class').then(function (classes) {
                        return classes.split(' ').indexOf(className) !== -1||classes.split(' ').indexOf(className+"\n") === -1;
                    }),
                    message: "Expected element not to have class: " + className
                }
            }
        }
    }
};

module.exports = customMatchers;
