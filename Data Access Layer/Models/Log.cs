using System;
using System.Collections.Generic;
using System.Text;

namespace Data_Access_Layer.Models
{
    public class Log
    {
        public int Id{ get; set; }
        public DateTime Date { get; set; }
        public string Change { get; set; }
        public int Id_of_notification { get; set; }
    }
}
