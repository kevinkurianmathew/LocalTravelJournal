import React from "react"
import Navbar from "./Navbar"
import Card from "./Card"
import data from "./data"

export default function App(){
    const element = data.map( item => {
    return (
        <Card 
                key={item.id }
                {...item} />
    )
    })
    return (
        <div>
        <Navbar/>
        {element}
        </div>
    )
}