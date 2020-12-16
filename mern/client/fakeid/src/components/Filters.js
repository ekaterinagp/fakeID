import React, { useState } from 'react'

import './../css/filters.css'

export default function Filter (props){
    const [ isChecked, setIsChecked ] = useState({
        age: '',
        CVR:'',
        maritalStatusId:'',
        gender: ''
    })
    
    const handleFilter = (event) => {
        setIsChecked(values => ({ ...values, [event.target.name]: event.target.value }));
        props.onFilter({[event.target.name]: event.target.value })
    }

    return(
        <div className="filterContainer">
            <div className="ageFilters filter">
                <h3>Age</h3>

                <div className="labelRadio">
                <input type="checkbox" id="child" value="child" name="age" onChange={handleFilter} checked={isChecked.age === 'child'}/>
                <label htmlFor="child">Child</label>
       
                <input type="checkbox" id="adult" value="adult" name="age" onChange={handleFilter} checked={isChecked.age === 'adult'}/>
                <label htmlFor="adult">Adult</label>
            </div>
          </div>


            <div className="genderFilters filter">
                <h3>Gender</h3>
                <div className="labelRadio">
                <input type="checkbox" id="male" value="0001" name="gender"onChange={handleFilter} checked={isChecked.gender === '0001'}/>
                <label htmlFor="male">Male</label>
                </div>
                <div className="labelRadio">
                <input type="checkbox" id="female" value="0002" name="gender" onChange={handleFilter} checked={isChecked.gender === '0002'}/>
                <label htmlFor="female">Female</label>
                </div>
            </div>

            <div className="employeeStatusFilters filter">
                <h3>Employee Status</h3>
                <div className="labelRadio">
                <input type="checkbox" id="employee" value="12345678" name="CVR" onChange={handleFilter} checked={isChecked.CVR === '12345678'}/>
                <label htmlFor="employee">Employee</label>
            
                <input type="checkbox" id="not_employee" value='null' name="CVR" onChange={handleFilter} checked={isChecked.CVR === 'null'}/>
                <label htmlFor="not_employee">Not Employee</label>
                </div>
            </div>


            <div className="maritalStatusFilters filter">
                <h3>Marital Status</h3>
                <div className="labelRadio">
                <input name="maritalStatusId" type="checkbox" id="single" value="1" onChange={handleFilter} checked={isChecked.maritalStatusId === '1'}/>
                <label htmlFor="single">Single</label>
                
                <input name="maritalStatusId" type="checkbox" id="married" value="2" onChange={handleFilter} checked={isChecked.maritalStatusId === '2'}/>
                <label htmlFor="married">Married</label>
            
                <input name="maritalStatusId" type="checkbox" id="divorced" value="3" onChange={handleFilter} checked={isChecked.maritalStatusId === '3'}/>
                <label htmlFor="divorced">Divorced</label>
            
                <input name="maritalStatusId" type="checkbox" id="widow" value="4" onChange={handleFilter} checked={isChecked.maritalStatusId === '4'}/>
                <label htmlFor="widow">Widow</label>
            
            
                <input name="maritalStatusId" type="checkbox" id="deceased" value="7" onChange={handleFilter} checked={isChecked.maritalStatusId === '5'}/>
                <label htmlFor="deceased">Deceased</label>
            
                <input name="maritalStatusId" type="checkbox" id="registered_partnership" value="5" onChange={handleFilter} checked={isChecked.maritalStatusId === '6'}/>
                <label htmlFor="registered_partnership">Registered Partnership</label>

                <input name="maritalStatusId" type="checkbox" id="unknown" value="8" onChange={handleFilter} checked={isChecked.maritalStatusId === '7'}/>
                <label htmlFor="unknown">Unknown</label>
                
            
                <input name="maritalStatusId" type="checkbox" id="abolition_of_registered_partnership" value="6" onChange={handleFilter} checked={isChecked.maritalStatusId === '8'}/>
                <label htmlFor="abolition_of_registered_partnership">Abolition Of Registered Partnership</label>
                </div>
            </div>
        </div>
    )
}