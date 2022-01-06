import React from 'react'
import style from '../styles/Pizza.module.css'

function Pizza({imgUrl, title, ingredient, price}) {
    return (
        <div className={style.container}>
            <img className={style.img} src={imgUrl} />
            <h3 className={style.title}>{title}</h3>
            <h5 className={style.ingredient}>{ingredient}</h5>
            <span className={style.price}>{price}</span>
        </div>
    )
}

export default Pizza
