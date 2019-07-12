using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Test.Employee.Business.Interfaces;
using Test.Employee.DataAccess.Interfaces;
using Test.Employee.Entities.Factory;

namespace Test.Employee.Business
{
    public class EmployeeService: IEmployeeService
    {
        private readonly IEmployeeRepository employeeRepository;

        public EmployeeService(IEmployeeRepository employeeRepository)
        {
            this.employeeRepository = employeeRepository;
        }

        public async Task<IEnumerable<Entities.Employee>> Get(int id = 0)
        {
            IEnumerable<Entities.Employee> employeeList = await this.employeeRepository.Get().ConfigureAwait(false);

            if(id != 0)
            {
                employeeList = employeeList.Where(row => row.Id == id);
            }

            employeeList = employeeList.Select(row =>
            {
                row = (Entities.Employee)EmployeeGatewayFactory.CreateEmployeeGateway(row);
                row.CalculateAnualSalary();
                return row;
            });

            return employeeList;
        }
    }

}
