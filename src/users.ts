import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
//import 'fetch';

@inject(HttpClient)
export class Users{
  heading : String = 'Github Users';
  users : String[] = [];
  http: HttpClient;

  constructor(http:HttpClient){
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });

    this.http = http;
  }

  activate(){
    return this.http.get('users')
      .then(response => response.json())
      .then(users => this.users = users);
  }
}
