import React from 'react';
import transition from 'styled-transition-group';
import PropTypes from 'prop-types';

import MotorImage from '../../assets/images/1x/Peramoottori.png';

import animation from './animation';

const MotorStructure = ({ className }) => {
  return <img className={className} src={MotorImage} alt="Motor" />;
};

const Motor = transition(MotorStructure).attrs({
  unmountOnExit: true,
  mountOnEnter: true,
  timeout: 1000,
})`
  bottom: 17%;
  right: 1.5%;
  z-index: 10;

  ${animation}
`;

MotorStructure.propTypes = {
  className: PropTypes.string,
};

export default Motor;
