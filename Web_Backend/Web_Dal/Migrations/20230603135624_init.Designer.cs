﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Web_Dal;

#nullable disable

namespace Web_Dal.Migrations
{
    [DbContext(typeof(PhonesDBContext))]
    [Migration("20230603135624_init")]
    partial class init
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.16")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("Web_Dal.Phone", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("Link")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhotoLink")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("Id");

                    b.ToTable("Phones");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Link = "https://www.apple.com/uk/",
                            Name = "Iphone 13 Starlight",
                            PhotoLink = "https://ik.imagekit.io/Salivon/iphone-13-starlight-select-2021.png?updatedAt=1680173452417",
                            Price = 1000m
                        },
                        new
                        {
                            Id = 2,
                            Link = "https://www.apple.com/uk/",
                            Name = "Iphone 13 Pro Max Graphite",
                            PhotoLink = "https://ik.imagekit.io/Salivon/iphone-13-pro-max-graphite-select_5.png?updatedAt=1680173452418",
                            Price = 1000m
                        },
                        new
                        {
                            Id = 3,
                            Link = "https://www.apple.com/uk/",
                            Name = "Iphone 12 Red",
                            PhotoLink = "https://ik.imagekit.io/Salivon/iphone-12-red_1_.jpeg?updatedAt=1680173452357",
                            Price = 1000m
                        },
                        new
                        {
                            Id = 4,
                            Link = "https://www.apple.com/uk/",
                            Name = "Iphone 14 Midnight",
                            PhotoLink = "https://ik.imagekit.io/Salivon/iphone-14-finish-select-202209-6-1inch-midnight.png?updatedAt=1680173452344",
                            Price = 1000m
                        },
                        new
                        {
                            Id = 5,
                            Link = "https://www.apple.com/uk/",
                            Name = "Iphone 14 Pro Max Gold",
                            PhotoLink = "https://ik.imagekit.io/Salivon/14pro-promax-gold-1_2.jpeg?updatedAt=1680173452309",
                            Price = 1000m
                        },
                        new
                        {
                            Id = 6,
                            Link = "https://www.apple.com/uk/",
                            Name = "Iphone 14 Pro Max Purple",
                            PhotoLink = "https://ik.imagekit.io/Salivon/14pro-promax-purple-1_5.jpeg?updatedAt=1680173452314",
                            Price = 1000m
                        },
                        new
                        {
                            Id = 7,
                            Link = "https://www.apple.com/uk/",
                            Name = "Iphone 13 Blue",
                            PhotoLink = "https://ik.imagekit.io/Salivon/iphone-13-blue-select-2021.png?updatedAt=1680173452308",
                            Price = 1000m
                        },
                        new
                        {
                            Id = 8,
                            Link = "https://www.apple.com/uk/",
                            Name = "Iphone 11 Black",
                            PhotoLink = "https://ik.imagekit.io/Salivon/iphone11-black-select1-2019_2_3.jpeg?updatedAt=1680173452241",
                            Price = 1000m
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
