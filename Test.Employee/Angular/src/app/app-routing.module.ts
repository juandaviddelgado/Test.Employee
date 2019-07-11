import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'employee/list', pathMatch: 'full'
  },

  { path: 'employee', loadChildren: './employee-administration/employee-administration-routing.module#EmployeeAdministrationRoutingModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
