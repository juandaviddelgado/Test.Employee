import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {

  public employeeId: number = 0;
  public employeeList: Array<Employee>;

  constructor(private employeeService: EmployeeService) {

  }

  public getEmployeeList() {
    this.employeeService.get(this.employeeId).subscribe((result: Array<Employee>) => {
      this.employeeList = result;
    }, (error) => {
      console.log(error);
    });
  }
}
