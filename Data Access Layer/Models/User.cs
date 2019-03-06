using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace DataAccessLayer.Models
{
    public class User
    {
        [Required(ErrorMessage = "Not written the name")]
        [StringLength(20, MinimumLength = 2, ErrorMessage = "Invalid name length")]
        public string Name { get; set; }
        public List<Notification> Notifications { get; set; }

    }
}
