using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceLayer.DTO
{
    public class NotificationDetailDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public string Icon { get; set; }
        public string Image { get; set; }
    }
}
