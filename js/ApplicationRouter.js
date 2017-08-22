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

	removePadding: function () {
		$('.content, .content-inner').css('padding', 0);
	},

	addPadding: function () {
		$('.content').css('padding', '2em');
	},

	researchInterests: function() {
		this.switchView(this.researchInterestsView);
		this.setActiveTab('#research-interests');
		this.addPadding();
	},
	publications: function() {
		this.switchView(this.publicationsView);
		this.setActiveTab('#publications');
		this.addPadding();
	},
	collaborators: function() {
		this.switchView(this.collaboratorsView);
		this.setActiveTab('#collaborators');
		this.addPadding();
	},
	cv: function() {
		this.switchView(this.cvView);
		this.setActiveTab('#cv');
		this.removePadding();
	},
	participate: function() {
		this.switchView(this.participateView);
		this.setActiveTab('#participate');
		this.addPadding();
	},

	notFound: function() {
		this.switchView(this.notFoundView);
	}

});
