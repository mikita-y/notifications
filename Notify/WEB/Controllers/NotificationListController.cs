using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataAccessLayer.DbContext;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ServiceLayer.NotificationListService;
using WEB.Logger;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WEB.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    public class NotificationListController : Controller
    {
        ILogger logger;

        INotificationListService service;

        public NotificationListController(NotifyContext context, ILoggerFactory loggerFactory)
        {
            logger = loggerFactory.CreateLogger("DbLogger");
            service = new NotificationListService(context);
        }

        // Метод для теста
        [HttpGet]
        public IActionResult Get()
        {
            Criterion I = new Criterion { UserId = "9e1d0156-27e1-41f4-9a2e-f727a1f898ce", Sorting = Sorting.AZ };
            var obj = service.FilterSortingPaging(I);
            logger.LogInformation("Work with logs");
            return Ok(obj);
        }


        // POST api/notificationlist/
        [HttpPost]
        public IActionResult  Post([FromBody]Criterion I)
        {
            //возвращает ObjectNotificationsDTO
            var a = service.FilterSortingPaging(I);
            return View(a.Notifications[0]);
        }
    }
}
