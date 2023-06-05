using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Web_Dal.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Phones",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    PhotoLink = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Link = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Phones", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Phones",
                columns: new[] { "Id", "Link", "Name", "PhotoLink", "Price" },
                values: new object[,]
                {
                    { 1, "https://www.apple.com/uk/", "Iphone 13 Starlight", "https://ik.imagekit.io/Salivon/iphone-13-starlight-select-2021.png?updatedAt=1680173452417", 1000m },
                    { 2, "https://www.apple.com/uk/", "Iphone 13 Pro Max Graphite", "https://ik.imagekit.io/Salivon/iphone-13-pro-max-graphite-select_5.png?updatedAt=1680173452418", 1000m },
                    { 3, "https://www.apple.com/uk/", "Iphone 12 Red", "https://ik.imagekit.io/Salivon/iphone-12-red_1_.jpeg?updatedAt=1680173452357", 1000m },
                    { 4, "https://www.apple.com/uk/", "Iphone 14 Midnight", "https://ik.imagekit.io/Salivon/iphone-14-finish-select-202209-6-1inch-midnight.png?updatedAt=1680173452344", 1000m },
                    { 5, "https://www.apple.com/uk/", "Iphone 14 Pro Max Gold", "https://ik.imagekit.io/Salivon/14pro-promax-gold-1_2.jpeg?updatedAt=1680173452309", 1000m },
                    { 6, "https://www.apple.com/uk/", "Iphone 14 Pro Max Purple", "https://ik.imagekit.io/Salivon/14pro-promax-purple-1_5.jpeg?updatedAt=1680173452314", 1000m },
                    { 7, "https://www.apple.com/uk/", "Iphone 13 Blue", "https://ik.imagekit.io/Salivon/iphone-13-blue-select-2021.png?updatedAt=1680173452308", 1000m },
                    { 8, "https://www.apple.com/uk/", "Iphone 11 Black", "https://ik.imagekit.io/Salivon/iphone11-black-select1-2019_2_3.jpeg?updatedAt=1680173452241", 1000m }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Phones");
        }
    }
}
