import Backbone from 'backbone';

function getPokedexIdFromItsUrl(pokemon) {
  if (!pokemon.get('url')) {
    return 'N/A';
  }
  const regexp = /http:\/\/pokeapi\.co\/api\/v2\/pokemon\/(\d+)\//;
  const matches = regexp.exec(pokemon.get('url'));
  return matches ? matches[1] : 'N/A';
}

function convertNumberIntoStringWithLeadingZeros(number, stringLength) {
  const str = number.toString();
  return str.length < stringLength ? convertNumberIntoStringWithLeadingZeros(`0${str}`, stringLength) : str;
}

export default Backbone.Model.extend({

  initialize() {
    const pokemonImageBankUrl = 'http://assets.pokemon.com/assets/cms2/img/pokedex/detail';
    const pokemonId = convertNumberIntoStringWithLeadingZeros(getPokedexIdFromItsUrl(this), 3);

    this.set('pokedexId', pokemonId);
    this.set('imageUrl', `${pokemonImageBankUrl}/${pokemonId}.png`);
  }

});
