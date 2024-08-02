import React from 'react';
import './Glossary.css';

const operations = [
    { operation: "Variable Assignment", syntax: "a = 'some'" },
    { operation: "Print Literal", syntax: "print 'hello'" },
    { operation: "Print Variable", syntax: "a = \"hello\"; print a" },
    { operation: "Simple binary", syntax: "eg-2 + 2" },
    { operation: "Assign binary", syntax: "variable = number; variable (+/-*) number" },
    { operation: "variable binary", syntax: "var1 = number; var2 = number; total = var1 (+/-*) var2; print total" },
    
]

function Glossary() {
    return (
        <div>
            <h1> Glossary</h1>
            <div className="table-container">
                <div className="table-row header">
                    <div className="table-cell">Operation</div>
                    <div className="table-cell">Syntax</div>
                </div>
                {operations.map((op, index) => (
                    <div className="table-row" key={index}>
                        <div className="table-cell">{op.operation}</div>
                        <div className="table-cell">{op.syntax}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Glossary;
