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
                const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001'
                const response = await axios.get(`http://localhost:5000/compiled-ids`)
                setCompiledIds(response.data.compiledIds)
            } catch (error) {
                console.error('Error fetching compiled IDs:', error)
            }
        }
        fetchCompiledIds()
    }, [])

    const submit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001'
            const response = await axios.post(`http://localhost:500'/compiler/compile`, { input: msg })
            navigate(`/output/${response.data.outputId}`)
        } catch (error) {
            setError('Failed to compile. Please try again.')
        }
    }

    const clearCompiledIds = async () => {
        try {
            
            await axios.post(`http://localhost:5000/compiler/clear-compiled-ids`)
            setCompiledIds([])
        } catch (error) {
            console.error('Failed to clear compiled IDs:', error)
        }
    }

    return (
        <div className='cont'>
            <form onSubmit={submit}>
                <textarea 
                    name='text' 
                    onChange={(e) => setMsg(e.target.value)} 
                    placeholder='code here'
                    className='text-area'
                    id='compileText'
                ></textarea>
                <input type='submit' value='Compile' id='submitButton'/>
                {error && <div className='error-message'>{error}</div>}
                <p className='info-text'>Copy generated assembly code<br/>
                sudo apt update<br/>
                sudo apt install nasm<br/>
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
                <button onClick={clearCompiledIds}>Clear Compiled IDs</button>
            </div>
        </div>
    )
}

export default Compiler
