using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataAccessLayer.DbContext;
using Microsoft.AspNetCore.Mvc;
using ServiceLayer.ListService;
using ServiceLayer.DTO;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class NotificationListController : Controller
    {
        IListService<NotificationDTO> service;

        public NotificationListController(NotifyContext _context)
        {
            service = new NotificationListService(_context);
        }

        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<NotificationDTO> Get()
        {
            return service.GetItems();
        }
        
        // GET api/NotificationList/criterion
        [HttpGet("{I}")]
        public IEnumerable<NotificationDTO> Get(int id)
        {
            var I = new Сriterion(Sorting.AZ, null, "", 0, 2);
            service.FilterSortingPaging(I);
            return service.GetItems();
        }
        /*
        // POST api/notifications
        [HttpPost]
        public IActionResult Post([FromBody]Notification notification)
        {
            if (notification == null)
            {
                return BadRequest();
            }

            context.Notifications.Add(notification);
            context.SaveChanges();
            return Ok(notification);
        }

        // PUT api/notifications
        [HttpPut]
        public IActionResult Put([FromBody]Notification notification)
        {
            if (notification == null)
            {
                return BadRequest();
            }
            if (!context.Notifications.Any(x => x.Id == notification.Id))
            {
                return NotFound();
            }

            context.Update(notification);
            context.SaveChanges();
            return Ok(notification);
        }

        // DELETE api/notifications/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Notification notification = context.Notifications.FirstOrDefault(x => x.Id == id);
            if (notification == null)
            {
                return NotFound();
            }
            context.Notifications.Remove(notification);
            context.SaveChanges();
            return Ok(notification);
        }
        */
    }
}
