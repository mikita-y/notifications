using Microsoft.Extensions.Logging;

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
