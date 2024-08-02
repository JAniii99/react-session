import React from "react";

const Skills = (props) => {
    const [Loggedin, setLoggedin] =useState(false);

    const login = () =>{
        setLoggedin(true);
        console.log(Logged);
    }
    const logout = () =>{
        setLoggedin(false);
        console.log(Loggedout);
    }
    return(
        <div>
            <h1>This is my about</h1>
            <p>{props.name}</p>
            <p>{props.id}</p>
            
        </div>
    )
};
export default Skills;