import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {RouterModule,Routes} from '@angular/router';
import {FormsModule,ReactiveFormsModule}  from '@angular/forms';
//we are using forchild instead of forrrot because this is not a root module
@NgModule({
  imports: [
    CommonModule,FormsModule,RouterModule.forChild([{path:'signup',component:SignupComponent}])
  ],
  declarations: [LoginComponent, SignupComponent]
})
export class UserModule { }