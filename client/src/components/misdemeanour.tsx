import { Misdemeanour, MisdemeanourKind } from "../types/misdemeanours.types";

export interface MisdemeanourProps {
    citizenId: number;
	misdemeanour: MisdemeanourKind;
	date: string;
    image : string;
 }

export const misdemeanourDisplay =
{
    "rudeness": `Mild Public Rudeness = 🤪`,
    "vegetables": `Not Eating Your Vegetables = 🥗`,
    "lift": `Speaking in a Lift = 🗣`,
    "united": ` Supporting Manchester United = 😈`
};

const MisdemeanourRow: React.FC<MisdemeanourProps> = ({ citizenId, date, misdemeanour, image }) => {

    return (
        <>
            <tr key={citizenId}>
                <td>{citizenId}</td>
                <td>{date}</td>
                <td>{misdemeanourDisplay[misdemeanour]}</td>
                <td><img src={image} /></td>
            </tr>
        </>)
};

export default MisdemeanourRow;