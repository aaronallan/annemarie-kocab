var ApplicationRouter = Backbone.Router.extend({

	initialize: function(el) {
		this.el = el;
		this.researchInterestsView = new ContentPaneView({template: 'research-interests'});
		this.participateView = new ContentPaneView({template: 'participate'});
		this.publicationsView = new ContentPaneView({template: 'publications'});
		this.collaboratorsView = new ContentPaneView({template: 'collaborators'});
		this.cvView = new ContentPaneView({template: 'cv'});
		this.notFoundView = new ContentPaneView({template: 'not-found'});
	},

	routes: {
		"": "researchInterests",
		"research-interests": "researchInterests",
		"publications" : "publications",
		"collaborators" : "collaborators",
		"participate" : "participate",
		"cv" : "cv",
		"*else": "notFound"
	},

	currentView: null,

	switchView: function(view) {
		if (this.currentView) {
			this.currentView.remove();
		}

		this.el.html(view.el);
		view.render();
		this.currentView = view;
	},

	//Set Active Tab in index.html
	setActiveTab: function(url) {
		$('li').removeClass('active');
		$("li a[href='" + url + "']").parents('li').addClass('active');
	},

	researchInterests: function() {
		this.switchView(this.researchInterestsView);
		this.setActiveTab('#research-interests');
	},
	publications: function() {
		this.switchView(this.publicationsView);
		this.setActiveTab('#publications');
	},
	collaborators: function() {
		this.switchView(this.collaboratorsView);
		this.setActiveTab('#collaborators');
	},
	cv: function() {
		this.switchView(this.cvView);
		this.setActiveTab('#cv');
	},
	participate: function() {
		this.switchView(this.participateView);
		this.setActiveTab('#participate');
	},

	notFound: function() {
		this.switchView(this.notFoundView);
	}

});

TemplateManager = {
  templates: {},

  get: function(id, callback){
    var template = this.templates[id];

    if (template) {
      callback(template);

    } else {

      var that = this;
      $.get("rachel/" + id + ".html", function(template) {
        var html = $(template);
        that.templates[id] = html;
        callback(html);
      });

    }
  }
}

// Override View.remove()'s default behavior
Backbone.View = Backbone.View.extend({
	remove: function() {
		$(this.el).empty().detach();
		return this;
	}
});

var ContentPaneView = Backbone.View.extend({

	initialize: function(options) {
		this.template = options.template;
	},

	el: "div.content-inner",

	imgLoaded: false,

	renderImage: function () {
		var that = this;
		if (that.imgLoaded === false) {
			$('img').hide();

			$('img').on('load', function(){
			 	$('.loading-cog').hide();
			  	$('img').fadeIn(300);

			  	that.imgLoaded = true;
			});
		}
	},

	render: function(options) {
		var that = this;

		TemplateManager.get(this.template, function(template) {
	  	var html = $(template);
	  	that.$el.html(html);
	  	that.renderImage();

	  	if (that.template === 'home') {
				$('.fa-map-pin a').on('click', function () {
					$('.modal').addClass('show');
				});
			}

			if (that.template === 'about') {
				$('.continue-reading').on('click', function () {
					$('.history-modal').addClass('show');
				});

				for (var i = 2; i <= 6; i++) {
					$('.secondary').hide();
					$('.secondary').delay(2000 * i).fadeIn(500).delay(2000 * i).fadeOut(500);
				};
			}
		});

		return this;
	}
});

(function($) {
  $(document).on('ready', function (){

    $('.hamburger').on('click', function () {
      $('.nav-menu').slideToggle();
    });

    $('.nav-menu ul li').on('click', function () {
      if ($(window).width() < 830) {
        $('.nav-menu').slideToggle();
      }
    })

    // A11Y

    $('.hamburger').on('keypress', function (e) {
      if (e.keyCode === 13) {
        $('.nav-menu').slideToggle();
      }
    });

    $('.nav-menu ul li').on('keypress', function () {
      if ($(window).width() < 830 && e.keyCode === 13) {
        $('.nav-menu').slideToggle();
      }
    })

    $('.contact-link').on('click', function () {
      $('.tooltip').toggle();
    })

    $('.contact-link').on('keypress', function (e) {
      if (e.keyCode === 13) {
        $('.tooltip').toggle();
      }
    })

    $(window).width() > 830 ? $('.nav-menu').attr('style', 'display: block') : $('.nav-menu').attr('style', 'display: none');

  });

  $(window).on('resize', function () {
    $(window).width() > 830 ? $('.nav-menu').attr('style', 'display: block') : $('.nav-menu').attr('style', 'display: none');
  });

})(jQuery);
