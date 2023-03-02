import { render, screen } from '@testing-library/react';
import MisdemeanourFilter, { MisdemeanourFilterProps } from './misdemeanour-filter';
import user from '@testing-library/user-event';

describe("<MisdemeanourFilter>", () => {
	const labelText = "Filter";

	test(`Given the required props, 
		When the component is rendered
		Then the label text "Filter" should be present`, () => {
		const mockChange = jest.fn();
		const requiredProps: MisdemeanourFilterProps = {
			filter: "none",
			onChange: mockChange,
		}
		render(<MisdemeanourFilter {...requiredProps} />);
		expect(screen.getByText(labelText)).toBeInTheDocument();
	});

	test(`Given the required props, 
		When the component is rendered
		Then the vaues passed in props should be present`, () => {
		const mockChange = jest.fn();
		const requiredProps: MisdemeanourFilterProps = {
			filter: "rudeness",
			onChange: mockChange,
		}
		render(<MisdemeanourFilter {...requiredProps} />);
		expect(screen.getByDisplayValue(requiredProps.filter)).toBeInTheDocument();
	});

	test(`Given component is rendered, 
		when the user selects option "2",
		Then onChange function is called the corrcet number of times`, async () => {
		const mockChange = jest.fn();
		const requiredProps: MisdemeanourFilterProps = {
			filter: "rudeness",
			onChange: mockChange,
		}
		render(<MisdemeanourFilter {...requiredProps} />);
		await user.selectOptions(screen.getByLabelText(labelText), "vegetables");
		expect(requiredProps.onChange).toHaveBeenCalledTimes(1);
	});

});
