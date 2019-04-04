using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WEB.Logger
{
    
    public static class FileLoggerExtensions
    {
        public static ILoggerFactory AddDbLogger(this ILoggerFactory factory)
        {
            factory.AddProvider(new DbLoggerProvider());
            return factory;
        }
    }
    
}
