using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Web_Bll;
using Web_Dal;

namespace Web_API.Controllers
{
    [ApiController]
    [Produces("application/json", "application/xml")]
    public class PhonesController : ControllerBase
    {
        private readonly IPhonesService _phonesService;

        public PhonesController(IPhonesService phonesService)
        {
            this._phonesService = phonesService ?? throw new ArgumentNullException(nameof(phonesService));
        }

        [HttpGet("api/phones")]
        public async Task<IActionResult> GetPhones()
        {
            return Ok(await _phonesService.GetPhonesAsync());
        }
    }
}
