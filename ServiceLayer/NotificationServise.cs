using System;
using System.Collections.Generic;
using System.Text;
using DataAccessLayer.Models;



public interface INotificationSorting
{
    List<Notification> SortingByTitle(bool AZ);
    List<Notification> SortingByDate();
}
public interface INotificationFiltering
{
    List<Notification> FilteringByTitle(string text);
    List<Notification> FilteringByBody(string text);
    List<Notification> FilteringByImage(bool image);
    List<Notification> FilteringByPicture(bool picture);
}



namespace ServiceLayer
{
    public class NotificationServise //: INotificationSorting
    {
        public NotifyContext context;
        public List<Notification> notifications;

        public NotificationServise(NotifyContext _context)
        {
            context = _context;
        }

        public void Add(Notification notification)
        {
            context.Add(notification);
            Log log = new Log { Date = DateTime.Now, Change = "Creating Notification", Notification = notification };
            context.Add(log);
            context.SaveChanges();
        }


        /*public List<Notification> SortingByTitle(bool AZ)
        {

        }

       public List<Notification> SortingByDate()
        {

        }*/

    }
}
