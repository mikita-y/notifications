using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;


namespace Data_Access_Layer.Models
{
    [DataContract]
    public class Notification
    {
        public int Id { get; set; }
        [DataMember]
        public string Title { get; set; }
        [DataMember]
        public string Body { get; set; }
        [DataMember]
        public byte[] Icon { get; set; }
        [DataMember]
        public byte[] Image { get; set; }
        [DataMember]
        public Action[] Actions { get; set; }
        public int Id_of_user { get; set; }
    }
}
