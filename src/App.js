import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./Component/App.css";
import Navbar from "./Component/Navbar";
const App = () => {
  return (
    <>
    <Navbar />
      <div className="apptop">
        <nav className="apptop2">
        
          <Link to="/corse">دوره هایه اموزش زبان</Link>
        </nav>
      </div>
      <hr />
      <Outlet />
    </>
  );
};

export default App;
