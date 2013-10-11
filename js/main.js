Backbone.View.prototype.close = function () {
    console.log('Closing view ' + this);
    if (this.beforeClose) {
        this.beforeClose();
    }
    this.remove();
    this.unbind();
};

var AppRouter = Backbone.Router.extend({

    initialize:function () {
    },

    routes:{
        "":"results"
    }
  });

var resultsview = new App.ResultsView();

var router = new AppRouter();
router.on('route:results', function() {
 resultsview.render();
});

Backbone.history.start();