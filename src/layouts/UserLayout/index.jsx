import { Outlet } from "react-router-dom";
import {Footer, Header} from '../../components'

export function UserLayout(){

    return(
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}