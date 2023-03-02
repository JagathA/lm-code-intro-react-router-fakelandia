import React from 'react';
import { render, screen, } from '@testing-library/react';
import MisdemeanourRow,{MisdemeanourProps}from './misdemeanour'
import {Misdemeanour} from '../types/misdemeanours.types'

describe("<MisdemeanourRow>", () => {

  test(`Given the required props, 
		When the component is rendered
		Then corrcet values are rendered`, () => {
    const requiredProps: MisdemeanourProps = {
        citizenId: 100,
        misdemeanour: "rudeness",
        date: "12/03/2012",
        image: ""
    }
    render(<MisdemeanourRow {...requiredProps} />);
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByText(/Mild Public Rudeness =/i)).toBeInTheDocument();
    expect(screen.getByText("12/03/2012")).toBeInTheDocument();
  });
});
