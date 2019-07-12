import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {

  public employeeId: number = 0;
  public employeeList: Array<Employee> = [];
  public loading: boolean;

  constructor(private employeeService: EmployeeService) {

  }

  public getEmployeeList() {
    this.loading = true;
    this.employeeService.get(this.employeeId).subscribe((result: Array<Employee>) => {
      this.employeeList = result;
      this.loading = false;
    }, (error) => {
        this.loading = false;
      console.log(error);
    });
  }
}
