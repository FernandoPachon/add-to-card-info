import React from "react"
import { generateBlockClass } from '@vtex/css-handles'
import styles from './styles.css'


const ButtonGroup = ({ blockClass }: { blockClass: string })=>{
  const button_carrito = generateBlockClass(styles.container, blockClass)
  const container_buttons = generateBlockClass(styles.container, blockClass)
  const button_continua = generateBlockClass(styles.container, blockClass)

  return(
    <>
    {/*   <div>
        <a href="https://fernandopachon--itgloberspartnercl.myvtex.com/checkout/#/cart" >Check Out</a>
      </div> */}
      <div className={container_buttons}>
      <a  href="https://fernandopachon--itgloberspartnercl.myvtex.com/compra"><button className={button_carrito}> IR A CARRITO DE COMPRAS</button></a>
      <button className={button_continua}>SEGUIR COMPRANDO</button>
      </div>

    </>
  )
}

export default ButtonGroup
