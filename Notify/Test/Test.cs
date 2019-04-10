using DataAccessLayer.DbContext;
using DataAccessLayer.Models;
using ServiceLayer.NotificationLogListService;
using System;
using System.Linq;

namespace Test
{
    class Test
    {
        static void Main(string[] args)
        {
            using (var context = new NotifyContext())
            {
                //var service = new NotificationLogListService(context);

                //var logList =service.GetNotificationLogsList(new LogCriterion {Page = 0, PageSize = 5, NotificationId = 20 });

               // foreach (var log in logList.LogList)
                //    Console.WriteLine($"{log.Date}\n{log.Change}");



               context.LogEntries.RemoveRange(context.LogEntries.Where(l => l.Level == "Information"));

               context.SaveChanges();


                /* CRUD Service
                 * 
                 * 
                 * var notiD = new NotificationDetailDTO { Id = 27, UserId = "a9f6eb54-2f3a-481d-84db-494d59803843", Title = "Tit", Body = "Ee" };

                 //service.Update(notiD);

                //service.Create(notiD);
                try
                {
                    service.Delete(25);
                    Console.WriteLine("Deleted");
                }
                catch(Exception e)
                {
                    Console.WriteLine(e.Message);
                }


                try
                {
                    var n = service.Read(25);
                foreach (var l in n.NotificationLogs)
                    Console.WriteLine($"{l.Change}");
                Console.WriteLine($"{n.Id}, {n.Title}, {n.Body}");
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                }*/
            }


            Console.WriteLine("Good");
            Console.Read();
        }
    }
}
