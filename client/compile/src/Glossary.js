import React from 'react';
import './Glossary.css';

const operations = [
    { operation: "Variable Assignment", syntax: "a = 'some'" },
    { operation: "Print Literal", syntax: "print 'hello'" },
    { operation: "Print Variable", syntax: "a = \"hello\"; print a" },
    { operation: "Addition", syntax: "2 + 2" },
    { operation: "Subtraction", syntax: "5 - 3" },
    { operation: "Multiplication", syntax: "5 * 5" },
    { operation: "Division", syntax: "25 / 5" },
    
];

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
    );
}

export default Glossary;
