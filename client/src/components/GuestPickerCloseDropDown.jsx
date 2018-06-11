import React from 'react';
import styled from 'styled-components';

const GuestPickerCloseDropDown = () => (
  <DivOuterContainer>
    <DivEmptyContainer />
    <DivButtonOuterContainer>
      <DivButtonInnerContainer>
        <Button>
          <span>Close</span>
        </Button>
      </DivButtonInnerContainer>
    </DivButtonOuterContainer>
  </DivOuterContainer>
);

const DivOuterContainer = styled.div`
  align-items: center;
  display: flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  flex-wrap: wrap;
  line-height: 0;
  text-align: justify;
  -ms-flex-align: center;
  -ms-flex-wrap: wrap;
  -webkit-box-align: center;
  -webkit-box-lines: multiple;
  -webkit-flex-wrap: wrap;
  -webkit-align-items: center;
`;

const DivEmptyContainer = styled.div`
  display: inline-block;
  flex-grow: 1;
  text-align: left;
  vertical-align: middle;
  -ms-flex-positive: 1;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
`;

const DivButtonOuterContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const DivButtonInnerContainer = styled.div`
  color: rgb(72, 72, 72);
  font: 600 16px Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  margin: 0px;
  line-height: 22px;
  padding-top: 0px;
  padding-bottom: 0px;
  word-wrap: break-word;
`;

const Button = styled.button`
  appearance: none;
  background: transparent;
  color: #008489;
  cursor: pointer;
  font: inherit;
  border: 0px;
  margin: 0px;
  outline: none;
  padding: 0px;
  text-align: left;
  text-decoration: none;
  user-select: auto;
  -ms-user-select: auto;
  -moz-appearance: none;
  -moz-user-select: auto;
  -webkit-appearance: none;
  -webkit-user-select: auto;
  &:hover {
  text-decoration:underline;
  }
`;

export default GuestPickerCloseDropDown;
