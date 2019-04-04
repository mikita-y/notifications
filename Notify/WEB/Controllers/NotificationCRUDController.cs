using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataAccessLayer.DbContext;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ServiceLayer.NotificationCRUDService;

namespace WEB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationCRUDController : ControllerBase
    {

        INotificationCRUDService service;

        public NotificationCRUDController(NotifyContext context)
        {
            service = new NotificationCRUDService(context);
        }


        [HttpGet]
        public IActionResult Get()
        {
            return Ok();
        }

        // GET api/notificationcrud/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var notification = service.Read(id);
            if (notification == null)
                return NotFound();
            return new ObjectResult(notification);
        }

        // POST api/users
        [HttpPost]
        public IActionResult Post([FromBody]NotificationDetailDTO obj)
        {
            if (obj == null)
            {
                return BadRequest();
            }

            service.Create(obj);
            return Ok(obj);
        }

        // PUT api/users/
        [HttpPut]
        public IActionResult Put([FromBody]NotificationDetailDTO obj)
        {
            if (obj == null)
            {
                return BadRequest();
            }

            service.Update(obj);
            return Ok(obj);
        }

        // DELETE api/users/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            service.Delete(id);
            return Ok();
        }
    }
}
