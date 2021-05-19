import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCategoriesComponent } from './pages/admin/admin-categories/admin-categories.component';
import { CategoriesCreateComponent } from './pages/admin/admin-categories/categories-create/categories-create.component';
import { CategoriesDeleteComponent } from './pages/admin/admin-categories/categories-delete/categories-delete.component';
import { CategoriesUpdateComponent } from './pages/admin/admin-categories/categories-update/categories-update.component';
import { AdminGroupsComponent } from './pages/admin/admin-groups/admin-groups.component';
import { GroupsCreateComponent } from './pages/admin/admin-groups/groups-create/groups-create.component';
import { GroupsDeleteComponent } from './pages/admin/admin-groups/groups-delete/groups-delete.component';
import { GroupsUpdateComponent } from './pages/admin/admin-groups/groups-update/groups-update.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CreateComponent } from './pages/admin/users/create/create.component';
import { DeleteComponent } from './pages/admin/users/delete/delete.component';
import { UpdateComponent } from './pages/admin/users/update/update.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { EditComponent } from './pages/perfil/edit/edit.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'perfil/edit', component: EditComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/users', component: UsersComponent},
  {path: 'admin/users/update/:id', component: UpdateComponent},
  {path: 'admin/users/delete/:id', component: DeleteComponent},
  {path: 'admin/users/create', component: CreateComponent},
  {path: 'admin/groups', component: AdminGroupsComponent},
  {path: 'admin/groups/create', component: GroupsCreateComponent},
  {path: 'admin/groups/update/:id', component: GroupsUpdateComponent},
  {path: 'admin/groups/delete/:id', component: GroupsDeleteComponent},
  {path: 'admin/categories', component: AdminCategoriesComponent},
  {path: 'admin/categories/create', component: CategoriesCreateComponent},
  {path: 'admin/categories/update/:id', component: CategoriesUpdateComponent},
  {path: 'admin/categories/delete/:id', component: CategoriesDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
