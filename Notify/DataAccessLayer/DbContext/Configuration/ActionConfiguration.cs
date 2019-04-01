using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using DataAccessLayer.Models;

namespace DataAccessLayer.DbContext.Configuration
{
    public class ActionConfiguration : IEntityTypeConfiguration<NotificationAction>
    {
        public void Configure(EntityTypeBuilder<NotificationAction> builder)
        {

        }
    }
}
