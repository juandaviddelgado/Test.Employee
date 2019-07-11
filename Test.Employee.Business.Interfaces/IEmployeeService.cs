using System.Collections.Generic;
using System.Threading.Tasks;

namespace Test.Employee.Business.Interfaces
{
    public interface IEmployeeService
    {
        Task<IEnumerable<Entities.Employee>> Get(int id = 0);
    }
}
