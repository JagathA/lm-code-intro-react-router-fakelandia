import { MisdemeanourKind } from "../types/misdemeanours.types";
 
export const misdemeanourDisplay : { [key in MisdemeanourKind]: string} =
{
    "rudeness": `Mild Public Rudeness = 🤪`,
    "vegetables": `Not Eating Your Vegetables = 🥗`,
    "lift": `Speaking in a Lift = 🗣`,
    "united": ` Supporting Manchester United = 😈`
};

export type Reason = MisdemeanourKind | 'just-talk';
