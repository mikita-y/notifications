using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DataAccessLayer.Models
{
    public class LogEntry
    {
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "datetime")]
        public DateTime Date { get; set; }
        [Required]
        [MaxLength(255)]
        public string Thread { get; set; }
        [Required]
        [MaxLength(50)]
        public string Level { get; set; }
        [Required]
        [MaxLength(255)]
        public string Logger { get; set; }
        [Required]
        [MaxLength(4000)]
        public string Message { get; set; }
        [MaxLength(2000)]
        public string Exception { get; set; }
    }
}
