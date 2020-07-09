import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FormComponent } from './component/form/form.component';


//social login
import { SocialLoginModule, SocialAuthServiceConfig, SocialUser } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { ProfileComponent } from './component/profile/profile.component';
import { NavigationComponent } from './component/navigation/navigation.component';

//router
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RegistrationFlowComponent} from './component/registration-flow/registration-flow.component'
import {FirstStep} from './component/registration-flow/components/firstStep/firstStep.component';
import {SecondStep} from './component/registration-flow/components/secondStep/secondStep.component';
import {ThirdStep} from './component/registration-flow/components/thirdStep/thirdStep.component';
import {ForthStep} from './component/registration-flow/components/forthStep/forthStep.component';
import {TopMessageComponent} from './component/top-message/top-message.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    ProfileComponent,
    NavigationComponent,
    RegistrationFlowComponent,
    FirstStep,
    SecondStep,
    ThirdStep,
    ForthStep,
    TopMessageComponent
 ],
  imports: [
  BrowserModule,
    SocialLoginModule,
    RouterModule.forRoot([
      { path: 'profile', component: ProfileComponent}
    ]),
    BrowserAnimationsModule,

  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '76804023034-idv2p5nk878hrd3v20otkmn59to2vmu9.apps.googleusercontent.com'
            ),
          },
          // {
          //   id: FacebookLoginProvider.PROVIDER_ID,
          //   provider: new FacebookLoginProvider(''),
          // }
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
