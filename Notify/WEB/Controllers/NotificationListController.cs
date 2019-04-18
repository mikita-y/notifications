using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ServiceLayer.NotificationListService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WEB.Controllers
{
    [Authorize]
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

        // POST api/notificationlist/
        //[Authorize]
        [HttpPost("[action]")]
        public IActionResult GetNotificationList([FromBody] Criterion I)
        {
            //возвращает ObjectNotificationsDTO
           var a = _service.FilterSortingPaging(I);
           return Ok(a);
        }

    }
}
