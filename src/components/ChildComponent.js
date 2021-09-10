import React from 'react';

function ChildComponent(props) {
    return (
        <div>
        {/*<button className="btn btn-primary b" onClick={props.parentHandler}>Greet the Parent </button>*/}
            <button className="btn btn-primary b" onClick={() => props.parentHandler('child')}>Greet the Parent </button>
        </div>

    )
}

export default ChildComponent;