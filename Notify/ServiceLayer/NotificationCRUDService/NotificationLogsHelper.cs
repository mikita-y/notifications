using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ServiceLayer.NotificationCRUDService
{
    public static class NotificationLogsHelper
    {
        public static NotificationLog Creating(Notification notification)
        {
            // Добавить детали логов позже
             return new NotificationLog
            {
                Date = DateTime.Now,
                Change = "Creating new notification",
                Notification = notification
             };
        }

        public static NotificationLog Comparing(ref Notification DatabaseNotification, Notification UserNotification)
        {
            string Changing = "";
            var log = new NotificationLog
            {
                Date = DateTime.Now,
                NotificationId = DatabaseNotification.Id
            };
            if (DatabaseNotification.Title != UserNotification.Title)
            {
                Changing += "Title update\n";
                DatabaseNotification.Title = UserNotification.Title;
            }
            if (DatabaseNotification.Body != UserNotification.Body)
            {
                Changing += "Body update\n";
                DatabaseNotification.Body = UserNotification.Body;
            }
            if (DatabaseNotification.Icon != UserNotification.Icon)
            {
                Changing += "Icon update\n";
                DatabaseNotification.Icon = UserNotification.Icon;
            }
            if (DatabaseNotification.Image != UserNotification.Image)
            {
                Changing += "Image update\n";
                DatabaseNotification.Image = UserNotification.Image;
            }
            if (DatabaseNotification.NotificationActions.SequenceEqual(UserNotification.NotificationActions))
            { 
                Changing += "Action update\n";
                DatabaseNotification.NotificationActions = UserNotification.NotificationActions;
            }
            log.Change = Changing;
            return log;
        }
    }
}
