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
