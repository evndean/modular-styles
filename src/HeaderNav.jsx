import React from 'react';

const defaultStyle = {
  backgroundColor: '#ffffff',
  color: '#88909a',
  padding: 35,
  boxShadow: '0 2px 4px 0 #c8ccd3',
};

const HeaderNav = ({ style }) => (
  <div style={{ ...defaultStyle, ...style }}>
    HEADER NAV
  </div>
);

export default HeaderNav;
