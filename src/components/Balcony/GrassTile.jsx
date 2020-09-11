import React from 'react';
import PropTypes from 'prop-types';
import transition from 'styled-transition-group';

import GrassTileImage from '../../assets/images/1x/Grass Tile 2.png';

const TILE_OVERLAP_PERCENT = 8.7;
const TILE_WIDTH = 100 - 2 * TILE_OVERLAP_PERCENT;

const GrassTileStructure = ({ row, column, className }) => {
  if (column === 0) return null;

  return <img className={className} src={GrassTileImage} alt="Grass" />;
};

const GrassTile = transition(GrassTileStructure).attrs({
  unmountOnExit: true,
  mountOnEnter: true,
  timeout: 1000,
})`
  z-index: ${({ column }) => 6 - column};
  bottom: 17.4%;
  transform: translate(
    ${({ column }) => (column - 1) * TILE_WIDTH - TILE_OVERLAP_PERCENT}%,
    ${({ row }) => (row - 1) * TILE_WIDTH - TILE_OVERLAP_PERCENT}%
  );
  transform-origin: 20% ${({ row }) => (row === 1 ? 100 : 0)}%;
  
  &:enter {
    transform: translate(
      ${({ column }) => (column - 1) * TILE_WIDTH - TILE_OVERLAP_PERCENT}%,
      ${({ row }) => (row - 1) * TILE_WIDTH - TILE_OVERLAP_PERCENT}%
      ) scale(0);
  }

  &:enter-active {
    transform: translate(
      ${({ column }) => (column - 1) * TILE_WIDTH - TILE_OVERLAP_PERCENT}%,
      ${({ row }) => (row - 1) * TILE_WIDTH - TILE_OVERLAP_PERCENT}%
    ) scale(1);
    transition-property: transform;
    transition-duration: ${({ theme }) => theme.transition.duration};
    transition-timing-function: ${({ theme }) =>
      theme.transition.timingFunction};
    transition-delay: ${({ row }) => (row === 1 ? 0 : 100)}ms;
  }
      
  &:exit {
    transform: translate(
      ${({ column }) => (column - 1) * TILE_WIDTH - TILE_OVERLAP_PERCENT}%,
      ${({ row }) => (row - 1) * TILE_WIDTH - TILE_OVERLAP_PERCENT}%
    ) scale(1);
  }

  &:exit-active {
    transform: translate(
      ${({ column }) => (column - 1) * TILE_WIDTH - TILE_OVERLAP_PERCENT}%,
      ${({ row }) => (row - 1) * TILE_WIDTH - TILE_OVERLAP_PERCENT}%
    ) scale(0);
    transition-property: transform;
    transition-duration: ${({ theme }) => theme.transition.duration};
    transition-timing-function: ${({ theme }) =>
      theme.transition.timingFunction};
    transition-delay: ${({ row }) => (row === 1 ? 0 : 100)}ms;
  }
`;

GrassTileStructure.propTypes = {
  row: PropTypes.oneOf([1, 2]).isRequired,
  column: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]).isRequired,
  className: PropTypes.string,
};

export default GrassTile;
