import React from 'react';

import SolarLoader from './SolarLoader.gif';
import './Loader.css';

export default function Loader() {
    return(
        <div className='valign-wrapper loader-div'>
            <img src={SolarLoader} alt='The page is loading' className='loader-img' />
        </div>
    )
}