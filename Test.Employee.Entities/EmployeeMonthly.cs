using System;

namespace Test.Employee.Entities
{
    public class EmployeeMonthly: Employee
    {
        public EmployeeMonthly(Employee employee) : base(employee)
        {

        }
        public override void CalculateAnualSalary()
        {
            this.AnualSalary = this.MonthlySalary * 12;
        }
    }
}
