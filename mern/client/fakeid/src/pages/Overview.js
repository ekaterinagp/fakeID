import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import Sorters from '../components/Sorters'
import Filters from '../components/Filters'
import SearchBar from '../components/SearchBar'

import './../css/overview.css'


export default function Overview(){
    const [ loading, setLoading ] = useState(true)
    const [ users, setUsers ] = useState()
    const [ displayedUsers, setDisplayUsers ] = useState()
    const [ isShown , setIsShown ] = useState({
        isShown :false,
        style : {maxHeight: 0},
        btnText: 'Show filters'
    })
 
    const url = process.env.REACT_APP_API_URL

    useEffect(() => {
        let isFetching = true
        const fetchUsers = async () => {
            const response = await fetch(`${url}/users`)
            const data = await response.json()
            if(isFetching){
                setUsers(data)
                setDisplayUsers(data)
                setLoading(false)
            }
            
        }
        fetchUsers()
        return () => isFetching =false
    }, [])
    

    if(loading){
        return <div className="loader">LOADING</div>
    }
    console.log(users)

    const handleFilter = (values) => {
        console.log(values)
    }
    const handleSearch = (searchString) => {
        if(!searchString){
            setDisplayUsers(users)
            return
        }
        searchString = searchString.toLowerCase()
        let result = [...users].filter(user => user.name.toLowerCase().includes(searchString))
        setDisplayUsers(result)
    }
    const handleSort = (values) => {
        console.log(values)
        let usersInDom;
        // if(values)
        if(values.ageSort){
            console.log('sort age')
            usersInDom = [...displayedUsers].sort((a,b) => {
                return a.age - b.age;
            })
        }
        if(values.nameSort){
             console.log('sort name')
            usersInDom = [...displayedUsers].sort((a,b) => {
               if(a.name < b.name){
                  return -1
               }else {
                  return 1
               }
            })
        }
        if( !values.ageSort && !values.nameSort){
            console.log(users)
            usersInDom = users;
         }
        setDisplayUsers(usersInDom)
    }

    const handleClick = () => {
        console.log('click')
        if(!isShown.isShown){
            setIsShown({
                isShown: true,
                style: {maxHeight: '100vh'},
                btnText: 'Hide Filters'
            })
        }else{
            setIsShown({
            isShown: false,
            style: {maxHeight: '0'},
            btnText: 'Show Filters'
            })
        }
    }
    
    return(
        <div>
            <h2>Overview</h2>

            <div className="topContainer">
                <SearchBar onSearch={handleSearch}/>
                
                <button className="filterBtn" onClick={handleClick}>{ isShown.btnText }</button>

                <div className="filtersAndSortContainer" style={isShown.style}>
                    <Filters onFilter={handleFilter}/>
                    <Sorters onSort={handleSort}/>
                </div>
            </div>

            <div className="usersContainer">
                {displayedUsers.map(user => {
                  return (
                      <div key={user._id} className="singleUser">
                          <h3>{user.name}</h3>
                            <p>{user.age < 18 ? 'Child': 'Adult'}</p> 
                            <p>{user.CVR? 'Employee' : ''}</p>
                            <p>{user.maritalStatus}</p>
                            <NavLink className="button" to={"/user/"+user._id}>Edit</NavLink>
                      </div>
                  )
                })}
            </div>
        </div>
        
    )
}