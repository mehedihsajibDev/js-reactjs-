import React, { useState } from 'react'
import Navbar from './Navbar'
import Cards from './Cards'
import jacket from '../assets/jacket.jpg'
import iphone from '../assets/iphone.png'
import phone from '../assets/phone.jpg'
import apple from '../assets/apple.jpg'
import orange from '../assets/orange.jpg'


const data=[
  {
      id: 1,
      title: "Jacket",
      img: jacket,
      price: "1200",
      category: "Cloth"
  },
  {
      id: 2,
      title: "Iphone",
      img: iphone,
      price: "81200",
      category: "Phone"
  },
  {
      id: 3,
      title: "Iphone 10",
      img: phone,
      price: "90000",
      category: "Phone"
  },
  {
      id: 4,
      title: "Apple",
      img: apple,
      price: "180",
      category: "Fruit"
  },
  {
      id: 5,
      title: "Orange",
      img: orange,
      price: "180",
      category: "Fruit"
  }
]

export default function Products() {
  let[alldata, setallData]=useState(data)

  let ucat=[...new Set(data.map(item=> item.category))];

  return (
    <div>
        <Navbar uncat={ucat} data={data} setallData={setallData}></Navbar>
        <Cards data={alldata}></Cards>
    </div>
  )
}
