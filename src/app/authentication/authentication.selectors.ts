import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuthentication from './authentication.reducer';

export const selectAuthenticationState = createFeatureSelector<fromAuthentication.State>(
  fromAuthentication.authenticationFeatureKey
);
