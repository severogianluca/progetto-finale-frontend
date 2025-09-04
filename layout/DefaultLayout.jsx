import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

function DefaultLayout() {

    return (

        <>
            <Navbar />
            <div className="container">
                <Outlet />

            </div>
        </>
    )
}


export default DefaultLayout;