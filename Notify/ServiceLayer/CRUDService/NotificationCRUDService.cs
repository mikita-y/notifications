using System;
using System.Collections.Generic;
using System.Text;
using DataAccessLayer.Models;
using DataAccessLayer.DbContext;
using System.Linq;

namespace ServiceLayer.CRUDService
{
    public class NotificationCRUDService : ICRUDService<NotificationDetailDTO>
    {
        private NotifyContext context; //     ?????????????

        private IQueryable<Notification> notifications;

        public NotificationCRUDService(NotifyContext _context)
        {
            context = _context;  //
            notifications = context.Notifications;
        }

        public void Create(NotificationDetailDTO item)
        {
            Notification notification = item.ParseToNotification();
            context.Notifications.Add(notification);
            notification = context.Notifications.Find(notification);
            context.Logs.Add(LogChangeTemplate.Creating(notification));
            context.SaveChanges();
        }
        public NotificationDetailDTO Read(int id)
        {
            Notification notification = context.Notifications.Find(id);
            return notification.ParseToNotificationDetailDTO();
        }
        public void Update(NotificationDetailDTO item)
        {
            /* если не сработает следующая
            var notification = context.Notifications.First(x => x.Id == item.Id);
            notification.Title = item.Title;
            notification.Body = item.Body;
            notification.Icon = item.Icon;
            notification.Image = item.Image;
            */

            var notification = item.ParseToNotification();
            context.Notifications.Update(notification);
            context.Logs.Add(LogChangeTemplate.Changing(notification));

            context.SaveChanges();
        }
        public void Delete(NotificationDetailDTO item)
        {
            var notification = item.ParseToNotification();
            context.Notifications.Remove(notification);
            context.SaveChanges();
        }

    }
}
