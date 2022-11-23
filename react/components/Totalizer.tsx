import React from 'react'

const Totalizers = (totalizers: any) => {
  const { id, name, value } = totalizers.total;
  console.log("Mis totales son igual a:", id, name, value)
  return(
    <div>
      <p>Tienes x Items</p>
      <p>Total: x</p>
    </div>
  )
}
export default Totalizers;
