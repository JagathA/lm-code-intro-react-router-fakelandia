import { render, screen } from '@testing-library/react';
import Subject, { SubjectProps, errorSubjectTooShort, errorSubjectTooLong} from './subject';

import user from '@testing-library/user-event';

describe("<Subject>", () => {
	const labelText = "Subject";

	test(`Given the required props, 
		When the component is rendered
		Then the label text "Subject " should be present`, () => {
		const mockChange = jest.fn();
		const requiredProps: SubjectProps = {
			subject: "I am not guilty",
			onChange: mockChange,
		}
		render(<Subject {...requiredProps} />);
		expect(screen.getByText(labelText)).toBeInTheDocument();
	});

	test(`Given the required props, 
		When the component is rendered
		Then the values passed in props should be present`, () => {
		const mockChange = jest.fn();
		const requiredProps: SubjectProps = {
			subject: "I am not guilty",
			onChange: mockChange,
		}
		render(<Subject {...requiredProps} />);
		expect(screen.getByDisplayValue(requiredProps.subject)).toBeInTheDocument();
	});

	test(`Given component is rendered, 
		when the user inputs text,
		Then onChange function is called the corrcet number of times`, async () => {
		const mockChange = jest.fn();
		const requiredProps: SubjectProps = {
			subject: "I dont",
			onChange: mockChange,
		}
		render(<Subject {...requiredProps} />);
		await user.type(screen.getByLabelText(labelText), "I dont know anything");
		expect(requiredProps.onChange).toHaveBeenCalledTimes(20);
	});

	test(`Given use inputs a valid inputs for Species name (between 3 and 25 characters ), 
		when the component is rendered,
		An error message is not displayed`, async () => {
		const mockChange = jest.fn();
		const requiredProps: SubjectProps = {
			subject: "this Is A Valid Subject",
			onChange: mockChange,
		}
		render(<Subject {...requiredProps} />);
		await user.type(screen.getByLabelText(labelText), "t");
		expect(screen.queryByText(errorSubjectTooLong)).not.toBeInTheDocument();
		expect(screen.queryByText(errorSubjectTooShort)).not.toBeInTheDocument();
		
	});

	test(`Given use inputs an invalid inputs for Species name (less than 3 characters), 
		when the component is rendered,
		The correct error message is displayed`, async () => {
		const mockChange = jest.fn();
		const requiredProps: SubjectProps = {
			subject: "V",
			onChange: mockChange,
		}
		render(<Subject {...requiredProps} />);
		await user.type(screen.getByLabelText(labelText), "e");
		await screen.findByText(errorSubjectTooShort);
		expect(screen.getByText(errorSubjectTooShort)).toBeInTheDocument();
	});


	test(`Given use inputs an invalid inputs for Species name (More than 25 characters), 
		when the component is rendered,
		The correct error message is displayed`, async () => {
		const mockChange = jest.fn();
		const requiredProps: SubjectProps = {
			subject: "more than twenty three charrtyt",
			onChange: mockChange,
		}
		render(<Subject {...requiredProps} />);
		await user.type(screen.getByLabelText(labelText), "m");
		expect(screen.getByText(errorSubjectTooLong)).toBeInTheDocument();
	});


});
