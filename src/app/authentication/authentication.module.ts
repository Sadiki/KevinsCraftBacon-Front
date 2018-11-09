import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuthenticationComponent],
  exports: [AuthenticationComponent]
})
export class AuthenticationModule { }
