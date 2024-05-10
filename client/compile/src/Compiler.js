import React, { useState } from 'react';
import axios from 'axios';

function Compiler() {
    const [msg, setMsg] = useState('');

    const submit = async (e) => {
        e.preventDefault();
        try {
            // Make sure to use the correct port: 3000 as per your server setup
            await axios.post("http://localhost:3001/compiler", { msg });
            console.log("success");
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className='cont' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={submit} style={{ width: '100%' }}>
                <textarea 
                    name="text" 
                    onChange={(e) => setMsg(e.target.value)} 
                    placeholder='Enter text'
                    style={{ width: '50%', height: '50vh', resize: 'none' }}  // Styling the textarea
                ></textarea>
                <input type='submit' value="Submit" />
            </form>
        </div>
    )
}
export default Compiler