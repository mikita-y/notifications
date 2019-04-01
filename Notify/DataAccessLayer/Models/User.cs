using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace DataAccessLayer.Models
{
    public class  User : IdentityUser
    {
        public List<Notification> Notifications { get; set; }
    }
}
