import React, { useState } from 'react'

export default function Sorters(props){
    
    const handleSort = (event) => {
        props.onSort(({[event.target.name]: event.target.value }))
    }

    return(
        <div>
            <div className="labelRadio sorters">
            <h4>Sort</h4>
                <input type="checkbox" id="ageSort" name="ageSort" value='ageSort' onChange={handleSort} />
                <label htmlFor="ageSort"> Age </label>
                <input id="nameSort" type="checkbox" name="nameSort" value='nameSort' onChange={handleSort} />
                <label htmlFor="nameSort"> Name </label>
            </div>
        </div>
    )

}