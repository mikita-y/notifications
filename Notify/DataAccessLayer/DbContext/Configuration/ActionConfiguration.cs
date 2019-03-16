using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using DataAccessLayer.Models;

namespace DataAccessLayer.DbContext.Configuration
{
    public class ActionConfiguration : IEntityTypeConfiguration<DataAccessLayer.Models.Action>
    {
        public void Configure(EntityTypeBuilder<DataAccessLayer.Models.Action> builder)
        {

        }
    }
}
