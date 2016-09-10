import Page from './Page';
import About from '../templates/About.hbs';

export default Page.extend({

  template: About,

  render() {
    this.$el.html(this.template());
  }

});
