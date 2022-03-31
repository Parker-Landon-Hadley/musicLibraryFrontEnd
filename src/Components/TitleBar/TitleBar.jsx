import React from 'react';
import './TitleBar.css'

const TitleBar = () => {
    return (
        <React.Fragment>
            <div className='backgrd'>
            <h2 className='navtitle'>MyMusic.</h2>
            <div className='title'>
                <h3>Welcome to <br/>
                your music.</h3>
                </div>
            </div>
        </React.Fragment>
    );
}

export default TitleBar;