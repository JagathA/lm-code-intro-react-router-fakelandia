import React from 'react';
import { render, screen} from '@testing-library/react';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import MisdemeanourContainer from './misdemeanour-container'

// const server = setupServer(
//   rest.get('http://localhost:8080/api/misdemeanours/3', (req, res, ctx) => {
//     return res(ctx.json({
//       "name": " charName"
//     }))
//   }),
// )
const server = setupServer(
  rest.get('http://localhost:8080/api/misdemeanours/500', (req, res, ctx) => {
    return res(ctx.json({
      "misdemeanours": [
        {
          "citizenId": 1234,
          "misdemeanour": "vegetables",
          "date": "01/01/2000"
        }]
    }))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Check Table header is rendered correctly', () => {
  render(<MisdemeanourContainer />);
  const citizenIDTextElement = screen.getByText("Citizen ID");
  const misdemeanourTextElement = screen.getByText("Misdemeanour");
  const dateTextElement = screen.getByText("Date");
  expect(citizenIDTextElement).toBeInTheDocument();
  expect(misdemeanourTextElement).toBeInTheDocument();
  expect(dateTextElement).toBeInTheDocument();
});


test('Check Misdemeanour data is rendered correctly', async () => {
  render(<MisdemeanourContainer />);

  await screen.findByText("1234");
  const citizenIDTextElement = screen.getByText("1234");
  const misdemeanourTextElement = screen.getByText(/Not Eating Your Vegetables =/i);  /* need to check for the emoji */
  const dateTextElement = screen.getByText("01/01/2000");
  expect(citizenIDTextElement).toBeInTheDocument();
  expect(misdemeanourTextElement).toBeInTheDocument();
  expect(dateTextElement).toBeInTheDocument();
});



