import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function OutputPage() {
    const { id } = useParams()
    const [output, setOutput] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchOutput = async () => {
            try {
                const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001'
                const response = await axios.get(`${apiUrl}/compiler/output/${id}`)
                setOutput(response.data.output)
            } catch (error) {
                setError('Failed to fetch output')
            }
        }
        fetchOutput()
    }, [id])

    return (
        <div>
            <h2>Output:</h2>
            {output ? <pre>{output}</pre> : <div style={{ color: 'red' }}>{error}</div>}
        </div>
    )
}

export default OutputPage
