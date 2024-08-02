import React from "react";

const Button = (props) => {
    const [num, setNUm] = React.useState(0);
    const incrementId = () =>{
        setNUm(num+1);
        console.log(num);

    }
    return(
        <div>
            <button className="increment" onClick={incrementId}>+</button>
        </div>
    )
};
export default Button;