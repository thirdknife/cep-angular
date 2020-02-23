import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    AuthenticationRoutingModule,
    EffectsModule.forFeature([])
  ],
  providers: [UserService],
  exports: [LoginComponent]
})
export class AuthenticationModule { }
