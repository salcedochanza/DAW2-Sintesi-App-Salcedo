import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { EditComponent } from './pages/perfil/edit/edit.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { ViewComponent } from './pages/admin/users/view/view.component';
import { UpdateComponent } from './pages/admin/users/update/update.component';
import { DeleteComponent } from './pages/admin/users/delete/delete.component';
import { CreateComponent } from './pages/admin/users/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PerfilComponent,
    EditComponent,
    AdminComponent,
    UsersComponent,
    ViewComponent,
    UpdateComponent,
    DeleteComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
