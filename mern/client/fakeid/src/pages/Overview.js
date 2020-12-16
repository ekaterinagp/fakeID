import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import Sorters from '../components/Sorters'
import Filters from '../components/Filters'

import './../css/overview.css'


export default function Overview(){
    const [ loading, setLoading ] = useState(true)
    const [ users, setUsers ] = useState()
    const [ displayedUsers, setDisplayUsers ] = useState()
    const [ btnText, setBtnText ] = useState('Show filters')
 
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
    const handleSort = (values) => {
        console.log(values)
        let usersInDom;

        if(values.hasOwnProperty('ageSort')){
            usersInDom = [...displayedUsers].sort((a,b) => {
               return a.age - b.age;
            })
         }
         if(values.hasOwnProperty('nameSort')){
            usersInDom = [...displayedUsers].sort((a,b) => {
               if(a.name < b.name){
                  return -1
               }else {
                  return 1
               }
            })
        }
        console.log(usersInDom)
        setDisplayUsers(usersInDom)
    }
    
    console.log(displayedUsers)
    return(
        <div>
            <h2>Overview</h2>

            <button className="filterBtn">{ btnText }</button>
            <div className="filtersAndSortContainer">
                <Filters onFilter={handleFilter}/>
                <Sorters onSort={handleSort}/>
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