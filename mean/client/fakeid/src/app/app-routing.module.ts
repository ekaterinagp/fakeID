import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { OverviewComponent } from './pages/overview/overview.component';

const routes: Routes = [
  { path: "", component: OverviewComponent },
  { path: "create", component: CreateUserComponent },
  { path: "edit/:id", component: EditUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
