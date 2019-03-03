using System;
using System.Collections.Generic;
using System.Text;

namespace Data_Access_Layer.Repositories
{
    public interface IRepository<T> where T : class
    {
        IEnumerable<T> GetAll(); 
        T Get(int id); 
        void Add(T item); 
        void Update(T item);
        void Delete(T item);
        void Save();
    }
}
