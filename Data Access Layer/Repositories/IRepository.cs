using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessLayer.Repositories
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
