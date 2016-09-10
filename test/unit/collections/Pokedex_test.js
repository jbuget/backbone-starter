import { expect } from 'chai';
import Pokedex from '../../../src/collections/Pokedex';

describe('Unit | Collections | Pokedex', function () {

  it('should exist', function () {
    // given
    const pokedex = new Pokedex({});

    // then
    expect(pokedex).to.exist;
  });

  const pokeApiUrl = 'http://pokeapi.co/api/v2/pokemon/';

  it(`should have URL to be equal to ${pokeApiUrl}`, function () {
    // when
    const pokedex = new Pokedex({});

    // then
    expect(pokedex.url).to.equal(pokeApiUrl);
  });

});