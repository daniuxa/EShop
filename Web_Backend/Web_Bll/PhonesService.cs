using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Web_Dal;

namespace Web_Bll
{
    public class PhonesService : IPhonesService
    {
        private readonly PhonesDBContext _phonesDBContext;

        public PhonesService(PhonesDBContext phonesDBContext)
        {
            this._phonesDBContext = phonesDBContext ?? throw new ArgumentNullException(nameof(phonesDBContext));
        }
        public async Task<IEnumerable<Phone>> GetPhonesAsync()
        {
            return await _phonesDBContext.Phones.ToListAsync();
        }
    }
}
