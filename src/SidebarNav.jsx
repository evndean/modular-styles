import React from 'react';

const buttonColor = "#88909a";

const defaultStyle = {
  backgroundColor: '#414042',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: '3px 0 4px 0 rgba(0, 0, 0, 0.24)',
};

const Square = () => (
  <svg height="35" width="35" style={{ paddingTop: 25, paddingBottom: 35 }}>
    <rect x="0" y="0" width="35" height="35" fill={buttonColor} />
  </svg>
);

const Circle = ({ filled }) => (
  <svg height="30" width="30" style={{ padding: '25 0' }}>
    <circle cx="15" cy="15" r="13" stroke={buttonColor} strokeWidth="4" fill={ filled ? buttonColor : "none"} />
  </svg>
);

const SidebarNav = ({ style }) => (
  <div style={{ ...defaultStyle, ...style }}>
    <Square />
    {Array(5).fill().map((t, i) => (
      <Circle key={i} />
    ))}
    <Circle filled />
  </div>
);

export default SidebarNav;
