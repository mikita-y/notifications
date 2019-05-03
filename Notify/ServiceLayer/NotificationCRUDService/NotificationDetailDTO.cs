using DataAccessLayer.Models;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ServiceLayer.NotificationCRUDService
{
    public class NotificationDetailDTO
    {
        public int Id { get; set; }
        [StringLength(20)]
        public string Title { get; set; }
        public string Body { get; set; }
        public string Icon { get; set; }
        public string Image { get; set; }
        public List<NotificationAction> NotificationActions { get; set; }
        public List<NotificationLog> NotificationLogs { get; set; }
    }
}
