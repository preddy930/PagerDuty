var Tickets = Backbone.Collection.extend({
        
  //Specify REST URL
  url: 'https://webdemo.pagerduty.com/api/v1/incidents',
  
  //Parse the response
    parse: function (response) {

      console.log(response);

      var i=0;

      var ticketData = [];
      $.each(response.incidents, function() {
        
        if(i<10) {
          var ticketObject = {};
          ticketObject.id = this.id;
          ticketObject.no = this.incident_number;

          if(this.assigned_to_user != null) {
            ticketObject.user = this.assigned_to_user.name;
          } 
          ticketObject.date= this.created_on;
          ticketObject.status = this.status;

          ticketData.push(ticketObject);
          i++;
        }
        else {
          return ticketData;
        }
      });

        return ticketData;
    },

  initialize: function () {

  } 

});