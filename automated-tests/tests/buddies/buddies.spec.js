import {Buddies}  from '../../Buddies';
import members from './buddiesData.json';

describe('Buddies', () => {
  
  test('Veririficar nombres repetidos', () => {
    const buddies = new Buddies(members);
    const ob = buddies.countBuddiesbyName();
    const nombres = {"Cat 2": 1, "Dog 1": 1, "German Sheperd": 7, "Lion 1": 1, "Lion 2": 1, "Lion 3": 1, "Max": 4, "Phoebe": 14, "buster": 1, "doggie": 7, "mici": 1}
    expect(ob).toStrictEqual(nombres)
  });
});
