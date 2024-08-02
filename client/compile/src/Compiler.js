import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import './Compiler.css' 

function Compiler() {
    const [msg, setMsg] = useState('')
    const [error, setError] = useState('')
    const [compiledIds, setCompiledIds] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchCompiledIds = async () => {
            try {
                
                const response = await axios.get("http://localhost:3001/compiler/compiled-ids")
                setCompiledIds(response.data.compiledIds)
            } catch (error) {
                console.error("Error fetching compiled IDs:", error)
            }
        }

        fetchCompiledIds()
    }, [])

    const submit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            const response = await axios.post("http://localhost:3001/compiler/compile", { input: msg })
            navigate(`/output/${response.data.outputId}`)
        } catch (error) {
            setError('Failed to compile. Please try again.')
        }
    }

    return (
        <div className='cont' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={submit} style={{ width: '100%' }}>
                <textarea 
                    name="text" 
                    onChange={(e) => setMsg(e.target.value)} 
                    placeholder='code here'
                    className="text-area"
                ></textarea>
                <input type='submit' value="Submit" />
                {error && <div style={{ color: 'red' }}>{error}</div>}
                
                <p className="info-text">Copy generated assembly code<br/>
                sudo apt update <br/>
                sudo apt install nasm <br/>
                nano (fileName).asm<br/>
                copy assembly code there<br/>
                nasm -f elf32 (fileName).asm -o (object file).o<br/>
                ld -m elf_i386 -o (executable) (object file).o<br/>
                ./(executable)
                </p>
            </form>
            <div>
                <h2>Recently Compiled Results:</h2>
                <ul>
                    {compiledIds.map(id => (
                        <li key={id}>
                            <Link to={`/output/${id}`}>{id}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Compiler
