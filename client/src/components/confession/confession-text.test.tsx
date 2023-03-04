import { render, screen } from '@testing-library/react';
import ConfessionText, { ConfessionTextProps, errorConfessionTextTooShort, errorConfessionTextTooLong } from './confession-text';
import user from '@testing-library/user-event';

describe("<ConfessionText>", () => {
	const labelText = "Type your confession here";
	test(`Given the required props, 
	When the component is rendered
	Then the label text "Type your confession here" should be present`, () => {
		const mockChange = jest.fn();
		const requiredProps: ConfessionTextProps = {
			confessionText: "I did it",
			onChange: mockChange,
		}
		render(<ConfessionText {...requiredProps} />);
		expect(screen.getByText(labelText)).toBeInTheDocument();
	});

	test(`Given the required props, 
		When the component is rendered
		Then the values passed in props should be present`, () => {
		const mockChange = jest.fn();
		const requiredProps: ConfessionTextProps = {
			confessionText: "I confess. I am guilty.",
			onChange: mockChange,
		}
		render(<ConfessionText {...requiredProps} />);
		expect(screen.getByDisplayValue(requiredProps.confessionText)).toBeInTheDocument();
	});

	test(`Given component is rendered, 
		when the user inputs text,
		Then onChange function is called the correct number of times`, async () => {
		const mockChange = jest.fn();
		const ConfessionTextEarthText = "I am guilty, thats for sure. 1234567890";
		const requiredProps: ConfessionTextProps = {
			confessionText: "Reason Sparing Earth",
			onChange: mockChange,
		}
		render(<ConfessionText {...requiredProps} />);
		await user.type(screen.getByLabelText(labelText), ConfessionTextEarthText);
		expect(requiredProps.onChange).toHaveBeenCalledTimes(ConfessionTextEarthText.length);
	});

	test(`Given use inputs a valid inputs for reason for sparing (between 17 and 153 characters ), 
		when the component is rendered,
		An error message is not displayed`, async () => {
		const mockChange = jest.fn();
		const requiredProps: ConfessionTextProps = {
			confessionText: "1234567890123456",
			onChange: mockChange,
		}
		render(<ConfessionText {...requiredProps} />);
		await user.type(screen.getByLabelText(labelText), "1");
		expect(screen.queryByText(errorConfessionTextTooShort)).not.toBeInTheDocument();
		expect(screen.queryByText(errorConfessionTextTooLong)).not.toBeInTheDocument();
	});

	test(`Given use inputs a invalid inputs for reason for sparing (less than 17 characters ), 
	when the component is rendered,
	An error message is not displayed`, async () => {
		const mockChange = jest.fn();
		const requiredProps: ConfessionTextProps = {
			confessionText: "123456789012345",
			onChange: mockChange,
		}
		render(<ConfessionText {...requiredProps} />);
		await user.type(screen.getByLabelText(labelText), "1");
		expect(screen.getByText(errorConfessionTextTooShort)).toBeInTheDocument();
	});

	test(`Given use inputs a invalid inputs for reason for sparing (greater than than 153 characters ), 
	when the component is rendered,
	An error message is not displayed`, async () => {
		const mockChange = jest.fn();
		const requiredProps: ConfessionTextProps = {
			confessionText: `This is a very long text 0f 45 charatceters.
			s. This is a very long text 0f 45 charatceters.This is a very long text 0f 45 charatceters.This is a very long text 0f 45 charatceters.`,
			onChange: mockChange,
		}
		render(<ConfessionText {...requiredProps} />);
		await user.type(screen.getByLabelText(labelText), "1");
		expect(screen.getByText(errorConfessionTextTooLong)).toBeInTheDocument();
	});
});
