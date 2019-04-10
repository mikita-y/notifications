using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ServiceLayer.NotificationCRUDService;

namespace WEB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationCRUDController : Controller
    {

        INotificationCRUDService _service;

        public NotificationCRUDController(INotificationCRUDService servise)
        {
            _service = servise;
        }


        // GET api/notificationcrud/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var notification = _service.Read(id);
            if (notification == null)
                return NotFound();
            return Ok(notification);
        }

        // POST api/users
        [HttpPost]
        public IActionResult Post([FromBody]NotificationDetailDTO obj)
        {
            if (obj == null)
            {
                return BadRequest();
            }

            _service.Create(obj);
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

            _service.Update(obj);
            return Ok(obj);
        }

        // DELETE api/users/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _service.Delete(id);
            return Ok();
        }
    }
}
