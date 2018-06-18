import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DatePickerCalendarBackForwardButton = ({ handleChangeMonth, position }) => {
  const paths = {
    left: 'M 336.2 274.5 l -210.1 210 h 805.4 c 13 0 23 10 23 23 s -10 23 -23 23 H 126.1 l 210.1 210.1 c 11 11 11 21 0 32 c -5 5 -10 7 -16 7 s -11 -2 -16 -7 l -249.1 -249 c -11 -11 -11 -21 0 -32 l 249.1 -249.1 c 21 -21.1 53 10.9 32 32 Z',
    right: 'M 694.4 242.4 l 249.1 249.1 c 11 11 11 21 0 32 L 694.4 772.7 c -5 5 -10 7 -16 7 s -11 -2 -16 -7 c -11 -11 -11 -21 0 -32 l 210.1 -210.1 H 67.1 c -13 0 -23 -10 -23 -23 s 10 -23 23 -23 h 805.4 L 662.4 274.5 c -21 -21.1 11 -53.1 32 -32.1 Z',
  };
  return (
    <Button type="button" position={position} onClick={handleChangeMonth}>
      <SVGContainer viewBox="0 0 1000 1000">
        <path d={paths[position]} />
      </SVGContainer>
    </Button>
  );
};

DatePickerCalendarBackForwardButton.propTypes = {
  handleChangeMonth: PropTypes.func.isRequired,
  position: PropTypes.string.isRequired,
};

const Button = styled.button`
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(228, 231, 231);
  border-image: initial;
  border-radius: 3px;
  color: rgb(117, 117, 117);
  cursor: pointer;
  line-height: 0.78;
  ${props => (props.position === 'left' ? 'left: 22px;' : 'right: 22px;')}
  padding: 6px 9px;
  position: absolute;
  top: 18px;
  user-select: none;
`;

const SVGContainer = styled.svg`
  fill: rgb(130, 136, 138);
  height: 19px;
  overflow: hidden;
  width: 19px;
`;

export default DatePickerCalendarBackForwardButton;
