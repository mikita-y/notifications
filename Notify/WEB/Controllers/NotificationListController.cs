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
    //[Authorize]
    [Route("api/[controller]")]
    public class NotificationListController : Controller
    {
        INotificationListService service;

        public NotificationListController(NotifyContext context)
        {
            service = new NotificationListService(context);
        }

        // Метод для теста
        [HttpGet]
        public IActionResult Get()
        {
            Criterion I = new Criterion { UserId = "a9f6eb54-2f3a-481d-84db-494d59803843", Sorting = Sorting.AZ };
            var obj = service.FilterSortingPaging(I);
            return Ok(obj);
        }


        // POST api/notificationlist/
        [HttpPost]
        public IActionResult  Post([FromBody]Criterion I)
        {
            //возвращает ObjectNotificationsDTO
            return View(service.FilterSortingPaging(I));
        }
    }
}
