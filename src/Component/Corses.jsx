import { getcorses } from "./data/data";
import { NavLink, useLocation } from "react-router-dom";

import { Outlet } from "react-router-dom";
import Corse from "../Component/Corse";
const Corses = () => {
  let Corses = getcorses();
  const location = useLocation();

  return (
    <>
    
      <div className="bookes">
        {Corses
          .map((corse) => (
            <NavLink
              to={`${corse.id}${location.search}`}
              key={Corse.id}
              style={({ isActive }) => ({
                color: isActive ? "red" : "",
              })}
            >
              {corse.name}
              <img src={corse.image} alt="1" style={{width: "100px"}} />
            </NavLink>
            
          ))}
          
      </div>
      <Outlet />
    </>
  );
};

export default Corses;
