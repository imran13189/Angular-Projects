using Imeshma.Entities.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Imeshma.DAL
{
    public class ImeshmaDbContext: IdentityDbContext
    {
        public ImeshmaDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        public DbSet<PropertyDetail> PropertyDetail { get; set; }
       

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"data source=localhost; initial catalog=Imeshma;persist security info=True;user id=sa;password=data@123");
        }
    }

    public class ApplicationUser : IdentityUser
    {
        [Column(TypeName = "varchar(255)")]
        [Display(Name = "FullName")]
        public string FullName { get; set; }

        [Column(TypeName = "varchar(255)")]
        [Display(Name = "SocialLoginId")]
        public string SocialLoginId { get; set; }
    }

    public class ApplicationSettings
    {
        public string JWT_Secret { get; set; }
        public string Client_URL { get; set; }
    }
}
