using System;
using Test.Employee.Business.Interfaces;
using Test.Employee.DataAccess.Interfaces;

namespace Test.Employee.Business
{
    public class EmployeeService: IEmployeeService
    {
        private IEmployeeRepository employeeRepository;

        public EmployeeService(IEmployeeRepository employeeRepository)
        {
            this.employeeRepository = employeeRepository;
        }
    }

}
