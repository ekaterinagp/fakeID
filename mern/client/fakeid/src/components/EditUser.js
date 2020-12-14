import React , { useEffect, useState } from 'react';


export default function EditUser (user) {
    const [ values , setValues ] = useState()
    const [ availableSpouses, setSpouse ] = useState()
    const [ availableChildren, setChild ] = useState()

    useEffect(() => {
        let isFetching = true

        const fetchSpouses = async () => {
            try{
                const response = await fetch('http://localhost:9090/users/spouses')
                console.log(response)
            }catch(err){
                if(err){console.log(err); return; }
            }
        }
    },[user])


    const handleChange = (event) => {
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));       
    }

    const submitChange = async (event) => {
        event.persist()
        console.log('submit', values)
    }
    console.log(user)
 return (
    <form>
        <div className="formField">
            <label htmlFor="name">Name</label>  
            <input name="name" type="text" placeholder="Name" onChange={handleChange} value={user.name}/>
        </div>
                        
        <div className="formField">
            <label htmlFor=""> Address </label>
            <select name="address" id="addressSelect" placeholder="Select Address" onChange={handleChange} value={user.address}>
                <option value="" disabled selected>Select Address</option>
                <option  value="Lygten 17, 2400 Norrebro">Lygten 17</option>
                <option value="Lygten 37, 2400 Norrebro">Lygten 37</option>
            </select>
        </div>

        {user.age >= 18 && !user.CVR ? 
        <>
            <div className="formField">
                <label htmlFor="name">Marital Status</label>  
                <select name="child_id" id="maritalStatus"  onChange={handleChange} value={user.maritalStatusId}>
                    <option value="" disabled selected>Marital Status</option>
                    <option value={1}> Single</option>
                    <option value={2}> Married</option>
                    <option value={3}> Divorced</option>
                    <option value={4}> Widow</option>
                    <option value={5}> Registered Partnership</option>
                    <option value={6}> Abolition of Registered Partnership</option>
                    <option value={7}> Deceased</option>
                    <option value={8}> Unknown</option>
                </select>
            </div>

            <div className="formField">
                <label htmlFor="name">Change spouse</label>  
                <select name="spouse_id" id="spouseSelect"  onChange={handleChange} >
                    <option value="" disabled selected>Select Spouse</option>
                    {availableSpouses ? availableSpouses.map( spouse => {
                        return <option key={spouse._id} value={spouse._id}>{spouse.name}</option>
                    }) :null}
                </select>
            </div>

            <div className="formField">
                <label htmlFor="name">Add child</label>  
                <select name="child_id" id="childSelect"  onChange={handleChange}>
                    <option value="" disabled selected>Select Child</option>
                    {availableChildren ? availableChildren.map( child => {
                        return <option key={child._id} value={child._id}>{child.name}</option>
                    }) :null }
                </select>
            </div>

        </>
        : null}

        
        <input type="submit" value="Edit User" onClick={submitChange}/>
    </form>

 )
}