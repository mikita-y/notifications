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
            context.Notifications.Add(Obj.GetNotification());
            var log = NotificationLogsHelper.Creating(Obj.GetNotification());

            context.NotificationLogs.Add(log);
            context.SaveChanges();
        }

        public NotificationDetailDTO Read(int Id)
        {
            return context.Notifications.Find(Id).GetNotificationDetailDTO();
        }

        public void Update(NotificationDetailDTO Obj)
        {
            var DatabaseNotification = context.Notifications.Find(Obj.Id);
            var UserNotification = Obj.GetNotification();
            var log = NotificationLogsHelper.Comparing(ref DatabaseNotification, UserNotification);
            context.NotificationLogs.Add(log);
            context.SaveChanges();
        }

        public void Delete(int Id)
        {
            context.NotificationLogs.RemoveRange(context.NotificationLogs.Where(log => log.NotificationId == Id));
            context.Notifications.Remove(context.Notifications.Find(Id));
            context.SaveChanges();
        }
    }
}
