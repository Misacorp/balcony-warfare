import React from 'react';
import transition from 'styled-transition-group';
import PropTypes from 'prop-types';

import WheelImage from '../../assets/images/1x/Pyora.png';

import animation from './animation';

const WheelStructure = ({ className }) => {
  return <img className={className} src={WheelImage} alt="Wheel" />;
};

const Wheel = transition(WheelStructure).attrs({
  unmountOnExit: true,
  mountOnEnter: true,
  timeout: 1000,
})`
  bottom: 10%;
  right: 45%;
  z-index: 10;

  transform-origin: 50% 60%;

  ${animation}
`;

WheelStructure.propTypes = {
  className: PropTypes.string,
};

export default Wheel;
