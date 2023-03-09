import { useState, useContext } from 'react';
import ConfessionHeader from './header';
import Subject from './subject';
import ReasonForContact from './reason-for-contact';
import { Reason } from '../../types/misdemeanours-display.types'
import ConfessionText from './confession-text';
import ErrorMessage from './error-message';
import {MisdemeanoursContext, SetMisdemeanoursContext} from '../misdemeanour-container'
import {Misdemeanour} from '../../types/misdemeanours.types'



const ConfessionForm : React.FC = () => {
	const [subject, setSubject] = useState<string>('');
	const [subjectValid, setSubjectValid] = useState<boolean>(false);
	const [reasonForContact, setReasonForContact] = useState<Reason>('just-talk');
	const [reasonForContactValid, setReasonForContactValid] = useState<boolean>(false);
	const [confessionText, setConfessionText] = useState<string>('I an guilty');
	const [confessionTextValid, setConfessionTextValid] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

	const misdemeanours = useContext(MisdemeanoursContext);
    const setMisdemeanours = useContext(SetMisdemeanoursContext);

	const submitClicked = async () => {
		setErrorMessage(undefined);
		const apiResponse = await fetch('http://localhost:8080/api/confess', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				"subject": subject,
				"reason": reasonForContact,
				"details": confessionText
			})
		});

		const json = await apiResponse.json();

		if (json.success) {
			if ((!json.justTalked) && (reasonForContact !== "just-talk")){

				console.log("add to mis demeanours list");
				const newMisdemeanour : Misdemeanour = {
					citizenId : 123456,
					misdemeanour : reasonForContact,
					date : "12/12/2040" //new Date().toLocaleDateString()
				};
				let misdameanourList = [...misdemeanours];
				misdameanourList.push(newMisdemeanour);
				setMisdemeanours(misdameanourList);
			}
			else if (((json.justTalked) && (reasonForContact !== "just-talk")) ||
				    ((!json.justTalked) && (reasonForContact === "just-talk")))   
			 {
				setErrorMessage("unexpected misdeamenour type");
			}
		}
		else {
			setErrorMessage(json.message)
		}

	}

	return (
		<section>
			<ConfessionHeader />
			<>
				<Subject subject={subject} onChange={(newValue, newValidity) => { setSubject(newValue); setSubjectValid(newValidity) }} />
			</>
			<>
				<ReasonForContact reasonForContact={reasonForContact} onChange={(newValue, newValidity) => { setReasonForContact(newValue); setReasonForContactValid(newValidity) }} />
			</>

			<>
				<ConfessionText confessionText={confessionText} onChange={(newValue, newValidity) => { setConfessionText(newValue); setConfessionTextValid(newValidity) }} />
			</>

			<button disabled={!(subjectValid && reasonForContactValid && confessionTextValid)} type='submit' onClick={() => {
				submitClicked();
			}}>Submit</button>

			<>
				<ErrorMessage errorMessage={errorMessage} />
			</>
		</section>
	);
};

export default ConfessionForm;
