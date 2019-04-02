using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceLayer.NotificationLogListService
{
    public class NotificationLogDTOList
    {
        public int Page { get; set; }
        public int PageSize { get; set; }
        public List<NotificationLogDTO> LogList { get; set; }
    }
}
