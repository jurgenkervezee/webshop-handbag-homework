import React from 'react';

function HandBagFrame({seller, image, nameImage, description, price}) {
    return (
        <article>
            <span>{seller}</span>
            <img src={image} alt={nameImage}/>
            <p>{description}</p>
            <h4>{price}</h4>
        </article>
    )
}

export default HandBagFrame;