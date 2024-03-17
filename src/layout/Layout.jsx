import { useState } from 'react'
import { Link } from "react-router-dom"
import styles from "./index.module.css"
import audio from "../assets/audio.svg"
import { SlBasket } from "react-icons/sl";
import facebook from "../assets/facebook.svg"
import twiter from "../assets/twiter.svg"
import insta from "../assets/insta.svg"
import bitmap from "../assets/bitmap1.png"
import img from "../assets/imgmk.png"
import { useSelector } from "react-redux"
import "./index.css"

function Layout({ children }) {

    const [modal, setModal] = useState(false);

    function toggleModal() {
        setModal(!modal)
    }

    const counter = useSelector(state => state.counter.counter)

    return (
        <div>
            {
                modal && (
                    <div className="modal">
                        <div onClick={toggleModal}>e</div>
                        <div className="modal_content">
                            <div onClick={toggleModal} style={{ cursor: "pointer" }}>X</div>
                            <div className="title">
                                <h3>CART</h3>
                                <p>Remove all</p>
                            </div>
                            <div className="cart">
                                <div className="cart1">
                                    <img src={img} alt="" />
                                    <div>
                                        <h2>XX99 MK II</h2>
                                        <h4>$ 2,999</h4>
                                    </div>
                                </div>
                                <div className="cart2">
                                <button className="btn"><p>-</p><p>1</p><p>+</p></button>
                                </div>
                            </div>
                            <div className="title1">
                                <p>TOTAL</p>
                                <h3>$ 5,396</h3>
                            </div>
                            <button className='chek'>CHECKOUT</button>
                        </div>
                    </div>

                )
            }
            <div className={styles.menus}>
                <div className={styles.navbar}>
                    <img src={audio} alt="" />
                    <div className={styles.nav}>
                        <Link className={styles.link} to="/">
                            HOME
                        </Link >
                        <Link className={styles.link} to="/headphones">
                            HEADPHONES
                        </Link>
                        <Link className={styles.link} to="/speakers">
                            SPEAKERS
                        </Link>
                        <Link className={styles.link} to="/earphones">
                            EARPHONES
                        </Link>
                    </div>
                    <div className={styles.icon}>
                        <h2 onClick={toggleModal}><SlBasket /></h2>
                        <p>{counter}</p>
                    </div>

                </div>
                <hr />
            </div>

            <div>
                <div className={styles.home}>
                    {children}
                </div>
            </div>

            <div className={styles.audio}>
                <div className={styles.audio_title}>
                    <h2>BRINGING YOU THE <span>BEST</span> AUDIO GEAR</h2>
                    <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                </div>
                <div className={styles.audio_img}>
                    <img src={bitmap} alt="" />
                </div>
            </div>

            <div className={styles.footer}>
                <div className={styles.footer_text}>
                    <img src={audio} alt="" />
                    <p>
                        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                    </p>
                    <h3>
                        Copyright 2021. All Rights Reserved
                    </h3>
                </div>
                <div className={styles.footer_nav}>
                    <div className={styles.footer_navbar}>
                        <Link className={styles.footer_link} to="/">
                            HOME
                        </Link >
                        <Link className={styles.footer_link} to="/headphones">
                            HEADPHONES
                        </Link>
                        <Link className={styles.footer_link} to="/speakers">
                            SPEAKERS
                        </Link>
                        <Link className={styles.footer_linke} to="/earphones">
                            EARPHONES
                        </Link>
                    </div>
                    <div className={styles.footer_icon}>
                        <img style={{ marginRight: "16px" }} src={facebook} alt="facebook icon" />
                        <img style={{ marginRight: "16px" }} src={twiter} alt="twiter icon" />
                        <img src={insta} alt="insta icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout