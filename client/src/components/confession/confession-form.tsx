import { useState } from 'react';
import ConfessionHeader from './header';
import Subject from './subject';
import ReasonForContact from './reason-for-contact';
import { Reason } from '../../types/misdemeanours-display.types'
import ConfessionText from './confession-text';



const ConfessionForm = () => {
	const [subject, setSubject] = useState<string>('');
	const [subjectValid, setSubjectValid] = useState<boolean>(false);
	const [reasonForContact, setReasonForContact] = useState<Reason>('just-talk');
	const [reasonForContactValid, setReasonForContactValid] = useState<boolean>(false);
	const [confessionText, setConfessionText] = useState<string>('I an guilty');
	const [confessionTextValid, setConfessionTextValid] = useState<boolean>(false);
	const [submitted, setSubmitted] = useState<boolean>(false);

	function submitClicked() {
		setSubmitted(true);
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


		</section>
	);
};

export default ConfessionForm;
