import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { generateBlockClass } from '@vtex/css-handles'
import ButtonGroup from './ButtonGroup'
import styles from './styles.css'

const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {
  const container = generateBlockClass(styles.container, blockClass)
  const container_item = generateBlockClass(styles.container_item, blockClass)
  const productInfo = useProduct();
  const { orderForm: {
    items,
    totalizers
  } } = useOrderForm()
  console.log("Productos:", productInfo)
  console.log("Totales:", totalizers[0])

  return (
    <div className={container}>
      {
        items.map((item: any, index: number) => {
          console.log(item)
          return (
            <div key={index} className={container_item}>
              <div>
                <img src={item.imageUrls.at1x} />
              </div>
              <div>
                <p>{item.name}</p>
                <p>{item.id}</p>
                <p>${item.price / 100}</p>
                <p>Cant: {item.quantity}</p>
              </div>
            </div>
          )
        })
      }
      <div>
        <p> Tienes {items.length} productos en el carrito</p>
        <p>Total: ${totalizers[0]?.value / 100}</p>
      </div>
      <ButtonGroup />
    </div>
  )
}

export default AddToCartInfo
