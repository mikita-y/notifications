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
            return new NotificationDetailDTO { Id = item.Id,
                Title = item.Title,
                Body = item.Body,
                Icon = item.Icon,
                Image = item.Image,
                NotificationActions =  item.NotificationActions,
                NotificationLogs = item.NotificationLogs
            };
            
        }

        public static Notification GetNotification(this NotificationDetailDTO item)
        {           
            return new Notification { Title = item.Title, Body = item.Body, Icon = item.Icon, Image = item.Image, NotificationActions = item.NotificationActions };
        }

    }

   

}
