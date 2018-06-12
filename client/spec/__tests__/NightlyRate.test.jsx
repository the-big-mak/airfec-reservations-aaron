import React from 'react';
import NightlyRate from '../../src/components/NightlyRate';

describe('NightlyRate component', () => {
  let props;
  let shallowNightlyRate;
  const nightlyRate = () => {
    if (!shallowNightlyRate) {
      shallowNightlyRate = shallow(<NightlyRate {...props} />);
    }
    return shallowNightlyRate;
  };

  beforeEach(() => {
    props = {
      avgNightlyRate: 0,
    };
    shallowNightlyRate = undefined;
  });

  it('should render two span elements', () => {
    expect(nightlyRate().find('RateSpan').length).toEqual(1);
    expect(nightlyRate().find('PerNightSpan').length).toEqual(1);
  });
});
