import styles from "./index.module.css"
import { useRef, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

function Login() {
  const username = useRef()
  const password = useRef()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  function validate() {
    if (!username.current.value.trim()) {
      setError('Username is required')
      return false
    }
    if (!password.current.value.trim()) {
      setError('Password is required')
      return false
    }
    setError('')
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
      password: password.current.value,
    }

    setIsLoading(true)

    fetch(`https://auth-rg69.onrender.com/api/auth/signin`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.id) {
          localStorage.setItem('token', data.accessToken)
          localStorage.setItem("user", JSON.stringify(data))
          navigate("/")
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
          <h3 className={styles.register_title}>Login</h3>
          <input ref={username} type="text" placeholder="Username" />
          <input ref={password} type="password" placeholder="Password" />
          {error && <p className={styles.error}>{error}</p>}
          <button onClick={handleRegister} disabled={isLoading}>
            {isLoading ? "Loading..." : "Login to your account"}
          </button>
          <p>Don’t have an account? <Link to="/register">Register</Link></p>
        </form>
      </div>
    </>
  )
}

export default Login
