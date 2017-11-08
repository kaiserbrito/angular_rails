import { Component, OnInit, Output, EventEmitter,ViewEncapsulation } from '@angular/core';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class LoginFormComponent implements OnInit {

  signInUser = {
    email: '',
    password: ''
  };

  @Output() onFormResult = new EventEmitter<any>();
  
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onSignInSubmit(){
    this.authService.loginUser(this.signInUser).subscribe(
      res => {
        if(res.status == 200) {
          this.onFormResult.emit({signedIn: true, res});
        }
      },
      err => {
        console.log('err:', err);
        this.onFormResult.emit({signedIn: false, err});
      }
    )
  }

}
