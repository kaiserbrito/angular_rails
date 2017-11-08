import { Component, OnInit, Input, EventEmitter,ViewEncapsulation } from '@angular/core';
import { MaterializeAction } from "angular2-materialize";

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class AuthDialogComponent implements OnInit {
  
  @Input('auth-mode') authMode: 'login' | 'register' = 'login';
  modalActions = new EventEmitter<string|MaterializeAction>();
  
  constructor() { }

  onLoginForm(e){
    if(e.signedIn){
      this.closeDialog();
    } else {
      alert(e.err.json().errors.full_message[0]);
    }
  }
  
  openDialog(mode: 'login' | 'register' = 'login'){
    this.authMode = mode;
    this.modalActions.emit({action:"modal", params:['open']});
  }

  closeDialog(){
    this.modalActions.emit({action:"modal", params:['close']});
  }

  ngOnInit() {
  }

  isLoginMode(){return this.authMode == 'login'}
  isRegisterMode(){return this.authMode == 'register'}

}
