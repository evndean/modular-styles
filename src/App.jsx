import React from 'react';
import SidebarNav from './SidebarNav';
import HeaderNav from './HeaderNav';
import Body from './Body';

const style = {
  display: 'grid',
  gridTemplateColumns: '80px auto',
  gridTemplateRows: '100px auto',
  gridTemplateAreas: `
    'sidebar header'
    'sidebar body'
  `,
  overflow: 'hidden',
};

const sidebarStyle = {
  gridRowStart: 1,
  gridRowEnd: 3,
  gridColumnStart: 1,
  gridColumnEnd: 2,
};

export default () => (
  <div style={style}>
    <SidebarNav style={sidebarStyle}/>
    <HeaderNav />
    <Body />
  </div>
);
