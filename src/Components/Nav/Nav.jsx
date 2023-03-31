import SearchBar from '../SearchBar/SearchBar';
import React from 'react';
import style from './Nav.css';



export default function Nav(props) {
  return (

    <div className={style.nav}>
      <SearchBar onSearch={props.onSearch} />
    </div>
  )
}

// onSearch={(characterID) => window.alert(characterID)}
