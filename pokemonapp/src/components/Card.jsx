import React from "react";
import { Link } from "react-router-dom";
import '../styles/Card.scss'

const Card = ( {data} ) => {
    const strings = data.url

    const index = strings.split('/')

    return(
        <Link to={`details/${data.name}`} className="card">
            <div className="card-images">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${index[index.length -2 ]}.png`} alt="test" />
            </div>
            <div className="text">
                <h1>{data.name}</h1>
                <p>Click for details</p>
            </div>
        </Link>
    )
}

export default Card