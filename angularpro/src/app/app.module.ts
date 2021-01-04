import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { LoginAdminComponent } from './user/login-admin/login-admin.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { BookDetailsComponent } from './admin-panel/book-details/book-details.component';
import { BookDetailsFormComponent } from './admin-panel/book-details/book-details-form/book-details-form.component';
import { bookdetailServices } from './shared/book-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    LoginAdminComponent,
    RegistrationComponent,
    BookDetailsComponent,
    BookDetailsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    })
  ],
  providers: [bookdetailServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
