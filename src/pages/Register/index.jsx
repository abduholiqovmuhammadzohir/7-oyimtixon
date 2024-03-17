import styles from "./index.module.css"

import {useRef} from 'react'
import { useState } from "react"
import {Link,useNavigate} from "react-router-dom"

function Register() {

  const username = useRef()
  const email = useRef()
  const password = useRef()
  const repassword = useRef()
  const navigate = useNavigate()
  const [isloading, setIsloading] = useState(false)

  function validate() {
    
    return true
  }

  function handleRegister(e) {
    e.preventDefault()

    const isValid = validate()

    const user = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
    }
    
    setIsloading(true)

    fetch(`https://auth-rg69.onrender.com/api/auth/signup` , {
      method:"POST",
      headers:{
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    })

    .then(res => res.json())
    .then(data => {
      if(data.message == "User registered successfully!"){
        navigate("/")
      }
      if(data.message == "Failed! Email is already in use!"){
        alert(data.message)
        return
      }
      if(data.message == "Failed! Username is already in use!"){
        alert(data.message)
        return
      }
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      setIsloading(false)
    })

  }

  return (
    <>
    <div className={styles.register_wrapper}>
      <form className={styles.register_form}>
        <h3 className={styles.register_title}>Register</h3>
        <input ref={username} type="username" placeholder="Username" />
        <input ref={email} type="email" placeholder="Emil address" />
        <input ref={password} type="password" placeholder="Password address" />
        <input ref={repassword} type="password" placeholder="Repeat Password address" />
        <button onClick={handleRegister} >{isloading ? "Loading..." : "Create an account"}</button>
        <p>Already have an account? <Link to="/login">Login</Link> </p>
      </form>
    </div>
    </>
  )
}

export default Register  