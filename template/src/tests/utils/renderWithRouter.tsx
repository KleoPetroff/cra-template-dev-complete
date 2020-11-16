import { ReactElement } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

export const renderWithRouter = (component: ReactElement) => {
  return render(component, { wrapper: MemoryRouter })
}
