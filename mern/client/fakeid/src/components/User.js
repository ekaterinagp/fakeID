import React from 'react'

import useUserFunctions from './../useUserFunctions'

export default function User(user){
    const { maritalStatus, age, dateOfBirth } = useUserFunctions(user)
    console.log(age)
    return (
        <>
            <h3>{user.name}</h3>
            <p>{age < 18? 'Child': 'Adult'}</p>
            <p>{user.CVR? 'Employee': ''}</p>
            <p>{maritalStatus}</p>
        </>
    )
}
