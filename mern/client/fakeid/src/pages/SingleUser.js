import React, { useEffect, useState } from 'react'
import { useParams  } from "react-router-dom";
import EditUser from '../components/EditUser';
import UserInfo from '../components/UserInfo';
import './../css/singleUser.css'


export default function SingleUser (props) {
    const [ user, setUser ] = useState()
    const [ loading, setLoading ] = useState(true)
    const [ showInfo, setShowInfo ] = useState(true)
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

    const onUpdate = (values) => {
        console.log(values)
       setUser(userData => ({...userData, 
           name: values.name,
           address: values.address,
           maritalStatusId: values.maritalStatusId
       }))
       if(values.hasOwnProperty('spouseId') && !user.hasOwnProperty('spouse') && !user.spouse.length){
           console.log('add spouse to info')
       }
       if(values.maritalStatusId !== '2' && values.maritalStatusId !== '5'){
           console.log('remove spouse')
       }
       if(values.hasOwnProperty('childId')){
           console.log('add child')
       }
    }
    if(loading || !user){
        return <div className="loader">LOADING</div>
    }

    return (
        <div>
            <div className="singleUserPage">
                <div className="tabs">
                    <button className={showInfo? 'active' : ''} onClick={()=>setShowInfo(true)}>Information</button>
                    <button className={!showInfo? 'active' : ''}  onClick={()=>setShowInfo(false)}>Edit Information</button>
                </div>
            <h1>{user.name}</h1>

            {showInfo ? 
                <div className="userInfo">
                    <UserInfo {...user} />
                </div>
            :
            <div className="userForm">
                <EditUser user={user} updateUser={onUpdate} />
                </div>
            }
            </div>
        </div>
    )

    
}