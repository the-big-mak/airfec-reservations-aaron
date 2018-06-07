import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GuestArrowDropDownAndUp = ({ guestDropDownActive }) => {
  const d = {
    up: 'm1.71 13.71a1 1 0 1 1 -1.42-1.42l8-8a1 1 0 0 1 1.41 0l8 8a1 1 0 1 1 -1.41 1.42l-7.29-7.29z',
    down: 'm16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z',
  };
  return (
    <DivArrowDropDownSVGContainer>
      <SVGArrowDropDown viewBox="0 0 18 18" focusable="false">
        <path
          d={guestDropDownActive ? d.up : d.down}
          fillRule="evenodd"
        />
      </SVGArrowDropDown>
    </DivArrowDropDownSVGContainer>
  );
};

GuestArrowDropDownAndUp.propTypes = {
  guestDropDownActive: PropTypes.bool.isRequired,
};

const DivArrowDropDownSVGContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const SVGArrowDropDown = styled.svg`
  display: block;
  fill: currentcolor;
  height: 16px;
  width: 16px;
`;

export default GuestArrowDropDownAndUp;
