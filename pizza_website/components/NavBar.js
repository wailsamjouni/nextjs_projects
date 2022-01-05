import React from 'react'
import style from '../styles/NavBar.module.css'
import Image from 'next/image'
import { FaCartPlus } from 'react-icons/fa';

function NavBar() {
    return (
        <div className={style.container}>
            <div className={style.logo}>
                <h2 className={style.title}>WS</h2>
                <span className={style.pi}>PI</span>
                <span className={style.zza}>ZZA</span>
            </div>
            <div className={style.space}></div>
            <div className={style.middle}>
                <li className={style.li}>
                    <ul><a className={style.a} href='#'>Home</a></ul>
                    <ul><a className={style.a} href='#'>Products</a></ul>
                    <ul><a className={style.a} href='#'>Menu</a></ul>
                    <ul><a className={style.a} href='#'>About us</a></ul>
                    <ul><a className={style.a} href='#'>Contact</a></ul>
                </li>
            </div>
            <div className={style.right}>
                <div className={style.cart}>
                    <FaCartPlus size='1.7rem' color='white'/>
                    <h3 className={style.text}>Cart</h3>
                    <span className={style.circle}>2</span>
                </div>
                <button className={style.button}>Log in</button>
                <button className={style.button}>Sign in</button>
            </div>
        </div>
    )
}

export default NavBar
