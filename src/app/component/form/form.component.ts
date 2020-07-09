import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import {GoogleService} from '../../services/google.service'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})



export class FormComponent implements OnInit {

  
  constructor(private googleAuth:GoogleService) { }

  signInWithGoogle():void{
    this.googleAuth.signInWithGoogle();
    const secondRegWindow = document.getElementsByClassName('second-reg-window')[0];
    secondRegWindow.classList.remove('closed')
    
  }


 
 
  ngOnInit():void {
   
 
    
  }

  

}
