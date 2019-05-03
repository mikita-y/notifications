namespace ServiceLayer.NotificationListService
{
    public enum Sorting { AZ, ZA, Newer, Older };
    public enum FilterBy { Title, Body, Image, Icon };

    public class Criterion
    {
        public string userId { get; set; }
        public Sorting? sorting { get; set; }
        public FilterBy? Filterby { get; set; }
        public string SearchText { get; set; }
        public int page { get; set; }
        public int pageSize { get; set; }
    }
}
