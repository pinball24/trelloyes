import React from 'react';
import Card from './Card.js';
import './List.css';

function List(props) {

    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {props.cards.map((card) => 
                     <Card
                        onDeleteItem={props.onDeleteItem}
                        listId={props.listId}
                        itemId={card.id}
                        key={card.id}
                        title={card.title}
                        content={card.content}
                />
                
                )}
                <button
                    onClick={props.onAddRandomItem}
                    type='button'
                    className='List-add-button'
                >
                    + Add Random button
                </button>
            </div>
        </section>
    )
}

export default List