import { useState } from 'react';
import ConfessionHeader from './header';
import Subject from './subject';
import ReasonForContact from './reason-for-contact';
import {Reason} from '../../types/misdemeanours-display.types'



const ConfessionForm = () => {
	const [subject, setSubject] = useState<string>('');
	const [reasonForContact, setReasonForContact] = useState<Reason>('I just want to talk');
	const [confess, setConfess] = useState<string>('I an guilty');
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

			 {/* <>
			 	<ReasonForSparing reasonForSparing={reasonForSparing} onChange={(newValue) => setReasonForSparing(newValue)} />
			 </>

			 <button type='submit' onClick={() => {
			 	submitClicked();
			 }}>Submit</button> */} 

			{/* <section>
				<SubmittedData submitted={submitted} speciesName={speciesName} planetName={planetName} numberOfBeings={numberOfBeings} twoPlusTwo={twoPlusTwo} reasonForSparing={reasonForSparing} />
			</section> */}

		
		</section>
	);
};

export default ConfessionForm;
