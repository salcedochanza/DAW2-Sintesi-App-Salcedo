import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { CreateComponent } from './pages/admin/users/create/create.component';
import { DeleteComponent } from './pages/admin/users/delete/delete.component';
import { UpdateComponent } from './pages/admin/users/update/update.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { ViewComponent } from './pages/admin/users/view/view.component';
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
  {path: 'admin/users/view/:id', component: ViewComponent},
  {path: 'admin/users/update/:id', component: UpdateComponent},
  {path: 'admin/users/delete/:id', component: DeleteComponent},
  {path: 'admin/users/create', component: CreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
