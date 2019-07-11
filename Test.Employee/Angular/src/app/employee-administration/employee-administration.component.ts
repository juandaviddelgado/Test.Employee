import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'employee-administration',
  templateUrl: './employee-administration.component.html',
  providers: [EmployeeService]
})
export class EmployeeAdministrationComponent {

  public title: string = 'Test Employee Application';

}
