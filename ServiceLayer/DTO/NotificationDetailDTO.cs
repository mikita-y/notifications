using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceLayer
{
    public class NotificationDetailDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public string Icon { get; set; }
        public string Image { get; set; }
        public List<Action> Actions { get; set; }

        //public List<Log> Logs { get; set; }

        public string UserName { get; set; }
       // public User User { get; set; }
    }
}
