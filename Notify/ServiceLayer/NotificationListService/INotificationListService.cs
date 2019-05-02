
namespace ServiceLayer.NotificationListService
{
    public interface INotificationListService
    {
        ObjectNotificationsDTO FilterSortingPaging(Criterion criterion);
    }
}
