using DataAccessLayer.Models;
using System;

namespace ServiceLayer.NotificationCRUDService
{
    public static class NotificationLogsHelper
    {
        public static NotificationLog Creating(Notification notification)
        {
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
                Changing += $"Title update:\nOld title: {DatabaseNotification.Title}, new title: {UserNotification.Title}.\n";
                DatabaseNotification.Title = UserNotification.Title;
            }
            if (DatabaseNotification.Body != UserNotification.Body)
            {
                Changing += $"Body update\nOld body: {DatabaseNotification.Body}, new body: {UserNotification.Body}.\n";
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

            if(DatabaseNotification.NotificationActions == null)
            {
                if (UserNotification.NotificationActions != null)
                {
                    Changing += "Action Add\n";
                    DatabaseNotification.NotificationActions = UserNotification.NotificationActions;
                }
            }
            else if(UserNotification.NotificationActions == null)
            {
                if (DatabaseNotification.NotificationActions != null)
                {
                    Changing += "Action delete\n";

                }
            }
            else
            { 
                Changing += "Action update\n";
                DatabaseNotification.NotificationActions = UserNotification.NotificationActions;
            }
            log.Change = Changing;
            return log;
        }
    }
}
