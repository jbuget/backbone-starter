import Backbone from 'backbone';

export default Backbone.View.extend({

  el: '#app',

  render() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});
