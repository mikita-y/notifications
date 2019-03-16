using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceLayer.ListService
{
    public enum Sorting { AZ, ZA, Newer, Older };
    public enum FilterBy { Title, Body, Image, Picture };

    public class Сriterion
    {
        public Sorting sorting;
        public FilterBy[] filterby;
        public string SearchText;
        public int Page;
        public int PageSize;

        public Сriterion(Sorting sorting, FilterBy[] filterby, string SearchText = "", int Page = 0, int PageSize = 10)
        {
            this.sorting = sorting;
            this.filterby = filterby;
            this.SearchText = SearchText;
            this.Page = Page;
            this.PageSize = PageSize;
        }
    }
}
