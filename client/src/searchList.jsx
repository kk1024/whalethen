import React from 'react';
import SearchListEntry from './searchListEntry.jsx';

const SearchList = props => (
  <div>
    {props.events.map((event, index) => (
      <SearchListEntry days={props.days} key={index} event={event} />
      ))}
  </div>
);


export default SearchList;
