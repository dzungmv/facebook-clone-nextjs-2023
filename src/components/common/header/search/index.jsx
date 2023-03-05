import React, { useState } from 'react';

import styles from '../header.module.scss';

const Search = () => {
    const [isSearchFocus, setIsSearchFocus] = useState(false);
    const [seachValue, setSearchValue] = useState('');

    return (
        <section className='header-left-search'>
            <i className='fa-regular fa-magnifying-glass search-icon'></i>
            <input
                className='search-input'
                type='text'
                placeholder='Search Facebook'
                onChange={(e) => {
                    setSearchValue(e.target.value);
                }}
            />
        </section>
    );
};

export default Search;
