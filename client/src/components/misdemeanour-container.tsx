import React from 'react';
import { useEffect, useState } from "react";
import { Misdemeanour } from "../types/misdemeanours.types";
import MisdemeanourRow from './misdemeanour';
import MisdeameanourFilter, { misdeameanourFilter } from './misdeameanour-filter';

const MisdemeanourContainer: React.FC = () => {

    const [misdemeanours, setMisdemeanours] = useState<Array<Misdemeanour>>([]);
    const [filter, setFilter] = useState<misdeameanourFilter>('none');

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

        let rows: Array<JSX.Element> = [];

        const filteredMisdemeanours = misdemeanours.filter(item => ((item.misdemeanour === filter) || (filter === "none")));

        filteredMisdemeanours.forEach((item, index) => {
            rows.push(
                <MisdemeanourRow key={index}
                    citizenId={item.citizenId} date={item.date} misdemeanour={item.misdemeanour}
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
                <tr className="red">
                    <th scope="col"></th>
                    <th scope="col"></th>

                    <th scope="col"><MisdeameanourFilter filter={filter} onChange={(newValue) => setFilter(newValue)} /></th>

                </tr>
            </thead>
            <tbody>
                {buildRows()}
            </tbody>
        </table>
    )
};

export default MisdemeanourContainer;