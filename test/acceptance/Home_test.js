import $ from 'jquery';
import Home from '../../src/views/Home';
import Pokedex from '../../src/collections/Pokedex';
import Pokemon from '../../src/models/Pokemon';

const expect = chai.expect;

class PokedexMock extends Pokedex {

  fetch(options) {
    const bulbasaur = new Pokemon({ url: 'http://pokemons.com/1', name: 'bulbasaur' });
    const charmander = new Pokemon({ url: 'http://pokemons.com/4', name: 'charmander' });
    const squirtle = new Pokemon({ url: 'http://pokemons.com/7', name: 'squirtle' });
    this.set([bulbasaur, charmander, squirtle]);
    options.success(this);
  }
}

describe('Acceptance | Views | Home', () => {

  before(() => {
    $('body').append('<div id="app"></div>');
  });

  it('should exist', () => {
    // given
    const view = new Home({collection: new PokedexMock()});

    // when
    view.render();

    // then
    expect($('.pokemon').length).to.equal(3);
  });

});
