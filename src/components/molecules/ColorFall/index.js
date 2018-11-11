import React from 'react';
import { ColorDrip } from '../../atoms';
import './ColorFall.scss';

const ColorFall = () => {
  return (
    <div className="color-fall">
      <div className="stack">
        <ColorDrip colors={['#6A9907', '#A2CC49']} length={400} width={60} />
        <ColorDrip
          //colors={['#A3D9FF', '#95C147', '#BDD693']}
          colors={['#A3D9FF', '#94EF9A']}
          length={250}
          width={60}
        />
      </div>
      <div className="stack">
        <ColorDrip
          //   colors={['#A3D9FF', '#47E5BC', '#81E2C8', '#ADDDD0']}
          colors={['#A3D9FF', '#47E5BC']}
          length={300}
          width={60}
        />
      </div>
      <div className="stack">
        <ColorDrip
          colors={['#6B8DC4', '#80A4DD', '#AEC7EF']}
          length={350}
          width={60}
        />
        <ColorDrip
          //colors={['#A3D9FF', '#A5D1CE', '#BEF4F2']}
          colors={['#A3D9FF', '#BEF4F2']}
          length={200}
          width={60}
        />
      </div>
      <div className="stack">
        <ColorDrip colors={['#B6D6A0', '#8ECE63']} length={450} width={60} />
        <ColorDrip
          //colors={['#A3D9FF', '#DCFCB3', '#C4EF8B']}
          colors={['#A3D9FF', '#DCFCB3']}
          length={250}
          width={60}
        />
      </div>
      <div className="stack">
        <ColorDrip
          colors={['#A3D9FF', '#81E2C8', '#C4D6FF']}
          length={250}
          width={60}
        />
      </div>
    </div>
  );
};

export default ColorFall;
