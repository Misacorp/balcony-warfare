import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import { ReactComponent as StoneTileImage } from '../../assets/images/SVG/Stone Tile 2.svg';

const TILE_OVERLAP_PERCENT_X = 0;
const TILE_OVERLAP_PERCENT_Y = 5;
const TILE_WIDTH = 100 - 2 * TILE_OVERLAP_PERCENT_X;
const TILE_HEIGHT = 100 - 2 * TILE_OVERLAP_PERCENT_Y;

const GrassTileStructure = ({ row, column, className }) => {
  if (column === 0) return null;

  return <StoneTileImage className={className} />;
};

const GrassTile = styled(GrassTileStructure)`
  bottom: 2%;
  transform: translate(
    ${({ column }) => (column - 1) * TILE_WIDTH - TILE_OVERLAP_PERCENT_X}%,
    ${({ row }) => (row - 1) * TILE_HEIGHT - TILE_OVERLAP_PERCENT_Y}%
  );
`;

GrassTileStructure.propTypes = {
  row: PropTypes.oneOf([1, 2]).isRequired,
  column: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]).isRequired,
  className: PropTypes.string,
};

export default GrassTile;
