using System;
using System.Collections.Generic;
using DataAccessLayer.Models;

namespace ServiceLayer
{
    public class NotificationDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public string Icon { get; set; }
        public string Image { get; set; }
        public List<DataAccessLayer.Models.Action> Actions { get; set; }
        public List<Log> Logs { get; set; }
        public string UserName { get; set; }
    }
}
