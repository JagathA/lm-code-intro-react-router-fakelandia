import React from 'react';
import { useEffect, useState } from "react";
import { Misdemeanour, MisdemeanourKind } from "../types/misdemeanours.types";
import MisdemeanourRow from './misdemeanour';

const MisdemeanourContainer: React.FC = () => {

    const [misdemeanours, setMisdemeanours] = useState<Array<Misdemeanour>>([]);

    useEffect(() => {
        getMisdemeanours(500);
    }, []);

    const getMisdemeanours = async (number: number) => {

        const apiResponse = await fetch(`http://localhost:8080/api/misdemeanours/${number}`);
        const json = await apiResponse.json();
        setMisdemeanours(json.misdemeanours);
        console.log(json.misdemeanours);
    };

    const buildRows = () => {

        // we'll need arrays to store the rows in, and they will be of type JSX.Element
        let rows: Array<JSX.Element> = [];

        misdemeanours.forEach((item, index) => {
            rows.push(
                <MisdemeanourRow key={index}
                citizenId = {item.citizenId} date = {item.date}  misdemeanour = {item.misdemeanour}
                />
            );
        })

        return rows;
    }


    return (
        <table>
            <thead>
                <tr className="red">
                    <th scope="col">Citizen ID</th>
                    <th scope="col">Date</th>
                    <th scope="col">Misdemeanour</th>

                </tr>
            </thead>
            <tbody>
                {buildRows()}
            </tbody>
        </table>
    )
};

export default MisdemeanourContainer;