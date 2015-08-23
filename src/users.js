var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};System.register(['aurelia-framework', 'aurelia-http-client'], function(exports_1) {
    var aurelia_framework_1, aurelia_http_client_1;
    var Users;
    return {
        setters:[
            function (_aurelia_framework_1) {
                aurelia_framework_1 = _aurelia_framework_1;
            },
            function (_aurelia_http_client_1) {
                aurelia_http_client_1 = _aurelia_http_client_1;
            }],
        execute: function() {
            //import 'fetch';
            Users = (function () {
                function Users(http) {
                    this.heading = 'Github Users';
                    this.users = [];
                    http.configure(function (config) {
                        config
                            .useStandardConfiguration()
                            .withBaseUrl('https://api.github.com/');
                    });
                    this.http = http;
                }
                Users.prototype.activate = function () {
                    var _this = this;
                    return this.http.get('users')
                        .then(function (response) { return response.json(); })
                        .then(function (users) { return _this.users = users; });
                };
                Users = __decorate([
                    aurelia_framework_1.inject(aurelia_http_client_1.HttpClient)
                ], Users);
                return Users;
            })();
            exports_1("Users", Users);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2Vycy50cyJdLCJuYW1lcyI6WyJVc2VycyIsIlVzZXJzLmNvbnN0cnVjdG9yIiwiVXNlcnMuYWN0aXZhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJQSxBQUZBLGlCQUFpQjs7Z0JBUWZBLGVBQVlBLElBQWVBO29CQUozQkMsWUFBT0EsR0FBWUEsY0FBY0EsQ0FBQ0E7b0JBQ2xDQSxVQUFLQSxHQUFjQSxFQUFFQSxDQUFDQTtvQkFJcEJBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFVBQUFBLE1BQU1BO3dCQUNuQkEsTUFBTUE7NkJBQ0hBLHdCQUF3QkEsRUFBRUE7NkJBQzFCQSxXQUFXQSxDQUFDQSx5QkFBeUJBLENBQUNBLENBQUNBO29CQUM1Q0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBRUhBLElBQUlBLENBQUNBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBO2dCQUNuQkEsQ0FBQ0E7Z0JBRURELHdCQUFRQSxHQUFSQTtvQkFBQUUsaUJBSUNBO29CQUhDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxPQUFPQSxDQUFDQTt5QkFDMUJBLElBQUlBLENBQUNBLFVBQUFBLFFBQVFBLElBQUlBLE9BQUFBLFFBQVFBLENBQUNBLElBQUlBLEVBQUVBLEVBQWZBLENBQWVBLENBQUNBO3lCQUNqQ0EsSUFBSUEsQ0FBQ0EsVUFBQUEsS0FBS0EsSUFBSUEsT0FBQUEsS0FBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsRUFBbEJBLENBQWtCQSxDQUFDQSxDQUFDQTtnQkFDdkNBLENBQUNBO2dCQXBCSEY7b0JBQUNBLDBCQUFNQSxDQUFDQSxnQ0FBVUEsQ0FBQ0E7MEJBcUJsQkE7Z0JBQURBLFlBQUNBO1lBQURBLENBQUNBLEFBckJELElBcUJDO1lBckJELHlCQXFCQyxDQUFBIn0=