using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using DataAccessLayer.Models;

namespace Data_Access_Layer.DbContext.Configuration
{
    public class NotificationConfiguration : IEntityTypeConfiguration<Notification>
    {
        public void Configure(EntityTypeBuilder<Notification> builder)
        {
            builder.ToTable("Notifications").Property(n => n.Title).HasDefaultValue("Notification").HasMaxLength(20);
            builder.ToTable("Notifications").Property(n => n.Body).HasDefaultValue("Text");
            builder.ToTable("Notifications").Property(n => n.UserName).IsRequired();
            builder.ToTable("Notifications").HasOne(n => n.User).WithMany(u => u.Notifications).HasForeignKey(n => n.UserName);
        }
    }
}
