import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { clientContext } from '../../contexts/ClientContext';

const SearchInput = () => {
    const history = useHistory('')
    const [searchValue, setSearchValue] = useState('')
    const { getPizzas, getCombos, getSnacks, getDesserts, getBeverages, getOthergood } = useContext(clientContext)
    const filterProducts = (key, value) => {
        let search = new URLSearchParams(history.location.search)
        search.set(key, value)
        let url = `${history.location.pathname}?${search.toString()}`
        history.push(url)
        setSearchValue(search.get('q') || '')
        getPizzas()
        getCombos()
        getSnacks()
        getDesserts()
        getBeverages()
        getOthergood()
    }
    let search = new URLSearchParams(history.location.search)

    useEffect(() => {
        setSearchValue(search.get('q'))
    }, [history.location])

    return (
        <div className='inp'>
            <input type="text"
                className='input'
                placeholder='Поиск...'
                onChange={(e) => { filterProducts('q', e.target.value) }}
            />
        </div>
    );
};

export default SearchInput;