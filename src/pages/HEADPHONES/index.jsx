import styles from "./index.module.css"
import headphon from "../../assets/headphon.png"
import speaker from "../../assets/speaker.png"
import earphone from "../../assets/earphone.png"
import strelka from "../../assets/strelka.svg"
import mark from "../../assets/mark.png"
import mark1 from "../../assets/mark1.png"
import mark2 from "../../assets/mark2.png"
import { Link } from "react-router-dom"
import Cart from "../../components/cart"
import Homes from "../../components/homes"

function HEADPHONES() {
  return (
    <div>
      <div className={styles.navbar}>
        <h1>HEADPHONES</h1>
      </div>
      
      <div className={styles.mark}>
        <div className={styles.mark_img}>
          <img src={mark} alt="" />
        </div>
        <div className={styles.mark_title}>
          <h3>NEW PRODUCT</h3>
          <h2>XX99 Mark II Headphones</h2>
          <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
          <button> <Link to="/headphones1" style={{textDecoration:"none", color:"white"}}>See Product</Link></button>
        </div>
      </div>

      <div className={styles.mark}>
        <div className={styles.mark_title}>
          <h2>XX99 Mark I Headphones</h2>
          <p>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
          <button> <Link to="/headphones2" style={{textDecoration:"none", color:"white"}}>See Product</Link></button>
        </div>
        <div className={styles.mark_img}>
          <img src={mark1} alt="" />
        </div>
      </div>

      <div className={styles.mark} style={{marginBottom:"190px"}}>
        <div className={styles.mark_img}>
          <img src={mark2} alt="" />
        </div>
        <div className={styles.mark_title}>
          <h2>XX59 Headphones</h2>
          <p>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
          <button> <Link to="/headphones3" style={{textDecoration:"none", color:"white"}}>See Product</Link></button>
        </div>
      </div>

      <Cart></Cart>
      <Homes></Homes>
    </div>
  )
}

export default HEADPHONES