import Backbone from 'backbone';
import Pokemon from '../models/Pokemon';

export default Backbone.Collection.extend({

  url: 'http://pokeapi.co/api/v2/pokemon/',

  model: Pokemon,

  parse(data) {
    return data.results;
  }

});
