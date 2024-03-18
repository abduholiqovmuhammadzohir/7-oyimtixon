import styles from "./index.module.css"
import e from "../../assets/e.png"
import { Link, useNavigate } from "react-router-dom"
import Cart from "../../components/cart"
import Homes from "../../components/homes"
import { useEffect, useState } from "react"

function EARPHONES() {

  const navigate = useNavigate();
  const [data, setData] = useState([])

  const handleClick = () => {
    navigate('/earphones1');
  };

  useEffect(() => {
    fetch("http://localhost:3000/SPEAKERS")
      .then(res => res.json())
      .then(data => {
        setData(data)
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div>
      <div className={styles.navbar}>
        <h1>EARPHONES</h1>
      </div>

      {
        data.map((el, index) => {
          return (
            <div className={styles.mark} key={index}>
              <div className={styles.mark_img}>
                <img src={e} alt="" />
              </div>
              <div className={styles.mark_title}>
                <h3>NEW PRODUCT</h3>
                <h2>YX1 WIRELESS EARPHONES</h2>
                <p>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
                <button onClick={handleClick}>See Product</button>
              </div>
            </div>
          )
        })
      }

      <Cart></Cart>

      <Homes></Homes>

    </div>
  )
}

export default EARPHONES