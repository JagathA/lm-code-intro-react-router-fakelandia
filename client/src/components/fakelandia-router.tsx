import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Confession from './confession';
import Misdemeanour from './misdemeanour';
import NotFound from './not_found';
import MainLayout from './main_layout';

export const FakeLandiaRouter: React.FC = () =>
    <>
        <Routes>
            <Route path='/' element={<MainLayout />} >
                <Route index element={<Home />} />
                <Route path='confession' element={<Confession />} />
                <Route path='misdemeanour' element={<Misdemeanour />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    </>

export default FakeLandiaRouter;