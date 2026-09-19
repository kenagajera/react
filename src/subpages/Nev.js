import { NavLink } from "react-router-dom";
import './cssfile.css';

function Nev(){
    return(
    <nav className="navbar">
      <h2 className="logo">My App</h2>
      <div className="nav-links">
        <NavLink to="/" className="link" activeclassname="active" >
          Home
        </NavLink>
        <NavLink to="/timer" className="link" activeclassname="active">
          Timer
        </NavLink>
         <NavLink to="/color" className="link" activeclassname="active">
          Color
        </NavLink>
         <NavLink to="/habit" className="link" activeclassname="active">
          Habit
        </NavLink>
      </div>
    </nav>
    );
}
export default Nev;