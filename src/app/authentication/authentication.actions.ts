import { Injectable } from '@angular/core'
import { createAction, props, Store } from '@ngrx/store';
import { AppState } from '../reducers';

export const loadAuthentications = createAction(
  '[Authentication] Load Authentications'
);

export const loadAuthenticationsSuccess = createAction(
  '[Authentication] Load Authentications Success',
  props<{ data: any }>()
);

export const loadAuthenticationsFailure = createAction(
  '[Authentication] Load Authentications Failure',
  props<{ error: any }>()
);
