import getForecasts from '../apiCall';
import {data} from '../mockData';

describe('Api Call', () => {
  it.skip('Should return an object', () => {
    expect(typeof getForecasts('wa', 'seattle')).toBe('object');
  })

})