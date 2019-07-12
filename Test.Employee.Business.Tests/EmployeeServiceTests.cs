using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System.Collections.Generic;
using System.Linq;
using Test.Employee.Business.Interfaces;
using Test.Employee.DataAccess.Interfaces;

namespace Test.Employee.Business.Tests
{
    [TestClass]
    public class EmployeeServiceTests
    {
        private Mock<IEmployeeRepository> mockEmployeeRepository;
        private IEmployeeService employeeService;
        private IEnumerable<Entities.Employee> employeeListMockRepository;

        [TestInitialize]
        public void Initialize()
        {
            this.employeeListMockRepository = new Entities.Employee[] {
                new Entities.Employee()
                {
                    Id= 1,
                    Name="Juan",
                    ContractTypeName= "MonthlySalaryEmployee",
                    HourlySalary = 30,
                    MonthlySalary = 120
                },
                new Entities.Employee()
                {
                    Id= 2,
                    Name="Pedro",
                    ContractTypeName= "HourlySalaryEmployee",
                    HourlySalary = 17,
                    MonthlySalary = 80
                }
            };
            mockEmployeeRepository = new Mock<IEmployeeRepository>();
            mockEmployeeRepository.Setup(repository => repository.Get()).ReturnsAsync(this.employeeListMockRepository);

            employeeService = new EmployeeService(mockEmployeeRepository.Object);
        }

        [TestMethod]
        public void GetAllRecordsNotEspecificId()
        {
            var employeeList = this.employeeService.Get().GetAwaiter().GetResult();
            Assert.AreEqual(employeeList.Count(), this.employeeListMockRepository.Count());
        }

        [TestMethod]
        public void GetRecordByEspecificId()
        {
            var employeeList = this.employeeService.Get(1).GetAwaiter().GetResult();
            Assert.AreEqual(employeeList.Count(), 1);
            Assert.AreEqual(employeeList.FirstOrDefault().Id, 1);
        }

        [TestMethod]
        public void GetRightAnualSalaryBaseOnMonthlyContract()
        {
            var employeeList = this.employeeService.Get(1).GetAwaiter().GetResult();

            Assert.AreEqual(employeeList.FirstOrDefault().AnualSalary, employeeList.FirstOrDefault().MonthlySalary * 12);
        }

        [TestMethod]
        public void GetRightAnualSalaryBaseOnHourlyContract()
        {
            var employeeList = this.employeeService.Get(2).GetAwaiter().GetResult();

            Assert.AreEqual(employeeList.FirstOrDefault().AnualSalary, employeeList.FirstOrDefault().HourlySalary * 12 * 120);
        }
    }
}
