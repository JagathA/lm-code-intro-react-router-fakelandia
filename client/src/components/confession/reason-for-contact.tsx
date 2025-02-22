import React from 'react';
import { useState } from 'react';
import { Reason } from "../../types/misdemeanours-display.types";



export interface reasonForContactProps {
	reasonForContact: Reason;
	onChange: (newValue: Reason, validity: boolean) => void;
}
const errLbl = "ERROR:"

export const errorreasonForContactAnswer = `${errLbl} Select an answer from the list`

const ReasonForContact: React.FC<reasonForContactProps> = ({ reasonForContact, onChange }) => {

	const [errorMessage, setErrorMessage] =
		useState<string | undefined>(undefined);

	const validate: (value: string) => string | undefined = (value) => {

		if (value === " ") {
			return errorreasonForContactAnswer;
		}
		return undefined;
	}

	return (
		<>
			<label htmlFor='reasonForContact' className='form__label'>Reason For Contact</label>

			<select  className='form__select'id='reasonForContact' value={reasonForContact} onChange={
				(e) => {
					// const errorMessage = validate(e.target.value);
					// setErrorMessage(errorMessage);
					onChange(e.target.value as Reason, true);
				}}>
				<option id="0" >rudeness</option>
				<option id="1" >vegetables</option>
				<option id="2" >lift</option>
				<option id="3" >united</option>
				<option id="4" >I just want to talk</option>
			</select>

			{/* <ErrorMessage errorMessage={errorMessage} /> */}

		</>);
}

export default ReasonForContact;
