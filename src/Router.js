import Backbone from 'backbone';
import About from './views/About';
import Home from './views/Home';

function showView(view) {
  view.render();
}

export default Backbone.Router.extend({

  routes: {
    '': 'home',
    about: 'about'
  },

  home() {
    showView(new Home());
  },

  about() {
    showView(new About());
  }

});
