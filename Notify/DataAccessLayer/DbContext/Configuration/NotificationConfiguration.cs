using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using DataAccessLayer.Models;

namespace DataAccessLayer.DbContext.Configuration
{
    public class NotificationConfiguration : IEntityTypeConfiguration<Notification>
    {
        public void Configure(EntityTypeBuilder<Notification> builder)
        {
            builder.Property(n => n.Title).HasDefaultValue("Notification").HasMaxLength(20);
            builder.Property(n => n.Body).HasDefaultValue("Text");
            builder.Property(n => n.UserId).IsRequired();
            builder.HasOne(n => n.User).WithMany(u => u.Notifications).HasForeignKey(n => n.UserId);
        }
    }
}
