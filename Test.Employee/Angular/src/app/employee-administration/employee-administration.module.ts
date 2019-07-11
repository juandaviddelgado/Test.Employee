import { NgModule } from '@angular/core';
import { EmployeeAdministrationComponent } from './employee-administration.component';
import { EmployeeAdministrationRoutingModule } from './employee-administration-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmployeeAdministrationComponent,
    EmployeeListComponent
  ],
  imports: [
    FormsModule,
    EmployeeAdministrationRoutingModule
  ]
})
export class EmployeeAdministrationModule { }
