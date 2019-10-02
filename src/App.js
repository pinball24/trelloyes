import React from 'react';
import './App.css';
import List from './List.js';
import STORE from './STORE';


class App extends React.Component {
  state = STORE;

  handleDeleteItem = (itemId, listId) => {
    let newStore = this.state;
    newStore.lists.map(list => {
      if(list.id == listId) {
        const newItems = list.cardIds.filter(cardId => cardId !== itemId);
        list.cardIds = newItems;
      }
    })
//    this.setState({
//      lists: store.lists,
//      allCards: store.allCards
//    });
    this.setState(newStore);
  }

  handleAddItem = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}
  omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

  render() {
    return (
      <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.state.lists.map(list => (
            <List 
              onDeleteItem={this.handleDeleteItem}
              onAddRandomItem={this.handleAddItem}
              key={list.id}
              listId={list.id}
              header={list.header}          
              cards={list.cardIds.map(id => this.state.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;