import React from 'react';
import ReactDOM from 'react-dom';
import AutoComplete from './AutoComplete';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AutoComplete />, div);
  ReactDOM.unmountComponentAtNode(div);
});
