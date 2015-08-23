import {Aurelia} from 'aurelia-framework'

export function configure(aurelia: any) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css');

  aurelia.start().then(a => a.setRoot("app"));
}
