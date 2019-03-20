using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceLayer.ListService
{
    public enum Sorting { AZ, ZA, Newer, Older };
    public enum FilterBy { Title, Body, Image, Picture };

    public class Criterion
    {
        public string UserName { get; set; }
        public Sorting Sorting { get; set; }
        public FilterBy[] Filterby { get; set; }
        public string SearchText { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }
    }
}
