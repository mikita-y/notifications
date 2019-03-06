using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using DataAccessLayer.Models;

namespace Data_Access_Layer.DbContext.Configuration
{
    public class ActionConfiguration : IEntityTypeConfiguration<DataAccessLayer.Models.Action>
    {
        public void Configure(EntityTypeBuilder<DataAccessLayer.Models.Action> builder)
        {

        }
    }
}
