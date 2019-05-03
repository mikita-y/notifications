using DataAccessLayer.DbContext;
using DataAccessLayer.Models;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace WEB.Logger
{
    public class DbLogger : ILogger
    {
        public DbLogger()
        {
        }
        public IDisposable BeginScope<TState>(TState state)
        {
            return null;
        }

        public bool IsEnabled(LogLevel logLevel)
        {
            return true;
        }

        public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception exception, Func<TState, Exception, string> formatter)
        {
            try
            {
                using (NotifyContext context = new NotifyContext())
                {

                    var Log = new LogEntry { Date = DateTime.Now, Level = logLevel.ToString(), Logger = "DbLogger", Message = formatter(state, exception) };
                    if (exception != null)
                        Log.Exception = exception.Message;
                    if (eventId.Name != null)
                        Log.Thread = eventId.Name;
                    context.LogEntries.Add(Log);
                    context.SaveChanges();
                }
            }
            catch(Exception)
            { }
        }
    }
}
