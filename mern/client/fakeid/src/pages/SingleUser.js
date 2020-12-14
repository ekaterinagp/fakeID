import React, { useEffect, useState } from 'react'
import { useParams  } from "react-router-dom";


export default function SingleUser (props) {
    const [ user, setUser ] = useState()
    const [ loading, setLoading ] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        let isFetching = true

        const fetchUser = async () => {
            const response = await fetch(`http://localhost:9090/users/${id}`)
            const { singleUser } = await response.json()
            console.log( singleUser )
            if(isFetching){
                setUser(singleUser)
                setLoading(false)
            }
            
        }
        fetchUser()
        return () => isFetching=false
    },[id])

    if(loading || !user){
        return <div className="loader">LOADING</div>
    }

    return (
        <div className="singleUserPage">
            <div className="userInfo">

                <h1>{user.name}</h1>

                <h4>Date of birth</h4>
                <p>{user.formattedDate}</p>

                <h4>CPR</h4>
                <p>{user.CPR}</p>

                <h4>Gender</h4>
                <p>{user.gender}</p>

                {user.maritalStatus ? 
                     <>
                    <h4>Marital status</h4>
                    <p>{user.maritalStatus}</p>
                    </>
                :null}

                <h4>Address</h4>
                <p>{user.address}</p>

                {user.age < 18 ? 
                    user.parents.map(parent => {
                        return (
                        <> 
                        <h4>Parents</h4>
                        <p key={parent._id + parent.name}>{parent.name}</p>
                        </>
                        )
                    })
                :null}   
                {user.spouse?
                <>
                <h4>Spouse</h4>
                <p >{user.spouse[0].name}</p>
                </>
               : null }

                {user.children?
                <>
                <h4>Children</h4>
                   { user.children.map(child => {
                        return <p key={child._id}> {child.name}</p>
                    })}
                </>
               : null }

                {user.CVR ?
                <>
                <h4>CVR</h4>
                <p>{user.CVR}</p>
                <h4>Company</h4>
                <p>{user.companyName}</p>
                </>
               : null }


            </div>



            <div className="userForm">
               
            </div>
        </div>
    )

    
}