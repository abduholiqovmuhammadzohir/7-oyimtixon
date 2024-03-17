import styles from "./index.module.css"
import speakers from "../../assets/speakers.png"
import remove from "../../assets/remov.png"
import { Link } from "react-router-dom"
import Cart from "../../components/cart"



function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h3>NEW PRODUCT</h3>
          <h2>XX99 Mark II Headphones</h2>
          <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <button> <Link to="/headphones" style={{ textDecoration: "none", color: "white" }}>See Product</Link></button>
        </div>
        <div className={styles.home_img}>
        </div>
      </div>

      <Cart></Cart>

      <div className={styles.medium}>
        <div className={styles.medium_img}>
          <img src={remove} alt="" />
        </div>
        <div className={styles.medium_title}>
          <h2>ZX9 SPEAKER</h2>
          <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <button><Link to="/speakers" style={{ textDecoration: "none", color: "white" }} >See Product</Link></button>
        </div>
      </div>

      <div className={styles.mask}>
        <h1>ZX7 SPEAKER</h1>
        <button><Link to="/speakers" className={styles.btn_link}  >See Product</Link></button>
      </div>

      <div className={styles.earphones}>
        <div className={styles.earphones_img}>
          <img src={speakers} alt="" />
        </div>
        <div className={styles.earphones_title}>
          <h1>YX1 EARPHONES</h1>
          <button><Link to="/earphones" className={styles.btn_link} >See Product</Link></button>
        </div>
      </div>


    </div>
  )
}

export default Home