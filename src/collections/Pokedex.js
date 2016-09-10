import Backbone from 'backbone';

export default Backbone.Collection.extend({

  url: 'http://pokeapi.co/api/v2/pokemon/',

  parse(data) {
    return data.results;
  }

});
