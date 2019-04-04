using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WEB.Logger
{
    public class DbLoggerProvider : ILoggerProvider
    {
        public DbLoggerProvider()
        {
        }
        public ILogger CreateLogger(string categoryName)
        {
            return new DbLogger();
        }

        public void Dispose()
        {
        }
    }
}
