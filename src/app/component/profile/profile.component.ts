import { Component, OnInit, Input } from '@angular/core';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  SocialUser,
} from 'angularx-social-login';

import { GoogleService } from '../../services/google.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: any = {name:''};
  loggedIn: boolean;
  constructor(private googleAuth: GoogleService) {}

  ngOnInit(): void {
    this.googleAuth.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
    });
  }
}
