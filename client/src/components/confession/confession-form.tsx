import { useState } from 'react';
import { MisdemeanourKind } from "../../types/misdemeanours.types";
import ConfessionHeader from './header';
import Subject from './subject';

type ReasonForContact = MisdemeanourKind | 'I just want to talk';


const ConfessionForm = () => {
	const [subject, setSubject] = useState<string>('');
	const [reasonForContact, setreasonForContact] = useState<ReasonForContact>('I just want to talk');
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
			{/* <>
				<TwoPlusTwo twoPlusTwo={twoPlusTwo} onChange={(newValue) => setTwoPlusTwo(newValue)} />
			</>

			<>
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
