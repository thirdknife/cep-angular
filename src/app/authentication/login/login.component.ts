import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { loadAuthentications } from '../authentication.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor(
    private readonly store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadAuthentications())
    console.log('calling on init');
  }

}
