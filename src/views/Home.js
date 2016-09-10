import { Model } from 'backbone';
import Pokedex from '../collections/Pokedex';
import Page from './Page';
import Home from '../templates/Home.hbs';

export default Page.extend({

  template: Home,

  initialize() {
    this.collection = new Pokedex();
    this.model = new Model({ name: 'Sacha' });
  },

  render() {
    const self = this;
    self.collection.fetch({
      success(collection) {
        self.$el.html(self.template({
          pokemons: collection.toJSON(),
          title: self.model.get('name')
        }));
      }
    });
    return self;
  }

});
