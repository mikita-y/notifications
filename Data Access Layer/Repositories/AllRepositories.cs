using System;
using System.Collections.Generic;
using System.Text;
using DataAccessLayer.Models;

namespace DataAccessLayer.Repositories
{
    public class UserRepository : BaseRepository<User>
    {
        public UserRepository(NotifyContext context) : base(context)
        { }
    }

    public class NotificationRepository : BaseRepository<Notification>
    {
        public NotificationRepository(NotifyContext context) : base(context)
        { }
    }

    public class LogRepository : BaseRepository<Log>
    {
        public LogRepository(NotifyContext context) : base(context)
        { }
    }

    public class ActionRepository : BaseRepository<Models.Action>
    {
        public ActionRepository(NotifyContext context) : base(context)
        { }
    }
}
