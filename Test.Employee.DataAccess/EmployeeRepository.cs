using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Test.Employee.DataAccess.Interfaces;

namespace Test.Employee.DataAccess
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly HttpClient htmlClient;

        public EmployeeRepository()
        {
            this.htmlClient = new HttpClient
            {
                BaseAddress = new Uri("http://masglobaltestapi.azurewebsites.net/")
            };
            this.htmlClient.DefaultRequestHeaders.Accept.Clear();
            this.htmlClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        }
        public async Task<IEnumerable<Entities.Employee>> Get()
        {
            IEnumerable<Entities.Employee> employeeList = new List<Entities.Employee>();

            var responseTask = await htmlClient.GetAsync("api/employees").ConfigureAwait(false);

            if (responseTask.IsSuccessStatusCode)
            {
                employeeList = await responseTask.Content.ReadAsAsync<IEnumerable<Entities.Employee>>();
            }

            return employeeList;
        }
    }
}
