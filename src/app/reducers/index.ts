import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { storeLogger } from 'ngrx-store-logger';
import * as fromAuthentication from '../authentication/authentication.reducer';

export function logger(reducer: ActionReducer<AppState>): any {
  // default, no options
  return storeLogger()(reducer);
}


export interface AppState {

  [fromAuthentication.authenticationFeatureKey]: fromAuthentication.AuthenticationState;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromAuthentication.authenticationFeatureKey]: fromAuthentication.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [logger];
