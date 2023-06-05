using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Web_Dal;

namespace Web_Bll
{
    public interface IPhonesService
    {
        Task<IEnumerable<Phone>> GetPhonesAsync();
    }
}
