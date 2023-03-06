import { render, screen } from '@testing-library/react';
import ReasonForContact, { reasonForContactProps } from './reason-for-contact';
import user from '@testing-library/user-event';

describe("<ReasonForContact>", () => {
	const labelText = "Reason For Contact";

	test(`Given the required props, 
		When the component is rendered
		Then the label text "Filter" should be present`, () => {
		const mockChange = jest.fn();
		const requiredProps: reasonForContactProps = {
			reasonForContact: "just-talk",
			onChange: mockChange,
		}
		render(<ReasonForContact {...requiredProps} />);
		expect(screen.getByText(labelText)).toBeInTheDocument();
	});

	test(`Given the required props, 
		When the component is rendered
		Then the vaues passed in props should be present`, () => {
		const mockChange = jest.fn();
		const requiredProps: reasonForContactProps = {
			reasonForContact: "rudeness",
			onChange: mockChange,
		}
		render(<ReasonForContact {...requiredProps} />);
		expect(screen.getByDisplayValue(requiredProps.reasonForContact)).toBeInTheDocument();
	});

	test(`Given component is rendered, 
		when the user selects option "2",
		Then onChange function is called the corrcet number of times`, async () => {
		const mockChange = jest.fn();
		const requiredProps: reasonForContactProps = {
			reasonForContact: "rudeness",
			onChange: mockChange,
		}
		render(<ReasonForContact {...requiredProps} />);
		await user.selectOptions(screen.getByLabelText(labelText), "vegetables");
		expect(requiredProps.onChange).toHaveBeenCalledTimes(1);
		expect(requiredProps.onChange).toHaveBeenLastCalledWith("vegetables", true);
	});

});
