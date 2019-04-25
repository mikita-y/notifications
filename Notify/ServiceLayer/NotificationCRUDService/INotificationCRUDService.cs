using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceLayer.NotificationCRUDService
{
    public interface INotificationCRUDService
    {
        void Create(NotificationDetailDTO Obj);
        NotificationDetailDTO Read(int Id);
        void Update(NotificationDetailDTO Obj);
        void Delete(int Id);
        NotificationDetailDTO GetRandomNotification();
    }
}
