import React from 'react';
import styles from './Button.module.scss'

const  Button = (props) =>  {

      
    const { submitFn, children, removeFn } = props
    
      return (
      <div className="listItem__wrapper--hover">
            { children === "ADD TO FAVOURITE" ?
            <button className={styles.button} onClick={() => submitFn(props)}>{children}</button>
            : 
            <button className={styles.button} onClick={() => removeFn(props)}>{children}</button> 
            } 
      </div>
      )
}

export default Button