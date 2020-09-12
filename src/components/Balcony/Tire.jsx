import React from 'react';
import transition from 'styled-transition-group';
import PropTypes from 'prop-types';

import TireImage from '../../assets/images/1x/Auton rengas.png';

import animation from './animation';

const TireStructure = ({ className }) => {
  return <img className={className} src={TireImage} alt="Tire" />;
};

const Tire = transition(TireStructure).attrs({
  unmountOnExit: true,
  mountOnEnter: true,
  timeout: 1000,
})`
  bottom: ${({ delay = 1 }) => (delay - 1) * 7 + 22}%;
  right: ${({ delay = 1 }) => Math.sin(delay / 2) * 2 + 77}%;
  z-index: 9;

  transform-origin: 50% 70%;

  ${animation}
`;

TireStructure.propTypes = {
  className: PropTypes.string,
};

export default Tire;
