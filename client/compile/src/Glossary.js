import React from 'react';
import './Glossary.css';

const operations = [
    { operation: "Variable Assignment", syntax: "String a = 'some'" },
    { operation: "Print Literal", syntax: "print 'hello'" },
    { operation: "Print Variable", syntax: "String a = \"hello\"; print a" },
    { operation: "Simple binary", syntax: "eg-2 + 2" },
    { operation: "Assign binary", syntax: "int variable = number; variable (+/-*) number" },
    { operation: "variable binary", syntax: "int var1 = number; int var2 = number;int  total = var1 (+/-*) var2; print total" },
    { operation: "Array assign", syntax: "array = [value,value]" },
    { operation: "binary array assign", syntax: "a = [value,value];int  b = a[i];int c =a[i]; int d = b (+/-*) c; print d " },
    { operation: "For loop", syntax: "array = [value,value]; for variable in array; print variable" },

    
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
