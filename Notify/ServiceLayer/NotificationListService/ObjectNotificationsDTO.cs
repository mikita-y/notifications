using System.Collections.Generic;

namespace ServiceLayer.NotificationListService
{
    public class ObjectNotificationsDTO
    {
        public int PageNumber { get; set; }
        public int AllPages { get; set; }
        public List<NotificationPreview> Notifications{ get; set; }
    }
}
