import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom';

const About = () => {
  const history = useNavigate();
  
  const callAboutPage = async () =>{
    
    try{

      const res = await fetch("/about",
      {
        method:'GET',
        headers:{Accept:'application/json',
                "Contact-Type":'application/json'
                },
        credentials:'include'
      })

      console.log(res.status)

      const data = res.json()

      if(!res.status===200 || !data){
        console.log(data);
        throw new Error("user not found")
      }else if(res.status === 401){
        history('/signin')
      }
    }catch(error){
      
        console.log(error);
        
    }
  }
  useEffect(()=>{
    callAboutPage();
  })

  return (
    <div>
    <h1>about</h1>
    </div>
  )
}

export default About
