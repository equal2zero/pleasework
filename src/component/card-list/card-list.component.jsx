import React from 'react';


const Recipe = ({title, calories , image, ctype, ingred, share, servesss}) => {
    return(
        <div>
            <h1>{title}</h1>
            <a href={share} target="_blank">
            <img src ={image} alt="" />
            </a>
            <p>Calories :{calories}</p>
            <p>Cuisine Type: {ctype}</p>
            <p>Serves: {servesss}</p>
            <p>Ingredients:</p>
            <ol>
                {ingred.map(item =>(
                <li>{item.text}</li>
            ))}
            </ol>
            
        </div>
    );
};

export default Recipe;
