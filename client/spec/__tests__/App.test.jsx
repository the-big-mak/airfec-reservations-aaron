import React from 'react';
import App from '../../src/components/App';

describe('App component', () => {
  it('should render a Reservations component', () => {
    expect(shallow(<App />).find('Reservations').length).toEqual(1);
  });
});
