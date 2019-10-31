import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthenticationComponent} from './components/authentication/authentication.component';
import {LogoutComponent} from './components/logout/logout.component';
import {ErrorComponent} from './components/error/error.component';
import {ClientsComponent} from './components/clients/clients.component';
import {UserGuard} from './security/user.guard';

const routes: Routes = [
  {path: '' , redirectTo: 'login' , pathMatch: 'full' },
  {path: 'login', component: AuthenticationComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'clients', component: ClientsComponent, canActivate: [UserGuard]},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
