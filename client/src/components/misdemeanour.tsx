import { Misdemeanour, MisdemeanourKind } from "../types/misdemeanours.types";

export interface MisdemeanourProps {
    misdemeanour: Misdemeanour;
}

export const misdemeanourDisplay =
{
    "rudeness": `Mild Public Rudeness = 🤪`,
    "vegetables": `Not Eating Your Vegetables = 🥗`,
    "lift": `Speaking in a Lift = 🗣`,
    "united": ` Supporting Manchester United = 😈`
};

const MisdemeanourRow: React.FC<Misdemeanour> = ({ citizenId, date, misdemeanour }) => {

    return (
        <>
            <tr key={citizenId}>
                <td>{citizenId}</td>
                <td>{date}</td>
                <td>{misdemeanourDisplay[misdemeanour]}</td>
            </tr>
        </>)
};

export default MisdemeanourRow;