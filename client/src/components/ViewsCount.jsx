import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

const ViewsCount = ({ isBookItFixed, views }) => (
  <DivOuterContainer isBookItFixed={isBookItFixed}>
    <DivEmptyContainer>
      <DivBorder />
    </DivEmptyContainer>
    <DivInnerContainer>
      <DivImage>
        <DivTextContainer>
          <Span>This home is on people’s minds.</Span>
          <DivText>It’s been viewed {views} times in the past week.</DivText>
        </DivTextContainer>
      </DivImage>
    </DivInnerContainer>
  </DivOuterContainer>
);

function mapStateToProps(reduxState) {
  return {
    isBookItFixed: reduxState.isBookItFixed,
    views: reduxState.views,
  };
}

ViewsCount.propTypes = {
  isBookItFixed: PropTypes.bool.isRequired,
  views: PropTypes.number.isRequired,
};

const DivOuterContainer = styled.div`
  ${props => (props.isBookItFixed ? 'max-height: 300px; opacity: 1' : 'max-height: 0px; opacity: 0;')}
  overflow: hidden;
  transition: max-height 0.8s, opacity 0.8s linear 0.2s;
`;

const DivEmptyContainer = styled.div`
  margin: 24px 0;
`;

const DivBorder = styled.div`
  border-bottom: 1px solid #DBDBDB;
`;

const DivInnerContainer = styled.div`
  color: #484848;
  font: normal 14px Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  letter-spacing: normal;
  line-height: 18px;
  margin: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  word-wrap: break-word;
`;

const DivImage = styled.div`
  background: no-repeat right center/48px url(https://a0.muscache.com/airbnb/static/page3/icon-uc-light-bulb-b34f4ddc543809b3144949c9e8cfcc8d.gif);
  margin-top: 0px;
  transition: margin-top 0.4s;
`;

const DivTextContainer = styled.div`
  min-height: 34px;
  width: 84%;
`;

const Span = styled.span`
  color: rgb(72, 72, 72);
  display: inline;
  font-weight: 600;
`;

const DivText = styled.div`
  margin-top: 6px;
`;

export default connect(mapStateToProps)(ViewsCount);
