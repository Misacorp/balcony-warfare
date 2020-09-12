import React from 'react';
import transition from 'styled-transition-group';
import PropTypes from 'prop-types';

import SquarePottedPlantImage from '../../assets/images/1x/Pieni ruukkukasvi.png';

import animation from './animation';

const SquarePottedPlantStructure = ({ className }) => {
  return (
    <img
      className={className}
      src={SquarePottedPlantImage}
      alt="SquarePottedPlant"
    />
  );
};

const SquarePottedPlant = transition(SquarePottedPlantStructure).attrs({
  unmountOnExit: true,
  mountOnEnter: true,
  timeout: 1000,
})`
  bottom: 30%;
  right: 48%;
  z-index: 10;

  transform-origin: 50% 75%;

  ${animation}
`;

SquarePottedPlantStructure.propTypes = {
  className: PropTypes.string,
};

export default SquarePottedPlant;
