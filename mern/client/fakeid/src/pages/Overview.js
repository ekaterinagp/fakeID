import React, { useEffect, useState } from 'react'


export default function Overview(){
    const [ users, setUsers ] = useState()


    const fetchUsers = async () => {
        const response = await fetch('http://localhost:9090/users', {
            method: 'GET'
        })
        console.log(response)
    }

    useEffect(() => {
        let isFetching = true
        if(isFetching){
            fetchUsers()
        }

        return () => isFetching =false
    }, [])

    

    return(
        <h2>
            Overview
        </h2>
    )
}