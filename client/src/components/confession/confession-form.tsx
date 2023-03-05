import { useState } from 'react';
import ConfessionHeader from './header';
import Subject from './subject';
import ReasonForContact from './reason-for-contact';
import {Reason} from '../../types/misdemeanours-display.types'
import ConfessionText from './confession-text';



const ConfessionForm = () => {
	const [subject, setSubject] = useState<string>('');
	const [reasonForContact, setReasonForContact] = useState<Reason>('just-talk');
	const [confessionText, setConfessionText] = useState<string>('I an guilty');
	const [submitted, setSubmitted] = useState<boolean>(false);

	function submitClicked() {
		setSubmitted(true);
	}

	return (
		<section className='w12MForm'>
			<ConfessionHeader />
			<>
				<Subject subject={subject} onChange={(newValue) => setSubject(newValue)} />
			</>
			<>
				<ReasonForContact reasonForContact={reasonForContact} onChange={(newValue) => setReasonForContact(newValue)} />
			</>

			 <>
			 	<ConfessionText confessionText={confessionText} onChange={(newValue) => setConfessionText(newValue)} />
			 </>

			 {/* <button type='submit' onClick={() => {
			 	submitClicked();
			 }}>Submit</button>   */}

			{/* <section>
				<SubmittedData submitted={submitted} speciesName={speciesName} planetName={planetName} numberOfBeings={numberOfBeings} twoPlusTwo={twoPlusTwo} confessionText={confessionText} />
			</section> */}

		
		</section>
	);
};

export default ConfessionForm;
