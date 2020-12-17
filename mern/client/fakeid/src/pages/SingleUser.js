import React, { useEffect, useState } from 'react'
import { useParams  } from "react-router-dom";
import EditUser from '../components/EditUser';
import UserInfo from '../components/UserInfo';

import Notification from '../components/Notification';
import './../css/singleUser.css'


export default function SingleUser (props) {
    const [ user, setUser ] = useState()
    const [ loading, setLoading ] = useState(true)
    const [ showInfo, setShowInfo ] = useState(true)
    const [ notification, setNotification ] = useState()

    const { id } = useParams()
    const url = process.env.REACT_APP_API_URL

    useEffect(() => {
        let isFetching = true
        const initialFetch = async () => {
            const fetchedUser = await fetchUser(id)
            if (isFetching){
                setUser(fetchedUser)
                setLoading(false)
            }
        }
        initialFetch()
        return () => isFetching=false
    },[id])

    const fetchUser = async (userID) => {
        const response = await fetch(`${url}/users/${userID}`)
        const { singleUser } = await response.json()
        console.log( singleUser )
        return singleUser
       
    }

    const getMaritalStatus = (maritalStatusId) => {
        maritalStatusId = parseInt(maritalStatusId);
        if (!maritalStatusId) return null;
        if (maritalStatusId === 1) return "Single";
        if (maritalStatusId === 2) return "Married";
        if (maritalStatusId === 3) return "Divorced";
        if (maritalStatusId === 4) return "Widow";
        if (maritalStatusId === 5) return "Registered Partnership";
        if (maritalStatusId === 6) return "Abolition of Registered Partnership";
        if (maritalStatusId === 7) return "Deceased";
        return "Unknown";
    }

    const onUpdate = async (values) => {
        console.log(values.address)
       user.maritalStatusId = values.maritalStatusId
       user.maritalStatus = getMaritalStatus(values.maritalStatusId)
       user.name = values.name
       user.address = values.address
       console.log(user)
       setUser(user)
       if(values.spouseId  && !user.spouse){
           let spouse = await fetchUser(values.spouseId)
           user.spouse = {name: spouse.name, _id: spouse._id}
           setUser(user)
       }
       if(values.maritalStatusId !== '2' && values.maritalStatusId !== '5'){
           delete user.spouse
           let userWithoutSpouse = user
           setUser(userWithoutSpouse)
       }
       if(values.childId){
        let child = await fetchUser(values.childId)
        user.hasOwnProperty('children')? user.children.push(child) : user.children = [child]
        setUser(user)
       }
    }
    
    if(loading || !user){
        return <div className="loader">LOADING</div>
    }
    const handleNotification = (values) => {
        setNotification(values)
        setTimeout(() => {
            setNotification(null)
        },5000)
    }
    return (
        <div>
            {notification?
            <Notification {...notification} />
            :null}
            
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
                <EditUser user={user} updateUser={onUpdate} onNotification={handleNotification}/>
                </div>
            }
            </div>
        </div>
    )

    
}