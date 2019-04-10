using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceLayer.NotificationLogListService
{
    public class NotificationLogDTOList
    {
        public int PageNumber { get; set; }
        public int AllPages { get; set; }
        public List<NotificationLogDTO> LogList { get; set; }
    }
}
