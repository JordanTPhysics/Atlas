import React from 'react';

function Item(props) {

    
    return (
        <>
                <img className='item animated-element' src={props.impath} />
                <h2>{props.author}</h2>
                {props.text}
        </>
    );
}

export default Item;