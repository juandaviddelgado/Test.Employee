using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Test.Employee.Business.Interfaces;
using Test.Employee.DataAccess.Interfaces;

namespace Test.Employee.Business
{
    public class EmployeeService: IEmployeeService
    {
        private readonly IEmployeeRepository employeeRepository;

        public EmployeeService(IEmployeeRepository employeeRepository)
        {
            this.employeeRepository = employeeRepository;
        }

        public async Task<IEnumerable<Entities.Employee>> Get(int i = 0)
        {
            return await this.employeeRepository.Get().ConfigureAwait(false);
        }
    }

}
