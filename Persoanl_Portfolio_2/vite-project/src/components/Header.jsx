import { useState } from "react"; // Importing the useState hook from the React library
import { links } from "../assets/Data1"; // Importing an array of link data from a file called Data1.js
import { NavLink } from "react-router-dom"; // Importing the NavLink component from the react-router-dom library

// Defining the Header component
const Header = () => {
  const [show, setShow] = useState(false); // Using the useState hook to manage the state of a 'show' variable, which is initially set to false

  // Returning the JSX for the Header component
  return (
    <nav className="nav">
      <div className={`${show ? "nav-menu show-menu" : "nav-menu"}`}>
        {/* if show is true , give nav-menu with show menu(left:0%) : show nothing (nav-menu(left:-100%)) */}
        <ul className="nav-list">
          {links.map(
            (
              { name, icon, path },
              index // Using the map function to loop through the links array and render each link dynamically
            ) => (
              <div className="nav-item" key={index}>
                {/*  Using the index as the key prop */}
                <NavLink
                  to={path}
                  className={(
                    { isActive } // Using a function to dynamically set the className of the NavLink component based on whether it is currently active or not
                  ) => (isActive ? "nav-link active" : "nav-link")}
                  onClick={() => setShow(!show)} //to close the navigation component (3lines) when user selects something
                >
                  {/*  Rendering the icon for each link */}
                  {icon}

                  {/* Rendering the name of each link */}
                  <h3 className="nav-name">{name}</h3>
                </NavLink>
              </div>
            )
          )}
        </ul>
      </div>
      <div
        className={`${show ? "nav-toggle animate-toggle" : "nav-toggle"}`} //if show is true then change the 3-line icon to X-shaped icon
        onClick={() => setShow(!show)}
      >
        {/*  Using template literals and the onClick event to toggle the 'show' state variable when the user clicks on the 3-line icon */}
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
