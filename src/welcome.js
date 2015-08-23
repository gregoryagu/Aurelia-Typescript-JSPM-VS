System.register([], function(exports_1) {
    var Welcome, UpperValueConverter;
    return {
        setters:[],
        execute: function() {
            Welcome = (function () {
                function Welcome() {
                    this.heading = 'Welcome to the Aurelia Navigation App!';
                    this.firstName = 'John';
                    this.lastName = 'Doe';
                    this.previousValue = this.fullName;
                }
                Object.defineProperty(Welcome.prototype, "fullName", {
                    //Getters can't be observed with Object.observe, so they must be dirty checked.
                    //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
                    //To optimize by declaring the properties that this getter is computed from, uncomment the line below.
                    //@computedFrom('firstName', 'lastName')
                    get: function () {
                        return this.firstName + " " + this.lastName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Welcome.prototype.submit = function () {
                    this.previousValue = this.fullName;
                    alert("Welcome, " + this.fullName + "!");
                };
                Welcome.prototype.canDeactivate = function () {
                    if (this.fullName !== this.previousValue) {
                        return confirm('Are you sure you want to leave?');
                    }
                };
                return Welcome;
            })();
            exports_1("Welcome", Welcome);
            UpperValueConverter = (function () {
                function UpperValueConverter() {
                }
                UpperValueConverter.prototype.toView = function (value) {
                    return value && value.toUpperCase();
                };
                return UpperValueConverter;
            })();
            exports_1("UpperValueConverter", UpperValueConverter);
        }
    }
});
//# sourceMappingURL=welcome.js.map