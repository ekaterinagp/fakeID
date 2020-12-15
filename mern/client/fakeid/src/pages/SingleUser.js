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
        const response = await fetch(`http://localhost:9090/users/${userID}`)
        const { singleUser } = await response.json()
        console.log( singleUser )
        return singleUser
       
    }
    const onUpdate = async (values) => {
        console.log(values)
       user.maritalStatusId = values.maritalStatusId
       user.name = values.name
       user.address = values.address
       console.log(user)
       setUser(user)
       if(values.spouseId  && (!user.hasOwnProperty('spouse') || !user.spouse.length)){
           console.log('add spouse to info')
           let spouse = await fetchUser(values.spouseId)
           user.spouse.push(spouse)
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