import React from 'react';

const  Button = (props) =>  {

      
    const { submitFn, children, removeFn } = props
    
      return (
      <div className="listItem__wrapper--hover">
            { children === "ADD TO FAVOURITE" ?
            <button onClick={() => submitFn(props)}>{children}</button>
            : 
            <button onClick={() => removeFn(props)}>{children}</button> 
            } 
      </div>
      )
}

export default Button