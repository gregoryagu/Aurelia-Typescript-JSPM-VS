import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import {RouterConfiguration, AppRouter} from 'aurelia-router'


export class App {

    router: AppRouter;

  configureRouter(config: RouterConfiguration, router: AppRouter){
    config.title = 'Aurelia';
    config.map([
      { route: ['','welcome'],  name: 'welcome',      moduleId: 'welcome',      nav: true, title:'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title:'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title:'Child Router' }
    ]);

    this.router = router;
  }
}
