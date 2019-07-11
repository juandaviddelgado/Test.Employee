using System.Web.Http;
using System.Web.Http.Dependencies;
using Test.Employee.App_Start;
using Test.Employee.Business;
using Test.Employee.Business.Interfaces;
using Test.Employee.DataAccess;
using Test.Employee.DataAccess.Interfaces;
using Unity;
using Unity.Interception;
using Unity.Mvc5;

namespace Test.Employee
{
    public static class UnityConfig
    {
        private static IDependencyResolver dependencyResolver;

        public static void Register(HttpConfiguration config)
        {
            RegisterTypes(ContainerConfiguration.GetCurrentContainer(), config);

            config.DependencyResolver = GetResolver();
        }

        public static IDependencyResolver GetResolver()
        {
            return dependencyResolver ?? (dependencyResolver = new UnityResolver(ContainerConfiguration.GetCurrentContainer()));
        }

        private static void RegisterTypes(IUnityContainer container, HttpConfiguration config)
        {
            container.AddNewExtension<Interception>();

            container.RegisterType<IEmployeeRepository, EmployeeRepository>();
            container.RegisterType<IEmployeeService, EmployeeService>();

        }
    }
}