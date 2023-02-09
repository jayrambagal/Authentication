import React, { useState } from 'react'
import { NavLink, useNavigate} from 'react-router-dom'
import './component.css'

const Signup = () => {
  const [name , setName] = useState(" ");
  const [email , setEmail] = useState(" ");
  const [phone , setPhone] = useState(" ");
  const [work , setWork] = useState(" ");
  const [password , setPassword] = useState(" ");
  const [cpassword , setCpassword] = useState(" ");
  
  const history = useNavigate()

  const postData = async(e)=>{
    e.preventDefault()
    
    
    const res = await fetch("/register",{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({name,email,phone,work,password,cpassword})
    })

    const data = await res.json()
    
    if(res.status=== 422 || !data){
      window.alert("Invalid Credentials")
      console.log("invlaid credintials")
      
    }else{
      window.alert("Register Succsessfully")
      console.log("Register Succsessfully")
      history("/signin")
      
    }
  }

  return (
    <div className='signup_container'>
      <section className="vh-80" style={{"background-color": "#eee"}}>
    <div className="container h-80">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black" >
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                  <form className="mx-1 mx-md-4" method='POST'>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="text" id="name" className="form-control" autoComplete='off' name='name' value={name} onChange={(e)=> setName(e.target.value)}/>
                        <label className="form-label" for="form3Example1c">Your Name</label>
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="email" id="email" className="form-control" autoComplete='off' name='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="text" id="phone" className="form-control" autoComplete='off' name='phone' value={phone} onChange={(e)=> setPhone(e.target.value)} />
                        <label className="form-label" htmlFor="form3Example3c">Phone</label>
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="text" id="work" className="form-control" autoComplete='off' name='work' value={work} onChange={(e)=> setWork(e.target.value)} />
                        <label className="form-label" htmlFor="form3Example3c">Work</label>
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="password" id="password" className="form-control" autoComplete='off' name='password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                      </div>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <input type="password" id="cpassword" className="form-control" autoComplete='off' name='cpassword' value={cpassword} onChange={(e)=> setCpassword(e.target.value)} />
                        <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                      </div>
                    </div>

                    <div className="form-check d-flex justify-content- mb-5">
                      <label className="form-check-label" htmlFor="form2Example3">
                        I am alredy Register<NavLink to="/signin"> Login</NavLink>
                      </label>
                    </div>


                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="button" className="btn btn-primary btn-lg" onClick={postData}>Register</button>
                    </div>

                  </form>

                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                  { //<img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />}
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Signup
