using System;
using System.Collections.Generic;
using System.Text;
using Data_Access_Layer.Models;

namespace Data_Access_Layer.Repositories
{
    public abstract class BaseRepository<T> : IRepository<T> where T : class
    {
        protected readonly NotifyContext _context;

        public BaseRepository(NotifyContext context)
        {
            _context = context;
        }

        public IEnumerable<T> GetAll()
        {
            return _context.Set<T>();
        }

        public T Get(int id)
        {
            return _context.Set<T>().Find(id);
        }

        public void Add(T item)
        {
            _context.Set<T>().Add(item);
            Save();
        }
        public void Update(T item)
        {
            _context.Set<T>().Update(item);
            Save();
        }
        public void Delete(T item)
        {
            _context.Set<T>().Remove(item);
            Save();
        }
        public void Save()
        {
            _context.SaveChanges();
        }
        ///   нужно ли?
        /*
        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
        */
    }
}
