import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './../css/overview.css'


export default function Overview(){
    const [ loading, setLoading ] = useState(true)
    const [ users, setUsers ] = useState()
 
    const url = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_API_URL : process.env.API_URL

    useEffect(() => {
        let isFetching = true
        const fetchUsers = async () => {
            const response = await fetch(`${url}/users`)
            const data = await response.json()
            if(isFetching){
                setUsers(data)
                setLoading(false)
            }
            
            console.log(users)
        }
        fetchUsers()
        return () => isFetching =false
    }, [])
    
    console.log(process.env)

    if(loading){
        return <div className="loader">LOADING</div>
    }
    console.log(users)
    return(
        <div>
            <h2>Overview</h2>
            <div className="usersContainer">
                {users.map(user => {
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