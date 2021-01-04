import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { BookDetailsComponent } from './admin-panel/book-details/book-details.component';
import { HomeComponent } from './home/home.component';
import { LoginAdminComponent } from './user/login-admin/login-admin.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/user/login', pathMatch: 'full' },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent },
      { path: 'loginAdmin', component: LoginAdminComponent }
    ]
  },
 { path: 'home', component: HomeComponent },

  {
    path: 'adminpanel', component: AdminPanelComponent
  },
  { path: 'bookdetails', component: BookDetailsComponent } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
