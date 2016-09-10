import { expect } from 'chai';
import Pokemon from '../../../src/models/Pokemon';

describe('Unit | Models | Pokemon', () => {

  it('should exist', () => {
    // given
    const pokemon = new Pokemon({});

    // then
    expect(pokemon).to.exist;
  });

});
