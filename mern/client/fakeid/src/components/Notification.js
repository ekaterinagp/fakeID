import React from 'react';
import '../css/notification.css'


export default function Notification ({message, type}) {

    return(
        <div className={`notification ${type}`}>
            <h3>{message}</h3>
        </div>
    )
    
}