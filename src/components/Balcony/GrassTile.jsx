import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import { ReactComponent as GrassTileImage } from '../../assets/images/SVG/Grass Tile 2.svg';

const TILE_OVERLAP_PERCENT = 8.8;
const TILE_WIDTH = 100 - 2 * TILE_OVERLAP_PERCENT;

const GrassTileStructure = ({ row, column, className }) => {
  if (column === 0) return null;

  return <GrassTileImage className={className} />;
};

const GrassTile = styled(GrassTileStructure)`
  bottom: 0;
  transform: translate(
    ${({ column }) => (column - 1) * TILE_WIDTH - TILE_OVERLAP_PERCENT}%,
    ${({ row }) => (row - 1) * TILE_WIDTH - TILE_OVERLAP_PERCENT}%
  );
`;

GrassTileStructure.propTypes = {
  row: PropTypes.oneOf([1, 2]).isRequired,
  column: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]).isRequired,
  className: PropTypes.string,
};

export default GrassTile;
