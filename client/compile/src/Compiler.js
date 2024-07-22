import React, { useState } from 'react'
import axios from 'axios'

function Compiler() {
    const [msg, setMsg] = useState('')
    const [output, setOutput] = useState('')
    const [error, setError] = useState('')
    
    const submit = async (e) => {
        e.preventDefault();
        setOutput('')
        setError('')
        console.log("Sending request with code:", msg);
        try {
            const response = await axios.post("http://localhost:3001/compiler/compile", { input: msg })
            console.log("Response received:", response.data)
            setOutput(response.data.output)
        } catch (error) {
            console.error("Error:", error)
            setError( 'Failed to compile. Please try again.') 
        }
    }
    
    return (
        <div className='cont' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={submit} style={{ width: '100%' }}>
                <textarea 
                    name="text" 
                    onChange={(e) => setMsg(e.target.value)} 
                    placeholder='code here'
                    style={{ 
                        width: '80%', 
                        height: '10h',
                         resize: 'none' ,
                        fontSize:'40px'}}
                ></textarea>
                <input type='submit' value="Submit" />
                {output && <div><h2>Output:</h2><pre>{output}</pre></div>}
                {error && <div style={{color: 'red'}}>{error}</div>}
            </form>
        </div>
    );
}

export default Compiler;
