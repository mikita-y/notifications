using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Data_Access_Layer.Models;
using Data_Access_Layer.Repositories;
using System.Runtime.Serialization.Json;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            using (NotifyContext db = new NotifyContext())
            {
                
                User user1 = new User { Name = "Nia", Password = "stut" };
                User user2 = new User {Name = "Natasha", Password = "mentor" };

                var Repository = new UserRepository(db);

                //Repository.Add(user1);
                //Repository.Add(user2);

                var All = Repository.GetAll();
                foreach(User u in All)
                {
                    Console.WriteLine($"{u.Id}.{u.Name} - {u.Password}");
                }
                User user3 = Repository.Get(1);
                user3.Name = ".NET";
                Repository.Update(user3);
                user2 = Repository.Get(3);
                //Repository.Delete(user2);
                All = Repository.GetAll();
                foreach (User u in All)
                {
                    Console.WriteLine($"{u.Id}.{u.Name} - {u.Password}");
                }
                Console.WriteLine("PAW");

                var LogRepository = new LogRepository(db);
                Log l1 = new Log { Date = DateTime.Now, Change = "База данных" };
                LogRepository.Add(l1);
                var LogsAll = LogRepository.GetAll();

                foreach (Log l in LogRepository.GetAll())
                {
                    Console.WriteLine($"{l.Id} - {l.Date} - {l.Change}");
                }
            }
            Console.ReadKey();
        }
    }
}
