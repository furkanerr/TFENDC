import React, { Children } from 'react'
import { Link } from 'react-router-dom'
import "../../styles/index.scss"
function Buttons({type,children,isDisabled}) {
    if(type === 'search'){
  return (
    <div className='search-button-container'>
      <Link to="/result">
        <button className="search-pagelink-button" disabled={isDisabled}>
        {children}
        </button>
      </Link>
      </div>
  )
    }
    else if(type === 'add'){
        return (
    
        <button className={isDisabled ? "add-pagelink-button-disabled" :"add-pagelink-button"} disabled={isDisabled}>
        {children}
        </button>
          )
    } else if(type === 'addPageLink'){
        return (
             <div className='add-button-container'>
       <Link to="/addnewrecord">
        <button className={"add-pagelink-button"}>
        {children}
        </button>
      </Link>
       </div>
          )
    }
}

export default Buttons