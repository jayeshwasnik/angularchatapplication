import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//for routing module
import {RouterModule,Routes} from '@angular/router';

//importing chat and usermodule 
import {UserModule} from './user/user.module';
import {ChatModule} from './chat/chat.module';
import {LoginComponent} from './user/login/login.component'


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppService } from './app.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ChatModule,UserModule,RouterModule.forRoot([
    {path:'login',component:LoginComponent},
    {path:'',redirectTo:'login',pathMatch:'full'},
   
    {path:'*',component:LoginComponent},
    {path:'**',component:LoginComponent}
  ]) ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AppService]
})
export class AppModule { }
