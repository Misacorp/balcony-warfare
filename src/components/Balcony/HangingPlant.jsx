import React from 'react';
import transition from 'styled-transition-group';
import PropTypes from 'prop-types';

import HangingPlantImage from '../../assets/images/1x/Amppeli.png';

import animation from './animation';

const HangingPlantStructure = ({ className }) => {
  return (
    <img className={className} src={HangingPlantImage} alt="HangingPlant" />
  );
};

const HangingPlant = transition(HangingPlantStructure).attrs({
  unmountOnExit: true,
  mountOnEnter: true,
  timeout: 1000,
})`
  bottom: 51.7%;
  right: 14%;
  z-index: 10;

  transform-origin: 50% 30%;

  ${animation}
`;

HangingPlantStructure.propTypes = {
  className: PropTypes.string,
};

export default HangingPlant;
