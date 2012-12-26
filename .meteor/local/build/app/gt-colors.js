process.env.MONGO_URL = 'mongodb://localhost';
process.env.PORT = 3800;
// var Colors = new Array({name: "red"}, {name: "green"}, {name: "blue"});
Colors = new Meteor.Collection("colors");
// Colors.remove({});
// Colors.insert({name: "yellow"});
// Colors.insert({name: "margenta"});
// Colors.insert({name: "เหลือง"});
// Colors.insert({name: "แดง"});

if (Meteor.isServer) {
  Meteor.startup(function () {
    process.env.MAIL_URL = 'smtp://oree-inc:password01@194.10.10.1:25';
    process.env.PORT = 4000;
  });
}

if (Meteor.isClient) {
  Template.color_list.colors = function () {
    return Colors.find();
    //return Colors;
  };
  
  Template.color_list.events = {
    'click .like': function(){
      Colors.update(Session.get('session_color'), {$inc: {likes: 1}});
    }
  };
  
  Template.color_info.is_selected =  function(){
    return Session.equals('session_color', this._id) ? "selected" : "";
  };
  
  Template.color_info.how_many = function(){
    if (!this.likes) return "no";
    if (this.likes < 5) return "few";
    if (this.likes < 10) return "some";
    return "lots";
  }
  
  Template.color_info.events = {
    'click': function(){
      Session.set('session_color', this._id);
    }
  } 
}

