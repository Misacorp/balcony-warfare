import React from 'react';
import transition from 'styled-transition-group';
import PropTypes from 'prop-types';

import StoneTileImage from '../../assets/images/1x/Stone Tile 2.png';

const TILE_OVERLAP_PERCENT_X = 0.5;
const TILE_OVERLAP_PERCENT_Y = 5;
const TILE_WIDTH = 100 - 2 * TILE_OVERLAP_PERCENT_X;
const TILE_HEIGHT = 100 - 2 * TILE_OVERLAP_PERCENT_Y;

const StoneTileStructure = ({ row, column, className }) => {
  if (column === 0) return null;

  return <img src={StoneTileImage} className={className} alt="Stone" />;
};

const StoneTile = transition(StoneTileStructure).attrs({
  unmountOnExit: true,
  mountOnEnter: true,
  timeout: 1000,
})`
  z-index: ${({ column }) => 6 - column};
  bottom: 17.4%;
  transform: translate(
    ${({ column }) => (column - 1) * TILE_WIDTH - TILE_OVERLAP_PERCENT_X}%,
    ${({ row }) => (row - 1) * TILE_HEIGHT - TILE_OVERLAP_PERCENT_Y}%
  );
  transform-origin: 80% ${({ row }) => (row === 1 ? 100 : 0)}%;

  &:enter {
    transform: translate(
      ${({ column }) => (column - 1) * TILE_WIDTH - TILE_OVERLAP_PERCENT_X}%,
      ${({ row }) => (row - 1) * TILE_HEIGHT - TILE_OVERLAP_PERCENT_Y}%
    ) scale(0);
  }

  &:enter-active {
    transform: translate(
      ${({ column }) => (column - 1) * TILE_WIDTH - TILE_OVERLAP_PERCENT_X}%,
      ${({ row }) => (row - 1) * TILE_HEIGHT - TILE_OVERLAP_PERCENT_Y}%
    ) scale(1);
    transition-property: transform;
    transition-duration: ${({ theme }) => theme.transition.duration};
    transition-timing-function: ${({ theme }) =>
      theme.transition.timingFunction};
    transition-delay: ${({ row }) => (row === 1 ? 0 : 100)}ms;
  }
      
  &:exit {
    transform: translate(
      ${({ column }) => (column - 1) * TILE_WIDTH - TILE_OVERLAP_PERCENT_X}%,
      ${({ row }) => (row - 1) * TILE_HEIGHT - TILE_OVERLAP_PERCENT_Y}%
    ) scale(1);
  }

  &:exit-active {
    transform: translate(
      ${({ column }) => (column - 1) * TILE_WIDTH - TILE_OVERLAP_PERCENT_X}%,
      ${({ row }) => (row - 1) * TILE_HEIGHT - TILE_OVERLAP_PERCENT_Y}%
    ) scale(0);
    z-index: 0;
    transition-property: transform;
    transition-duration: ${({ theme }) => theme.transition.duration};
    transition-timing-function: ${({ theme }) =>
      theme.transition.timingFunction};
    transition-delay: ${({ row }) => (row === 1 ? 0 : 100)}ms;
  }
`;

StoneTileStructure.propTypes = {
  row: PropTypes.oneOf([1, 2]).isRequired,
  column: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]).isRequired,
  className: PropTypes.string,
};

export default StoneTile;
