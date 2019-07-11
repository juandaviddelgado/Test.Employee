using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
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
        public IEnumerable<Test.Employee.Entities.Employee> Get(int id = 0)
        {
            return new List<Test.Employee.Entities.Employee>();
        }

    }
}