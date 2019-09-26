import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import STORE from './STORE';
import App from './App';
import renderer from 'react-test-renderer';


it('renders without crashing', () => {
    const section = document.createElement('section');
    
    ReactDOM.render(<List />, section);

    ReactDOM.unmountComponentAtNode(section);
});

it('renders UI as expected', () => {
    const tree = renderer
        .create(<List />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});