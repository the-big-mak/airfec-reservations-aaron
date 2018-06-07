import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GuestLabel from './GuestLabel';
import GuestArrowDropDownAndUp from './GuestArrowDropDownAndUp';
import GuestPickerDropDown from './GuestPickerDropDown';

const GuestPicker = ({ guestDropDownActive, handleGuestDropDown, maxGuests }) => (
  <DivOuterContainer>
    <LabelOuterContainer>
      <SmallLabelInnerContainer>Guests</SmallLabelInnerContainer>
    </LabelOuterContainer>
    <DivPickerOuterContainer>
      <ButtonPicker
        onClick={handleGuestDropDown}
        guestDropDownActive={guestDropDownActive}
      >
        <DivCellOuterContainer>
          <DivCellInnerContainer>
            <DivTableContainer>
              <GuestLabel guestDropDownActive={guestDropDownActive} />
              <GuestArrowDropDownAndUp guestDropDownActive={guestDropDownActive} />
            </DivTableContainer>
          </DivCellInnerContainer>
        </DivCellOuterContainer>
      </ButtonPicker>
      {guestDropDownActive && <GuestPickerDropDown maxGuests={maxGuests} />}
    </DivPickerOuterContainer>
    <input type="hidden" name="number_of_guests" value="1" />
    <input type="hidden" name="number_of_adults" value="1" />
    <input type="hidden" name="number_of_children" value="0" />
    <input type="hidden" name="number_of_infants" value="0" />
  </DivOuterContainer>
);

GuestPicker.propTypes = {
  guestDropDownActive: PropTypes.bool.isRequired,
  handleGuestDropDown: PropTypes.func.isRequired,
  maxGuests: PropTypes.number.isRequired,
};

const DivOuterContainer = styled.div`
  margin-bottom: 16px;
`;

const LabelOuterContainer = styled.label`
  display: block;
  font-size: 17px;
  font-weight: 200;
  margin: 0px;
  padding: 0px;
  padding-bottom: 4px;
`;

const SmallLabelInnerContainer = styled.small`
  color: #484848;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: normal;
  line-height: 16px;
  margin: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  word-wrap: break-word;
`;

const DivPickerOuterContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ButtonPicker = styled.button`
  background: #ffffff;
  ${props => (props.guestDropDownActive ? `
  border-bottom: 2px solid rgb(0, 132, 137);
  border-color: rgb(219, 219, 219) rgb(219, 219, 219) rgb(0, 132, 137);
  border-image: initial;
  border-style: solid;
  border-width: 1px 1px 2px;
  color: black;` : `
  border: 1px solid #DBDBDB;
  `)}
  border-radius: 2px;
  cursor: pointer;
  display: block;
  line-height: normal;
  padding: 8px;
  text-align: left;
  width: 100%;
`;

const DivCellOuterContainer = styled.div`
  margin-left: 8px;
  margin-right: 8px;
`;

const DivCellInnerContainer = styled.div`
  color: #484848;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: undefined;
  line-height: 22px;
  padding-bottom: 0px;
  padding-top: 0px;
  word-wrap: break-word;
`;

const DivTableContainer = styled.div`
  display: table;
  width: 100%;
`;

export default GuestPicker;
