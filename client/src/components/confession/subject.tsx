import React from 'react';
import { useState } from 'react';
import ErrorMessage from './error-message';

export interface SubjectProps {
	subject: string;
	onChange: (newValue: string) => void;
}

const errLbl = "ERROR:"
const SUBJECT_MIN_LENGTH = 3;
const SUBJECT_MAX_LENGTH = 25;

export const errorSubjectTooShort = `${errLbl} Subject Name must be minimum ${SUBJECT_MIN_LENGTH} characters`
export const errorSubjectTooLong = `${errLbl} Subject Name must be maximum ${SUBJECT_MAX_LENGTH} characters`

const Subject: React.FC<SubjectProps> = ({ subject, onChange }) => {

	const [errorMessage, setErrorMessage] =
		useState<string | undefined>(undefined);

	const validate: (value: string) => string | undefined = (value) => {
		
		if (value.length > 0) {
		 if (value.length < SUBJECT_MIN_LENGTH) {
				return errorSubjectTooShort;
			}
			else if (value.length > SUBJECT_MAX_LENGTH) {
				return errorSubjectTooLong;
			}
		}

		return undefined;
	}
	return (
		<>
			<p>
				<label htmlFor='subject'>Subject</label>
				<input id='subject' type='text' value={subject} onChange={
					(e) => {
						const errorMessage = validate(e.target.value);
						setErrorMessage(errorMessage);
						onChange(e.target.value)
					}}
				/>
				<ErrorMessage errorMessage={errorMessage} />
			</p>
		</>
	)
}

export default Subject;
