using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using DataAccessLayer.DbContext.Configuration;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using DataAccessLayer.Models;

namespace DataAccessLayer.DbContext
{
    public class NotifyContext : IdentityDbContext<User>
    {
        public const string ConnectionString = "Server=(localdb)\\mssqllocaldb;Database=NotifyDB;Trusted_Connection=True;";

        public DbSet<Notification> Notifications { get; set; }
        public DbSet<Models.Action> Actions { get; set; }
        public DbSet<NotificationLog> NotificationLogs { get; set; }
        public DbSet<LogEntry> LogEntries { get; set; }

        public NotifyContext(DbContextOptions<NotifyContext> options)
            : base(options)
        {
        }

        public NotifyContext() 
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(ConnectionString);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new NotificationConfiguration());
            modelBuilder.ApplyConfiguration(new LogConfiguration());
            modelBuilder.ApplyConfiguration(new ActionConfiguration());
        }
    }
}


