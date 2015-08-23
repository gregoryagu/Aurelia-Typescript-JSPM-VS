System.register(['bootstrap', 'bootstrap/css/bootstrap.css!'], function(exports_1) {
    var App;
    return {
        setters:[
            function (_) {},
            function (_) {}],
        execute: function() {
            App = (function () {
                function App() {
                }
                App.prototype.configureRouter = function (config, router) {
                    config.title = 'Aurelia';
                    config.map([
                        { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' },
                        { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users' },
                        { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
                    ]);
                    this.router = router;
                };
                return App;
            })();
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbIkFwcCIsIkFwcC5jb25zdHJ1Y3RvciIsIkFwcC5jb25maWd1cmVSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFLQTtnQkFBQUE7Z0JBY0FDLENBQUNBO2dCQVZDRCw2QkFBZUEsR0FBZkEsVUFBZ0JBLE1BQTJCQSxFQUFFQSxNQUFpQkE7b0JBQzVERSxNQUFNQSxDQUFDQSxLQUFLQSxHQUFHQSxTQUFTQSxDQUFDQTtvQkFDekJBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBO3dCQUNUQSxFQUFFQSxLQUFLQSxFQUFFQSxDQUFDQSxFQUFFQSxFQUFDQSxTQUFTQSxDQUFDQSxFQUFHQSxJQUFJQSxFQUFFQSxTQUFTQSxFQUFPQSxRQUFRQSxFQUFFQSxTQUFTQSxFQUFPQSxHQUFHQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFDQSxTQUFTQSxFQUFFQTt3QkFDdEdBLEVBQUVBLEtBQUtBLEVBQUVBLE9BQU9BLEVBQVVBLElBQUlBLEVBQUVBLE9BQU9BLEVBQVNBLFFBQVFBLEVBQUVBLE9BQU9BLEVBQVNBLEdBQUdBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLEVBQUNBLGNBQWNBLEVBQUVBO3dCQUMzR0EsRUFBRUEsS0FBS0EsRUFBRUEsY0FBY0EsRUFBR0EsSUFBSUEsRUFBRUEsY0FBY0EsRUFBRUEsUUFBUUEsRUFBRUEsY0FBY0EsRUFBRUEsR0FBR0EsRUFBRUEsSUFBSUEsRUFBRUEsS0FBS0EsRUFBQ0EsY0FBY0EsRUFBRUE7cUJBQzVHQSxDQUFDQSxDQUFDQTtvQkFFSEEsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsTUFBTUEsQ0FBQ0E7Z0JBQ3ZCQSxDQUFDQTtnQkFDSEYsVUFBQ0E7WUFBREEsQ0FBQ0EsQUFkRCxJQWNDO1lBZEQscUJBY0MsQ0FBQSJ9