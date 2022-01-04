import React from 'react'
import style from '../styles/NavBar.module.css'
import Image from 'next/image'
import { FaCartPlus } from 'react-icons/fa';

function NavBar() {
    return (
        <div className={style.container}>
            <div className={style.logo}>
                {/* <Image src='https://upload.wikimedia.org/wikipedia/commons/d/de/Flag-map_of_Italy.svg'/> */}
                WS
                <span>PI</span>
                <span>ZZA</span>
            </div>
            <div className={style.middle}>
                <li>
                    <ul><a href='#'>Home</a></ul>
                    <ul><a href='#'>Products</a></ul>
                    <ul><a href='#'>Menu</a></ul>
                    <ul><a href='#'>About us</a></ul>
                    <ul><a href='#'>Contact</a></ul>
                </li>
            </div>
            <div className={style.right}>
                <div>
                    <FaCartPlus size='1.3rem'/>
                    <h3>Cart</h3>
                    <span className={style.circle}></span>
                </div>
                <button className={style.button}>Log in</button>
                <button className={style.button}>Sign in</button>
            </div>
        </div>
    )
}

export default NavBar
