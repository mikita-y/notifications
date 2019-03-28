using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataAccessLayer.DbContext;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ServiceLayer.NotificationListService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WEB.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class NotificationListController : Controller
    {
        INotificationListService service;

        public NotificationListController(NotifyContext context)
        {
            service = new NotificationListService(context);
        }

        // POST api/notificationlist/
        [HttpPost]
        public IActionResult  Post([FromBody]Criterion I)
        {
            //ObjectNotificationsDTO
            return View(service.FilterSortingPaging(I));
        }
    }
}
