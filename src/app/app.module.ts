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
import { UpdateComponent } from './pages/admin/users/update/update.component';
import { DeleteComponent } from './pages/admin/users/delete/delete.component';
import { CreateComponent } from './pages/admin/users/create/create.component';
import { AdminGroupsComponent } from './pages/admin/admin-groups/admin-groups.component';
import { GroupsCreateComponent } from './pages/admin/admin-groups/groups-create/groups-create.component';
import { GroupsUpdateComponent } from './pages/admin/admin-groups/groups-update/groups-update.component';
import { GroupsDeleteComponent } from './pages/admin/admin-groups/groups-delete/groups-delete.component';
import { AdminCategoriesComponent } from './pages/admin/admin-categories/admin-categories.component';
import { CategoriesCreateComponent } from './pages/admin/admin-categories/categories-create/categories-create.component';
import { CategoriesUpdateComponent } from './pages/admin/admin-categories/categories-update/categories-update.component';
import { CategoriesDeleteComponent } from './pages/admin/admin-categories/categories-delete/categories-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PerfilComponent,
    EditComponent,
    AdminComponent,
    UsersComponent,
    UpdateComponent,
    DeleteComponent,
    CreateComponent,
    AdminGroupsComponent,
    GroupsCreateComponent,
    GroupsUpdateComponent,
    GroupsDeleteComponent,
    AdminCategoriesComponent,
    CategoriesCreateComponent,
    CategoriesUpdateComponent,
    CategoriesDeleteComponent
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
