import React from 'react';
import Stars from '../../src/components/Stars';

describe('Stars component', () => {
  let props;
  let shallowStars;
  const stars = () => {
    if (!shallowStars) {
      shallowStars = shallow(<Stars {...props} />);
    }
    return shallowStars;
  };

  beforeEach(() => {
    props = {
      stars: 4,
      totRatings: 120,
    };
    shallowStars = undefined;
  });

  it('should render four Star components with an input of 4', () => {
    expect(stars().find('Star').length).toEqual(4);
  });
});
