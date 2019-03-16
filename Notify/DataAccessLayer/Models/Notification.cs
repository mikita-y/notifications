using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization;


namespace DataAccessLayer.Models
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
        public string Icon { get; set; }
        [DataMember]
        public string Image { get; set; }
        [DataMember]
        public List<Action> Actions { get; set; }

        public List<Log> Logs { get; set; }

        public string UserId { get; set; }
        public User User { get; set; }
    }
}
