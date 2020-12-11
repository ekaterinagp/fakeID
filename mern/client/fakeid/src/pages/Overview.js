import React, { useEffect, useState } from 'react'
import './overview.css'

export default function Overview(){
    const [ loading, setLoading ] = useState(true)
    const [ users, setUsers ] = useState()


    

    useEffect(() => {
        let isFetching = true
        const fetchUsers = async () => {
            const response = await fetch('http://localhost:9090/users')
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

    if(loading){
        return <div className="loader">LOADING</div>
    }


    return(
        <div>
            <h2>Overview</h2>
            <div className="usersContainer">
                {users.map(user => {
                  return (
                      <div key={user._id} className="singleUser">
                          <h3>{user.name}</h3>
                            <p>adult or child</p>
                            <p>{user.CVR? 'Employee' : ''}</p>
                            <p>{user.maritalStatus}</p>
                            <button>Edit</button>
                      </div>
                  )
                })}
            </div>
        </div>
        
    )
}