import React from 'react';
import App from './App';
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Bisection from './Calculate/Root of Equation/Bisection';
import FalsePosition from './Calculate/Root of Equation/False_position';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
window.URL.createObjectURL = function(){}

test('renders without crashing', () => {
  render(<App/>);
  //
  //
  const linkElement = screen.getByText(/Root of Equation/i);
  expect(linkElement).toBeInTheDocument();
  fireEvent.click(screen.getByText(/Root of Equation/i));

  const pathElement = screen.getByText(/Bisection/i);
  expect(pathElement).toBeInTheDocument();
  fireEvent.click(screen.getByText(/Bisection/i));
});

test('Testing Input and Rendering of Bisection',async () => {
  await render(<Bisection />);

  const inputFx = screen.getByPlaceholderText('f(x)');
  fireEvent.change(inputFx, {target: {value: 'x^4-13'}})
  expect(inputFx.value).toBe('x^4-13')

  const inputXL = screen.getByPlaceholderText('XL');
  fireEvent.change(inputXL, {target: {value: '1.5'}})
  expect(inputXL.value).toBe('1.5')

  const inputXR = screen.getByPlaceholderText('XR');
  fireEvent.change(inputXR, {target: {value: '2'}})
  expect(inputXR.value).toBe('2')

  const btnElement = screen.getByText('Submit');
  expect(btnElement).toBeInTheDocument();
  userEvent.click(btnElement)
  
});

test('Testing Input and Rendering of FalsePosition',async () => {
  await render(<FalsePosition />);

  const inputFx = screen.getByPlaceholderText('f(x)');
  fireEvent.change(inputFx, {target: {value: 'x^4-13'}})
  expect(inputFx.value).toBe('x^4-13')

  const inputXL = screen.getByPlaceholderText('XL');
  fireEvent.change(inputXL, {target: {value: '1.5'}})
  expect(inputXL.value).toBe('1.5')

  const inputXR = screen.getByPlaceholderText('XR');
  fireEvent.change(inputXR, {target: {value: '2'}})
  expect(inputXR.value).toBe('2')

  const btnElement = screen.getByText('Submit');
  expect(btnElement).toBeInTheDocument();
  userEvent.click(btnElement)

});
