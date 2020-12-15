import React , { useEffect, useState } from 'react';


export default function EditUser (props) {
    let { user } = props

    const [ values , setValues ] = useState({
        name: '',
        address: '',
        maritalStatusId: '',
        spouseId: '',
        childId: '',
    })
    
    const [ availableSpouses, setSpouses ] = useState()
    const [ availableChildren, setChildren ] = useState()
    
    useEffect(() => {
        if (user){
            setValues({
                name: user.name,
                address: user.address,
                maritalStatusId: user.maritalStatusId,
                spouseId: user.hasOwnProperty('spouse') && user.spouse.length ? user.spouse[0]._id: '',
                childId: null,
            })
        }
        if(user && user.age >= 18 && !user.CVR) {
            fetchSpouses()
            fetchChildren()
        }
        
    },[user])


    const handleChange = (event) => {
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));       
    }

    console.log(values)

    const submitChange = async (event) => {
        event.preventDefault()
        try{
            const response = await fetch(`http://localhost:9090/users/${user._id}`, {
                method: 'PUT',
                body: JSON.stringify(values),
                headers:{
                    'Content-Type': 'application/json',
                }
            })
            const data = await response.json()
            console.log(data)
            if(!data.error){
                props.updateUser(values)
                if (values.hasOwnProperty('spouseId')){
                }
            }

        }catch(err){
            if(err){console.log(err); return; }
        }
    }

    const fetchSpouses = async () => {
        try{
            const response = await fetch(`http://localhost:9090/users/${user._id}/spouses`)
            const spouses = await response.json()
            setSpouses(spouses)
        }catch(err){
            if(err){console.log(err); return; }
        }
    }

    const fetchChildren = async () => {
        try{
            const response = await fetch(`http://localhost:9090/users/${user._id}/children`)
            const children = await response.json()
            setChildren(children)
        }catch(err){
            if(err){console.log(err); return; }
        }
    }
 return (
    <form>
        <div className="formField">
            <label htmlFor="name">Name</label>  
            <input name="name" type="text" placeholder="Name" onChange={handleChange} value={values.name}/>
        </div>
                        
        <div className="formField">
            <label htmlFor=""> Address </label>
            <select name="address" id="addressSelect" placeholder="Select Address" onChange={handleChange} value={values.address}>
                <option value="" disabled selected>Select Address</option>
                <option  value="Lygten 17, 2400 Norrebro">Lygten 17</option>
                <option value="Lygten 37, 2400 Norrebro">Lygten 37</option>
            </select>
        </div>

        {user.age >= 18 && !user.CVR ? 
        <>
            <div className="formField">
                <label htmlFor="name">Marital Status</label>  
                <select name="maritalStatusId" id="maritalStatus"  onChange={handleChange} >
                    <option value="" disabled selected>Marital Status</option>
                    <option selected={values.maritalStatusId === '1' ? true : false} value='1'> Single</option>
                    <option selected={values.maritalStatusId === '2' ? true : false} value='2'> Married</option>
                    <option selected={values.maritalStatusId === '3'? true : false} value='3'> Divorced</option>
                    <option selected={values.maritalStatusId === '4' ? true : false} value='4'> Widow</option>
                    <option selected={values.maritalStatusId === '5' ? true : false} value='5'> Registered Partnership</option>
                    <option value='6'> Abolition of Registered Partnership</option>
                    <option value='7'> Deceased</option>
                    <option value='8'> Unknown</option>
                </select>
            </div>

            <div className="formField">
            {!user.hasOwnProperty('spouse') || !user.spouse.length?
                 <>
                <label htmlFor="name">Change spouse</label>  
                <select name="spouseId" id="spouseSelect"  onChange={handleChange}  >
                    <option value="" disabled selected>Select Spouse</option>
                    {availableSpouses ? availableSpouses.map( spouse => {
                        return <option key={spouse._id} value={spouse._id}>{spouse.name}</option>
                    }) :null}
                </select>
                </>
            : 
                <>
                <label htmlFor="name">Spouse</label>  
                <input type="text" readOnly value={user.spouse[0].name}/>
                </>
            }
            </div>

            <div className="formField">
                <label htmlFor="name">Add child</label>  
                <select name="childId" id="childSelect"  onChange={handleChange}>
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