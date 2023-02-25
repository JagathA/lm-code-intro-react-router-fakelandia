import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Confession from './confession';
import Misdemeanour from './misdemeanour';
import NotFound from './not_found';

export const FakeLandiaRouter: React.FC = () =>
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/confession' element={<Confession />} />
            <Route path='/misdemeanour' element={<Misdemeanour />} />
            <Route path='*' element={<NotFound />} />

        </Routes>
    </>

export default FakeLandiaRouter;