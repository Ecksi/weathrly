import getForecasts from '../apiCall';
import {data} from '../mockData';

describe('Api Call', () => {
  it('Should return an object', () => {
    expect(typeof getForecasts('wa', 'seattle')).toBe('object');
  })

})