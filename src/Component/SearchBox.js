import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div>
            <input className='pa2 ma3 bg-lightest-blue b--dark-green' type='search' placeholder='search robots...' onChange={searchChange}/>
        </div>
    )
}

export default SearchBox;
