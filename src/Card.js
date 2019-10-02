import React from 'react';
import './Card.css';


class Card extends React.Component {
    deleteCard(event) {
        event.preventDefault();
        this.props.onDeleteItem(this.props.itemId);
    }
    render() {
        return (
            <div className="Card">
                <button 
                    onClick={e => this.deleteCard(e)}
                    type="button">
                    delete
                </button>
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
            </div>
        )
    }
}

export default Card;
