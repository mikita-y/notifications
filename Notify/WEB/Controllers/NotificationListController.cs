using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataAccessLayer.DbContext;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
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
        ILogger _logger;

        INotificationListService _service;

        public NotificationListController(ILoggerFactory loggerFactory, INotificationListService service)
        {
            _logger = loggerFactory.CreateLogger("DbLogger");
            _service = service;
        }

        // Метод для теста
        [HttpGet]
        public IActionResult Get()
        {
            Criterion I = new Criterion { userId = "9e1d0156-27e1-41f4-9a2e-f727a1f898ce", sorting = Sorting.AZ };
            var obj = _service.FilterSortingPaging(I);
            //logger.LogInformation("Не тот контроллер");
            return Ok(obj);
        }


        // POST api/notificationlist/
        [HttpPost("[action]")]
        public IActionResult PostList([FromBody] Criterion I)
        {
            //возвращает ObjectNotificationsDTO
           var a = _service.FilterSortingPaging(I);
           return Ok(a);
        }

    }
}
