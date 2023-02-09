import React, { useState } from "react";
import {  NavLink, useNavigate } from "react-router-dom";

const Signin = () => {

  const [email , setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useNavigate()

  const LoginPage= async (e)=>{
      e.preventDefault()
      
    try{
      const res = await fetch('/signin', {
        method:'POST',
        body:JSON.stringify({ email,password}),
        headers:{'Content-Type':'application/json'}
      });

      const data = await res.json()
      console.log(data); 
      if(res.status===200){
        window.alert("login succesfully")
        history('/home');
      }else{
        window.alert("invalid crediantials")
      }
    }catch(err){
      console.log(err)
    }
      
  }

  return (
    <div>
      <section className="vh-80" Style="background-color: #eee;">
        <div className="container h-80">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" Style="border-radius: 25px;">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                      <form className="mx-1 mx-md-4" method="POST">

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example1c" className="form-control" autoComplete='off' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            <label className="form-label" htmlFor="form3Example1c">Email</label>
                          </div>
                        </div>

                        

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4c" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} />
                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                          </div>
                        </div>

                        

                        <div className="form-check d-flex justify-content-center mb-5">
                        <label className="form-check-label" htmlFor="form2Example3">
                           <NavLink to="/signup">Create an Account</NavLink>
                        </label>
                      </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          
                          <label className="form-check-label" htmlFor="form2Example3">
                             <a href="#!">Forget password</a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" className="btn btn-primary btn-lg" onClick={LoginPage}>Login</button>
                      </div>
                      </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                     { //<img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"className="img-fluid" alt="Sample image" />
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
  );
};

export default Signin;
