
import React from 'react'

const Hello = () =>{
    // return (
    // <div className:'myclass'><h3>Hello duke lester </h3></div>
    // )
    // return React.createElement('div', null, 'Duke Lerster and React Js')
    // return React.createElement('div', null, 'h1','Duke Lester and React Js')
    return React.createElement('div', {id:'myid', className:'myclass'},
        React.createElement('h1',
        null, 'duke lester and React js'))
}
export default Hello