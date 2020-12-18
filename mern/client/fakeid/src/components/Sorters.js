import React, { useEffect, useState } from 'react'

export default function Sorters(props){
    const [ values, setValues ] = useState({
        ageSort: false,
        nameSort:false
    })
    
    useEffect(() => {
        props.onSort(values)
    },[values])


    const handleSort = (event) => {
        setValues(values => ({...values, [event.target.name]: event.target.checked}))
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