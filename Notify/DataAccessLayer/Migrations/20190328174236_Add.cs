using Microsoft.EntityFrameworkCore.Migrations;

namespace Data_Access_Layer.Migrations
{
    public partial class Add : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Logs_Notifications_NotificationId",
                table: "Logs");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Logs",
                table: "Logs");

            migrationBuilder.RenameTable(
                name: "Logs",
                newName: "NotificationLogs");

            migrationBuilder.RenameIndex(
                name: "IX_Logs_NotificationId",
                table: "NotificationLogs",
                newName: "IX_NotificationLogs_NotificationId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_NotificationLogs",
                table: "NotificationLogs",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_NotificationLogs_Notifications_NotificationId",
                table: "NotificationLogs",
                column: "NotificationId",
                principalTable: "Notifications",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_NotificationLogs_Notifications_NotificationId",
                table: "NotificationLogs");

            migrationBuilder.DropPrimaryKey(
                name: "PK_NotificationLogs",
                table: "NotificationLogs");

            migrationBuilder.RenameTable(
                name: "NotificationLogs",
                newName: "Logs");

            migrationBuilder.RenameIndex(
                name: "IX_NotificationLogs_NotificationId",
                table: "Logs",
                newName: "IX_Logs_NotificationId");

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
        }
    }
}
