import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom'
import NextPlayer from './NextPlayer'

describe('Testing the NextPlayer component', () => {
  test('If the correct player renders on the page', () => {
    render(
      <Router>
        <NextPlayer id={2} />
      </Router>
    )

    const number = screen.getByText('Now pass device to Player 2')
    expect(number).toBeInTheDocument()
  })

  test('If the button text is rendering', () => {
    render(
      <Router>
        <NextPlayer id={2} />
      </Router>
    )

    const text = screen.getByText('Pass')

    expect(text).toBeInTheDocument()
  })
  test('If the button is rendering with correct text', () => {
    render(
      <Router>
        <NextPlayer id={2} />
      </Router>
    )

    const button = screen.getByRole('button')

    expect(button.innerHTML).toMatch(/pass/i)
  })
  // test.todo('blah', () => {})
})