import GlobalStyles from '../src/styles/global'

export const decorators = [
  (Story) => (
    <div style={{ margin: '3em' }}>
      <GlobalStyles />
      <Story />
    </div>
  ),
];