import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as AuthenticationActions from './authentication.actions';



@Injectable()
export class AuthenticationEffects {

  loadAuthentications$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(AuthenticationActions.loadAuthentications),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => AuthenticationActions.loadAuthenticationsSuccess({ data })),
          catchError(error => of(AuthenticationActions.loadAuthenticationsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
