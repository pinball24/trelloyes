import React from 'react';
import './Card.css';


class Card extends React.Component {
    deleteCard(event) {
        event.preventDefault();
        props.onDeleteItem(props.itemId);
    }
    render() {
        return (
            <div className="Card">
                <button 
                    onClick={e => this.deleteCard(e)}
                    type="button">
                    delete
                </button>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>
        )
    }
}

export default Card
