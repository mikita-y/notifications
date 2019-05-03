using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
namespace WEB.Logger
{
    
    public static class DbLoggerExtensions
    {
        public static ILoggerFactory AddDbLogger(this ILoggerFactory factory)
        {
            factory.AddProvider(new DbLoggerProvider());
            return factory;
        }
    }
    
}
