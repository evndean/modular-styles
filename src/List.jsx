import React from 'react';

const listItemsStyle = {
  backgroundColor: 'white',
};

const searchBarStyle = {
  height: 80,
};

const SearchBar = () => (
  <div style={searchBarStyle}>SEARCH BAR</div>
);

const listHeaderStyle = {
  height: 60,
  backgroundColor: '#e2e4e8',
};

const ListHeader = () => (
  <div style={listHeaderStyle}>LIST HEADER</div>
);

const listFooterStyle = {
  height: 80,
};

const ListFooter = () => (
  <div style={listFooterStyle}>LIST FOOTER</div>
);

const listItemStyle = {
  height: 80,
};

const ListItem = ({ index }) => (
  <div style={{ ...listItemStyle, backgroundColor: index % 2 === 0 ? '#ffffff' : '#f7f8f9'}}>LIST ITEM</div>
);

const ListItems = () => (
  <div style={listItemsStyle}>
    <SearchBar />
    <ListHeader />
    {Array(10).fill().map((item, index) => (
      <ListItem key={index} index={index} />
    ))}
    <ListFooter />
  </div>
);

const List = ({ style }) => (
  <div style={{ ...style }}>
    Active Content: 110 Items
    <button>ADD NEW</button>
    <ListItems />
  </div>
);

export default List;
