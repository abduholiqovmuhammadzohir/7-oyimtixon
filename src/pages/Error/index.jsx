import { Link } from "react-router-dom"
import styles from "./index.module.css"

function Error() {
  return (
    <div className={styles.error}>
      <h1>Error page</h1>
      <h3>You have entered a page that does not exist, please go back</h3>
      <Link to="/" style={{fontSize:"25px"}}>Home</Link>
    </div>
  )
}

export default Error