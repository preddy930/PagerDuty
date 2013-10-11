App={
  total: 0,
}

App.ResultsView = Backbone.View.extend({

  render: function() {


  var tickets = new Tickets();

  var setHeader = function (xhr) {

    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader('Authorization', 'Token token=VxuRAAxQoTgTjbo7wmmG');
  }


  tickets.fetch({
   beforeSend: setHeader,

    data:  {'date_range':'all', 'sort_by': 'created_on:desc'},

    success: function(response,xhr) {

      document.writeln("<table>");

      document.writeln("<tr>");

          document.writeln("<th> Id </th>");
          document.writeln("<th> Number </th>");
          document.writeln("<th> Date </th>");
          document.writeln("<th> Status </th>");
          document.writeln("<th> User </th>");
          document.writeln("</tr>");

       $.each(response.models, function() {

          document.writeln("<tr>");

          document.writeln("<td>" + this.attributes.id + "</td>");
          document.writeln("<td>" + this.attributes.no + "</td>");
          document.writeln("<td>" + this.attributes.date + "</td>");
          document.writeln("<td>" + this.attributes.status + "</td>");
          document.writeln("<td>" + this.attributes.user + "</td>");
          document.writeln("</tr>");
       })
     document.writeln("<table>");
     console.log(response);
    },

    error: function (errorResponse) {
      console.log(errorResponse)
    }
  });
  }
});