import Back from "../../components/back"
import styles from "./index.module.css"
import img from "../../assets/imgmk.png"
import img1 from "../../assets/imgmk1.png"
import img2 from "../../assets/imgmk2.png"
import { Link } from "react-router-dom"
import "./index.css"
import { useState } from "react"

function Checkout() {

  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal)
  }


  return (

    <div>
      {
        modal && (
          <div className="order">
            <div onClick={toggleModal}>e</div>
            <div className="order_content">
              <div onClick={toggleModal} style={{ cursor: "pointer" }}>X</div>
              
              <button className='chek'><Link style={{ textDecoration: "none", color: "white" }} to="/">BACK TO HOME</Link></button>
            </div>
          </div>

        )
      }
      <div className={styles.check}>
        <Back></Back>
        <div className={styles.container}>
          <div className={styles.checkout}>
            <h1>CHECKOUT</h1>
            <div className={styles.billing}>
              <h3>Billing Details</h3>
              <div className={styles.input}>
                <div>
                  <label>Name</label><br />
                  <input type="text" placeholder="Alexei Ward" /><br />
                </div>
                <div>
                  <label>Email Address</label><br />
                  <input type="email" placeholder="alexei@mail.com" />
                </div>
              </div>
              <div className={styles.email_input}>
                <label>Email Address</label><br />
                <input type="email" placeholder="alexei@mail.com" />
              </div>
            </div>
            <div className={styles.info}>
              <h3>Billing Details</h3>

              <div className={styles.addres_input}>
                <label>Address</label><br />
                <input type="text" placeholder="1137 Williams Avenue" />
              </div>

              <div className={styles.input}>
                <div>
                  <label>ZIP Code</label><br />
                  <input type="number" placeholder="10001" /><br />
                </div>
                <div>
                  <label>City</label><br />
                  <input type="text" placeholder="New York" />
                </div>
              </div>

              <div className={styles.email_input}>
                <label>Country</label><br />
                <input type="text" placeholder="United States" />
              </div>
            </div>
            <div className={styles.payment}>
              <h3>PAYMENT DETAILS</h3>
              <div className={styles.method}>
                <h4>Payment Method</h4>
                <div className={styles.chekbox}>
                  <div className={styles.money}><input type="radio" /><span>e-Money</span></div>
                  <div className={styles.cash}><input type="radio" /><span>Cash on Delivery</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.summary}>
            <div className={styles.modal_content}>
              <div className={styles.title}>
                <h3>SUMMARY</h3>
              </div>

              <div className={styles.cart}>
                <div className={styles.cart1}>
                  <img src={img} alt="" />
                  <div>
                    <h2>XX99 MK II</h2>
                    <h4>$ 2,999</h4>
                  </div>
                </div>
                <div className={styles.cart2}>
                  <p>x1</p>
                </div>
              </div>

              <div className={styles.cart}>
                <div className={styles.cart1}>
                  <img src={img1} alt="" />
                  <div>
                    <h2>XX59</h2>
                    <h4>$ 899</h4>
                  </div>
                </div>
                <div className={styles.cart2}>
                  <p>x2</p>
                </div>
              </div>

              <div className={styles.cart}>
                <div className={styles.cart1}>
                  <img src={img2} alt="" />
                  <div>
                    <h2>YX1</h2>
                    <h4>$ 599</h4>
                  </div>
                </div>
                <div className={styles.cart2}>
                  <p>x1</p>
                </div>
              </div>

              <div style={{ marginTop: "32px" }} className={styles.title1}>
                <p>TOTAL</p>
                <h3>$ 5,396</h3>
              </div>
              <div className={styles.title1}>
                <p>SHIPPINGL</p>
                <h3>$ 50</h3>
              </div>
              <div style={{ marginBottom: "24px" }} className={styles.title1}>
                <p>VAT (INCLUDED)</p>
                <h3>$ 1,079</h3>
              </div>
              <div className={styles.total}>
                <h3>GRAND TOTAL</h3>
                <h4>$ 5,446</h4>
              </div>
              <button className={styles.chek} onClick={toggleModal}>CONTINUE & PAY</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout