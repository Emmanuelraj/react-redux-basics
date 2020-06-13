//This components basically to understand higher components using wrappercomponent

import React from 'react';

//now agenda specific component into higher component

const Rainbow = (WrappedComponent) => {

    const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
    const randomColour = colours[Math.floor(Math.random() * 6)];
    const className = randomColour + '-text';
  
    return (props) => (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>  
    )
    
  }
  


export default Rainbow;