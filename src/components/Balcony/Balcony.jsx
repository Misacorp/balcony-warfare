import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import BalconyBase from './BalconyBase';
import GrassTile from './GrassTile';
import StoneTile from './StoneTile';

const BalconyStructure = ({ grassProgress, className }) => {
  return (
    <div className={className}>
      <BalconyBase />

      {[...Array(6).keys()].map((element, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <React.Fragment key={index}>
          <GrassTile row={1} column={index + 1} in={index < grassProgress} />
          <GrassTile row={2} column={index + 1} in={index < grassProgress} />

          <StoneTile row={1} column={index + 1} in={index >= grassProgress} />
          <StoneTile row={2} column={index + 1} in={index >= grassProgress} />
        </React.Fragment>
      ))}

      <p>GrassProgress = {grassProgress}</p>
    </div>
  );
};

const Balcony = styled(BalconyStructure)`
  position: relative;
  width: 1002.04px;
  height: 753px;

  overflow: hidden;
  border: solid 10px #111;

  margin: auto;

  & > svg,
  & > img {
    position: absolute;
  }
`;

BalconyStructure.propTypes = {
  grassProgress: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]).isRequired,
  className: PropTypes.string,
};

export default Balcony;
