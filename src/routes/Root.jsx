import { NavLink, Outlet, Navigate } from "react-router-dom";
import "./Root.scss";

export function Root() {

    


    return (
        <div className="page-wrapper">
            <div className="navbar-container">
                <ul>
                    <li><NavLink to="/home" className="nav-button">Home</NavLink></li>
                    <li><NavLink to="/contact" className="nav-button">Contact</NavLink></li>
                </ul>
            </div>
            <Outlet />
            <Navigate replace to="/home"></Navigate>
        </div>
    );
}