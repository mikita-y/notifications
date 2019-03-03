using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;

namespace Data_Access_Layer.Models
{
    [DataContract]
    public class Action
    {
        public int Id { get; set; }
        [DataMember]
        public string Answer { get; set; }
        [DataMember]
        public string Title { get; set; }
        [DataMember]
        public byte[] Icon { get; set; }
        public int Id_of_notification { get; set; }
    }
}
