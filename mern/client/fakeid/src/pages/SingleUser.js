import React, { useEffect, useState } from 'react'
import { useParams  } from "react-router-dom";
import EditUser from '../components/EditUser';
import UserInfo from '../components/UserInfo';


export default function SingleUser (props) {
    const [ user, setUser ] = useState()
    const [ loading, setLoading ] = useState(true)
    const [ showTab, setTab ] = useState('info')
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
        <h1>{user.name}</h1>

            <div className="userInfo">
                <UserInfo {...user} />
            </div>



            <div className="userForm">
               <EditUser {...user} />
            </div>
        </div>
    )

    
}