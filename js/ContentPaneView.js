var ContentPaneView = Backbone.View.extend({

	initialize: function(options) {
		this.template = options.template;
	},

	el: "div.page-templates",

	imgLoaded: false,

	render: function(options) {
		var that = this;

		TemplateManager.get(this.template, function(template) {
	  	var html = $(template);
	  	that.$el.html(html);
		});

		return this;
	}
});
