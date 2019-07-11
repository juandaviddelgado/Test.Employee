using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using Test.Employee.Business.Interfaces;

namespace Test.Employee.API
{
    public class EmployeeController : ApiController
    {
        private readonly IEmployeeService employeeService;

        public EmployeeController(IEmployeeService employeeService)
        {
            this.employeeService = employeeService;
        }

        [HttpGet]
        public async Task<IEnumerable<Entities.Employee>> Get(int id = 0)
        {
            return await this.employeeService.Get(id).ConfigureAwait(false);
        }

    }
}