import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeAdministrationComponent } from './employee-administration.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {
    path: '', component: EmployeeAdministrationComponent,
    children: [
      { path: 'list', component: EmployeeListComponent },
      { path: '', component: EmployeeListComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EmployeeAdministrationRoutingModule { }
