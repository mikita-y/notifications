using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessLayer.Models
{
    public class NotificationLog
    {
        public int Id{ get; set; }
        public DateTime Date { get; set; }
        public string Change { get; set; }
        public int NotificationId { get; set; }
        public Notification Notification { get; set; }
    }
}
