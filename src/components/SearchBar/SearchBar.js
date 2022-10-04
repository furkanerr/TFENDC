import React, { useState,useEffect } from 'react'
import Buttons from '../Buttons/Buttons'
import "../../styles/index.scss"
import { useData } from '../../context/dataContext';

function SearchBar() {
  const {searchResults,searchTerm,handleSearchChange} = useData();
  return (
    <div className='search-bar-container'>
      
            <input type='text' placeholder='Search' value={searchTerm} onChange={(event)=> handleSearchChange(event)}/>
       
            <Buttons type={'search'} isDisabled={searchResults==[] ? true :false}>Search</Buttons>
    </div>
  )
}

export default SearchBar