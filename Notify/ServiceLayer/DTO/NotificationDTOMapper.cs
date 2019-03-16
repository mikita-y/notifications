using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using DataAccessLayer.Models;

namespace ServiceLayer.DTO
{
    public static class NotificationDTOMapper
    {
        public static IQueryable<NotificationDTO> GetNotificationDTO(this IQueryable<Notification> items)
        {
            return items.Select(n => new NotificationDTO { Id = n.Id, Title = n.Title });
        }
    }
}
