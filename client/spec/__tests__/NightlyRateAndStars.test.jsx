import React from 'react';
import NightlyRateAndStars from '../../src/components/NightlyRateAndStars';

describe('NightlyRateAndStars component', () => {
  let props;
  let shallowNightlyRateAndStars;
  const nightlyRateAndStars = () => {
    if (!shallowNightlyRateAndStars) {
      shallowNightlyRateAndStars = shallow(<NightlyRateAndStars {...props} />);
    }
    return shallowNightlyRateAndStars;
  };

  beforeEach(() => {
    props = {
      avgNightlyRate: 0,
      stars: 0,
      totRatings: 0,
    };
    shallowNightlyRateAndStars = undefined;
  });

  it('should render a NightlyRate component', () => {
    expect(nightlyRateAndStars().find('NightlyRate').length).toEqual(1);
  });
  it('should render a Stars component', () => {
    expect(nightlyRateAndStars().find('Stars').length).toEqual(1);
  });
});
