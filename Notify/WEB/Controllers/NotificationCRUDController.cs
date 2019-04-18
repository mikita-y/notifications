using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ServiceLayer.NotificationCRUDService;

namespace WEB.Controllers
{
    [Authorize]
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

        // POST api/notificationcrud
        [HttpPost("[action]")]
        public IActionResult Create([FromBody]NotificationDetailDTO obj)
        {
            if (obj == null)
            {
                return BadRequest();
            }

            _service.Create(obj);
            return Ok(obj);
        }

        // PUT api/notificationcrud/
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

        // DELETE api/notificationcrud/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _service.Delete(id);
            return Ok();
        }
    }
}
