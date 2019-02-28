import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ion-auth-firebaseui',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  egmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
