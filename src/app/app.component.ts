import { Component } from '@angular/core';
import { Angular2TokenService } from "angular2-token";
import { environment } from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';
  constructor(private authToken: Angular2TokenService){
    this.authToken.init(environment.token_auth_config);

    // Test the connection
    this.authToken.signIn({email: "example@example.com", password: "12345"}).subscribe(
      res => {
        console.log('auth response:', res);
        console.log('auth response headers: ', res.headers.toJSON());
        console.log('auth response body:', res.json());
      },
      err => {
        console.log('auth error:', err);
      }
    )
  }
}
