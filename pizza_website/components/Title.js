import React from 'react'
import style from '../styles/Title.module.css'
function Title() {
    return (
        <div className={style.container}>
            <h1 className={style.title}>The best pizza</h1>
            <h3 className={style.subtitle}>
            Foods similar to pizza have been made since the
             Neolithic Age.Records of people adding other
              ingredients to bread to make it more flavorful can
               be found throughout ancient history.
            </h3>
            <button className={style.button}>Order now</button>
        </div>
    )
}
export default Title
