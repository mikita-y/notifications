using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataAccessLayer.DbContext;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ServiceLayer.ListService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class NotificationListController : Controller
    {
        IListService service;

        public NotificationListController(NotifyContext _context)
        {
            service = new NotificationListService(_context);
        }

        // POST api/notifications/
        [HttpPost]
        public IEnumerable<NotificationDTO> Post([FromBody]Criterion I)
        {
            return service.FilterSortingPaging(I);
        }
    }
}
