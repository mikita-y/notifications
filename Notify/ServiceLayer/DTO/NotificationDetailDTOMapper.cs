using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using DataAccessLayer.Models;

namespace ServiceLayer.DTO
{
    public static class NotificationDetailDTOMapper
    {
        public static NotificationDetailDTO ParseToNotificationDetailDTO(this Notification item)
        {
            return new NotificationDetailDTO { Id = item.Id, Title = item.Title, Body = item.Body, Icon = item.Icon, Image = item.Image };
        }

        public static Notification ParseToNotification(this NotificationDetailDTO item)
        {
            return new Notification { Id = item.Id, Title = item.Title, Body = item.Body, Icon = item.Icon, Image = item.Image };
        }
    }
}
