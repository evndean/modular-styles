import React from 'react';

const defaultStyle = {
  backgroundColor: '#ffffff',
  color: '#88909a',
  padding: 35,
  boxShadow: '0 2px 4px 0 #c8ccd3',
};

export default ({ style }) => (
  <div style={{...style, ...defaultStyle}}>
    HEADER NAV
  </div>
);
