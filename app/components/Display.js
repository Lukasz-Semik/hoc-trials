import React from 'react';
import HoCloader from './HoC';

const Display = ({
  back_default,
  front_default,
}) => (
  <div>
    <div>
      <img src={back_default} />
    </div>
    <div>
      <img src={front_default} />
    </div>
  </div>
)

export default HoCloader(Display);
