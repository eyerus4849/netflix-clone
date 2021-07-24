import React ,{useEffect,useState}from 'react'
import "./Nav.css"
function Nav() {
    const[show,handleshow]=useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleshow(true)
            }
            else handleshow(false);
        })
        return()=>{
            window.removeEventListener("scroll");
        }
    },[]);
    return (
        <div className={`nav ${show && "nav_black"}`}>
        <img className="nav_logo" src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png" alt="Netflix Logo"/> 
        <img className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar Logo"/>     
        </div>
    )
}

export default Nav
