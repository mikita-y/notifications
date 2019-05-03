using ServiceLayer.NotificationCRUDService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WEB.Model
{
    public class NotificationModel
    {
        public NotificationDetailDTO Notification { get; set; }
        public string UserId { get; set; }
    }
}
