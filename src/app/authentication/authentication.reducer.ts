import { Action, createReducer, on } from '@ngrx/store';
import * as AuthenticationActions from './authentication.actions';

import { User } from './models/user';

export const authenticationFeatureKey = 'authentication';

export interface AuthenticationState {
  user: User;
}

export const initialState: AuthenticationState = {
  user: null
};

const authenticationReducer = createReducer(
  initialState,

  on(AuthenticationActions.loadAuthentications, state => state),
  on(AuthenticationActions.loadAuthenticationsSuccess, (state, action) => state),
  on(AuthenticationActions.loadAuthenticationsFailure, (state, action) => state),

);

export function reducer(state: AuthenticationState | undefined, action: Action) {
  console.log(state, action);
  return authenticationReducer(state, action);
}
