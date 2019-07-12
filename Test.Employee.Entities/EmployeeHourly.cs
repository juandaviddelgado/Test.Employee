using System;

namespace Test.Employee.Entities
{
    public class EmployeeHourly: Employee
    {
        public EmployeeHourly(Employee employee) : base(employee)
        {

        }

        public override void CalculateAnualSalary()
        {
            this.AnualSalary = 1440 * HourlySalary;
        }
    }
}
