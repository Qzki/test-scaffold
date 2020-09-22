import React from 'react';

import App from '../app';

import {render} from '@testing-library/react';

describe('App', () => {
  test('should render App component', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('app').textContent).toBe('Hello World');
  })
});
