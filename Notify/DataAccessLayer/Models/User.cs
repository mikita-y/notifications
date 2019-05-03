using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace DataAccessLayer.Models
{
    public class  User : IdentityUser
    {
        public List<Notification> Notifications { get; set; }
    }
}
