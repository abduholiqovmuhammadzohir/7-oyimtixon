import styles from "./index.module.css"
import mark from "../../assets/mark4.png"
import { Link } from "react-router-dom"
import Cart from "../../components/cart"
import img from "../../assets/img5.png"
import img1 from "../../assets/img6.png"
import img2 from "../../assets/img7.png"
import like from "../../assets/img4.png"
import like2 from "../../assets/like.png"
import like3 from "../../assets/like3.png"
import { useDispatch, useSelector } from "react-redux"
import Homes from "../../components/homes"
import Back from "../../components/back"

function HEADPHONES3() {

  const counter = useSelector(state => state.counter.counter)
  const dispatch = useDispatch()

  function increment() {
    dispatch({ type: "ADD", payload: 1 })
  }

  function decrement() {
    if (counter > 1) {
      dispatch({ type: "REMOVE", payload: 1 })
    }
  }

  return (
    <div>
      <Back></Back>

      <div className={styles.mark}>
        <div className={styles.mark_img}>
          <img src={mark} alt="" />
        </div>
        <div className={styles.mark_title}>
          <h2>XX99 Mark I Headphones</h2>
          <p>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. </p>
          <h4>$ 1,750</h4>
          <div className={styles.btn}>
            <button className={styles.btn1}><p onClick={decrement}>-</p><p>{counter}</p><p onClick={increment}>+</p></button>
            <button className={styles.btn2}> <Link to="" style={{ textDecoration: "none", color: "white" }}>ADD TO CART</Link></button>
          </div>
        </div>
      </div>

      <div className={styles.title}>
        <div className={styles.title1}>
          <h1>FEATURES</h1>
          <p>
            Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. <br /><br />
            The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.
          </p>
        </div>
        <div className={styles.title2}>
          <h1>IN THE BOX</h1>
          <h3> <span>1x</span> Headphone Unit</h3>
          <h3> <span>2x</span> Replacement Earcups </h3>
          <h3> <span>1x</span> User Manual</h3>
          <h3> <span>1x</span> 3.5mm 5m Audio Cable</h3>
          <h3> <span>1x</span> Travel Bag</h3>
        </div>
      </div>

      <div className={styles.img_cart}>
        <div className={styles.img}>
          <img style={{ marginBottom: "32px" }} src={img1} alt="" />
          <img src={img2} alt="" />
        </div>
        <img src={img} alt="" />
      </div>

      <div className={styles.like}>
        <h1>YOU MAY ALSO LIKE</h1>
        <div className={styles.likes}>
          <div className={styles.likes_cart}>
            <img src={like} alt="" />
            <h2>XX99 MARK I</h2>
            <button className={styles.btn}> <Link to="/headphones1" style={{ textDecoration: "none", color: "white" }}>SEE PRODUCT</Link></button>
          </div>
          <div className={styles.likes_cart}>
            <img src={like2} alt="" />
            <h2>XX99 MARK I</h2>
            <button className={styles.btn}> <Link to="/headphones2" style={{ textDecoration: "none", color: "white" }}>SEE PRODUCT</Link></button>
          </div>
          <div className={styles.likes_cart}>
            <img src={like3} alt="" />
            <h2>XX99 MARK I</h2>
            <button className={styles.btn}> <Link to="/speakers1" style={{ textDecoration: "none", color: "white" }}>SEE PRODUCT</Link></button>
          </div>
        </div>
      </div>

      <Cart></Cart>

      <Homes></Homes>

    </div>
  )
}

export default HEADPHONES3