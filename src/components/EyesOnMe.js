// Code EyesOnMe Component Here
import React, { useState } from 'react';

function EyesOnMe(){
    const [isFocused, setIsFocused] = useState(false);

    function handleFocus(){
        setIsFocused(true)
       console.log("true")
    }
    function handleBlur(){
        setIsFocused(false)
        console.log("eyes on me")
    }
    return (
        <>
    <button onFocus={handleFocus} onBlur={handleBlur}> Eyes on me</button>
        </>
    )
}
export default EyesOnMe;