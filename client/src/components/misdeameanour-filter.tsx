import React from 'react';
import {MisdemeanourKind} from'../types/misdemeanours.types';

export type misdeameanourFilter = MisdemeanourKind | 'none';

export interface MisdemeanourFilteProps {
	filter: misdeameanourFilter;
	onChange: (newValue : MisdemeanourKind) => void;
}


const MisdeameanourFilter: React.FC<MisdemeanourFilteProps> = ({ filter, onChange }) => {

	return (
		<>
			<label htmlFor='filter'>Filter</label>

			<select id='filter' value={filter} onChange={
				(e) => {	
					console.log("target value =>", e.target.value);
					onChange(e.target.value as MisdemeanourKind)
				}}>
				<option id="0" >none</option>
				<option id="1" >rudeness</option>
				<option id="2" >vegetables</option>
				<option id="3" >lift</option>
				<option id="4" >united</option>
			</select>

		</>);
}

export default MisdeameanourFilter;
