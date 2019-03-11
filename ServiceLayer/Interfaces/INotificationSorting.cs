using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using DataAccessLayer.Models;

namespace ServiceLayer.Interfaces
{
    public interface INotificationSorting
    {
        void SortingBy(Sorting s);
    }
}
