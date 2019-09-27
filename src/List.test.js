import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import STORE from './STORE';
import App from './App';
import renderer from 'react-test-renderer';


it('renders without crashing', () => {
    const section = document.createElement('section');
    
    ReactDOM.render(
    <List 
        header="list" 
        cards={['dog', 'cat', 'hamster']}
        key="mammal"
        title="husky"
        content="big dog"
    />,
         section);

    ReactDOM.unmountComponentAtNode(section);
});

it('renders UI as expected', () => {
    const tree = renderer
        .create(
        <List
            header="list"
            cards={['dog', 'cat', 'hamster']}
            key="mammal"
            title="husky"
            content="big dog" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});