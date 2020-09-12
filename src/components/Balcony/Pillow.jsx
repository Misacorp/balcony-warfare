import React from 'react';
import transition from 'styled-transition-group';
import PropTypes from 'prop-types';

import PillowImage from '../../assets/images/1x/Tyyny.png';

import animation from './animation';

const PillowStructure = ({ className }) => {
  return <img className={className} src={PillowImage} alt="Pillow" />;
};

const Pillow = transition(PillowStructure).attrs({
  unmountOnExit: true,
  mountOnEnter: true,
  timeout: 1000,
})`
  bottom: 2%;
  right: 34%;
  z-index: 10;

  transform-origin: 50% 55%;

  ${animation}
`;

PillowStructure.propTypes = {
  className: PropTypes.string,
};

export default Pillow;
