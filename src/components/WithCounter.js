// import React from 'react';
import React, { Component } from 'react';

const UpdatedComponent = (OriginalComponent) => {
    class NewComponent extends React.Component{
        render() {
            return <OriginalComponent name={'duke lester'}/>

    }
    }

  return NewComponent;
}

export default UpdatedComponent;