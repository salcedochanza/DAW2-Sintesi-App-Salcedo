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
import { AdminRecursosComponent } from './pages/admin/admin-recursos/admin-recursos.component';
import { RecursosCreateComponent } from './pages/admin/admin-recursos/recursos-create/recursos-create.component';
import { RecursosDeleteComponent } from './pages/admin/admin-recursos/recursos-delete/recursos-delete.component';
import { RecursosUpdateComponent } from './pages/admin/admin-recursos/recursos-update/recursos-update.component';
import { AdminTagsComponent } from './pages/admin/admin-tags/admin-tags.component';
import { TagsCreateComponent } from './pages/admin/admin-tags/tags-create/tags-create.component';
import { TagsDeleteComponent } from './pages/admin/admin-tags/tags-delete/tags-delete.component';
import { TagsUpdateComponent } from './pages/admin/admin-tags/tags-update/tags-update.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CreateComponent } from './pages/admin/users/create/create.component';
import { DeleteComponent } from './pages/admin/users/delete/delete.component';
import { UpdateComponent } from './pages/admin/users/update/update.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { HomeComponent } from './pages/home/home.component';
import { ListRecursosComponent } from './pages/list-recursos/list-recursos.component';
import { LoginComponent } from './pages/login/login.component';
import { EditComponent } from './pages/perfil/edit/edit.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ProfeListRecursosComponent } from './pages/profe/profe-list-recursos/profe-list-recursos/profe-list-recursos.component';
import { ProfeRecursosCreateComponent } from './pages/profe/profe-recursos/profe-recursos-create/profe-recursos-create.component';
import { ShowRecursComponent } from './pages/show-recurs/show-recurs.component';

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
  
  {path: 'admin/tags', component: AdminTagsComponent},
  {path: 'admin/tags/create', component: TagsCreateComponent},
  {path: 'admin/tags/update/:id', component: TagsUpdateComponent},
  {path: 'admin/tags/delete/:id', component: TagsDeleteComponent},

  {path: 'admin/recursos', component: AdminRecursosComponent},
  {path: 'admin/recursos/create', component: RecursosCreateComponent},
  {path: 'admin/recursos/update/:id', component: RecursosUpdateComponent},
  {path: 'admin/recursos/delete/:id', component: RecursosDeleteComponent},

  {path: 'profe/recurs/create', component: ProfeRecursosCreateComponent},
  {path: 'profe/recurs/list', component: ProfeListRecursosComponent},

  {path: 'recursos/:id', component: ListRecursosComponent},
  {path: 'recursos/recurs/:id', component: ShowRecursComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
