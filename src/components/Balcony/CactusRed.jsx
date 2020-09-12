import React from 'react';
import transition from 'styled-transition-group';
import PropTypes from 'prop-types';

import CactusRedImage from '../../assets/images/1x/Kaktus punainen.png';

import animation from './animation';

const CactusRedStructure = ({ className }) => {
  return <img className={className} src={CactusRedImage} alt="CactusRed" />;
};

const CactusRed = transition(CactusRedStructure).attrs({
  unmountOnExit: true,
  mountOnEnter: true,
  timeout: 1000,
})`
  bottom: 15%;
  right: 67%;
  z-index: 10;

  transform-origin: 50% 70%;

  ${animation}
`;

CactusRedStructure.propTypes = {
  className: PropTypes.string,
};

export default CactusRed;
