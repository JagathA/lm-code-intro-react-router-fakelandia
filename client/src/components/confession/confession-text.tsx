import React from 'react';
import { useState } from 'react';
import ErrorMessage from './error-message';

export interface ConfessionTextProps {
	confessionText: string;
	onChange: (newValue: string, newValidity:boolean) => void;
}
const errLbl = "ERROR:"
const CONFESSION_TEXT_MIN_LENGTH = 17;
const CONFESSION_TEXT_MAX_LENGTH = 153;

export const errorConfessionTextTooShort = `${errLbl} Must be minimum ${CONFESSION_TEXT_MIN_LENGTH} characters`
export const errorConfessionTextTooLong = `${errLbl} Must be maximum ${CONFESSION_TEXT_MAX_LENGTH} characters`

const ConfessionText: React.FC<ConfessionTextProps> = ({ confessionText, onChange }) => {

	const [errorMessage, setErrorMessage] =
		useState<string | undefined>(undefined);

	const validate: (value: string) => string | undefined = (value) => {

		if (value.length > 0) {
			if (value.length < CONFESSION_TEXT_MIN_LENGTH) {
				return errorConfessionTextTooShort;
			}
			else if (value.length > CONFESSION_TEXT_MAX_LENGTH) {
				return errorConfessionTextTooLong;
			}
		}

		return undefined;
	}
	return (
		<>
			<label htmlFor='ConfessionText' >Type your confession here</label>

			<textarea id='ConfessionText' value={confessionText} onChange={
				(e) => {
					const errorMessage = validate(e.target.value);
					setErrorMessage(errorMessage);
					onChange(e.target.value, ((errorMessage===undefined)&&(e.target.value!=='')))
				}} rows={5} cols={100}
			/>
			<ErrorMessage errorMessage={errorMessage} />
		</>);
}

export default ConfessionText;
