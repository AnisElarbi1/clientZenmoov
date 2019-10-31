import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthenticationComponent} from './components/authentication/authentication.component';
import {ClientsComponent} from './components/clients/clients.component';
import {HeaderComponent} from './components/header/header.component';
import {FormsModule} from '@angular/forms';
import { LogoutComponent } from './components/logout/logout.component';
import { ErrorComponent } from './components/error/error.component';
import {AuthenticationService} from './services/authentication.service';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {NgxSpinnerModule} from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    ClientsComponent,
    HeaderComponent,
    LogoutComponent,
    ErrorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgxSpinnerModule,
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
