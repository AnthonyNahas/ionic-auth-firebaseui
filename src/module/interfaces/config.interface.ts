export interface IonicAuthFirebaseUIConfig {
  authGuardFallbackURL?: string,
  enableFirestoreSync?: boolean,
  toastMessageOnAuthSuccess?: boolean,
  toastMessageOnAuthError?: boolean
}

export const defaultAuthFirebaseUIConfig: IonicAuthFirebaseUIConfig = {
  authGuardFallbackURL: '/',
  enableFirestoreSync: true,
  toastMessageOnAuthSuccess: true,
  toastMessageOnAuthError: true
};

