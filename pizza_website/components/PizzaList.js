import React from 'react'
import style from '../styles/PizzaList.module.css'
import Pizza from './Pizza'

function PizzaList() {
    return (
        <div className={style.container}>
            <div className={style.grid}>
            <Pizza 
                imgUrl='https://www.pcpizza.com/wp-content/uploads/2015/04/PcPizzaBaconCheeseburger.png'
                title='Bianca'
                ingredient='Ricotta, Mozzarella, Knoblauch'
                price='11.5$'
            />

            <Pizza 
                imgUrl='https://www.pcpizza.com/wp-content/uploads/2015/04/PcPizzaCombo.png'
                title='Al Salmone'
                ingredient='Tomatensauce, Mozzarella, Lachs, Knoblauch'
                price='14$'
            />

            <Pizza 
                imgUrl='https://www.picng.com/upload/pizza/png_pizza_15176.png'
                title='Alla Vongole'
                ingredient='Tomatensauce, Mozzarella, Knoblauch, Kleine Muscheln, Chilipulver'
                price='9.5$'
            />
            </div>
            <div className={style.grid1}>
            <Pizza 
                imgUrl='https://www.seekpng.com/png/full/1-15723_pizza-png-pizza-png-transparent-background.png'
                title='Anchovis'
                ingredient='Tomatensauce, Mozzarella, Sardellen, Knoblauch, Scharfe Chilischoten'
                price='15$'
            />

            <Pizza 
                imgUrl='https://purepng.com/public/uploads/large/purepng.com-pizzafood-pizza-941524644327twewe.png'
                title='Calabria'
                ingredient='Tomatensauce, Mozzarella, Spianata calabrese piccante scharfe kalabrische Chilis'
                price='16$'
            />

            <Pizza 
                imgUrl='https://pngimg.com/uploads/pizza/pizza_PNG7138.png'
                title='Capri'
                ingredient='Tomatensauce, Mozzarella, Rucola, Kirschtomaten, Parmigiano Reggiano (Parmesan)'
                price='12.5$'
            />
            </div>
        </div>
    )
}

export default PizzaList
