import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration-flow',
  templateUrl: './registration-flow.component.html',
  styleUrls: ['./registration-flow.component.scss']
})
export class RegistrationFlowComponent implements OnInit {

  constructor(private router:Router) { }
  dialog: boolean = false;
  state: String = 'first';
  buttonTitle:string='';
  function;

  next() {
    switch(this.state) {
      case 'first':
        this.state = 'second';
        this.buttonTitle ='Ga verder'
        break;
      case 'second':
        this.state = 'third';
        this.buttonTitle ='Opslaan en afronden'
        break;
      case 'third':
      this.state = 'forth';
      this.buttonTitle ='Registratie afmaken'
      break;
    
    }
 
  }
  vorige(){
    switch(this.state) {
      case 'second':
        this.state = 'first';
        this.buttonTitle ='Ga verder'
        break;
      case 'third':
          this.state = 'second';
          this.buttonTitle ='Ga verder'
          break;
      case 'forth':
          this.state = 'third';
          this.buttonTitle ='Opslaan en afronden'
          break;
     
    }
    console.log('v',this.state)
  }

  toggle() {
    this.dialog = !this.dialog;
  }

  afronden(){
      this.router.navigateByUrl('/profile');
  }

  close(){
    console.log('close')
    const secondRegWindow = document.getElementsByClassName('second-reg-window')[0];
    // const regContainer = document.getElementsByClassName('registration-container')[0];

    secondRegWindow.classList.add('closed')
    // regContainer.classList.add('closed')
  }
  

  ngOnInit(): void {
  }

}
