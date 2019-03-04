using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccessLayer.Models;
using System.Runtime.Serialization.Json;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            using (NotifyContext db = new NotifyContext())
            {
                
                User user1 = new User { Name = "Petya", };
                User user2 = new User {Name = "Natasha" };

                db.Users.Add(user1);
                db.SaveChanges();
                foreach(User u in db.Users)
                {
                    Console.WriteLine(u.Name);
                }
            }
            Console.ReadKey();
        }
    }
}
