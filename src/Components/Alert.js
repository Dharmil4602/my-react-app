import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        // Capitalizing the first character of the word success
     let lower = word.toLowerCase();
     return lower.charAt(0).toUpperCase() + lower.slice(1); // we have added slice because to show the remaining characters we have used slice.
    }
    
    return (
        <>
        <div style={{height: '50px'}}>
           {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            </div>}
            </div>
            </>  
    )
}

export default Alert