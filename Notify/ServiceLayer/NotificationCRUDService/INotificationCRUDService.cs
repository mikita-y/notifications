namespace ServiceLayer.NotificationCRUDService
{
    public interface INotificationCRUDService
    {
        void Create(NotificationDetailDTO Obj, string userId);
        NotificationDetailDTO Read(int Id);
        void Update(NotificationDetailDTO Obj);
        void Delete(int Id);
        NotificationDetailDTO GetRandomNotification();
    }
}
