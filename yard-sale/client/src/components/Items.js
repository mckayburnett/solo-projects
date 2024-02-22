import React, { useState, useContext, useEffect } from 'react'

export default function Items(props){

const {item} = props
console.log('picture', item.picture)
// const image = URL.createObjectURL(item.picture)

    return(
        <div className="items-wrapper">
            <h2>{item.name}</h2>
            <h4>{item.description}</h4>
            <img className="items-picture"src={item.picture} />
            <h2>{item.price}</h2>
        </div>
    )
}