using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Unity;

namespace Test.Employee.App_Start
{
    public class ContainerConfiguration
    {
        public static IUnityContainer Container { get; private set; }

        public static IUnityContainer GetCurrentContainer()
        {
            if (Container == null)
            {
                Container = new UnityContainer();
            }

            return Container;
        }

        public static void SetContainer(UnityContainer unityContainer)
        {
            Container = unityContainer;
        }
    }
}