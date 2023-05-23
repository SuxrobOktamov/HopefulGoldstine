import React from 'react';

function Header() {
  return (
    <header>
       <div className="header-search">
        <div className="search-input">
            <span className="material-symbols-outlined ">search</span>
            <input type="search" placeholder="Search topics" />
        </div>
        <div className="shut-down">
            <span className="material-symbols-outlined ">notifications <span className="notifications">4</span></span>
            <span className="material-symbols-outlined"> chat_bubble <span className="message">3</span></span>
            <span className="material-symbols-outlined">power_rounded</span>
        </div>
       </div> 
    </header>
  )
}

export default Header;