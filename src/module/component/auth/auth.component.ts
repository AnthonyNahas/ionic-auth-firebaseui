import {Component, OnInit} from '@angular/core';

export enum View {
  SINGIN = 'SINGIN',
  SINGUP = 'SINGUP'
}

@Component({
  selector: 'ion-auth-firebaseui',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  view: View = View.SINGIN;

  constructor() {
  }

  ngOnInit() {
  }

  segmentButtonClicked(ev: any) {
    console.log('Segment button clicked', ev);
  }

  egmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
