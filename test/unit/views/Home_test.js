import Pokemon from '../../../src/models/Pokemon';

const expect = chai.expect;

describe('Unit | Models | Pokemon', () => {

  it('should exist', () => {
    // given
    const pokemon = new Pokemon({});
    // then
    expect(pokemon).to.exist;
  });

  describe('#initialize', () => {

    it('should set property "pokedexId", extracted from attribute URL)', () => {
      // given
      const pokemon = new Pokemon({ url: 'http://pokeapi.co/api/v2/pokemon/1/', name: 'pikachu' });

      // then
      expect(pokemon.get('pokedexId')).to.equal('001');
    });

    it('should set property "pokedexId" to "N/A" if it can not be extracted from URL', () => {
      // given
      const pokemon = new Pokemon({ url: 'http://bad.url', name: 'pikachu' });

      // then
      expect(pokemon.get('pokedexId')).to.equal('N/A');
    });

    it('should set property "imageUrl" based on "assessts.pokemon.com" images endpoint', () => {
      // given
      const pokemon = new Pokemon({ url: 'http://pokeapi.co/api/v2/pokemon/1/', name: 'pikachu' });

      // then
      expect(pokemon.get('imageUrl')).to.equal('http://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png');
    });

  });

});
