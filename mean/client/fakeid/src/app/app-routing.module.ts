import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { OverviewComponent } from './pages/overview/overview.component';

const routes: Routes = [
  { path: "", component: OverviewComponent },
  { path: "create", component: CreateUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
