import styles from "./index.module.css"
import mark from "../../assets/mark.png"
import mark1 from "../../assets/mark1.png"
import mark2 from "../../assets/mark2.png"
import { Link, useNavigate } from "react-router-dom"
import Cart from "../../components/cart"
import Homes from "../../components/homes"
import { useEffect, useState } from "react"

function HEADPHONES() {

  const navigate = useNavigate();
  const [data, setData] = useState([])

  const handleClick = () => {
    navigate('/headphones1');
  };
  const handleClick2 = () => {
    navigate('/headphones2');
  };
  const handleClick3 = () => {
    navigate('/headphones3');
  };

  useEffect(() => {
    fetch(`http://localhost:3000/HEADPHONES`)
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
        <h1>HEADPHONES</h1>
      </div>

      {
        data.map((el, index) => {
          return (
            <div key={index}>
              <div className={styles.mark}>
                <div className={styles.mark_img}>
                  <img src={mark} alt="" />
                </div>
                <div className={styles.mark_title}>
                  <h3>NEW PRODUCT</h3>
                  <h2>{el.name}</h2>
                  <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                  <button onClick={handleClick}>See Product</button>
                </div>
              </div>
              <div className={styles.mark}>
        <div className={styles.mark_title}>
          <h2>XX99 Mark I Headphones</h2>
          <p>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
          <button onClick={handleClick2}>See Product</button>
        </div>
        <div className={styles.mark_img}>
          <img src={mark1} alt="" />
        </div>
      </div>

      <div className={styles.mark} style={{ marginBottom: "190px" }}>
        <div className={styles.mark_img}>
          <img src={mark2} alt="" />
        </div>
        <div className={styles.mark_title}>
          <h2>XX59 Headphones</h2>
          <p>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
          <button onClick={handleClick3}>See Product</button>
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

export default HEADPHONES