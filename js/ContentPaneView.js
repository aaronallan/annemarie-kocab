var ContentPaneView = Backbone.View.extend({

	initialize: function(options) {
		this.template = options.template;
	},

	el: "div.page-templates",

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
		});

		return this;
	}
});
