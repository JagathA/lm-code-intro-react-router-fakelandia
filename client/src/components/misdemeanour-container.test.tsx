import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
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
          "misdemeanour": "testmis1",
          "date": "01/01/2000"
        },
        {
          "citizenId": 5678,
          "misdemeanour": "testmis2",
          "date": "02/03/2016"
        },
        {
          "citizenId": 9101112,
          "misdemeanour": "testmis56",
          "date": "12/31/2040"
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


test('Check Misdeameanour data is rendered correctly', async () => {
  render(<MisdemeanourContainer />);

  await screen.findByText("1234");
  const citizenIDTextElement = screen.getByText("1234");
  const misdemeanourTextElement = screen.getByText("testmis1");
  const dateTextElement = screen.getByText("01/01/2000");
  expect(citizenIDTextElement).toBeInTheDocument();
  expect(misdemeanourTextElement).toBeInTheDocument();
  expect(dateTextElement).toBeInTheDocument();
});


// test('Check 500 error is rendered correctly', async () => {
//   server.use(
//     rest.get('https://swapi.dev/api/people/1', (_req, res, ctx) => {
//       return res(ctx.status(500));
//     }),
//   );

//   render(<MisdemeanourContainer />);

//   await screen.findByText("Oops... something went wrong, try again");
//   const textElement = screen.getByText("Oops... something went wrong, try again");
//   expect(textElement).toBeInTheDocument();
// });
