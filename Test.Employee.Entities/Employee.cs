using System;
using Test.Employee.Entities.Factory;

namespace Test.Employee.Entities
{
    public class Employee: IEmployeeGateway
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double AnualSalary { get; set; }
        public double MonthlySalary { get; set; }
        public double HourlySalary { get; set; }
        public string ContractTypeName { get; set; }

        public Employee() { }

        public Employee(Employee employee) {
            this.Id = employee.Id;
            this.Name = employee.Name;
            this.HourlySalary = employee.HourlySalary;
            this.MonthlySalary = employee.MonthlySalary;
            this.ContractTypeName = employee.ContractTypeName;
        }

        public virtual void CalculateAnualSalary()
        {
            throw new NotImplementedException();
        }
    }
}
