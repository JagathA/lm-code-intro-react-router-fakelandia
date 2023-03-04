import React from 'react';
import { useState } from 'react';
//import ErrorMessage from './ErrorMessage';

export interface SubjectProps {
	subject: string;
	onChange: (newValue: string) => void;
}

// const errLbl = "ERROR:"
// const SPECIES_NAME_MIN_LENGTH = 3;
// const SPECIES_NAME_MAX_LENGTH = 23;

// export const errorSpeciesNameTooShort = `${errLbl} Species Name must be minimum ${SPECIES_NAME_MIN_LENGTH} characters`
// export const errorSpeciesNameTooLong = `${errLbl} Species Name must be maximum ${SPECIES_NAME_MAX_LENGTH} characters`
// export const errorSpeciesNameInvalidCharacters = `${errLbl} No numbers or special characters allowed!`

const Subject: React.FC<SubjectProps> = ({ subject, onChange }) => {

	// const [errorMessage, setErrorMessage] =
	// 	useState<string | undefined>(undefined);

	// const validate: (value: string) => string | undefined = (value) => {
	// 	const reg = /^[a-z]+$/i;;
	// 	if (value.length > 0) {
	// 		if (!reg.test(value)) {
	// 			return errorSubjectInvalidCharacters;
	// 		}
	// 		else if (value.length < SPECIES_NAME_MIN_LENGTH) {
	// 			return errorSubjectTooShort;
	// 		}
	// 	}

	// 	return undefined;
	// }
	return (
		<>
			<p>
				<label htmlFor='subject'>Subject</label>
				<input id='subject' type='text' value={subject} onChange={
					(e) => {
						// const errorMessage = validate(e.target.value);
						// setErrorMessage(errorMessage);
						onChange(e.target.value)
					}}
				/>
				{/* <ErrorMessage errorMessage={errorMessage} /> */}
			</p>
		</>
	)
}

export default Subject;
