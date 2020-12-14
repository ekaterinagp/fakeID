import React, { useState } from 'react'
import './../css/form.css'


export default function Overview(){
    const [ name, setName ] = useState()
    const [ address, setAddress ] = useState()
    const [ dateOfBirth, setDateOfBirth ] = useState()
    const [ gender, setGender ] = useState()
    const [ isEmployee, setIsEmployee ] = useState()



    return(
        <div>

        <h2>Create User</h2>
        <form>
            <div className="formField">
                <input name="name" type="text" placeholder="Name" onChange={(event) => setName(event.target.value)}/>
                <label for="name">Name</label>
            </div>

            <div class="labelRadio">
            <p>Gender</p>
                <input type="radio" id="female" name="gender_value" value='0002' onChange={(event) => setGender(event.target.value)} />
                <label for="female"> Female </label>
                <input id="male" type="radio" name="gender_value" value='0001' onChange={(event) => setGender(event.target.value)} />
                <label for="male"> Male </label>
            </div>
    
            <div className="formField">
                <input name="address" placeholder="address" type="text" onChange={(event) => setAddress(event.target.value)}/>
                <label for="address">Address</label>
            </div>

            <div className="formField">
                <input name="dateOfBirth" placeholder="dd/mm/yyyy" type="date" onChange={(event) => setDateOfBirth(event.target.value)}/>
                <label for="dateOfBirth">Date of Birth</label>
            </div>

            <div class="labelRadio">
            <p>Is the user an employee</p>
                <input type="radio" id="employee" name="isEmployee" value='true' onChange={(event) => setIsEmployee(event.target.value)} />
                <label for="employee"> Is Employee </label>
                <input type="radio" id="not" name="isEmployee" value='false' onChange={(event) => setIsEmployee(event.target.value)}/>
                <label for="not"> Not Employee </label>
            </div>
        </form>

        </div>
    )
}