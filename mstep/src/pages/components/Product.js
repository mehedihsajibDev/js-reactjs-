import React from 'react'
import Navitem from './Navitem'
import jacket from "../../images/jacket.jpg"
import iphone from "../../images/iphone.png"
import phone from "../../images/phone.jpg"
import apple from "../../images/apple.jpg"
import orange from "../../images/orange.jpg"

const data=[
  {
    id:1,
    title:"jacket",
    img:jacket,
    price:"1200",
    category:"Cloth"
  },
  {
    id:2,
    title:"Iphone 10",
    img:phone,
    price:"1300",
    category:"Phone"
  },
  {
    id:3,
    title:"Iphone",
    img: iphone,
    price:"1800",
    category:"Phone"
  },
  {
    id:4,
    title:"Apple",
    img: apple,
    price:"180",
    category:"Fruit"
  },
  {
    id:5,
    title:"Orange",
    img: orange,
    price:"280",
    category:"Fruit"
  }
]

export default function Product() {
  let uniqueCategory = [...new Set(data.map(item => item.category))];
   console.log(uniqueCategory)
  return (
    <>
      <Navitem data={data}></Navitem>
    </>
  )
}
