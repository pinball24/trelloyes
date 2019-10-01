import React from 'react';
import './Card.css';


export default function Card(props) {
    function deleteCard(event) {
        event.preventDefault();
        props.onDeleteItem(props.itemId);
    }
    return (
        <div className="Card">
            <button 
                onClick={() => props.onDeleteItem(props.itemId)}
                onClick={e => this.deleteCard(e)}
                type="button">
                delete
            </button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}
