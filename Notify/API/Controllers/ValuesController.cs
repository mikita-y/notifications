using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataAccessLayer.DbContext;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    // Контроллер для тестирования
    [Authorize]
    [Route("api/[controller]")]
    //[ApiController]
    public class ValuesController : ControllerBase
    {
        private NotifyContext context;

        public ValuesController(NotifyContext _context)
        {
            context = _context;
        }

        // GET api/values
        [HttpGet]
        public ActionResult Get()
        {
            var a = context.Users.Select(u => u.UserName).ToList();
            string b = "";
            foreach (string c in a)
                b = b + c + "; ";
            return Ok(b);
            //return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
