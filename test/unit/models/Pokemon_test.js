import { expect } from 'chai';
import Pokemon from '../../../src/models/Pokemon';

describe('Unit | Models | Pokemon', function () {

  it('should exist', function () {
    // given
    const pokemon = new Pokemon({});

    // then
    expect(pokemon).to.exist;
  });

});