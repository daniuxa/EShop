using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Web_Dal
{
    [Table("Phones")]
    public class Phone
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public decimal Price { get; set; }
        public string PhotoLink { get; set; } = null!;
        public string Link { get; set; } = null!;

    }
}
