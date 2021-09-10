import React from 'react';

function FunctionClick (){
    //create the function for events
    function clickHandler(){
        console.log("duke lester clicked the button");
    }
    return(
        <div>
            <button className="btn btn-success"  onClick={clickHandler}> Click Me</button>
        </div>
    )
}

export default FunctionClick