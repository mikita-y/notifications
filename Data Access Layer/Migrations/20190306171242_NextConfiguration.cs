using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Data_Access_Layer.Migrations
{
    public partial class NextConfiguration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Logs_Notifications_NotificationId",
                table: "Logs");

            migrationBuilder.DropForeignKey(
                name: "FK_Notifications_Users_UserName",
                table: "Notifications");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Logs",
                table: "Logs");

            migrationBuilder.RenameTable(
                name: "Logs",
                newName: "Log");

            migrationBuilder.RenameIndex(
                name: "IX_Logs_NotificationId",
                table: "Log",
                newName: "IX_Log_NotificationId");

            migrationBuilder.AlterColumn<string>(
                name: "UserName",
                table: "Notifications",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "Notifications",
                maxLength: 20,
                nullable: true,
                defaultValue: "Notification",
                oldClrType: typeof(string),
                oldNullable: true,
                oldDefaultValue: "Notification");

            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "Log",
                nullable: false,
                computedColumnSql: "GETDATE()",
                oldClrType: typeof(DateTime));

            migrationBuilder.AddPrimaryKey(
                name: "PK_Log",
                table: "Log",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Log_Notifications_NotificationId",
                table: "Log",
                column: "NotificationId",
                principalTable: "Notifications",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Notifications_Users_UserName",
                table: "Notifications",
                column: "UserName",
                principalTable: "Users",
                principalColumn: "Name",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Log_Notifications_NotificationId",
                table: "Log");

            migrationBuilder.DropForeignKey(
                name: "FK_Notifications_Users_UserName",
                table: "Notifications");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Log",
                table: "Log");

            migrationBuilder.RenameTable(
                name: "Log",
                newName: "Logs");

            migrationBuilder.RenameIndex(
                name: "IX_Log_NotificationId",
                table: "Logs",
                newName: "IX_Logs_NotificationId");

            migrationBuilder.AlterColumn<string>(
                name: "UserName",
                table: "Notifications",
                nullable: true,
                oldClrType: typeof(string));

            migrationBuilder.AlterColumn<string>(
                name: "Title",
                table: "Notifications",
                nullable: true,
                defaultValue: "Notification",
                oldClrType: typeof(string),
                oldMaxLength: 20,
                oldNullable: true,
                oldDefaultValue: "Notification");

            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "Logs",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldComputedColumnSql: "GETDATE()");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Logs",
                table: "Logs",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Logs_Notifications_NotificationId",
                table: "Logs",
                column: "NotificationId",
                principalTable: "Notifications",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Notifications_Users_UserName",
                table: "Notifications",
                column: "UserName",
                principalTable: "Users",
                principalColumn: "Name",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
