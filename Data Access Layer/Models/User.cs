using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace DataAccessLayer.Models
{
    public class User
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Not written the name")]
        [StringLength(20, MinimumLength = 2, ErrorMessage = "Invalid name length")]
        public string Name { get; set; }
        public List<Notification> Notifications { get; set; }
    }
}
