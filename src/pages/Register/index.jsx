import styles from "./index.module.css"
import { useRef, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

function Register() {

  const username = useRef()
  const email = useRef()
  const password = useRef()
  const repassword = useRef()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  function validate() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
    if (!username.current.value.trim()) {
      alert("Please enter a username.")
      return false
    }
    if (!email.current.value.trim()) {
      alert("Please enter an email address.")
      return false
    }
    if (!emailRegex.test(email.current.value.trim())) {
      alert("Please enter a valid email address.")
      return false
    }
    if (!password.current.value.trim()) {
      alert("Please enter a password.")
      return false
    }
    if (password.current.value !== repassword.current.value) {
      alert("Passwords do not match.")
      return false
    }
    return true
  }
  
  

  function handleRegister(e) {
    e.preventDefault()

    const isValid = validate()

    if (!isValid) {
      return
    }

    const user = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
    }
    
    setIsLoading(true)

    fetch(`https://auth-rg69.onrender.com/api/auth/signup` , {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      if (data.message === "User registered successfully!") {
        navigate("/")
      } else if (data.message === "Failed! Email is already in use!") {
        alert(data.message)
      } else if (data.message === "Failed! Username is already in use!") {
        alert(data.message)
      }
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      setIsLoading(false)
    })
  }

  return (
    <>
      <div className={styles.register_wrapper}>
        <form className={styles.register_form}>
          <h3 className={styles.register_title}>Register</h3>
          <input ref={username} type="text" placeholder="Username" />
          <input ref={email} type="email" placeholder="Email address" />
          <input ref={password} type="password" placeholder="Password" />
          <input ref={repassword} type="password" placeholder="Repeat Password" />
          <button onClick={handleRegister} disabled={isLoading}>{isLoading ? "Loading..." : "Create an account"}</button>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    </>
  )
}

export default Register
