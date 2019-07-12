using System;
using System.Collections.Generic;
using System.Text;

namespace Test.Employee.Entities.Factory
{
    public static class EmployeeGatewayFactory
    {
        public static IEmployeeGateway CreateEmployeeGateway(Employee employee)
        {
            IEmployeeGateway gateway;
            switch (employee.ContractTypeName)
            {
                case "HourlySalaryEmployee":
                    gateway = new EmployeeHourly(employee);
                    break;
                case "MonthlySalaryEmployee":
                default:
                    gateway = new EmployeeMonthly(employee);
                    break;
            }

            return gateway;
        }
    }
}
