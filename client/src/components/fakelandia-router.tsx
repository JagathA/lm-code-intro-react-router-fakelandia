import { Route, Routes } from 'react-router-dom';
import Home from './home';
import ConfessionForm from './confession/confession-form';
import NotFound from './not_found';
import MainLayout from './main_layout';
import MisdemeanourContainer from './misdemeanour-container';
import React, { createContext } from 'react';
import { Misdemeanour } from "../types/misdemeanours.types";
import { useState, useContext } from "react";
import {MisdemeanoursContext, SetMisdemeanoursContext} from './misdemeanour-container';

const misdemeanour: Misdemeanour[] = [];
const updateMisdemeanour = (misdameanour: Misdemeanour[]) => { };

// export const MisdemeanoursContext = createContext(misdemeanour);
// export const SetMisdemeanoursContext = createContext(updateMisdemeanour)

export const FakeLandiaRouter: React.FC = () => {

    const misdemeanours = useContext(MisdemeanoursContext);
    const setMisdemeanours = useContext(SetMisdemeanoursContext);


    return (
        <>
            <MisdemeanoursContext.Provider value={misdemeanours}>
                <SetMisdemeanoursContext.Provider value={setMisdemeanours}>
                    <Routes>
                        <Route path='/' element={<MainLayout />} >
                            <Route index element={<Home />} />
                            <Route path='confession' element={<ConfessionForm />} />
                            <Route path='misdemeanour' element={<MisdemeanourContainer />} />
                            <Route path='*' element={<NotFound />} />
                        </Route>
                    </Routes>
                </SetMisdemeanoursContext.Provider>
            </MisdemeanoursContext.Provider>
        </>
    )
}
export default FakeLandiaRouter;