import React from 'react';

function HandleError(heroName) {
    if (heroName === 'joker'){
        throw new Error('Imposter! Not a hero');
    }
    // else{
    //     alert('He is really a true hero')
    // }

    return (
      <div></div>
    )
}

export default HandleError;