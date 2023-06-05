using Microsoft.EntityFrameworkCore;

namespace Web_Dal
{
    public class PhonesDBContext : DbContext
    {
        public DbSet<Phone> Phones { get; set; } = null!;

        public PhonesDBContext(DbContextOptions<PhonesDBContext> options) : base(options) {     }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Phone>().HasData(
                    new Phone
                    {
                        Id = 1,
                        Name = "Iphone 13 Starlight",
                        Price = 1000,
                        Link = "https://www.apple.com/uk/",
                        PhotoLink = "https://ik.imagekit.io/Salivon/iphone-13-starlight-select-2021.png?updatedAt=1680173452417"
                    },
                    new Phone
                    {
                        Id = 2,
                        Name = "Iphone 13 Pro Max Graphite",
                        Price = 1000,
                        Link = "https://www.apple.com/uk/",
                        PhotoLink = "https://ik.imagekit.io/Salivon/iphone-13-pro-max-graphite-select_5.png?updatedAt=1680173452418"
                    },
                    new Phone
                    {
                        Id = 3,
                        Name = "Iphone 12 Red",
                        Price = 1000,
                        Link = "https://www.apple.com/uk/",
                        PhotoLink = "https://ik.imagekit.io/Salivon/iphone-12-red_1_.jpeg?updatedAt=1680173452357"
                    },
                    new Phone
                    {
                        Id = 4,
                        Name = "Iphone 14 Midnight",
                        Price = 1000,
                        Link = "https://www.apple.com/uk/",
                        PhotoLink = "https://ik.imagekit.io/Salivon/iphone-14-finish-select-202209-6-1inch-midnight.png?updatedAt=1680173452344"
                    },
                    new Phone
                    {
                        Id = 5,
                        Name = "Iphone 14 Pro Max Gold",
                        Price = 1000,
                        Link = "https://www.apple.com/uk/",
                        PhotoLink = "https://ik.imagekit.io/Salivon/14pro-promax-gold-1_2.jpeg?updatedAt=1680173452309"
                    },
                    new Phone
                    {
                        Id = 6,
                        Name = "Iphone 14 Pro Max Purple",
                        Price = 1000,
                        Link = "https://www.apple.com/uk/",
                        PhotoLink = "https://ik.imagekit.io/Salivon/14pro-promax-purple-1_5.jpeg?updatedAt=1680173452314"
                    },
                    new Phone
                    {
                        Id = 7,
                        Name = "Iphone 13 Blue",
                        Price = 1000,
                        Link = "https://www.apple.com/uk/",
                        PhotoLink = "https://ik.imagekit.io/Salivon/iphone-13-blue-select-2021.png?updatedAt=1680173452308"
                    },
                    new Phone
                    {
                        Id = 8,
                        Name = "Iphone 11 Black",
                        Price = 1000,
                        Link = "https://www.apple.com/uk/",
                        PhotoLink = "https://ik.imagekit.io/Salivon/iphone11-black-select1-2019_2_3.jpeg?updatedAt=1680173452241"
                    }
                );
        }
    }
}
