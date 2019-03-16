using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Text;


namespace ServiceLayer.CRUDService
{
    public static class LogChangeTemplate
    {
        public static Log Creating(Notification notification)
        {
            return new Log
            {
                Notification = notification,
                Date = DateTime.Now,
                Change = "Creating of notification - " + notification.Title
            };
        }

        public static Log Changing(Notification notification)
        {
            return new Log
            {
                Notification = notification,
                Date = DateTime.Now,
                Change = "Changing of notification - " + notification.Title
            };
        }
    }
}
