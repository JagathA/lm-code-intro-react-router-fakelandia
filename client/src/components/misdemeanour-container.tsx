import React from 'react';
import { useEffect, useState } from "react";
import { Misdemeanour } from "../types/misdemeanours.types";
import MisdemeanourRow from './misdemeanour';

const MisdemeanourContainer: React.FC = () => {

    const [misdemeanours, setMisdemeanours] = useState<Array<Misdemeanour>>([]);

    useEffect(() => {
        getMisdemeanours(100);
    }, []);

    const getMisdemeanours = async (number: number) => {

        const apiResponse = await fetch(`http://localhost:8080/api/misdemeanours/${number}`);
        const json = await apiResponse.json();
        //  as { data: Misdemeanour[] };
        setMisdemeanours(json.misdemeanours);
        console.log("*************** =>")
        console.log(json.misdemeanours);
    };

    const buildRows = () => {

        // we'll need arrays to store the rows and cols in, and they will be of type JSX.Element
        let rows: Array<JSX.Element> = [];

        misdemeanours.forEach((item, index) => {
            rows.push(
                <MisdemeanourRow key={index}
                    misdemeanour={item}
                />
            );
        })

        return rows;
    }


    return (
        <table>
            <thead>
            <tr className="red">
                    <th>Citizen ID</th>
                    <th>Misdemeanour</th>
                    <th>Date</th>
                
                </tr>
            </thead>
            <tbody>
                {buildRows()}
            </tbody>
        </table>
        // <div className="misdeameanour-container">
        //     {buildRows()}
        // </div>)
    )
};

export default MisdemeanourContainer;