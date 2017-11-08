import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Angular2TokenService } from "angular2-token";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {

  constructor(public authTokenService:Angular2TokenService, public authService:AuthService, private router:Router) { }

  logOut(){
    this.authService.logOutUser().subscribe(() => this.router.navigate(['/']));
  }
  
  ngOnInit() {
  }

}
