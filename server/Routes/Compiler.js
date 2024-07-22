const express = require('express')
const { spawn } = require('child_process')
const path = require('path')
const router = express.Router()


router.post('/compile', (req, res) => {
    const { input } = req.body
    console.log('Received code:', input)
    const stringCode = String(input)
    
    const jarPath = path.join('C:', 'Users', 'dwayn', 'OneDrive', 'Desktop', 'WebApp', 'server', 'target', 'CompilerWebCloud-1.0-SNAPSHOT.jar')

    const compiler = spawn('java', ['-jar', jarPath])
    

    let output = ''
    compiler.stdout.on('data', (data) => {
        output += data.toString()
        console.log(data.toString())
        
    })

    compiler.stderr.on('data', (data) => {
        console.error('Compilation Error:', data.toString())
        res.status(500).json({ error: 'Invalid code' })
    })

    compiler.on('close', (code) => {
        if (code !== 0) {
            console.error(`Compiler exited with code ${code}`)
            res.status(500).json({ error: 'Compilation failed' })
        } else {
            const formattedOutput = output.replace(/;\s/, ';\n')
            res.json({ output: formattedOutput })
        }
    })

    compiler.stdin.write(stringCode + '\nexit\n');
    compiler.stdin.end();
});

module.exports = router;
