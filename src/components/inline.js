import React from 'react';
// inline css
const heading = {
    fontSize: '20px',
    color:"blue",
    backgroundColor:"black"
}
function Inline() {
    return (
        <div>
            <h2 style={heading}>Inline Stylesheet</h2>

        </div>
    )
}

export default Inline;