using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceLayer.CRUDService
{
    public interface ICRUDService<T>
    {
        void Create(T item);
        T Read(int id);
        void Update(T item);
        void Delete(T item);
    }
}
