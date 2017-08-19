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
