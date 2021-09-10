import React from 'react';

function NameList () {
    const names = ['duke', 'lester', 'nyamongo', 'react'];
    let nameList = names.map(name => <h2>{name}</h2>);
    return(
        <div>
        {/*<h2>{names[0]}</h2>*/}
        {/*    <h2 className="my-xl-4">{names[1]}</h2>*/}
        {/*    <h2>{names[2]}</h2>*/}
        {/*    <h2>{names[3]}</h2>*/}

        {/*using map*/}
            {
               nameList
            }
        </div>

    )
}

export default NameList;