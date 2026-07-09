import { NavLink } from "react-router"
// import "./Navbar.css";

function Navbar() {
    const linkclass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");
    return (
        <header>
        <nav className="navbar">
            <NavLink className="logo" end>
            <span>TJ</span>Courses
            </NavLink>
            <div className="nav-links">
                <NavLink to="/" className={linkclass}>
                AllCourses
                </NavLink>
                <NavLink to="/category/Beginner" className={linkclass}>
                Beginner
                </NavLink>
                <NavLink to="/category/Intermediate" className={linkclass}>
                Intermediate
                </NavLink>           
            </div>
        </nav>
       </header>
    );
}
export default Navbar;