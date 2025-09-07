import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

function DefaultLayout() {

    return (

        <>

            <header>
                <Navbar />

            </header>

            <main>
                <div>
                    <Outlet />

                </div>
            </main>

        </>
    )
}


export default DefaultLayout;