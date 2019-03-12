import {Inject, InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {defaultAuthFirebaseUIConfig, IonicAuthFirebaseUIConfig} from './interfaces/config.interface';
import {FirebaseAppConfig, FirebaseNameOrConfigToken, FirebaseOptionsToken} from '@angular/fire';
import {AuthProcessService} from './services/auth-process.service';
import {FirestoreSyncService} from './services/firestore-sync.service';
import {AuthComponent} from './component/auth/auth.component';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';

// Export module's public API
export {AuthComponent} from './component/auth/auth.component';
export {AuthProcessService} from './services/auth-process.service';
export {FirestoreSyncService} from './services/firestore-sync.service';

export const IonicAuthFirebaseUIConfigToken = new InjectionToken<IonicAuthFirebaseUIConfig>('IonicAuthFirebaseUIConfig');

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    // ANGULARFIRE2
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  exports: [],
  declarations: []
})
export class IonicAuthFirebaseuiModule {

  static forRoot(configFactory: FirebaseAppConfig,
                 appNameFactory?: () => string,
                 config: IonicAuthFirebaseUIConfig = defaultAuthFirebaseUIConfig): ModuleWithProviders {
    return {
      ngModule: IonicAuthFirebaseuiModule,
      providers:
        [
          {
            provide: FirebaseOptionsToken,
            useValue: configFactory
          },
          {
            provide: FirebaseNameOrConfigToken,
            useFactory: appNameFactory
          },
          {
            provide: IonicAuthFirebaseUIConfigToken,
            useValue: config
          },
          AuthProcessService,
          FirestoreSyncService,
          // LoggedInGuard
        ],
    };
  }

  constructor(@Inject(IonicAuthFirebaseUIConfigToken)
              public config: IonicAuthFirebaseUIConfig) {
    this.config = Object.assign(defaultAuthFirebaseUIConfig, this.config);
  }
}
