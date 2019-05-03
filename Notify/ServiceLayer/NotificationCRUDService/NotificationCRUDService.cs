using DataAccessLayer.DbContext;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace ServiceLayer.NotificationCRUDService
{
    public class NotificationCRUDService : INotificationCRUDService
    {
        private NotifyContext context;

        public NotificationCRUDService(NotifyContext _context)
        {
            context = _context;
        }

        public void Create(NotificationDetailDTO Obj, string userId)
        {
            var NewNotification = Obj.GetNotification();
            NewNotification.UserId = userId;
            context.Notifications.Add(NewNotification);
            context.SaveChanges();
            var log = NotificationLogsHelper.Creating(NewNotification);

            context.NotificationLogs.Add(log);
            context.SaveChanges();
        }

        public NotificationDetailDTO Read(int id)
        {
            var notification = context.Notifications
                .Include(n => n.NotificationActions)
                .Include(n => n.NotificationLogs)
                .Where(n => n.Id == id).First();
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
            var notification = context.Notifications.Find(Id);
            if (notification == null)
                throw new Exception("Notification not found");
            context.Notifications.Remove(notification);
            context.SaveChanges();
        }


        public NotificationDetailDTO GetRandomNotification()
        {
            var count = context.Notifications.Count();
            Random rnd = new Random(DateTime.Now.Second);
            var id = rnd.Next(0, count);
            var notification = context.Notifications.Include(n => n.NotificationActions).Skip(id).First();

            return notification.GetNotificationDetailDTO();
        }
    }
}
