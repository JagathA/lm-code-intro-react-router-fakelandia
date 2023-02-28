import { Misdemeanour } from "../types/misdemeanours.types";

interface MisdemeanourProps {
    misdemeanour: Misdemeanour;
  }

const MisdemeanourRow: React.FC<MisdemeanourProps> = ({ misdemeanour }) => {
    return (
    <>
        <tr key={misdemeanour.citizenId}>
              <td>{misdemeanour.citizenId}</td>
              <td>{misdemeanour.date}</td>
              <td>{misdemeanour.misdemeanour}</td>
            </tr>
    </>)};

export default MisdemeanourRow;