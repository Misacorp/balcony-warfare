import React from 'react';
import transition from 'styled-transition-group';
import PropTypes from 'prop-types';

import BlackPaintImage from '../../assets/images/1x/Maali musta.png';
import RedPaintImage from '../../assets/images/1x/Maali punainen.png';

import animation from './animation';

const PaintStructure = ({ color, className }) => {
  return (
    <img
      className={className}
      src={color === 'black' ? BlackPaintImage : RedPaintImage}
      alt="Paint can"
    />
  );
};

const Paint = transition(PaintStructure).attrs({
  unmountOnExit: true,
  mountOnEnter: true,
  timeout: 1000,
})`
  bottom: ${({ color }) => (color === 'black' ? 3 : 8)}%;
  right: ${({ color }) => (color === 'black' ? 5 : 12)}%;
  z-index: 11;

  transform-origin: 50% 80%;

  ${animation}
`;

PaintStructure.propTypes = {
  color: PropTypes.oneOf(['red', 'black']).isRequired,
  className: PropTypes.string,
};

export default Paint;
