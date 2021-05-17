import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
