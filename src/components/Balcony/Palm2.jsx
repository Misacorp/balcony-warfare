import React from 'react';
import transition from 'styled-transition-group';
import PropTypes from 'prop-types';

import PalmImage from '../../assets/images/1x/Palmu.png';

import animation from './animation';

const PalmStructure = ({ className }) => {
  return <img className={className} src={PalmImage} alt="Palm" />;
};

const Palm = transition(PalmStructure).attrs({
  unmountOnExit: true,
  mountOnEnter: true,
  timeout: 1000,
})`
  bottom: 23%;
  right: -5%;
  z-index: 11;

  transform-origin: 50% 75%;

  ${animation}
`;

PalmStructure.propTypes = {
  className: PropTypes.string,
};

export default Palm;
