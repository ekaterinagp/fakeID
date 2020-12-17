import React, { useState } from 'react'
import './../css/search.css'

export default function SearchBar (props){
    const [ searchString, setSearchString ] = useState()

  
    const handleSearch = () => {
        props.onSearch(searchString)
    }

    return(
        <div className="searchBar">
            <input type="text" placeholder="Search users by name" onChange={(event) => setSearchString(event.target.value)}/>
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}