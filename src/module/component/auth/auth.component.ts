import {Component, Input, OnInit, Output} from '@angular/core';
import {AuthProcessService, AuthProvider} from '../../services/auth-process.service';

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

  @Input()
  providers: string[] | string = AuthProvider.ALL;

  @Input()
  registrationEnabled = true;

  @Input()
  guestEnabled = true;

  @Output()
  onSuccess: any;

  @Output()
  onError: any;

  authProvider = AuthProvider;

  view: View = View.SINGIN;

  // constructor(public authProcess: AuthProcessService) {
  //   this.onSuccess = authProcess.onSuccessEmitter;
  //   this.onError = authProcess.onErrorEmitter;
  // }

  ngOnInit() {
  }

  public async signUpAnonymously() {
    // return await this.authProcess.signInWith(this.authProvider.ANONYMOUS);
    console.log('signUpAnonymously');
  }

  segmentButtonClicked(ev: any) {
    console.log('Segment button clicked', ev);
  }

  egmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
