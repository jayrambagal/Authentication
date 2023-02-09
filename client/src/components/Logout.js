import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate()
    const LogOutPage = async () =>{
        try{

            const res = await fetch("/logout",{
                method:'GET',
                headers:{Accept:'application/json',
                        "Contact-Type":'application/json'
                        },
                credentials:'include'
            })

            const data = await res.json()
            console.log(data)

            if (!res.status===200 || !data){
                const error = new Error(res.error)
                throw error
            }else{
                    navigate("/signin")
            }

        }catch(err){
            navigate("/signin")
            console.log(err);
        }
    }

    useEffect(()=>{
        LogOutPage()
    },)

  return (
    <div>
      <h1>logout</h1>
    </div>
  )
}

export default Logout
