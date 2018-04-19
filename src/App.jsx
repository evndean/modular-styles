import React from 'react';
import SidebarNav from './SidebarNav';
import HeaderNav from './HeaderNav';
import Body from './Body';

const style = {
  display: 'grid',
  gridTemplateColumns: '80px auto',
  gridTemplateRows: '100px auto',
  overflow: 'hidden',
};

const sidebarLayoutStyle = {
  gridRowStart: 1,
  gridRowEnd: 3,
  gridColumnStart: 1,
  gridColumnEnd: 2,
};

const headerLayoutStyle = {
  gridRowStart: 1,
  gridRowEnd: 2,
  gridColumnStart: 2,
  gridColumnEnd: 3,
};

const bodyLayoutStyle = {
  gridRowStart: 2,
  gridRowEnd: 3,
  gridColumnStart: 2,
  gridColumnEnd: 3,
};

const App = () => (
  <div style={style}>
    <Body style={bodyLayoutStyle}/>
    <HeaderNav style={headerLayoutStyle}/>
    <SidebarNav style={sidebarLayoutStyle}/>
  </div>
);

export default App;
