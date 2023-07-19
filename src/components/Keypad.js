// Code Keypad Component Here

function Keypad (){
    function Change(){
        console.log('Entering password...')
    }
    return (
        <div>
            <input type="password" onChange={Change}/>
        </div>
    )
}

export default Keypad;