import React from 'react';
import transition from 'styled-transition-group';
import PropTypes from 'prop-types';

import CactusPurpleImage from '../../assets/images/1x/Kaktus liila.png';

import animation from './animation';

const CactusPurpleStructure = ({ className }) => {
  return (
    <img className={className} src={CactusPurpleImage} alt="CactusPurple" />
  );
};

const CactusPurple = transition(CactusPurpleStructure).attrs({
  unmountOnExit: true,
  mountOnEnter: true,
  timeout: 1000,
})`
  bottom: 21%;
  right: 71%;
  z-index: 9;

  transform-origin: 50% 70%;

  ${animation}
`;

CactusPurpleStructure.propTypes = {
  className: PropTypes.string,
};

export default CactusPurple;
