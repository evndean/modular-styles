import React from 'react';

const defaultStyle = {
  backgroundColor: 'white',
  height: 600,
};

export default ({ style }) => (
  <div style={{ ...style,  ...defaultStyle }}>
    LIST
  </div>
);
