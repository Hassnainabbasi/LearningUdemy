import { useEffect, useState } from "react";
import Item from "./Item";

export default function Cart() {
  const [firstItem, setFirstItems] = useState({
    name : "Biryani",
    quantity : 4
  })

  useEffect(()=>{
    setTimeout(()=>{
    setFirstItems(items =>{
      return{
        ...items,
        name : "Kabab",
        quantity : 2
      }
    })
    },1000)
  })

  return (
    <div className="mt-5">
      <h1>Cart</h1>
      <Item item={firstItem}/>
      <Item item={firstItem}/>
    </div>
  )
}
