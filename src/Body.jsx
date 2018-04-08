import React from 'react';
import List from './List';

const defaultStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateRows: '404px 1fr',
  gridGap: 30,
  backgroundColor: '#f0f3f4',
  color: '#88909a',
  padding: 30,
};

const listLayoutStyle = {
  gridColumnStart: 1,
  gridColumnEnd: 4,
};

const Graph = () => (
  <div style={{ backgroundColor: 'white' }}>
    GRAPH
  </div>
);

export default ({ style }) => (
  <div style={{...style, ...defaultStyle}}>
    <Graph />
    <Graph />
    <Graph />
    <List style={listLayoutStyle} />
  </div>
);
