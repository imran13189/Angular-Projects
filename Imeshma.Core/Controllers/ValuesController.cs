using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Imeshma.DAL;
using Imeshma.Entities.Models;
using Microsoft.AspNetCore.Mvc;

namespace Imeshma.Core.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        ImeshmaDbContext _context;

        public ValuesController(ImeshmaDbContext context)
        {
            _context =context;
        }
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<PropertyDetail>> Get()
        {
            //while (true)
            //{
            //    _context.PropertyDetail.Add(new PropertyDetail() { Location = "Test", Size = "25" });
            //    _context.SaveChanges();
            //}
            return _context.PropertyDetail;
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
