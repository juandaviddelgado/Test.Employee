using System.Collections.Generic;
using System.Threading.Tasks;

namespace Test.Employee.DataAccess.Interfaces
{
    public interface IEmployeeRepository
    {
        Task<IEnumerable<Entities.Employee>> Get();
    }
}
