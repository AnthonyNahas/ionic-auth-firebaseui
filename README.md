<p align="center">
  <img height="256px" width="256px" style="text-align: center;"
   src="https://cdn.jsdelivr.net/gh/anthonynahas/ionic-auth-firebaseui@master/assets/logo.svg">
</p>

# ionic-auth-firebaseui - Ionic UI component for firebase authentication powered by @firebase, @angular and @angular/fire

# PLEASE TAKE IN CONSIDERATION THAT THIS PROJECT STILLS UNDER DEVELOPMENT

[![npm version](https://badge.fury.io/js/ionic-auth-firebaseui.svg)](https://badge.fury.io/js/ionic-auth-firebaseui),
[![demo](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://ngx-auth-firebaseui.firebaseapp.com)
[![Join the chat at https://gitter.im/ngx-auth-firebaseui/Lobby](https://badges.gitter.im/ngx-auth-firebaseui/Lobby.svg)](https://gitter.im/ngx-auth-firebaseui/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![codecov](https://codecov.io/gh/anthonynahas/ionic-auth-firebaseui/branch/master/graph/badge.svg)](https://codecov.io/gh/anthonynahas/ionic-auth-firebaseui)
[![Build Status](https://travis-ci.org/AnthonyNahas/ionic-auth-firebaseui.svg?branch=master)](https://travis-ci.org/AnthonyNahas/ionic-auth-firebaseui)
[![CircleCI branch](https://img.shields.io/circleci/project/github/AnthonyNahas/ionic-auth-firebaseui/master.svg?label=circleci)](https://circleci.com/gh/AnthonyNahas/ionic-auth-firebaseui)
[![Coverage Status](https://coveralls.io/repos/github/AnthonyNahas/ionic-auth-firebaseui/badge.svg?branch=master)](https://coveralls.io/github/AnthonyNahas/ionic-auth-firebaseui?branch=master)
[![dependency Status](https://david-dm.org/AnthonyNahas/ionic-auth-firebaseui/status.svg)](https://david-dm.org/AnthonyNahas/ionic-auth-firebaseui)
[![devDependency Status](https://david-dm.org/AnthonyNahas/ionic-auth-firebaseui/dev-status.svg?branch=master)](https://david-dm.org/AnthonyNahas/ionic-auth-firebaseui#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/AnthonyNahas/ionic-auth-firebaseui.svg)](https://greenkeeper.io/)
[![license](https://img.shields.io/github/license/anthonynahas/ionic-auth-firebaseui.svg?style=flat-square)](https://github.com/AnthonyNahas/ionic-auth-firebaseui/blob/master/LICENSE)


- [Angular Material Design Version]() 
- [Angular Bootstrap Version](https://github.com/firebaseui/ng-bootstrap) 


## Built by and for developers :heart:
Do you have any question or suggestion ? Please do not hesitate to contact us!
Alternatively, provide a PR | open an appropriate issue [here](https://github.com/anthonynahas/ionic-auth-firebaseui/issues)

If you like this project, support [ionic-auth-firebaseui](https://github.com/anthonynahas/ionic-auth-firebaseui) 
by starring :star: and sharing it :loudspeaker:

## Table of Contents
- [Why to use ionic-auth-firebaseui ?](#why-to-use-ionic-auth-firebaseui)
- [Supported Providers](#supported-procress-and-actions)
- [Supported Processes and Actions](#supported-procress-and-actions)
- [Requirements](#requirements)
- [Demo](#demo)
- [Documentation](#documentation)
- [Screenshots](#screenshots)
- [Peer Dependencies](#peerDependencies)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Library's components](#components)
- [Configuration](#configuration)
- [Usage](#usage)
- [API](#api)
- [Run Demo App Locally](#run-demo-app-locally)
- [Other Angular Libraries](#other-angular-libraries)
- [Support](#support)
- [License](#license)

<a name="supported-providers"/>

## Supported Providers:
- anonymously
- email and password (traditional)
- google
- facebook
- twitter
- github
- phone number :soon:

<a name="supported-procress-and-actions"/>

## Supported Processes and Actions:
- sign up
- sign in
- sign in Anonymously | with google, facebook, twitter, github
- sign out
- validation of password's strength while creating a new account using [@angular-material-extensions/password-strength](https://github.com/AnthonyNahas/@angular-material-extensions/password-strength)
- forgot/reset password
- sending email verifications
- delete user's account
- edit user's profile like email, name, (profile picture :soon:) and phone number
- firestore auto sync :fire:  
- do not allow users to create new accounts before checking the terms of services and private policy - for mor info check this [here](https://ngx-auth-firebaseui.firebaseapp.com/examples/tos)

<a name="requirements"/>

### Requirements:
- [angular forms - v7.x](https://www.npmjs.com/package/@angular/forms)
- [@angular/fire - v5.x](https://www.npmjs.com/package/@angular/fire)
- [firebase - v5.x](https://www.npmjs.com/package/firebase)

## Demo

View all the directives in action at https://AnthonyNahas.github.io/ionic-auth-firebaseui

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 7x)
* [Ionic](https://ionicframework.com/) (*requires* Ionic 4 or higher, tested with 4x)

<a name="components"/>

## Library's components
- `<ionic-auth-firebaseui>` used for the authentication process
- `<ionic-auth-firebaseui-providers>` used to display only buttons for providers like google, facebook, twitter and github
- `<ionic-auth-firebaseui-user>` used to display/edit the data of the current authenticated user


## Installation
Install above dependencies via *npm*. 

Now install `ionic-auth-firebaseui` via:
```shell
npm install --save ionic-auth-firebaseui
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `ionic-auth-firebaseui`:
```js
map: {
  'ionic-auth-firebaseui': 'node_modules/ionic-auth-firebaseui/bundles/ionic-auth-firebaseui.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { IonicAuthFirebaseuiModule } from 'ionic-auth-firebaseui';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` IonicAuthFirebaseuiModule.forRoot()`):
```js
import { IonicAuthFirebaseuiModule } from 'ionic-auth-firebaseui';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [IonicAuthFirebaseuiModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` IonicAuthFirebaseuiModule `:

```js
import { IonicAuthFirebaseuiModule } from 'ionic-auth-firebaseui';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [IonicAuthFirebaseuiModule, ...], 
})
export class OtherModule {
}
```


<a name="configuration"/>

## (2) [Configuration](https://ngx-auth-firebaseui.firebaseapp.com/examples)

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { IonicAuthFirebaseUIModule } from 'ionic-auth-firebaseui';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // Specify the ngx-auth-firebaseui library as an import
    IonicAuthFirebaseUIModule.forRoot(
                {
                  apiKey: 'your-firebase-apiKey',
                  authDomain: 'your-firebase-authDomain',
                  databaseURL: 'your-firebase-databaseURL',
                  projectId: 'your-firebase-projectId',
                  storageBucket: 'your-firebase-storageBucket',
                  messagingSenderId: 'your-firebase-messagingSenderId'
                },
                 () => 'your_app_name_factory',
                {
                  enableFirestoreSync: true, // enable/disable autosync users with firestore
                  toastMessageOnAuthSuccess: false, // whether to open/show a snackbar message on auth success - default : true
                  toastMessageOnAuthError: false // whether to open/show a snackbar message on auth error - default : true
                }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

----

## Usage

Once the library is imported, you can use its components, directives and pipes in your Angular application:

### `<ngx-auth-firebaseui></ngx-auth-firebaseui>`

```html
<!-- You can now use the library component in app.component.html  -->

<ionic-auth-firebaseui (onSuccess)="printUser($event)"
                     (onError)="printError()">
</ionic-auth-firebaseui>
```
or
```typescript
<!-- or simply in the app.component.ts -->
@Component({
    selector: 'app',
    template: `
        <ionic-auth-firebaseui (onSuccess)="printUser($event)" (onError)="printError()"></ionic-auth-firebaseui>`
})
class AppComponent {

    printUser(event) {
        console.log(event);
    }

    printError(event) {
        console.error(event);
    }
}
```

<a name="api"/>

## API

###  `<ngx-auth-firebaseui></ngx-auth-firebaseui>`

| option | bind  |  type  |   default    | description  |
|:---------------------|:------:|:------:|:------------:|:-------------------------------------------------------------------------------------------------|
| providers            | Input()  | string[] | ['all'] or [AuthProvider.All] | choose your favorite authentication provider: google | facebook | twitter | github
| appearance           | Input()  | MatFormFieldAppearance | `standard` | the appearance of the mat-form-field #'legacy' | 'standard' | 'fill' | 'outline' 
| tabIndex             | Input()  | number  | null; | `0` | the selected tab - either sign in or register
| registrationEnabled  | Input()  | boolean | `true` | whether the user is able to register a new account
| resetPasswordEnabled | Input()  | boolean | `true` | whether the user is able to reset his account password
| guestEnabled         | Input()  | boolean | `true` | whether the user can sign in and continue as guest
| tosUrl               | Input()  | string  | - | the url of term of services
| privacyPolicyUrl     | Input()  | string  | - | the url of the private privacy
| goBackURL            | Input()  | string  | - | the url to redirect to after creating a new user and clicking the `go back` button - the button is only available when the input is provided 
| messageOnAuthSuccess | Input()  | string  | see the code -> | the message of the snackbar when the authentication process was successful
| messageOnAuthError   | Input()  | string  | see the code -> | the message of the snackbar when the authentication process has failed
| onSuccess            | Output() | any     | - | this will be fired when an authentication process was success. The authenticated user is emitted!
| onError              | Output() | any     | - | this event will be fired when an error occurred during the authentication process! An error message is emitted!


PS: if either `tosUrl or `privacyPolicyUrl` are provided, the user will be asked to check and accepts tos and pp before registering a new account or sign in in anonymously


### `<ionic-auth-firebaseui-user></ionic-auth-firebaseui-user>`

| option | bind  |  type  |   default    | description  |
|:---------------------|:------:|:------:|:------------:|:-------------------------------------------------------------------------------------------------|
| editMode           | Input() | boolean     | false | whether the use is in edit mode
| canLogout          | Input() | boolean     | true | whether to render the logout button
| canDeleteAccount   | Input() | boolean     | true | whether to render the delete account button
| appearance         | Input() | MatFormFieldAppearance     | - | the style of the mat-input-form
| onAccountDeleted   | Output()| void     | - | this will be fired when the user deletes his account

---

<a name="other-angular-libraries"/>

## Other Angular Libraries
- [ngx-auth-firebaseui](https://github.com/anthonynahas/ngx-auth-firebaseui)
- [@firebaseui/ng-bootstrap](https://github.com/firebaseui/ng-bootstrap)
- [ngx-linkifyjs](https://github.com/anthonynahas/ngx-linkifyjs)
- [@angular-material-extensions/password-strength](https://github.com/angular-material-extensions/password-strength)
- [@angular-material-extensions/link-preview](https://github.com/angular-material-extensions/link-preview)
- [@angular-material-extensions/pages](https://github.com/angular-material-extensions/pages)
- [@angular-material-extensions/contacts](https://github.com/angular-material-extensions/contacts)
- [@angular-material-extensions/faq](https://github.com/angular-material-extensions/faq)
- [@angular-material-extensions/jumbotron](https://github.com/angular-material-extensions/jumbotron)
- [@angular-material-extensions/google-maps-autocomplete](https://github.com/angular-material-extensions/google-maps-autocomplete)
- [@angular-material-extensions/combination-generator](https://github.com/angular-material-extensions/combination-generator)

---

<a name="support"/>

## Support
+ Drop an email to: [Anthony Nahas](mailto:anthony.na@hotmail.de)
+ or open an appropriate [issue](https://github.com/anthonynahas/ionic-auth-firebaseui/issues)
+ let us chat on [Gitter](https://gitter.im/ngx-auth-firebaseui/Lobby)
 
 Built by and for developers :heart: we will help you :punch:

---

## License

Copyright (c) 2019 [Anthony Nahas](https://github.com/AnthonyNahas). Licensed under the MIT License (MIT)

