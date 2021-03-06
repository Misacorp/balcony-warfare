import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import BalconyBase from './BalconyBase';
import GrassTile from './GrassTile';
import StoneTile from './StoneTile';
import Motor from './Motor';
import Paint from './Paint';
import FishingRod from './FishingRod';
import Wheel from './Wheel';
import Box from './Box';
import Tire from './Tire';
import SquarePottedPlant from './SquarePottedPlant';
import Palm from './Palmu';
import Palm2 from './Palm2';
import Pillow from './Pillow';
import HangingPlant from './HangingPlant';
import CactusRed from './CactusRed';
import CactusPurple from './CactusPurple';

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

      <Motor in={grassProgress < 6} />
      <Palm2 in={grassProgress > 5} />

      <Paint color="red" in={grassProgress < 5} />
      <Paint color="black" in={grassProgress < 6} delay={2} />
      <HangingPlant in={grassProgress > 4} />

      <FishingRod in={grassProgress < 4} />
      <Pillow in={grassProgress > 3} />

      <Wheel in={grassProgress < 3} />
      <SquarePottedPlant in={grassProgress > 2} />

      <Box in={grassProgress < 2} />
      <CactusRed in={grassProgress > 1} delay={1} />
      <CactusPurple in={grassProgress > 1} />

      <Tire in={grassProgress < 1} />
      <Tire in={grassProgress < 1} delay={2} />
      <Tire in={grassProgress < 1} delay={3} />
      <Tire in={grassProgress < 1} delay={4} />

      <Palm in={grassProgress > 0} />
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
