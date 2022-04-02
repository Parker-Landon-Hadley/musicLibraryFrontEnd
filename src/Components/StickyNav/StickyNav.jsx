import React from 'react';
import './StickyNav.css'

function StickyNav(props) {
    return ( 
        <div>
            <div className="fixed"><button className="sticky-btn"><a href="#TitleBar">Top</a></button></div>
            <br />
            <br />
            <div className="fixed"><button className="sticky-btn"><a href="#SearchBar">Search</a></button></div>
        </div>
     );
}

export default StickyNav;