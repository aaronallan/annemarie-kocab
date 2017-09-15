// Override View.remove()'s default behavior
Backbone.View = Backbone.View.extend({
	remove: function() {
		$(this.el).empty().detach();
		return this;
	}
});
