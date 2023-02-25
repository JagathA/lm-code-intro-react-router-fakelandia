import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import Home from "./home";

export const MainLayout: React.FC = () =>
    <>
        <body>
            <Header />
            <main className='p-6' style={{ flex: '1' }}>
                <Outlet />
            </main>
            <Footer />
        </body>
    </>


export default MainLayout;