import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Card title="Hello" content="foo" />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders UI as expected', () => {
    const tree = renderer
        .create(<Card title="Hello" content="foo" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

