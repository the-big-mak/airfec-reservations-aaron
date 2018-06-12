import React from 'react';
import Star from '../../src/components/Star';

describe('Star component', () => {
  let props;
  let shallowStar;
  const star = () => {
    if (!shallowStar) {
      shallowStar = shallow(<Star {...props} />);
    }
    return shallowStar;
  };

  beforeEach(() => {
    props = {
      type: 'whole',
    };
    shallowStar = undefined;
  });

  it('should render a whole Star give an input of type "whole"', () => {
    expect(star().find('SpanStar').length).toEqual(1);
    expect(star().find('SpanHalfStar').length).toEqual(0);
  });
});
