using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DataAccessLayer.Models
{
    public class LogEntry
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        [MaxLength(2000)]
        public string Thread { get; set; }
        [MaxLength(2000)]
        public string Level { get; set; }
        [MaxLength(2000)]
        public string Logger { get; set; }
        [MaxLength(2000)]
        public string Message { get; set; }
        [MaxLength(2000)]
        public string Exception { get; set; }
    }
}
