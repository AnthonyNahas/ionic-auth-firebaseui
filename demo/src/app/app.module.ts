import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IonicAuthFirebaseuiModule} from 'ionic-auth-firebaseui';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBRsM4pAafuJEKi1B1XDyELE9x6PceKfzE',
      authDomain: 'ionic-auth-firebaseui.firebaseapp.com',
      databaseURL: 'https://ionic-auth-firebaseui.firebaseio.com',
      projectId: 'ionic-auth-firebaseui',
      storageBucket: 'ionic-auth-firebaseui.appspot.com',
      messagingSenderId: '286213096316'
    }),
    IonicAuthFirebaseuiModule.forRoot({
      apiKey: 'AIzaSyBRsM4pAafuJEKi1B1XDyELE9x6PceKfzE',
      authDomain: 'ionic-auth-firebaseui.firebaseapp.com',
      databaseURL: 'https://ionic-auth-firebaseui.firebaseio.com',
      projectId: 'ionic-auth-firebaseui',
      storageBucket: 'ionic-auth-firebaseui.appspot.com',
      messagingSenderId: '286213096316'
    }),
    AngularFirestoreModule,
    IonicModule.forRoot(),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
