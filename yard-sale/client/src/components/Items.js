import React, { useState, useContext, useEffect } from 'react'

export default function Items(props){

const {item} = props
    return(
        <div className="items=wrapper">
            <h2>{item.name}</h2>
            <h4>{item.description}</h4>
            <img src={item.picture} alt="no image picture" />
            <h2>{item.price}</h2>
        </div>
    )
}