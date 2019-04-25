using DataAccessLayer.DbContext;
using DataAccessLayer.Models;
using ServiceLayer.NotificationListService;
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
                var service = new NotificationListService(context);

                var List =service.FilterSortingPaging(new Criterion {
                    userId = "9e1d0156-27e1-41f4-9a2e-f727a1f898ce",
                    sorting = Sorting.Newer,
                    Filterby = null,
                    SearchText= null,
                    page = 1,
                    pageSize = 10
                });

                foreach (var n in List.Notifications)
                    Console.WriteLine($"{n.Title}\n");

                Console.ReadLine();

               //context.LogEntries.RemoveRange(context.LogEntries.Where(l => l.Level == "Information"));

                //context.SaveChanges();


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
