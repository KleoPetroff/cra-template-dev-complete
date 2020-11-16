import React from 'react'
import { screen } from '@testing-library/react'

import { App } from 'src/components/App/App'
import { renderWithRouter } from 'src/tests/utils/renderWithRouter'

test('renders learn react link', () => {
  renderWithRouter(<App />)

  const linkElement = screen.getByText(/Go to Login/i)
  expect(linkElement).toBeInTheDocument()
})
