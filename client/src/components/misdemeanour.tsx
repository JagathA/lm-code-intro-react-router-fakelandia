import { MisdemeanourKind } from "../types/misdemeanours.types";
import {misdemeanourDisplay} from '../types/misdemeanours-display.types'

export interface MisdemeanourProps {
    citizenId: number;
	misdemeanour: MisdemeanourKind;
	date: string;
    image : string;
 }

const MisdemeanourRow: React.FC<MisdemeanourProps> = ({ citizenId, date, misdemeanour, image }) => {

    return (
        <>
            <tr key={citizenId}>
                <td>{citizenId}</td>
                <td>{date}</td>
                <td>{misdemeanourDisplay[misdemeanour]}</td>
                <td><img src={image} alt="random pictture"/></td>
            </tr>
        </>)
};

export default MisdemeanourRow;