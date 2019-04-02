using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceLayer.NotificationLogListService
{
    public class LogCriterion
    {
        public int NotificationId { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }
    }
}
