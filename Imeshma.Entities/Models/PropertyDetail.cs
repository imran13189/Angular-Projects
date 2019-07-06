﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Imeshma.Entities.Models
{
    [Table("PropertyDetail", Schema = "dbo")]
    public class PropertyDetail
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long PropertyId  { get; set; }

        [Required]
        [Column(TypeName = "varchar(max)")]
        [Display(Name = "Location")]
        public string Location { get; set; }
    }
}
