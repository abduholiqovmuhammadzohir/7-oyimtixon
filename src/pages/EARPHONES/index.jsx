import styles from "./index.module.css"
import headphon from "../../assets/headphon.png"
import speaker from "../../assets/speaker.png"
import earphone from "../../assets/earphone.png"
import strelka from "../../assets/strelka.svg"
import e from "../../assets/e.png"
import { Link } from "react-router-dom"
import Cart from "../../components/cart"

function EARPHONES() {
  return (
    <div>
      <div className={styles.navbar}>
        <h1>EARPHONES</h1>
      </div>

      <div className={styles.mark}>
        <div className={styles.mark_img}>
          <img src={e} alt="" />
        </div>
        <div className={styles.mark_title}>
          <h3>NEW PRODUCT</h3>
          <h2>YX1 WIRELESS EARPHONES</h2>
          <p>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
          <button><Link style={{textDecoration:"none", color:"white"}} to="/earphones1">See Product</Link></button>
        </div>
      </div>

      <Cart></Cart>
    </div>
  )
}

export default EARPHONES