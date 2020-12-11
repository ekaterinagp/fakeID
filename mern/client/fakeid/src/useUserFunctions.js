import { useEffect, useState } from "react";

const useUserFunctions = (user) =>{
    const [ age, setAge ] = useState()
    const [ dateOfBirth, setDateOfBirth ] = useState()
    const [ maritalStatus, setMaritalStatus ] = useState()


    useEffect(() => {
        const  calculateAge = () =>{
            let formattedDate= user.dateOfBirth.replace(/^(\d{2})(\d{2})/, '$1-$2-');
            setDateOfBirth(formattedDate)
            
            let day  = new Date(formattedDate).getDate()
            let month = new Date(formattedDate).getMonth()
            let year = formattedDate.split('-')[2]
            if(parseInt(year)> 20){
                year = `19${year}`
             }else{
                year = `20${year}`
            }
    
            const today = new Date()
            let age = today.getFullYear() - year;
            if (today.getMonth() < month || (today.getMonth() === month && today.getDate() < day)) {
               age--;
            }
           setAge(age)
          }
    
          const getMaritalStatus = () => {
            let { maritalStatus } = user
            maritalStatus = parseInt(maritalStatus)
            if(maritalStatus === 1) setMaritalStatus('Single')
            if(maritalStatus === 2) setMaritalStatus('Married')
            if(maritalStatus === 3) setMaritalStatus('Divorced')
            if(maritalStatus === 4) setMaritalStatus('Widow')
            if(maritalStatus === 5) setMaritalStatus('Registered Partnership')
            if(maritalStatus === 6) setMaritalStatus('Abolition of Registered Partnership')
            if(maritalStatus === 7) setMaritalStatus('Deceased')
            if(maritalStatus === 8) setMaritalStatus('Unknown')
            
          }
        calculateAge()
        if(user.maritalStatus) getMaritalStatus() 

    }, [user])

     

      return {
          age,
          maritalStatus,
          dateOfBirth
        }

}

export default useUserFunctions