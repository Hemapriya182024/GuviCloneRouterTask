import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import '../App.css'

const Blogs = () => {
  return (
    <>
      <div className="container my-5">
        <div className="card-group my-4 p-3 fs-5  bg-secondary-subtle" style={{display:"flex",flexDirection:'column' ,color:'white' }}>
          <NavLink className="navitems" style={{color:'black',border:'2px solid black',padding: '5px' ,margin:'5px' ,}}
            to="all"
            
          >
            All
          </NavLink>
          <NavLink  className="navitems" style={{color:'black',border:'1px solid black',padding: '5px',margin:'5px'}}
            to="fullstack"
            
          >
            Full Stack
          </NavLink>
          <NavLink  className="navitems" style={{color:'black',border:'1px solid black',padding: '5px',margin:'5px'}}
            to="datascience"
           
          >
            Data Science
          </NavLink>
          <NavLink className="navitems" style={{color:'black',border:'1px solid black',padding: '5px' ,margin:'5px'}}
            to="cybersecurity"
            
          >
            Cyber Security
          </NavLink>
         
              </div>
             
        <Outlet />
      </div>
    </>
  );
};

export default Blogs;