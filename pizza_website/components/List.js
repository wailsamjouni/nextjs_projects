import { useState } from 'react'
import style from '../styles/List.module.css'
import {AiOutlineClose} from 'react-icons/ai'

function List() {

    return (
        <div className={style.container}>
            <h4 className={style.title}>You can order also other products</h4>
            <ul className={style.list}>
                <a className={style.a} href='#'>Drinks</a>
                <a className={style.a} href='#'>Sandwishes</a>
                <a className={style.a} href='#'>Dishes</a>
                <a className={style.a} href='#'>Salad</a>
            </ul>
            <AiOutlineClose style={{cursor:'pointer'}} />
        </div>
    )
}

export default List
