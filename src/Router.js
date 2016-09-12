import $ from 'jquery';
import Backbone from 'backbone';
import About from './views/About';
import Home from './views/Home';

function showView(view) {
  view.render();
}

export default Backbone.Router.extend({

  initialize() {
    $('body').append('<div id="app"></div>');
  },

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
