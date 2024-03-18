import styles from "./index.module.css"
import mask from "../../assets/mask.png"
import mask1 from "../../assets/mask1.png"

import { Link, useNavigate } from "react-router-dom"
import Cart from "../../components/cart"
import Homes from "../../components/homes"
import { useEffect, useState } from "react"

function SPEAKERS() {

  const navigate = useNavigate();
  const [data, setData] = useState([])

  const handleClick = () => {
    navigate('/speakers1');
  };
  const handleClick2 = () => {
    navigate('/speakers2');
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
        <h1>SPEAKERS</h1>
      </div>

      {
        data.map((el, index) => {
          return (
            <div key={index}>
              <div className={styles.mark}>
                <div className={styles.mark_img}>
                  <img src={mask} alt="" />
                </div>
                <div className={styles.mark_title}>
                  <h3>NEW PRODUCT</h3>
                  <h2>ZX9 SPEAKER</h2>
                  <p>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
                  <button onClick={handleClick}>See Product</button>
                </div>
              </div>
              <div className={styles.mark} style={{ marginBottom: "190px" }}>
                <div className={styles.mark_title}>
                  <h2>ZX7 SPEAKER</h2>
                  <p>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
                  <button onClick={handleClick2}>See Product</button>
                </div>
                <div className={styles.mark_img}>
                  <img src={mask1} alt="" />
                </div>
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

export default SPEAKERS