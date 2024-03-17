import styles from "./index.module.css"
import mask from "../../assets/mask.png"
import mask1 from "../../assets/mask1.png"

import { Link } from "react-router-dom"
import Cart from "../../components/cart"

function SPEAKERS() {
  return (
    <div>
      
      <div className={styles.navbar}>
        <h1>SPEAKERS</h1>
      </div>

      <div className={styles.mark}>
        <div className={styles.mark_img}>
          <img src={mask} alt="" />
        </div>
        <div className={styles.mark_title}>
          <h3>NEW PRODUCT</h3>
          <h2>ZX9 SPEAKER</h2>
          <p>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
          <button><Link className={styles.speaker} to="/speakers1">See Product</Link></button>
        </div>
      </div>
      <div className={styles.mark} style={{marginBottom:"190px"}}>
        <div className={styles.mark_title}>
          <h2>ZX7 SPEAKER</h2>
          <p>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
          <button><Link className={styles.speaker} to="/speakers2">See Product</Link></button>
        </div>
        <div className={styles.mark_img}>
          <img src={mask1} alt="" />
        </div>
      </div>

      <Cart></Cart>
    </div>
  )
}

export default SPEAKERS