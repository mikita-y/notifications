using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataAccessLayer.DbContext;
using Microsoft.AspNetCore.Mvc;
using ServiceLayer.CRUDService;
using ServiceLayer.DTO;

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class NotificationCRUDController : Controller
    {
        ICRUDService<NotificationDetailDTO> service;

        public NotificationCRUDController(NotifyContext _context)
        {
            service = new NotificationCRUDService(_context);
        }

        /*
        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<NotificationDTO> Get()
        {
            return service.GetItems();
        }*/

        /*
                // GET api/NotificationCRUD/5
                [HttpGet("{id}")]
                public NotificationDetailDTO Get(int id)
                {
                    return service.Read(id);
                }
                */
        /*
        // GET api/NotificationList/criterion
        [HttpGet("{I}")]
        public IEnumerable<NotificationDTO> Get(int id)
        {
            var I = new Сriterion(Sorting.AZ, null, "", 0, 2);
            service.FilterSortingPaging(I);
            return service.GetItems();
        }*/



        // GET api/notificationcrud/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var notification = service.Read(id);
            if (notification == null)
                return NotFound();
            return new ObjectResult(notification);
        }

        // POST api/notificationcrud
        [HttpPost]
        public IActionResult Post([FromBody]NotificationDetailDTO notification)
        {
            if (notification == null)
            {
                return BadRequest();
            }

            service.Create(notification);
            return Ok(notification);
        }

        // PUT api/users/
        [HttpPut]
        public IActionResult Put([FromBody]NotificationDetailDTO notification)
        {
            if (notification == null)
            {
                return BadRequest();
            }
            service.Update(notification);
            return Ok(notification);
        }

        // DELETE api/users/5
        [HttpDelete("{id}")]
        public IActionResult Delete([FromBody]NotificationDetailDTO notification)
        {
            service.Delete(notification);
            return Ok(notification);
        }

    }
}
