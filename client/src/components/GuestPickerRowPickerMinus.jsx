import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GuestPickerRowPickerMinus = ({
  handleChangeGuests, label, value,
}) => {
  const isDisabled = () => (label === 'Adults' ? value < 2 : value < 1);
  return (
    <DivOuterContainer>
      <ButtonContainer
        onClick={e => handleChangeGuests(e, label)}
        disabled={isDisabled()}
      >
        <SpanContainer disabled={isDisabled()}>
          <SVGContainer viewBox="0 0 24 24" focusable="false">
            <rect height="2" rx="1" width="12" x="6" y="11" />
          </SVGContainer>
        </SpanContainer>
      </ButtonContainer>
    </DivOuterContainer>
  );
};

GuestPickerRowPickerMinus.propTypes = {
  handleChangeGuests: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

const DivOuterContainer = styled.div`
  display: table-cell;
  text-align: left;
  vertical-align: middle;
`;

const ButtonContainer = styled.button`
  background: transparent;
  border: ${props => (props.disabled ? '1px solid rgba(0, 132, 137, 0.3);' : '1px solid rgba(0, 132, 137);')}
  border-radius: 50%;
  box-shadow: none;
  cursor: pointer;
  display: inline-block;
  height: 32px;
  line-height: 1;
  position: relative;
  text-align: center;
  touch-action: manipulation;
  width: 32px;
`;

const SpanContainer = styled.span`
  color: ${props => (props.disabled ? 'rgba(0, 132, 137, 0.3);' : 'rgba(0, 132, 137);')}
  font-size: 16px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const SVGContainer = styled.svg`
  display: block;
  fill: currentcolor;
  height: 1em;
  overflow: hidden;
  width: 1em;
`;

export default GuestPickerRowPickerMinus;
