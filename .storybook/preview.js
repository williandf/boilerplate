import React from 'react';
import GlobalStyles from '../src/styles/global'

export const decorators = [
  (Story) => (
    <div style={{ margin: '3em' }}>
      <GlobalStyles />
      <Story />
    </div>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}