import React from 'react';
import transition from 'styled-transition-group';
import PropTypes from 'prop-types';

import FishingRodImage from '../../assets/images/1x/Virveli.png';

import animation from './animation';

const FishingRodStructure = ({ className }) => {
  return <img className={className} src={FishingRodImage} alt="FishingRod" />;
};

const FishingRod = transition(FishingRodStructure).attrs({
  unmountOnExit: true,
  mountOnEnter: true,
  timeout: 1000,
})`
  bottom: 30%;
  right: 30%;
  z-index: 10;

  transform-origin: 30% 95%;

  ${animation}
`;

FishingRodStructure.propTypes = {
  className: PropTypes.string,
};

export default FishingRod;
