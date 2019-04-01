using DataAccessLayer.DbContext;
using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ServiceLayer.NotificationCRUDService
{
    public static class NotificationDetailDTOMapper
    {
        public static NotificationDetailDTO GetNotificationDetailDTO(this Notification item)
        {
            var context = new NotifyContext();
            var actions = context.NotificationActions.Where(a => a.NotificationId == item.Id).ToList();
            var logs = context.NotificationLogs.Where(log => log.NotificationId == item.Id).ToList();
            return new NotificationDetailDTO { Id = item.Id,
                Title = item.Title,
                Body = item.Body,
                Icon = item.Icon,
                Image = item.Image,
                NotificationActions =  actions,
                NotificationLogs = logs};
        }

        public static Notification GetNotification(this NotificationDetailDTO item)
        {
            var context = new NotifyContext();
           
            return new Notification { Title = item.Title, Body = item.Body, Icon = item.Icon, Image = item.Image, NotificationActions = item.NotificationActions };
        }

    }

   

}
