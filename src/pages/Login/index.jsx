import styles from "./index.module.css"

import {useRef} from 'react'
import { useState } from "react"
import {Link,useNavigate} from "react-router-dom"


function Login() {

  const username = useRef()
  const password = useRef()
  const navigate = useNavigate()
  const [isloading, setIsloading] = useState(false)

  function validate() {
    if (!username) {
      
    }
    return true
  }

  function handleRegister(e) {
    e.preventDefault()

    const isValid = validate()

    const user = {
      username: username.current.value,
      password: password.current.value,
    }
    
    setIsloading(true)

    fetch(`https://auth-rg69.onrender.com/api/auth/signin` , {
      method:"POST",
      headers:{
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    })

    .then(res => res.json())
    .then(data => {
      if(data.id){
        localStorage.setItem('token',data.accessToken)
        localStorage.setItem("user",JSON.stringify(data))
        navigate("/")
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
        <h3 className={styles.register_title}>Login</h3>
        <input ref={username} type="username" placeholder="Username" />
        <input ref={password} type="password" placeholder="Password address" />
        <button onClick={handleRegister} >{isloading ? "Loding..." :"Login to your accaount"}</button>
        <p>Don’t have an accaount? <Link to="/register">Register</Link> </p>
      </form>
    </div>
    </>
  )
}

export default Login  