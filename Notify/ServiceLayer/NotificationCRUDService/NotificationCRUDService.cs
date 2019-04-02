using DataAccessLayer.DbContext;
using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ServiceLayer.NotificationCRUDService
{
    public class NotificationCRUDService : INotificationCRUDService
    {
        private NotifyContext context;

        public NotificationCRUDService(NotifyContext _context)
        {
            context = _context;
        }

        public void Create(NotificationDetailDTO Obj)
        {
            var NewNotification = Obj.GetNotification();
            context.Notifications.Add(NewNotification);

            var log = NotificationLogsHelper.Creating(NewNotification);

            context.NotificationLogs.Add(log);
            context.SaveChanges();
        }

        public NotificationDetailDTO Read(int Id)
        {
            var notification = context.Notifications.Find(Id);
            if (notification == null)
                throw new Exception("Notification not found");
            return notification.GetNotificationDetailDTO();
        }

        public void Update(NotificationDetailDTO Obj)
        {
            var DatabaseNotification = context.Notifications.Find(Obj.Id);
            var UserNotification = Obj.GetNotification();
            var log = NotificationLogsHelper.Comparing(ref DatabaseNotification, UserNotification);
            context.NotificationLogs.Add(log);
            if(log.Change != "")
                context.SaveChanges();
        }

        public void Delete(int Id)
        {
            //context.NotificationLogs.RemoveRange(context.NotificationLogs.Where(log => log.NotificationId == Id));
            var notification = context.Notifications.Find(Id);
            if (notification == null)
                throw new Exception("Notification not found");
            context.Notifications.Remove(notification);
            context.SaveChanges();
        }
    }
}
