<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/AnthonyNahas/ionic-auth-firebaseui/master/demo/src/assets/logo.svg">
</p>

# ionic-auth-firebaseui - Ionic UI component for firebase authentication powered by @firebase, @angular and @angular/fire

[![npm version](https://badge.fury.io/js/ionic-auth-firebaseui.svg)](https://badge.fury.io/js/ionic-auth-firebaseui),
[![Build Status](https://travis-ci.org/AnthonyNahas/ionic-auth-firebaseui.svg?branch=master)](https://travis-ci.org/AnthonyNahas/ionic-auth-firebaseui)
[![Coverage Status](https://coveralls.io/repos/github/AnthonyNahas/ionic-auth-firebaseui/badge.svg?branch=master)](https://coveralls.io/github/AnthonyNahas/ionic-auth-firebaseui?branch=master)
[![dependency Status](https://david-dm.org/AnthonyNahas/ionic-auth-firebaseui/status.svg)](https://david-dm.org/AnthonyNahas/ionic-auth-firebaseui)
[![devDependency Status](https://david-dm.org/AnthonyNahas/ionic-auth-firebaseui/dev-status.svg?branch=master)](https://david-dm.org/AnthonyNahas/ionic-auth-firebaseui#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/AnthonyNahas/ionic-auth-firebaseui.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at https://AnthonyNahas.github.io/ionic-auth-firebaseui

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

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
import { LibModule } from 'ionic-auth-firebaseui';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from 'ionic-auth-firebaseui';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from 'ionic-auth-firebaseui';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2019 Anthony Nahas. Licensed under the MIT License (MIT)

